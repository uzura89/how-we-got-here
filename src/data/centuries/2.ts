import { CenturyType, EventType } from "@/types/data";

const REIGN_OF_EMPEROR_TRAJAN: EventType = {
  id: "reign-of-emperor-trajan",
  title: "Reign of Emperor Trajan",
  description:
    "From 98 to 117 AD, Emperor Trajan expanded the Roman Empire to its greatest territorial extent. His reign is noted for military conquests, significant public building projects, and the welfare program known as 'alimenta,' which helped support the poor and orphaned children of Rome.",
  link: "https://en.wikipedia.org/wiki/Trajan",
  index: 98,
};

const CONSTRUCTION_OF_HADRIANS_WALL: EventType = {
  id: "construction-of-hadrians-wall",
  title: "Construction of Hadrian's Wall",
  description:
    "In 122 AD, Emperor Hadrian ordered the construction of Hadrian's Wall, marking the northern boundary of Roman Britain. The wall served as a defensive fortification and a symbol of Roman authority, stretching approximately 73 miles across the northern frontier.",
  link: "https://en.wikipedia.org/wiki/Hadrian's_Wall",
  index: 122,
};

const ANTONINE_PLAGUE: EventType = {
  id: "antonine-plague",
  title: "Antonine Plague",
  description:
    "From 165 to 180 AD, the Antonine Plague, possibly smallpox, devastated the Roman Empire. This epidemic caused widespread mortality, severely impacting the Roman military and economy, and is considered one of the major events that marked the beginning of the empire's decline.",
  link: "https://en.wikipedia.org/wiki/Antonine_Plague",
  index: 165,
};

const REIGN_OF_EMPEROR_MARCUS_AURELIUS: EventType = {
  id: "reign-of-emperor-marcus-aurelius",
  title: "Reign of Emperor Marcus Aurelius",
  description:
    "From 161 to 180 AD, Emperor Marcus Aurelius was known for his philosophical work 'Meditations.' As a Stoic philosopher and ruler, his reign was marked by military conflict, internal stability, and philosophical writings that have influenced Western thought for centuries.",
  link: "https://en.wikipedia.org/wiki/Marcus_Aurelius",
  index: 161,
};

const DEVELOPMENT_OF_SILK_ROAD: EventType = {
  id: "development-of-silk-road",
  title: "Development of the Silk Road",
  description:
    "During the 2nd Century AD, the Silk Road facilitated trade and cultural exchange between the East and West. This network of trade routes connected China, India, Persia, Arabia, Greece, and Rome, significantly impacting the economic and cultural landscapes of these civilizations.",
  link: "https://en.wikipedia.org/wiki/Silk_Road",
  index: 100,
};

export const CENTURY_2_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REIGN_OF_EMPEROR_TRAJAN,
    CONSTRUCTION_OF_HADRIANS_WALL,
    ANTONINE_PLAGUE,
    REIGN_OF_EMPEROR_MARCUS_AURELIUS,
    DEVELOPMENT_OF_SILK_ROAD,
  ],
};
