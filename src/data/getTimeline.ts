import fs from "fs";
import path from "path";
import * as yaml from "js-yaml";

import { CenturyType, TimelineType } from "@/types/data";

/**
 * Main
 */

export default function getTimeline(): TimelineType {
  const timeline: TimelineType = readCenturies("./src/data/centuries");

  return timeline
    .map((century) => {
      return {
        ...century,
        lastUpdated: century.lastUpdated?.toString().slice(0, 10) || "",
      };
    })
    .sort((a, b) => {
      return b.from - a.from;
    });
}

/**
 * Modules
 */

function readCenturies(dirPath: string): CenturyType[] {
  const centuryDataArray: CenturyType[] = [];

  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      centuryDataArray.push(...readCenturies(filePath));
    } else if (
      path.extname(file).toLowerCase() === ".yaml" ||
      path.extname(file).toLowerCase() === ".yml"
    ) {
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const yamlData: CenturyType = yaml.load(fileContent) as CenturyType;
        centuryDataArray.push(yamlData);
      } catch (error) {
        console.error(`Error reading or parsing ${filePath}:`, error);
      }
    }
  }

  return centuryDataArray;
}
