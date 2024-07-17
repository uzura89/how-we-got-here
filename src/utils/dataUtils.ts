import { TimelineDataType } from "../types/data";
import { TIMELINE } from "@/data/timeline";

export function getTimelineData(): TimelineDataType {
  return TIMELINE;
}

export function getImagePath(eventId: string): string {
  return `/img/event/${eventId}.webp`;
}
