/**
 * Timeline data
 */

export interface EventType {
  id: string; // slug of the title
  title: string; // title of the event
  description: string; // around 300 characters
  link: string; // link to a Wikipedia page
  index: number; // approximate year of the event (negative number for BC)
  source: string; // link to the reputable source of the event
}

export interface CenturyType {
  lastUpdated: string; // today's date in YYYY-MM-DD format
  from: number; // start year of the century
  to: number; // end year of the century
  events: EventType[];
}

export interface TimelineType {
  Timeline: CenturyType[];
}

export const INITIAL_EVENT: EventType = {
  id: "",
  title: "",
  description: "",
  link: "",
  index: 0,
  source: "",
};
