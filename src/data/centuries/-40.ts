import { CenturyType, EventType } from "@/types/data";

const RISE_OF_SUMERIAN_CIVILIZATION: EventType = {
  id: "rise-of-sumerian-civilization",
  title: "Rise of Sumerian Civilization",
  description:
    "The Sumerians established one of the first known civilizations in Mesopotamia, marked by the development of cities such as Uruk and Eridu. Their innovations in agriculture, social organization, and technology laid the foundation for future civilizations in the region.",
  link: "https://en.wikipedia.org/wiki/Sumer",
  index: -4000,
};

const DEVELOPMENT_OF_WRITING: EventType = {
  id: "development-of-writing",
  title: "Development of Writing",
  description:
    "The Sumerians created one of the earliest writing systems, cuneiform, which was used for record-keeping and communication. This system involved inscribing wedge-shaped marks on clay tablets, representing a significant leap in human capability to document and convey complex information.",
  link: "https://en.wikipedia.org/wiki/Cuneiform",
  index: -3500,
};

const CONSTRUCTION_OF_FIRST_ZIGGURATS: EventType = {
  id: "construction-of-first-ziggurats",
  title: "Construction of the First Ziggurats",
  description:
    "Ziggurats, massive terraced structures, were built by the Sumerians as temples for their gods. These monumental constructions served as religious centers and demonstrated the architectural ingenuity and religious devotion of the Sumerian civilization.",
  link: "https://en.wikipedia.org/wiki/Ziggurat",
  index: -3500,
};

const RISE_OF_EGYPTIAN_CIVILIZATION: EventType = {
  id: "rise-of-egyptian-civilization",
  title: "Rise of Egyptian Civilization",
  description:
    "The unification of Upper and Lower Egypt by Pharaoh Narmer (Menes) marks the beginning of the Early Dynastic Period and centralized governance in Egypt. This unification laid the groundwork for the rich cultural and architectural developments that would characterize ancient Egyptian civilization.",
  link: "https://en.wikipedia.org/wiki/Early_Dynastic_Period_(Egypt)",
  index: -3100,
};

const CONSTRUCTION_OF_FIRST_CITIES_IN_MESOPOTAMIA: EventType = {
  id: "construction-of-first-cities-in-mesopotamia",
  title: "Construction of the First Cities in Mesopotamia",
  description:
    "Urban centers like Uruk emerged, becoming some of the first major cities in human history. These cities featured advanced urban planning and infrastructure, setting the stage for the development of complex societies with specialized labor, governance, and culture.",
  link: "https://en.wikipedia.org/wiki/Uruk",
  index: -3200,
};

export const CENTURY_40_30_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    RISE_OF_SUMERIAN_CIVILIZATION,
    DEVELOPMENT_OF_WRITING,
    CONSTRUCTION_OF_FIRST_ZIGGURATS,
    RISE_OF_EGYPTIAN_CIVILIZATION,
    CONSTRUCTION_OF_FIRST_CITIES_IN_MESOPOTAMIA,
  ],
};
