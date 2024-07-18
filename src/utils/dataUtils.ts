import getTimeline from "@/data/getTimeline";
import { TimelineType } from "../types/data";

export function getTimelineData(): TimelineType {
  const timeline = getTimeline();
  return timeline;
}

export function getImagePath(eventId: string): string {
  return `/img/event/${eventId}.webp`;
}
