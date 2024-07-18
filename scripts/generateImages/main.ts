import fs from "fs";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { EventType } from "../../src/types/data";
import generateImage from "./modules/generateImage";
import getTimeline from "@/data/getTimeline";
import { delayedForEach } from "@/utils/arrayUtils";

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

  delayedForEach(
    eventsWithNoImage,
    (event, index) => {
      const { id, title, description } = event;
      generateAndSaveImage(id, title, description, index);
    },
    1000 * 5
  );
}

/**
 * Get events with no image
 */

function getEventsWithNoImage(): EventType[] {
  // get all events
  const timeline = getTimeline();
  const allEvents: EventType[] = timeline
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
  const PATH_TO_IMAGE = path.join(IMAGE_DIR, `${id}${IMAGE_EXTENTION}`);

  try {
    // if there is existing image, throw error
    if (fs.existsSync(PATH_TO_IMAGE)) {
      throw new Error(`Image already exists for event ${id}`);
    }

    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }

    // Get the image data as a Buffer
    const imageBuffer = await response.buffer();

    // Write the image data to a file
    await fs.promises.writeFile(PATH_TO_IMAGE, imageBuffer);
  } catch (error) {
    console.error(`Error saving image for event ${id}:`, error);
    throw error; // Re-throw the error to be caught in the calling function
  }
}

/**
 * Main
 */

main();
