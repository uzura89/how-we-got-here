import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function generateContent(prompt: string) {
  const response = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 4000,
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
  });
  return response.content[0].type === "text" ? response.content[0].text : "";
}

const ClaudeUtil = {
  generateContent,
};

export default ClaudeUtil;
