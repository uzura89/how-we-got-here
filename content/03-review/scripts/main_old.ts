import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

import { OverviewType } from "content/common/types/types";
import { CONS_AI_LIST } from "content/common/constants/ai.cons";
import OpenAIUtil from "content/common/ai/openai";
import ClaudeUtil from "content/common/ai/claude";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const years = await getYearsFromTimeline();
  let overviewContent = "Timeline:\n";

  let count = 0;
  while (count < years.length) {
    const { yearFrom, yearTo } = years[count];

    const combinedEvents = await getCombinedEventTitles(yearFrom);
    console.log("🚀 ~ main ~ combinedEventTitles:", combinedEvents);
    const primaryEventTitles = await getPrimaryEventTitles(combinedEvents);
    console.log("🚀 ~ main ~ primaryEventTitles:", primaryEventTitles);

    overviewContent += `  - from: ${yearFrom}\n  to: ${yearTo}\n  events:\n${primaryEventTitles
      .map((title) => `    - title: ${title}`)
      .join("\n")}\n`;

    count++;
  }

  // save yaml content as file
  const outputFilePath = path.join(__dirname, "../output/overview.yaml");
  await fs.writeFile(outputFilePath, overviewContent);
}

async function getYearsFromTimeline() {
  // read yaml file from 01-event-generation/output/overview_claude.yaml
  const filePath = path.join(
    __dirname,
    "../../01-event-generation/output/overview_claude.yaml"
  );
  const fileContent = await fs.readFile(filePath, "utf-8");
  const fromArray = yaml.load(fileContent) as OverviewType;
  return fromArray.Timeline.map((item) => ({
    yearFrom: item.from,
    yearTo: item.to,
  }));
}

async function getCombinedEventTitles(id: number) {
  let combilnedEvent = "";

  // read yaml file from 02-event-comparison/output/combined.yaml
  await Promise.all(
    CONS_AI_LIST.map(async (ai) => {
      const filePath = path.join(
        __dirname,
        `../../01-event-generation/output/overview_${ai}.yaml`
      );
      const fileContent = await fs.readFile(filePath, "utf-8");
      const fromArray = yaml.load(fileContent) as OverviewType;
      const timelineGroup = fromArray.Timeline.find((item) => item.from === id);
      if (timelineGroup) {
        combilnedEvent +=
          "Events:\n" +
          timelineGroup.events
            .map((event) => `  - event: ${event.title}`)
            .join("\n") +
          "\n\n";
      }
    })
  );

  return combilnedEvent;
}

async function getPrimaryEventTitles(combinedEvents: string) {
  const preword = `The folloing are the 3 outputs from different LLMs about the important events in human history. Please make a more accurate list of 5 events by eliminating outliers. Return with the yaml format like below (no preword needed): \n\nEvents:\n  - event: Event Title\n  - event: Event Title\n  ...`;
  const prompt = `${preword}\n\n${combinedEvents}`;
  // generate content using claude
  const response = await OpenAIUtil.generateContent(prompt);
  console.log("🚀 ~ getPrimaryEventTitles ~ response:", response);
  const yamlContent = yaml.load(response) as { Events: { event: string }[] };
  const primaryEventTitles = yamlContent.Events.map((item) => item.event);
  return primaryEventTitles;
}

main().catch(console.error);
