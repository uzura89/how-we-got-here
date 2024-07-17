import fs from "fs";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { CenturyType } from "./../../src/types/data";
import { EventType } from "../../src/types/data";
import { TIMELINE } from "../../src/data/timeline";
import generateImage from "./modules/generateImage";

/**
 * Constants
 */

const IMAGE_DIR = path.join(__dirname, "../../public/img/event");
const IMAGE_EXTENTION = ".webp";

/**
 * Main function
 */

async function main() {
  const eventsWithNoImage = getEventsWithNoImage();

  // shuffle the order
  eventsWithNoImage.sort(() => Math.random() - 0.5);

  eventsWithNoImage.slice(0, 10).forEach(async (event: EventType) => {
    const { id, title, description, index } = event;
    try {
      await generateAndSaveImage(id, title, description, index);
    } catch (error) {
      console.error(error);
    }
  });
}

/**
 * Get events with no image
 */

function getEventsWithNoImage(): EventType[] {
  // get all events
  const centuries = Object.values(TIMELINE) as CenturyType[];
  const allEvents: EventType[] = centuries
    .map((century) => {
      return century.events;
    })
    .flat();

  const eventsWithNoImage = allEvents.filter((event: EventType) => {
    const eventId = event.id;
    // check if image exists in ../../public/img/events
    const imagePath = `${IMAGE_DIR}/${eventId}${IMAGE_EXTENTION}`;
    return !fs.existsSync(imagePath);
  });

  return eventsWithNoImage;
}

/**
 * Generate and save image
 */

async function generateAndSaveImage(
  id: string,
  title: string,
  description: string,
  index: number
) {
  try {
    const imageUrl = await generateImage(title, description, index);
    await saveImageAsFile(id, imageUrl);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Save image as file
 */

async function saveImageAsFile(id: string, imageUrl: string) {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Get the image data as a Buffer
    const imageBuffer = await response.buffer();

    // Create the file path
    const filePath = path.join(IMAGE_DIR, `${id}${IMAGE_EXTENTION}`);

    // Write the image data to a file
    await fs.promises.writeFile(filePath, imageBuffer);
  } catch (error) {
    console.error(`Error saving image for event ${id}:`, error);
    throw error; // Re-throw the error to be caught in the calling function
  }
}

/**
 * Main
 */

main();
