import { CenturyType, EventType } from "@/types/data";

const RISE_OF_MINOAN_CIVILIZATION: EventType = {
  id: "rise-of-minoan-civilization",
  title: "Rise of the Minoan Civilization",
  description:
    "The Minoans established a powerful civilization on Crete, known for their palaces, such as Knossos, and extensive trade networks. The Minoan civilization is considered one of the earliest advanced cultures in Europe, with significant achievements in art, architecture, and commerce.",
  link: "https://en.wikipedia.org/wiki/Minoan_civilization",
  index: -2000,
};

const HAMMURABIS_CODE: EventType = {
  id: "hammurabis-code",
  title: "Hammurabi's Code",
  description:
    "King Hammurabi of Babylon created one of the earliest and most complete written legal codes. The Code of Hammurabi is a collection of 282 laws that established standards for commercial interactions and set fines and punishments to meet the requirements of justice.",
  link: "https://en.wikipedia.org/wiki/Code_of_Hammurabi",
  index: -1754,
};

const RISE_OF_MYCENAEAN_CIVILIZATION: EventType = {
  id: "rise-of-mycenaean-civilization",
  title: "Rise of the Mycenaean Civilization",
  description:
    "The Mycenaeans in Greece developed a powerful civilization known for its fortified cities and involvement in the Trojan War. They were influential in the Aegean region and are celebrated in Greek mythology for their contributions to culture, military organization, and the arts.",
  link: "https://en.wikipedia.org/wiki/Mycenaean_Greece",
  index: -1600,
};

const NEW_KINGDOM_OF_EGYPT: EventType = {
  id: "new-kingdom-of-egypt",
  title: "New Kingdom of Egypt",
  description:
    "This period, also known as the Egyptian Empire, saw the expansion of Egypt into an empire, the construction of monumental architecture, and the reigns of famous pharaohs like Hatshepsut, Akhenaten, and Ramses II. It was a time of wealth, power, and cultural prosperity in ancient Egyptian history.",
  link: "https://en.wikipedia.org/wiki/New_Kingdom_of_Egypt",
  index: -1550,
};

const RISE_OF_HITTITE_EMPIRE: EventType = {
  id: "rise-of-hittite-empire",
  title: "Rise of the Hittite Empire",
  description:
    "The Hittites became a dominant power in Anatolia and the Near East, known for their advancements in ironworking and military prowess. The Hittite Empire played a crucial role in the political and military affairs of the region, engaging in conflicts and treaties with Egypt and other powers.",
  link: "https://en.wikipedia.org/wiki/Hittites",
  index: -1600,
};

const TROJAN_WAR: EventType = {
  id: "trojan-war",
  title: "Trojan War",
  description:
    "According to legend and archaeological evidence, the city of Troy was destroyed around this time, which forms the basis of Homer's epics, the Iliad and the Odyssey. The war between the Greeks and Trojans has been a central theme in Western literature and mythology.",
  link: "https://en.wikipedia.org/wiki/Trojan_War",
  index: -1180,
};

const DESTRUCTION_OF_UGARIT: EventType = {
  id: "destruction-of-ugarit",
  title: "Destruction of Ugarit",
  description:
    "The city of Ugarit was destroyed, possibly by the Sea Peoples, marking a significant event in the Late Bronze Age collapse. Ugarit was a major port city and cultural center in the ancient Near East, and its destruction signifies a period of widespread turmoil and decline in the region.",
  link: "https://en.wikipedia.org/wiki/Ugarit",
  index: -1200,
};

const COLLAPSE_OF_MYCENAEAN_CIVILIZATION: EventType = {
  id: "collapse-of-mycenaean-civilization",
  title: "Collapse of Mycenaean Civilization",
  description:
    "The decline and eventual collapse of the Mycenaean civilization led to the Greek Dark Ages. This period saw the fall of many Mycenaean cities, a decrease in population, and a loss of literacy and cultural complexity, resulting in a significant transformation of Greek society.",
  link: "https://en.wikipedia.org/wiki/Mycenaean_Greece",
  index: -1200,
};

export const CENTURY_20_12_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    RISE_OF_MINOAN_CIVILIZATION,
    HAMMURABIS_CODE,
    RISE_OF_MYCENAEAN_CIVILIZATION,
    NEW_KINGDOM_OF_EGYPT,
    RISE_OF_HITTITE_EMPIRE,
    TROJAN_WAR,
    DESTRUCTION_OF_UGARIT,
    COLLAPSE_OF_MYCENAEAN_CIVILIZATION,
  ],
};
