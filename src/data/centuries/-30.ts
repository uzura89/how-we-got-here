import { CenturyType, EventType } from "@/types/data";

const OLD_KINGDOM_OF_EGYPT: EventType = {
  id: "old-kingdom-of-egypt",
  title: "Old Kingdom of Egypt",
  description:
    "Known as the Age of the Pyramids, this period saw the construction of the Great Pyramids of Giza. The Old Kingdom, also called the 'Age of the Pyramid Builders', was characterized by a strong centralized government and remarkable achievements in art, architecture, and engineering.",
  link: "https://en.wikipedia.org/wiki/Old_Kingdom_of_Egypt",
  index: -2686,
};

const INDUS_VALLEY_CIVILIZATION: EventType = {
  id: "indus-valley-civilization",
  title: "Indus Valley Civilization",
  description:
    "The rise of the Harappan culture in the Indus Valley, known for its advanced urban planning, drainage systems, and trade. The civilization featured sophisticated municipal planning, with houses built from baked bricks, and was notable for its uniformity and technological innovations.",
  link: "https://en.wikipedia.org/wiki/Indus_Valley_Civilisation",
  index: -2600,
};

const EPIC_OF_GILGAMESH: EventType = {
  id: "epic-of-gilgamesh",
  title: "Epic of Gilgamesh",
  description:
    "The composition of the Epic of Gilgamesh, one of the earliest known works of literary fiction. This epic poem from ancient Mesopotamia is regarded as the earliest surviving great work of literature, chronicling the adventures of the historical King Gilgamesh of Uruk and his quest for immortality.",
  link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
  index: -2100,
};

const MIDDLE_KINGDOM_OF_EGYPT: EventType = {
  id: "middle-kingdom-of-egypt",
  title: "Middle Kingdom of Egypt",
  description:
    "A period of re-unification and cultural flourishing in Egypt, marked by significant achievements in art and literature. During this era, Egypt saw a resurgence in prosperity and stability, leading to advancements in literature, art, and monumental building projects, as well as expansive trade networks.",
  link: "https://en.wikipedia.org/wiki/Middle_Kingdom_of_Egypt",
  index: -2050,
};

const INTRODUCTION_OF_BRONZE: EventType = {
  id: "introduction-of-bronze",
  title: "Introduction of Bronze",
  description:
    "The widespread use of bronze for tools and weapons began, marking the beginning of the Bronze Age. This period was characterized by significant technological advancements, as societies learned to alloy copper with tin to create bronze, leading to stronger and more durable tools and weaponry.",
  link: "https://en.wikipedia.org/wiki/Bronze_Age",
  index: -3000,
};

export const CENTURY_30_20_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    OLD_KINGDOM_OF_EGYPT,
    INDUS_VALLEY_CIVILIZATION,
    EPIC_OF_GILGAMESH,
    MIDDLE_KINGDOM_OF_EGYPT,
    INTRODUCTION_OF_BRONZE,
  ],
};
