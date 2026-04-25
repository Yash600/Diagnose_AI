import { Document } from "@langchain/core/documents";
import { GoogleGenAI } from "@google/genai";


const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set");
}

const ai = new GoogleGenAI({ apiKey });


export const aiSummarizeCommit = async (diff: string) => {
  const prompt = `You are an expert programmer, and you are trying to summarize a git diff.

Reminders about the git diff format:
For every file, there are a few metadata lines, like (for example):

\`\`\`
diff --git a/lib/index.js b/lib/index.js
index aadf691..bfef603 100644
--- a/lib/index.js
+++ b/lib/index.js
\`\`\`

This means that \`lib/index.js\` was modified in this commit. Note that this is only an example.
Then there is a specific part of the lines that were modified.
A line starting with \`+\` means it was added.
A line starting with \`-\` means that line was deleted.
A line that starts with neither \`+\` nor \`-\` is code given for context and better understanding.
It is not part of the diff.
[...]

EXAMPLE SUMMARY COMMENTS:
\`\`\`
Raised the amount of returned recordings from 10 to 100 [packages/server/recordings_api.ts], [packages/server/constants.ts]
Fixed a typo in the github action name [.github/workflows/gpt-commit-summarizer.yml]
Moved the octokit initialization to a separate file [src/octokit.ts], [src/index.ts]
Added an OpenAI API for completions [packages/utils/apis/openai.ts]
Lowered numeric tolerance for test files
\`\`\`

Most commits will have less comments than this examples list.
The last comment does not include the file names,
because there were more than two relevant files in the hypothetical commit.
Do not include parts of the example in your summary.
It is given only as an example of appropriate comments.

Please summarise the following diff file: \n\n${diff}`;

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: prompt,
    });

    return response.text ?? "";
};

export async function summariseCode(doc: Document){
    const code = doc.pageContent.slice(0, 10000);

    const prompt =
        `You are an intelligent senior software engineer who specialises in onboarding junior software engineers onto projects
        , You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file, and the purpose of the code in that file.
        Here is the code : 
        ---
        ${code}
        ---
               Give a summary no more than 100 words of the code above.`;
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: prompt,
    });

    return response.text ?? "";  
} 

export async function generateEmbeddings(summary: string) {
  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: summary,
  });

  return response.embeddings?.[0]?.values ?? [];
}

console.log(await generateEmbeddings("hello world"))