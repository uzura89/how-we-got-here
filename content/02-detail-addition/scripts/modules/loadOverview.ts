import * as fs from "fs";
import * as yaml from "js-yaml";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { OverviewType } from "content/common/types/types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH_TO_OVERVIEW = path.join(
  __dirname,
  "../../../01-event-generation/output/overview_openai.yaml"
);

export default function loadOverview(): OverviewType {
  try {
    // Read the YAML file
    const fileContents = fs.readFileSync(PATH_TO_OVERVIEW, "utf8");

    // Parse the YAML content
    const data = yaml.load(fileContents) as OverviewType;

    // Return the Timeline array
    return data;
  } catch (error) {
    console.error("Error reading or parsing YAML file:", error);
    return {
      Timeline: [],
    };
  }
}
