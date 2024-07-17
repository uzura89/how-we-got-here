import { CenturyType, EventType } from "@/types/data";

const PERSIAN_WARS: EventType = {
  id: "persian-wars",
  title: "Persian Wars",
  description:
    "From 499 to 449 BC, a series of conflicts known as the Persian Wars took place between the Greek city-states and the Persian Empire. The eventual Greek victory, highlighted by battles such as Marathon and Salamis, led to the rise of Athens as a major power and the establishment of the Delian League.",
  link: "https://en.wikipedia.org/wiki/Greco-Persian_Wars",
  index: -499,
};

const GOLDEN_AGE_OF_ATHENS: EventType = {
  id: "golden-age-of-athens",
  title: "Golden Age of Athens",
  description:
    "From approximately 480 to 404 BC, Athens experienced a period of artistic, cultural, and intellectual flourishing known as the Golden Age of Athens. Under the leadership of Pericles, Athens became the cultural and intellectual center of the ancient world, producing significant advancements in art, drama, philosophy, and democracy.",
  link: "https://en.wikipedia.org/wiki/Golden_Age_of_Athens",
  index: -480,
};

const REIGN_OF_DARIUS_I_OF_PERSIA: EventType = {
  id: "reign-of-darius-i-of-persia",
  title: "Reign of Darius I of Persia",
  description:
    "Darius I, who reigned from 522 to 486 BC, expanded the Persian Empire and implemented significant administrative reforms. His reign is noted for the consolidation of the empire, the construction of the Royal Road, and the establishment of a complex system of taxation and governance.",
  link: "https://en.wikipedia.org/wiki/Darius_the_Great",
  index: -522,
};

const FOUNDATION_OF_ROMAN_REPUBLIC: EventType = {
  id: "foundation-of-roman-republic",
  title: "Foundation of the Roman Republic",
  description:
    "In 509 BC, the Roman Kingdom was replaced by the Roman Republic, laying the foundations for Roman law and governance. The establishment of the Republic marked the beginning of a new era in Roman history, characterized by a mixed constitution and the development of key legal and political institutions.",
  link: "https://en.wikipedia.org/wiki/Roman_Republic",
  index: -509,
};

const TEACHINGS_OF_SOCRATES: EventType = {
  id: "teachings-of-socrates",
  title: "Teachings of Socrates",
  description:
    "Around 470 to 399 BC, Socrates' philosophical teachings laid the groundwork for Western philosophy. His method of inquiry, known as the Socratic method, and his focus on ethics, virtue, and the pursuit of knowledge profoundly influenced his student Plato and subsequent philosophical traditions.",
  link: "https://en.wikipedia.org/wiki/Socrates",
  index: -470,
};

export const CENTURY_5_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    PERSIAN_WARS,
    GOLDEN_AGE_OF_ATHENS,
    REIGN_OF_DARIUS_I_OF_PERSIA,
    FOUNDATION_OF_ROMAN_REPUBLIC,
    TEACHINGS_OF_SOCRATES,
  ],
};
