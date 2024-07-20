import { OpenAI } from "openai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// init OpenAI
dotenv.config({
  path: path.join(__dirname, "../../../.local.env"),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const REFERENCE_IMAGE_PATH = path.join(
  __dirname,
  "../../../public/img/screenshot.png"
);

export default async function generateImage(
  title: string,
  description: string
): Promise<string> {
  try {
    let promptData: any = {
      model: "dall-e-3",
      prompt: `Please help me completing adding images to this website. This time, please visualize "${title}: ${description}"`,
      n: 1,
      size: "1024x1024",
    };

    const image = await fs.promises.readFile(REFERENCE_IMAGE_PATH);
    promptData.image = image;
    promptData.model = "dall-e-3"; // Ensure DALL-E 3 is used for image editing

    const response = await openai.images.generate(promptData);

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
