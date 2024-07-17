import { OpenAI } from "openai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

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
    const year = index > 0 ? `${index} CE` : `${index * -1} BCE`;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `I'm building a web site that lists all the important events in human history. Now, visualize this event happened around ${year}: "${title}"`,
      n: 1,
      size: "1024x1024",
    });

    const image_url = response.data[0].url;

    if (!image_url) {
      throw new Error("Failed to generate image");
    }

    return image_url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
