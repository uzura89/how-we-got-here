import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateContent(prompt: string) {
  const gpt4Response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return gpt4Response.choices[0].message.content || "";
}

async function generateImage(prompt: string) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });
  return response.data[0].url;
}

const OpenAIUtil = {
  generateContent,
  generateImage,
};

export default OpenAIUtil;
