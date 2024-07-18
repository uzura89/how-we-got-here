import OpenAI from "openai";
import path, { dirname } from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../../../.env.local"),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function generateEventDetail(
  yaml: string
): Promise<string> {
  try {
    const prompt = makePrompt(yaml);

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    return completion.choices[0].message.content || "No response generated.";
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}

function makePrompt(yaml: string) {
  return `Complete the following yaml file by adding more data to each event.

The data to add is:
- id // slug of the title
- description // short description about the event (around 300 characters)
- link // link to a relevant Wikipedia page
- index // approximate year of the event (negative number for BC)

Here is the yaml file:
${yaml}

Please return only the yaml string.
`;
}
