import fs from "fs";
import yaml from "js-yaml";

import { TimelineType } from "@/types/data";

/**
 * Main
 */

export default function getTimeline(): TimelineType {
  const timeline: TimelineType = readTimeline(
    "./src/data/timeline/timeline.yaml"
  );

  return timeline;
}

/**
 * Modules
 */

function readTimeline(dataPath: string): TimelineType {
  try {
    const fileContent = fs.readFileSync(dataPath, "utf-8");
    const timelineYaml: TimelineType = yaml.load(fileContent) as TimelineType;
    return timelineYaml;
  } catch (error) {
    throw new Error(`Error reading timeline data: ${error}`);
  }
}
