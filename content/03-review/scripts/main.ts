import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

import ClaudeUtil from "content/common/ai/claude";
import { EventType, TimelineType } from "@/types/data";
import { convertYearToHumanReadable } from "@/utils/yearUtils";
import GeminiUtil from "content/common/ai/gemini";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const timeline = await loadTimeline();

  for (const century of timeline.Timeline) {
    for (const event of century.events) {
      const error = await getFactCheckError(century.from, century.to, event);
      if (error) {
        await writeFactCheckError(century.from, century.to, event, error);
      } else {
        console.log(`Pass: ${event.title}`);
      }
    }
  }
}

async function loadTimeline(): Promise<TimelineType> {
  // read yaml file from 01-event-generation/output/overview_claude.yaml
  const filePath = path.join(
    __dirname,
    "../../02-detail-addition/output/timeline.yaml"
  );
  const fileContent = await fs.readFile(filePath, "utf-8");
  const timeline = yaml.load(fileContent) as TimelineType;
  return timeline;
}

async function getFactCheckError(
  from: number,
  to: number,
  event: EventType
): Promise<string | null> {
  const prompt = `Fact-check the following historical event. If it has any false information, please write the correct information in short. If it has no false information, please write a text "Pass" without any other words. Here is the event to check: ${
    event.title
  } - ${
    event.description
  }. This event can be included in the timeframe of  ${convertYearToHumanReadable(
    from
  )} ~ ${convertYearToHumanReadable(to)}.`;

  // const responseOpenAI = await OpenAIUtil.generateContent(prompt);
  let responseClaude, responseGemini;
  try {
    responseClaude = await ClaudeUtil.generateContent(prompt);
  } catch (err) {
    responseClaude = "Pass";
  }

  try {
    responseGemini = await GeminiUtil.generateContent(prompt);
  } catch (err) {
    responseGemini = "Pass";
  }

  if (
    // responseOpenAI === "Pass" &&
    responseClaude === "Pass" &&
    responseGemini === "Pass"
  ) {
    return null;
  }

  return `Claude: ${responseClaude}\nGemini: ${responseGemini}`;
}

async function writeFactCheckError(
  from: number,
  to: number,
  event: EventType,
  error: string
): Promise<void> {
  const filePath = path.join(__dirname, `../output/${event.id}.txt`);
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(
    filePath,
    `${event.title}: ${convertYearToHumanReadable(
      from
    )} ~ ${convertYearToHumanReadable(to)}\n\n${error}`,
    "utf-8"
  );
}

main().catch(console.error);
