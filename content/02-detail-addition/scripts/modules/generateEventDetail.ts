import Anthropic from "@anthropic-ai/sdk";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../../../.env.local"),
});

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function generateEventDetail(
  yaml: string
): Promise<string> {
  try {
    const prompt = makePrompt(yaml);

    const msg = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1000,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
      //   prompt: `${Anthropic.HUMAN_PROMPT} ${prompt}${Anthropic.AI_PROMPT}`,
    });

    return msg.content[0].type === "text" ? msg.content[0].text : "";
  } catch (error) {
    console.error("Error calling Anthropic API:", error);
    throw error;
  }
}

function makePrompt(yaml: string): string {
  return `Complete the following yaml file by adding more data to each event.

The data to add is:
- id // slug of the title
- description // short description about the event (around 300 characters)
- link // link to a relevant Wikipedia page
- index // approximate year of the event (negative number for BC)

Here is the yaml file:
${yaml}

Do not add any text other than the yaml part.
`;
}
