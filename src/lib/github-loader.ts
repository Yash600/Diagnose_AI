import { GithubRepoLoader } from '@langchain/community/document_loaders/web/github';
import { Document } from '@langchain/core/documents';
import { generateEmbeddings, summariseCode } from './groq';
import { db } from '@/server/db';
import { setProgress, updateProgress } from './progress-store';
import { Octokit } from 'octokit';

const getFileCount = async (path: string, octokit: Octokit, githubOwner: string, githubRepo: string, acc: number=0) => {
    const {data} = await octokit.rest.repos.getContent({
        owner: githubOwner,
        repo: githubRepo,
        path
    })
    if (!Array.isArray(data) && data.type === 'file') return acc + 1
    if (Array.isArray(data)) {
        let fileCount = 0
        const directories: string[] = []
        for (const item of data) {
            if (item.type === 'dir') {
                directories.push(item.path)
            }
            else{
                fileCount++
            }
        }

        if(directories.length > 0){
            const directoryCounts = await Promise.all(directories.map(dirPath => getFileCount(dirPath, octokit, githubOwner, githubRepo, 0)))
            fileCount += directoryCounts.reduce((acc, count) => acc + count, 0)
        }
        return acc + fileCount
    }  
    return acc
}

const IGNORE_EXTENSIONS = [
    '.md', '.txt', '.json', '.yaml', '.yml', '.lock',
    '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico',
    '.csv', '.pdf', '.zip', '.tar', '.gz',
    '.cjs', '.map', '.d.ts', '.env', '.toml',
    '.xml', '.html', '.css', '.scss', '.less'
];

const IGNORE_PATHS = [
    'node_modules', '.git', '.claude', '__pycache__',
    '.github', 'dist', 'build', '.next', 'coverage',
    '.husky', '.vscode', '.idea'
];

const MAX_FILES = 30;
const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const withRetry = async <T>(fn: () => Promise<T>, retries = 5): Promise<T> => {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (error: any) {
            if (error?.status === 429 && i < retries - 1) {
                const retryAfter = (parseInt(error?.headers?.['retry-after'] ?? '30') + 1) * 1000;
                console.log(`⏳ Rate limited, waiting ${retryAfter / 1000}s before retry ${i + 1}/${retries}...`);
                await sleep(retryAfter);
            } else {
                throw error;
            }
        }
    }
    throw new Error('Max retries reached');
};

export const checkCredits = async(githubUrl: string, githubToken?: string) => {
    const octokit = new Octokit({ auth: githubToken || process.env.GITHUB_TOKEN })  // ✅ add fallback
    const cleanUrl = githubUrl.replace(/\.git$/, '')  // ✅ clean URL
    const githubOwner = cleanUrl.split('/')[3]
    const githubRepo = cleanUrl.split('/')[4]
    if(!githubOwner || !githubRepo) throw new Error('Invalid GitHub URL')
    const fileCount = await getFileCount('', octokit, githubOwner, githubRepo, 0)
    return fileCount
}

export const indexGithubRepo = async (projectId: string, githubUrl: string, githubToken?: string) => {
    const docs = await loadGithubRepo(githubUrl, githubToken ?? process.env.GITHUB_TOKEN);

    if (docs.length > MAX_FILES) {
        setProgress(projectId, { total: docs.length, processed: 0, status: "error" });
        throw new Error(
            `Repository too large (${docs.length} files). Maximum allowed is ${MAX_FILES} files. Please use a smaller repository or upgrade your plan.`
        );
    }

    // Set initial progress
    setProgress(projectId, { total: docs.length, processed: 0, status: "processing" });
    console.log(`🚀 Starting indexing of ${docs.length} files for project ${projectId}`);

    try {
        const allEmbeddings = await generateDocEmbeddings(docs, projectId);

        // Save embeddings to DB
        await Promise.allSettled(allEmbeddings.map(async (embedding) => {
            if (!embedding) return;
            const sourceCodeEmbedding = await db.sourceCodeEmbedding.create({
                data: {
                    summary: embedding.summary,
                    sourceCode: embedding.sourceCode,
                    fileName: embedding.fileName,
                    projectId
                }
            });
            await db.$executeRaw`
                UPDATE "SourceCodeEmbedding"
                SET "summaryEmbedding" = ${embedding.embedding}::vector 
                WHERE "id" = ${sourceCodeEmbedding.id}
            `;
        }));

        // Mark as done
        setProgress(projectId, { total: docs.length, processed: docs.length, status: "done" });
        console.log(`✅ Indexing complete for project ${projectId}`);

    } catch (error) {
        // Mark as error
        setProgress(projectId, { total: 0, processed: 0, status: "error" });
        throw error;
    }
};

const generateDocEmbeddings = async (docs: Document[], projectId: string) => {
    const results = [];
    console.log(`📁 Total files to process: ${docs.length}`);

    for (let i = 0; i < docs.length; i++) {
        const doc = docs[i]!;
        try {
            // withRetry is used here - will auto wait on rate limit
            const summary = await withRetry(() => summariseCode(doc));
            const embedding = await generateEmbeddings(summary);
            results.push({
                summary,
                embedding,
                sourceCode: JSON.parse(JSON.stringify(doc.pageContent)),
                fileName: doc.metadata.source ?? "unknown"
            });
            console.log(`✅ ${i + 1}/${docs.length} - ${doc.metadata.source}`);
        } catch (error) {
            console.error(`❌ Skipping ${doc.metadata.source}:`, error);
            results.push(null);
        }

        // Update progress after each file
        updateProgress(projectId, i + 1);

        await sleep(500);
    }
    return results;
};

export async function loadGithubRepo(githubUrl: string, githubToken?: string): Promise<Document[]> {
    const cleanUrl = githubUrl.replace(/\.git$/, '');
    const branchesToTry = ['main', 'master'];
    let lastError: unknown;

    for (const branch of branchesToTry) {
        try {
            console.log(`Trying repo: ${cleanUrl}, branch: ${branch}`);
            const loader = new GithubRepoLoader(cleanUrl, {
                branch: branch,
                accessToken: githubToken || process.env.GITHUB_TOKEN || '',
                ignoreFiles: ["package-lock.json", "yarn.lock", "pnpm-lock.yaml", "bun.lockb"],
                recursive: true,
                unknown: "warn",
                maxConcurrency: 5,
            });
            const docs = await loader.load();

            const filtered = docs.filter(doc => {
                const source = doc.metadata.source ?? '';
                const hasIgnoredExt = IGNORE_EXTENSIONS.some(ext => source.endsWith(ext));
                const hasIgnoredPath = IGNORE_PATHS.some(path => source.includes(path));
                return !hasIgnoredExt && !hasIgnoredPath;
            });

            console.log(`📁 Total files: ${docs.length}, After filtering: ${filtered.length}`);
            return filtered;

        } catch (error) {
            console.error(`Failed loading branch ${branch}:`, error);
            lastError = error;
        }
    }
    throw new Error(`Failed to load GitHub repository. Checked branches: ${branchesToTry.join(', ')}`);
}