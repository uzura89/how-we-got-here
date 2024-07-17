import { CenturyType, EventType } from "@/types/data";

const RISE_OF_MEDES: EventType = {
  id: "rise-of-medes",
  title: "Rise of the Medes",
  description:
    "The Medes established a powerful kingdom in what is now Iran around 700 BC, laying the groundwork for the later Persian Empire. Their rise marked a significant shift in the balance of power in the region, influencing the political landscape of the ancient Near East.",
  link: "https://en.wikipedia.org/wiki/Medes",
  index: -700,
};

const ESTABLISHMENT_OF_SPARTA_AS_MILITARY_POWER: EventType = {
  id: "establishment-of-sparta-as-military-power",
  title: "Establishment of Sparta as a Military Power",
  description:
    "Around 700 BC, Sparta developed its unique militaristic society and became a dominant force in Greece. The Spartan system emphasized rigorous military training, discipline, and communal living, which enabled Sparta to become one of the most feared and respected city-states in ancient Greece.",
  link: "https://en.wikipedia.org/wiki/Sparta",
  index: -700,
};

const REIGN_OF_KING_JOSIAH_IN_JUDAH: EventType = {
  id: "reign-of-king-josiah-in-judah",
  title: "Reign of King Josiah in Judah",
  description:
    "King Josiah's reign, from approximately 640 to 609 BC, marked significant religious reforms in Judah, centralizing worship in Jerusalem. His efforts to restore traditional religious practices and eliminate idolatry had a lasting impact on the religious and cultural life of the kingdom.",
  link: "https://en.wikipedia.org/wiki/Josiah",
  index: -640,
};

const FALL_OF_NINEVEH: EventType = {
  id: "fall-of-nineveh",
  title: "Fall of Nineveh",
  description:
    "In 612 BC, the Assyrian capital Nineveh was sacked, leading to the decline of the Assyrian Empire. The fall of Nineveh marked the end of Assyrian dominance in the Near East and the rise of new powers, including the Neo-Babylonian Empire.",
  link: "https://en.wikipedia.org/wiki/Nineveh",
  index: -612,
};

const RISE_OF_NEO_BABYLONIAN_EMPIRE: EventType = {
  id: "rise-of-neo-babylonian-empire",
  title: "Rise of Neo-Babylonian Empire",
  description:
    "Under Nabopolassar and his successors, the Neo-Babylonian Empire rose to become a dominant power in the Near East around 626 BC. This period saw significant cultural and architectural achievements, including the construction of the Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World.",
  link: "https://en.wikipedia.org/wiki/Neo-Babylonian_Empire",
  index: -626,
};

export const CENTURY_7_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    RISE_OF_MEDES,
    ESTABLISHMENT_OF_SPARTA_AS_MILITARY_POWER,
    REIGN_OF_KING_JOSIAH_IN_JUDAH,
    FALL_OF_NINEVEH,
    RISE_OF_NEO_BABYLONIAN_EMPIRE,
  ],
};
