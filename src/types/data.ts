export interface EventType {
  id: string;
  title: string;
  description: string;
  link: string;
  index: number;
}

export interface CenturyType {
  lastUpdated: string;
  events: EventType[];
}

export interface TimelineDataType {
  [century: string]: CenturyType;
}

export const INITIAL_EVENT: EventType = {
  id: "",
  title: "",
  description: "",
  link: "",
  index: 0,
};
