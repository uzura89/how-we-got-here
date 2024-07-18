import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import loadTimelineSeed from "./modules/loadTimelineSeed";
import generateEventDetail from "./modules/generateEventDetail";
import convertDateToString from "./modules/convertDateToString";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Main
 */

async function main() {
  try {
    const timelineSeed = loadTimelineSeed();

    timelineSeed.forEach(async (century) => {
      const { from, to, events } = century;
      await addDataToEventsAndSaveAsFile(from, to, events);
    });
  } catch (error) {
    console.error("Failed to get response from Claude AI:", error);
  }
}

/**
 * Generate century and save to file
 */

async function addDataToEventsAndSaveAsFile(
  from: number,
  to: number,
  events: { title: string }[]
) {
  const seedYaml = convertToYaml(from, to, events);
  const detailYaml = await generateEventDetail(seedYaml);
  await saveYamlToFile(from, detailYaml);
}

/**
 * Convert to YAML
 */

function convertToYaml(from: number, to: number, events: { title: string }[]) {
  return `from: ${from}
to: ${to}
events:
${events.map((event) => `  - title: ${event.title}`).join("\n")}
lastUpdated: "${convertDateToString(new Date())}"
`;
}

/**
 * Save YAML to file
 */

const PATH_TO_DATA_DIR = path.join(__dirname, "../../src/data/centuries");

async function saveYamlToFile(from: number, yaml: string) {
  // if there is any files in the directory, throw error
  const files = await fs.promises.readdir(PATH_TO_DATA_DIR);
  if (files.length > 0) {
    throw new Error("Directory is not empty");
  }

  const fileName = from.toString();
  const filePath = path.join(PATH_TO_DATA_DIR, `${fileName}.yaml`);

  await fs.promises.writeFile(filePath, yaml);
  console.log("YAML saved to file:", filePath);
}

main();
