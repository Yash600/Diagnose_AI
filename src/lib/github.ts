import { db } from "@/server/db";
import {Octokit} from "@octokit/core";
import { restEndpointMethods } from "@octokit/plugin-rest-endpoint-methods";
import axios from "axios";
import { aiSummarizeCommit } from "./groq";

const MyOctokit = Octokit.plugin(restEndpointMethods);

export const octokit = new MyOctokit({
    auth: process.env.GITHUB_TOKEN
})

const githubUrl = 'https://github.com/docker/genai-stack'

type CommitResponse ={
    commitHash: string
    commitMessage: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date
}

export const getCommitHashes = async (githubUrl: string): Promise<CommitResponse[]> => {
    const parts = githubUrl.replace(/\/$/, "").split("/");
    const owner = parts.at(-2);
    const repo = parts.at(-1)?.replace(/\.git$/, "");

    if(!owner || !repo) {
        throw new Error("Invalid github url")
    }
    const {data} = await octokit.rest.repos.listCommits({
        owner,
        repo
    }) 
    const sortedCommits = data.sort((a: any, b: any) => new Date(b.commit.author?.date ?? '').getTime() - new Date(a.commit.author?.date ?? '').getTime()) as any[];

    return sortedCommits.slice(0, 3).map((commit: any) => ({
        commitHash: commit.sha,
        commitMessage: commit.commit.message ?? '',
        commitAuthorName: commit.commit?.author?.name ?? "",
        commitAuthorAvatar: commit.author?.avatar_url || "",
        commitDate: new Date(commit.commit.author?.date ?? " ")
    }))
}

export const pollCommit = async(projectId: string) => {
    const githubUrl = await fetchProjectGithubUrl(projectId);
    const commitHashes = await getCommitHashes(githubUrl);
    const unprocessedCommits = await filterUnprocessedCommits(projectId, commitHashes)

    const summaryResponses = await Promise.allSettled(unprocessedCommits.map(commit => summarizeCommit(githubUrl, commit.commitHash)));
    console.log("summaryResponses:", summaryResponses);

    const summaries = summaryResponses.map((response, index) => {
        if(response.status === "fulfilled") {
            console.log(`summary ${index}:`, response.value);
            return response.value as string
        }
        console.error(`summary ${index} failed:`, response.reason);
        return "";
    })
    const commits = await db.commit.createMany({
        data: summaries.map((summary, index) => {
            return{
                projectId: projectId,
                commitHash: unprocessedCommits[index]!.commitHash,
                commitMessage: unprocessedCommits[index]!.commitMessage,
                commitAuthorName: unprocessedCommits[index]!.commitAuthorName,
                commitAuthorAvatar: unprocessedCommits[index]!.commitAuthorAvatar,
                commitDate: unprocessedCommits[index]!.commitDate,
                summary
            }
        })
    })
    return commits;
}

async function summarizeCommit(githubUrl: string, commitHash: string) {
    const cleanUrl = githubUrl.replace(/\.git$/, "");
    //get the diff, then pass the diff into ai
    const {data} = await axios.get(`${cleanUrl}/commit/${commitHash}.diff`, {
        headers: {
            Accept: "application/vnd.github.v3.diff"
        }
    })
    return await aiSummarizeCommit(data) || ""
}

async function fetchProjectGithubUrl(projectId: string) {
    const project = await db.project.findUnique({
        where: {id: projectId},
        select: {githubUrl: true}
    })
    console.log("Project found:", project); 
    if(!project?.githubUrl) {
        throw new Error("Project has no github url")
    }
    return project.githubUrl;
}

async function filterUnprocessedCommits(projectId: string, commits: CommitResponse[]) {
    const processedCommits = await db.commit.findMany({
        where: {projectId},
        select: {commitHash: true}
    })
    const unprocessedCommits = commits.filter(commit => !processedCommits.some(processed => processed.commitHash === commit.commitHash))
    return unprocessedCommits 

}

