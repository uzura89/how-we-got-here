import { CenturyType, EventType } from "@/types/data";

const REIGN_OF_ALEXANDER_THE_GREAT: EventType = {
  id: "reign-of-alexander-the-great",
  title: "Reign of Alexander the Great",
  description:
    "From 336 to 323 BC, Alexander the Great's conquests spread Greek culture across the known world, initiating the Hellenistic Era. His empire extended from Greece to Egypt and into northwest India, blending diverse cultures and fostering the exchange of ideas, art, and science.",
  link: "https://en.wikipedia.org/wiki/Alexander_the_Great",
  index: -336,
};

const DEVELOPMENT_OF_STOICISM: EventType = {
  id: "development-of-stoicism",
  title: "Development of Stoicism",
  description:
    "Around 300 BC, Zeno of Citium founded Stoicism, which became a major philosophical school in Greece and Rome. Stoicism taught the development of self-control and fortitude as a means to overcome destructive emotions, influencing a wide range of subsequent philosophical and ethical traditions.",
  link: "https://en.wikipedia.org/wiki/Stoicism",
  index: -300,
};

const CONSTRUCTION_OF_GREAT_WALL_OF_CHINA: EventType = {
  id: "construction-of-great-wall-of-china",
  title: "Construction of the Great Wall of China",
  description:
    "The first sections of the Great Wall were built under the Qin Dynasty around 221 BC. This monumental construction project aimed to protect the Chinese states from northern invasions, showcasing the engineering prowess and organizational capabilities of early Chinese civilization.",
  link: "https://en.wikipedia.org/wiki/Great_Wall_of_China",
  index: -221,
};

const FOUNDATION_OF_LIBRARY_OF_ALEXANDRIA: EventType = {
  id: "foundation-of-library-of-alexandria",
  title: "Foundation of the Library of Alexandria",
  description:
    "Around 295 BC, the Library of Alexandria was founded and became a major center of learning and scholarship in the ancient world. It housed countless scrolls and attracted scholars from various cultures, contributing significantly to the preservation and advancement of knowledge.",
  link: "https://en.wikipedia.org/wiki/Library_of_Alexandria",
  index: -295,
};

const DEATH_OF_SOCRATES: EventType = {
  id: "death-of-socrates",
  title: "Death of Socrates",
  description:
    "In 399 BC, Socrates was sentenced to death, marking a significant event in the history of philosophy. His trial and execution for impiety and corrupting the youth of Athens have been central to discussions on ethics, justice, and the role of the philosopher in society.",
  link: "https://en.wikipedia.org/wiki/Socrates",
  index: -399,
};

export const CENTURY_4_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REIGN_OF_ALEXANDER_THE_GREAT,
    DEVELOPMENT_OF_STOICISM,
    CONSTRUCTION_OF_GREAT_WALL_OF_CHINA,
    FOUNDATION_OF_LIBRARY_OF_ALEXANDRIA,
    DEATH_OF_SOCRATES,
  ],
};
