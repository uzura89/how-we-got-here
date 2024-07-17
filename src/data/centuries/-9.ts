import { CenturyType, EventType } from "@/types/data";

const FOUNDING_OF_CARTHAGE: EventType = {
  id: "founding-of-carthage",
  title: "Founding of Carthage by Phoenicians",
  description:
    "Carthage, founded around 814 BC by Phoenician settlers, became a major center of commerce and culture in the Mediterranean. It grew into a powerful city-state known for its strategic location, formidable navy, and significant contributions to trade and cultural exchange in the ancient world.",
  link: "https://en.wikipedia.org/wiki/Carthage",
  index: -814,
};

const REIGN_OF_KING_AHAB_IN_ISRAEL: EventType = {
  id: "reign-of-king-ahab-in-israel",
  title: "Reign of King Ahab in Israel",
  description:
    "Ahab's reign, from approximately 874 to 853 BC, marked significant political and military activities, including conflicts with neighboring states. Known for his strong leadership and controversial religious policies, Ahab played a crucial role in the history of ancient Israel.",
  link: "https://en.wikipedia.org/wiki/Ahab",
  index: -874,
};

const RISE_OF_NEO_ASSYRIAN_EMPIRE: EventType = {
  id: "rise-of-neo-assyrian-empire",
  title: "Rise of Neo-Assyrian Empire",
  description:
    "The Neo-Assyrian Empire, starting around 900 BC, continued its expansion, employing advanced military tactics and administrative systems. This period saw the empire's dominance over much of the Near East, marked by innovations in governance, infrastructure, and military strategy.",
  link: "https://en.wikipedia.org/wiki/Neo-Assyrian_Empire",
  index: -900,
};

const DEVELOPMENT_OF_ALPHABETIC_WRITING: EventType = {
  id: "development-of-alphabetic-writing",
  title: "Development of Alphabetic Writing",
  description:
    "Around 900 BC, early alphabetic scripts began to influence the development of writing systems in the Mediterranean region. These scripts, including the Phoenician alphabet, laid the foundation for future writing systems, such as Greek and Latin, significantly impacting literacy and communication.",
  link: "https://en.wikipedia.org/wiki/Alphabet",
  index: -900,
};

export const CENTURY_9_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    FOUNDING_OF_CARTHAGE,
    REIGN_OF_KING_AHAB_IN_ISRAEL,
    RISE_OF_NEO_ASSYRIAN_EMPIRE,
    DEVELOPMENT_OF_ALPHABETIC_WRITING,
  ],
};
