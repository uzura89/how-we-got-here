import { CenturyType, EventType } from "@/types/data";

const FIRST_OLYMPIAD_IN_GREECE: EventType = {
  id: "first-olympiad-in-greece",
  title: "First Olympiad in Greece",
  description:
    "The first recorded Olympic Games were held in Olympia in 776 BC, marking the beginning of the Olympiad. These games became a cornerstone of Greek culture, celebrating physical prowess and competition, and were held every four years in honor of Zeus.",
  link: "https://en.wikipedia.org/wiki/Ancient_Olympic_Games",
  index: -776,
};

const FOUNDING_OF_ROME: EventType = {
  id: "founding-of-rome",
  title: "Founding of Rome",
  description:
    "According to tradition, Rome was founded by Romulus in 753 BC, marking the beginning of Roman civilization. The story of Romulus and Remus is central to Roman mythology, symbolizing the origins and enduring legacy of what would become one of the greatest empires in history.",
  link: "https://en.wikipedia.org/wiki/Founding_of_Rome",
  index: -753,
};

const HOMERS_EPICS_COMPOSED: EventType = {
  id: "homers-epics-composed",
  title: "Homer's Epics Composed",
  description:
    "Around 750 BC, the Iliad and the Odyssey were composed, becoming foundational texts of Western literature. Attributed to the poet Homer, these epic poems recount the stories of the Trojan War and the adventures of Odysseus, influencing countless generations of writers and thinkers.",
  link: "https://en.wikipedia.org/wiki/Homer",
  index: -750,
};

const REIGN_OF_KING_UZZIAH_IN_JUDAH: EventType = {
  id: "reign-of-king-uzziah-in-judah",
  title: "Reign of King Uzziah in Judah",
  description:
    "King Uzziah's reign, from approximately 783 to 742 BC, marked a period of prosperity and military strength in the Kingdom of Judah. His leadership contributed to economic growth, territorial expansion, and significant building projects, enhancing the kingdom's stability and influence.",
  link: "https://en.wikipedia.org/wiki/Uzziah",
  index: -783,
};

const EXPANSION_OF_ASSYRIAN_EMPIRE: EventType = {
  id: "expansion-of-assyrian-empire",
  title: "Expansion of the Assyrian Empire",
  description:
    "Under the rule of Tiglath-Pileser III around 745 BC, the Assyrian Empire expanded its territories and influence. His military campaigns and administrative reforms strengthened the empire, making it a dominant power in the Near East and laying the groundwork for future conquests.",
  link: "https://en.wikipedia.org/wiki/Tiglath-Pileser_III",
  index: -745,
};

export const CENTURY_8_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    FIRST_OLYMPIAD_IN_GREECE,
    FOUNDING_OF_ROME,
    HOMERS_EPICS_COMPOSED,
    REIGN_OF_KING_UZZIAH_IN_JUDAH,
    EXPANSION_OF_ASSYRIAN_EMPIRE,
  ],
};
