import { CenturyType, EventType } from "@/types/data";

const FALL_OF_HITTITE_EMPIRE: EventType = {
  id: "fall-of-hittite-empire",
  title: "Fall of the Hittite Empire",
  description:
    "The Hittite Empire, a major power in Anatolia and the Near East, collapsed under pressure from invading forces and internal strife. This collapse marked the end of one of the most influential civilizations of the Late Bronze Age, known for their advancements in law, politics, and technology.",
  link: "https://en.wikipedia.org/wiki/Hittites",
  index: -1180,
};

const DESTRUCTION_OF_TROY: EventType = {
  id: "destruction-of-troy",
  title: "Destruction of Troy",
  description:
    "The legendary city of Troy was destroyed, possibly marking the historical basis for the events described in Homer’s epic poems, the Iliad and the Odyssey. The fall of Troy is a pivotal moment in Greek mythology, symbolizing the end of an era and the transition to the Greek Dark Ages.",
  link: "https://en.wikipedia.org/wiki/Troy",
  index: -1180,
};

const COLLAPSE_OF_MYCENAEAN_CIVILIZATION: EventType = {
  id: "collapse-of-mycenaean-civilization",
  title: "Collapse of Mycenaean Civilization",
  description:
    "Mycenaean Greece experienced a dramatic collapse, leading to the Greek Dark Ages. The decline of this once-powerful civilization resulted in the loss of literacy, art, and centralized political structures, significantly altering the course of Greek history and culture.",
  link: "https://en.wikipedia.org/wiki/Mycenaean_Greece",
  index: -1200,
};

const BATTLE_OF_THE_DELTA_AND_DJAHY: EventType = {
  id: "battle-of-the-delta-and-djahy",
  title: "Battle of the Delta and Djahy",
  description:
    "Pharaoh Ramses III of Egypt fought off invasions by the Sea Peoples, preserving Egypt from collapse. These battles were crucial in maintaining the stability of the Egyptian Empire during a period of widespread turmoil and upheaval in the eastern Mediterranean region.",
  link: "https://en.wikipedia.org/wiki/Battle_of_the_Delta",
  index: -1178,
};

const MIGRATION_AND_SETTLEMENTS_OF_SEA_PEOPLES: EventType = {
  id: "migration-and-settlements-of-sea-peoples",
  title: "Migration and Settlements of the Sea Peoples",
  description:
    "The Sea Peoples, a confederation of naval raiders, attacked regions along the eastern Mediterranean, contributing to the Late Bronze Age collapse. Their migrations and settlements led to significant cultural and political changes in the affected regions, disrupting established civilizations and paving the way for new societies.",
  link: "https://en.wikipedia.org/wiki/Sea_Peoples",
  index: -1200,
};

export const CENTURY_12_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    FALL_OF_HITTITE_EMPIRE,
    DESTRUCTION_OF_TROY,
    COLLAPSE_OF_MYCENAEAN_CIVILIZATION,
    BATTLE_OF_THE_DELTA_AND_DJAHY,
    MIGRATION_AND_SETTLEMENTS_OF_SEA_PEOPLES,
  ],
};
