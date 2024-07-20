import { OpenAI } from "openai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import { getNumberSuffix } from "@/utils/stringUtils";
import OpenAIUtil from "content/common/ai/openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// init OpenAI
dotenv.config({
  path: path.join(__dirname, "../../../.env.local"),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function generateImage(
  title: string,
  description: string,
  index: number
): Promise<string> {
  try {
    const isBC = index < 0;
    const centuryNumber = Math.ceil(Math.abs(index) / 100);
    const era = `${centuryNumber}${getNumberSuffix(centuryNumber)} century${
      isBC ? " BC" : ""
    }`;

    console.log("🚀 ~ title:", title);
    console.log("🚀 ~ year:", era);

    const imageUrl = await OpenAIUtil.generateImage(
      `You are a skilled illustrator that creates engaging hyper-realism illustration of given histrical event. The image should be historically accurate. This time, please draw an illustration for "${title}" that took place in the ${era}.`
    );

    if (!imageUrl) {
      throw new Error("Failed to generate image");
    }

    return imageUrl;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
