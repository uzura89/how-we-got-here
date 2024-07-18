import * as fs from "fs";
import * as yaml from "js-yaml";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { SeedType } from "../types/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_SEED = path.join(__dirname, "../seed/seed.yaml");

export default function loadTimelineSeed(): SeedType {
  try {
    // Read the YAML file
    const fileContents = fs.readFileSync(PATH_TO_SEED, "utf8");

    // Parse the YAML content
    const data = yaml.load(fileContents) as { Timeline: SeedType };

    // Return the Timeline array
    return data.Timeline;
  } catch (error) {
    console.error("Error reading or parsing YAML file:", error);
    return [];
  }
}
