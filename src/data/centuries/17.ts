import { CenturyType, EventType } from "@/types/data";

const THIRTY_YEARS_WAR: EventType = {
  id: "thirty-years-war",
  title: "Thirty Years' War",
  description:
    "From 1618 to 1648, the Thirty Years' War was a devastating conflict in Europe that ended with the Peace of Westphalia. This war reshaped the continent's political landscape, leading to significant changes in territorial boundaries and influencing the rise of state sovereignty.",
  link: "https://en.wikipedia.org/wiki/Thirty_Years%27_War",
  index: 1618,
};

const ENGLISH_CIVIL_WAR: EventType = {
  id: "english-civil-war",
  title: "English Civil War",
  description:
    "From 1642 to 1651, the English Civil War was a conflict between the monarchy and Parliament. The war led to the temporary overthrow of the monarchy and the establishment of the Commonwealth under Oliver Cromwell, significantly impacting the political and social structure of England.",
  link: "https://en.wikipedia.org/wiki/English_Civil_War",
  index: 1642,
};

const SCIENTIFIC_REVOLUTION_CONTINUES: EventType = {
  id: "scientific-revolution-continues",
  title: "Scientific Revolution Continues",
  description:
    "During the 17th century, the Scientific Revolution continued with key figures like Isaac Newton making groundbreaking contributions to physics and mathematics. Newton's laws of motion and universal gravitation laid the foundation for classical mechanics and profoundly influenced scientific thought.",
  link: "https://en.wikipedia.org/wiki/Scientific_Revolution",
  index: 1600,
};

const GLORIOUS_REVOLUTION: EventType = {
  id: "glorious-revolution",
  title: "Glorious Revolution",
  description:
    "In 1688, the Glorious Revolution resulted in the overthrow of King James II of England. This event led to the establishment of a constitutional monarchy under William III and Mary II, significantly shaping the future of British governance and constitutional law.",
  link: "https://en.wikipedia.org/wiki/Glorious_Revolution",
  index: 1688,
};

const FOUNDING_OF_DUTCH_EAST_INDIA_COMPANY: EventType = {
  id: "founding-of-dutch-east-india-company",
  title: "Founding of the Dutch East India Company",
  description:
    "In 1602, the Dutch East India Company was founded and played a crucial role in global trade and the establishment of the Dutch colonial empire. This company became one of the most powerful and influential trading entities of its time, contributing significantly to the Dutch Golden Age.",
  link: "https://en.wikipedia.org/wiki/Dutch_East_India_Company",
  index: 1602,
};

export const CENTURY_17_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    THIRTY_YEARS_WAR,
    ENGLISH_CIVIL_WAR,
    SCIENTIFIC_REVOLUTION_CONTINUES,
    GLORIOUS_REVOLUTION,
    FOUNDING_OF_DUTCH_EAST_INDIA_COMPANY,
  ],
};
