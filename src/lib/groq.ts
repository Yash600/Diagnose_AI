import { config } from "dotenv";
config({ path: ".env" });

import { Document } from "@langchain/core/documents";
import Groq from "groq-sdk";
import { InferenceClient } from "@huggingface/inference";

const groqApiKey = process.env.GROQ_API_KEY;
if (!groqApiKey) {
  throw new Error("GROQ_API_KEY is not set");
}

const hfApiKey = process.env.HUGGINGFACE_API_KEY;
if (!hfApiKey) {
  throw new Error("HUGGINGFACE_API_KEY is not set");
}

const groq = new Groq({ apiKey: groqApiKey });
const hf = new InferenceClient(hfApiKey);

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

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0]?.message?.content ?? "";
};

export async function summariseCode(doc: Document) {
  const code = doc.pageContent.slice(0, 10000);
  const prompt = `You are an intelligent senior software engineer who specialises in onboarding junior software engineers onto projects.
  You are onboarding a junior software engineer and explaining to them the purpose of the ${doc.metadata.source} file, and the purpose of the code in that file.
  Here is the code : 
  ---
  ${code}
  ---
  Give a summary no more than 100 words of the code above.`;

  const response = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0]?.message?.content ?? "";
}

export async function generateEmbeddings(summary: string): Promise<number[]> {
  const response = await hf.featureExtraction({
    model: "BAAI/bge-small-en-v1.5",
    inputs: summary,
    provider: "hf-inference",
  });
  // Flatten in case it returns nested array
  const flat = (response as number[] | number[][]);
  if (Array.isArray(flat[0])) {
    return Array.from(flat[0] as number[]);
  }
  return Array.from(flat as number[]);
}

