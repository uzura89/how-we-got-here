import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

async function generateContent(prompt: string) {
  const geminiModel = genAI.getGenerativeModel({ model: "gemini-pro" });
  const geminiResponse = await geminiModel.generateContent(prompt);
  return geminiResponse.response.text();
}

const GeminiUtil = {
  generateContent,
};

export default GeminiUtil;
