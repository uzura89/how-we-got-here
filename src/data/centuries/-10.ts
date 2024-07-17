import { CenturyType, EventType } from "@/types/data";

const REIGN_OF_KING_DAVID_IN_ISRAEL: EventType = {
  id: "reign-of-king-david-in-israel",
  title: "Reign of King David in Israel",
  description:
    "King David established Jerusalem as the capital and expanded the kingdom, creating a strong, unified Israel. His reign is marked by military successes, political consolidation, and significant cultural contributions, laying the foundations for the future prosperity of Israel.",
  link: "https://en.wikipedia.org/wiki/David",
  index: -1000,
};

const REIGN_OF_SOLOMON_IN_ISRAEL: EventType = {
  id: "reign-of-solomon-in-israel",
  title: "Reign of Solomon in Israel",
  description:
    "Solomon, David's son, built the First Temple in Jerusalem, enhancing the kingdom's cultural and religious significance. His reign is noted for peace, prosperity, and extensive building projects, as well as his reputed wisdom and diplomatic relationships with neighboring states.",
  link: "https://en.wikipedia.org/wiki/Solomon",
  index: -961,
};

const DEVELOPMENT_OF_IRON_AGE: EventType = {
  id: "development-of-iron-age",
  title: "Development of the Iron Age",
  description:
    "The widespread use of iron for tools and weapons marked a significant technological advancement. Iron's superior properties compared to bronze, such as its strength and abundance, revolutionized agriculture, warfare, and daily life, leading to profound societal changes.",
  link: "https://en.wikipedia.org/wiki/Iron_Age",
  index: -1000,
};

const PHOENICIAN_TRADE_AND_ALPHABET: EventType = {
  id: "phoenician-trade-and-alphabet",
  title: "Phoenician Trade and Alphabet",
  description:
    "The Phoenicians expanded their trade networks and refined their alphabet, influencing the development of Greek and Latin scripts. Their seafaring prowess and innovative writing system played a crucial role in the cultural and economic exchanges across the Mediterranean region.",
  link: "https://en.wikipedia.org/wiki/Phoenicia",
  index: -1000,
};

const RISE_OF_ASSYRIAN_EMPIRE: EventType = {
  id: "rise-of-assyrian-empire",
  title: "Rise of the Assyrian Empire",
  description:
    "The Assyrian Empire began to expand significantly, becoming a dominant power in the Near East. Known for its military prowess, administrative efficiency, and architectural achievements, the Assyrian Empire laid the groundwork for one of the most formidable empires in ancient history.",
  link: "https://en.wikipedia.org/wiki/Assyria",
  index: -900,
};

export const CENTURY_10_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REIGN_OF_KING_DAVID_IN_ISRAEL,
    REIGN_OF_SOLOMON_IN_ISRAEL,
    DEVELOPMENT_OF_IRON_AGE,
    PHOENICIAN_TRADE_AND_ALPHABET,
    RISE_OF_ASSYRIAN_EMPIRE,
  ],
};
