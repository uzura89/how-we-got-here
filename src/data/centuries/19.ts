import { CenturyType, EventType } from "@/types/data";

const NAPOLEONIC_WARS: EventType = {
  id: "napoleonic-wars",
  title: "Napoleonic Wars",
  description:
    "From 1803 to 1815, the Napoleonic Wars were a series of conflicts involving Napoleon Bonaparte's French Empire and various opposing coalitions. These wars significantly altered the political landscape of Europe, leading to widespread reforms and the eventual fall of Napoleon.",
  link: "https://en.wikipedia.org/wiki/Napoleonic_Wars",
  index: 1803,
};

const AMERICAN_CIVIL_WAR: EventType = {
  id: "american-civil-war",
  title: "American Civil War",
  description:
    "From 1861 to 1865, the American Civil War was a conflict between the Northern states (Union) and Southern states (Confederacy) over issues including states' rights and slavery. The war resulted in the preservation of the Union and the abolition of slavery in the United States.",
  link: "https://en.wikipedia.org/wiki/American_Civil_War",
  index: 1861,
};

const INDUSTRIAL_REVOLUTION_CONTINUES: EventType = {
  id: "industrial-revolution-continues",
  title: "Industrial Revolution Continues",
  description:
    "Throughout the 19th century, the Industrial Revolution continued with significant advancements in technology, transportation, and industry. Innovations such as the steam engine, railways, and telegraph transformed societies worldwide, leading to urbanization and economic growth.",
  link: "https://en.wikipedia.org/wiki/Industrial_Revolution",
  index: 1800,
};

const UNIFICATION_OF_GERMANY: EventType = {
  id: "unification-of-germany",
  title: "Unification of Germany",
  description:
    "In 1871, Otto von Bismarck led the unification of various German states into the German Empire. This unification marked the emergence of Germany as a major European power and significantly altered the balance of power in Europe.",
  link: "https://en.wikipedia.org/wiki/Unification_of_Germany",
  index: 1871,
};

const ABOLITION_OF_SLAVERY: EventType = {
  id: "abolition-of-slavery",
  title: "Abolition of Slavery",
  description:
    "Throughout the 19th century, the movement to end slavery gained momentum, leading to its abolition in the British Empire in 1833 and the United States in 1865. These efforts marked significant steps towards human rights and equality, profoundly impacting societies worldwide.",
  link: "https://en.wikipedia.org/wiki/Abolition_of_slavery",
  index: 1833,
};

export const CENTURY_19_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    NAPOLEONIC_WARS,
    AMERICAN_CIVIL_WAR,
    INDUSTRIAL_REVOLUTION_CONTINUES,
    UNIFICATION_OF_GERMANY,
    ABOLITION_OF_SLAVERY,
  ],
};
