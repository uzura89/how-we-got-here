import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

import convertDateToString from "./modules/convertDateToString";
import loadOverview from "./modules/loadOverview";
import { CenturyType } from "@/types/data";
import console from "console";
import OpenAIUtil from "content/common/ai/openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_DATA_DIR = path.join(__dirname, "../output");

/**
 * Main
 */

async function main() {
  try {
    const overview = loadOverview();

    const centuries = [];

    // check if the folder has any files
    const files = fs.readdirSync(PATH_TO_DATA_DIR);
    if (files.length > 0) {
      throw new Error("Directory is not empty");
    }

    let cnt = 0;
    while (overview.Timeline.length > cnt) {
      const { from, to, events } = overview.Timeline[cnt];
      const century = await addDetailToEvents(from, to, events);
      centuries.push(century);
      cnt++;
    }

    // save centuries to file
    const timelineYaml = yaml.dump({ Timeline: centuries });

    await saveYamlToFile(timelineYaml, PATH_TO_DATA_DIR);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Generate century and save to file
 */

async function addDetailToEvents(
  from: number,
  to: number,
  events: { title: string }[]
): Promise<CenturyType> {
  const overviewYaml = convertToYaml(from, to, events);
  const detailYaml = await OpenAIUtil.generateContent(makePrompt(overviewYaml));

  const detailYamlTrimmed = detailYaml.replace(/```(yaml)?/g, "");
  const century = yaml.load(detailYamlTrimmed) as CenturyType;
  return century;
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

async function saveYamlToFile(yaml: string, outDir: string) {
  // if there is any files in the directory, throw error
  try {
    const files = await fs.promises.readdir(outDir);
    if (files.length > 0) {
      throw new Error("Directory is not empty");
    }

    await fs.promises.writeFile(outDir + "/timeline.yaml", yaml);
    console.log("YAML saved to file:", outDir);
  } catch (error) {
    console.error("Failed to save YAML to file:", error);
  }
}

/**
 * Make prompt
 */

function makePrompt(yaml: string): string {
  return `Complete the following yaml file by adding more data to each event.

The data to add is:
- id // slug of the title
- description // short description about the event (around 300 characters)
- link // link to a relevant Wikipedia page
- index // approximate year of the event (negative number for BC)

Here is the yaml file:
${yaml}

Do not add any text nor document other than the yaml part.
`;
}

main();
