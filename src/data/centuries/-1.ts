import { CenturyType, EventType } from "@/types/data";

const REIGN_OF_JULIUS_CAESAR: EventType = {
  id: "reign-of-julius-caesar",
  title: "Reign of Julius Caesar",
  description:
    "From 49 to 44 BC, Julius Caesar's rise to power, reforms, and assassination marked significant changes in Roman politics. His actions and policies led to the end of the Roman Republic and paved the way for the rise of the Roman Empire.",
  link: "https://en.wikipedia.org/wiki/Julius_Caesar",
  index: -49,
};

const BATTLE_OF_ACTIUM: EventType = {
  id: "battle-of-actium",
  title: "Battle of Actium",
  description:
    "In 31 BC, Octavian's victory over Antony and Cleopatra at the Battle of Actium led to the establishment of the Roman Empire under Augustus. This decisive naval battle marked the end of the Roman Republic's civil wars and the beginning of a period of relative peace and stability.",
  link: "https://en.wikipedia.org/wiki/Battle_of_Actium",
  index: -31,
};

const REIGN_OF_AUGUSTUS: EventType = {
  id: "reign-of-augustus",
  title: "Reign of Augustus",
  description:
    "From 27 BC to AD 14, Augustus, the first Roman Emperor, established the Pax Romana and significant administrative reforms. His reign brought about an era of peace, prosperity, and cultural flourishing, transforming Rome into a powerful and enduring empire.",
  link: "https://en.wikipedia.org/wiki/Augustus",
  index: -27,
};

const CONSTRUCTION_OF_SECOND_TEMPLE: EventType = {
  id: "construction-of-second-temple",
  title: "Construction of the Second Temple",
  description:
    "Around 20 BC, Herod the Great expanded the Second Temple in Jerusalem, making it a major center of Jewish worship. This grand reconstruction project enhanced the temple's significance in Jewish religious life and solidified Herod's legacy as a great builder.",
  link: "https://en.wikipedia.org/wiki/Second_Temple",
  index: -20,
};

const SPREAD_OF_BUDDHISM_TO_CENTRAL_ASIA: EventType = {
  id: "spread-of-buddhism-to-central-asia",
  title: "Spread of Buddhism to Central Asia",
  description:
    "During the 1st Century BC, Buddhist missionaries traveled along the Silk Road, spreading Buddhism to Central Asia and China. This cultural exchange facilitated the spread of Buddhist teachings, practices, and art, significantly influencing the spiritual landscape of the region.",
  link: "https://en.wikipedia.org/wiki/History_of_Buddhism",
  index: -100,
};

export const CENTURY_1_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REIGN_OF_JULIUS_CAESAR,
    BATTLE_OF_ACTIUM,
    REIGN_OF_AUGUSTUS,
    CONSTRUCTION_OF_SECOND_TEMPLE,
    SPREAD_OF_BUDDHISM_TO_CENTRAL_ASIA,
  ],
};
