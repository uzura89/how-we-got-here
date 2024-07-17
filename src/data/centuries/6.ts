import { CenturyType, EventType } from "@/types/data";

const REIGN_OF_JUSTINIAN_I: EventType = {
  id: "reign-of-justinian-i",
  title: "Reign of Justinian I",
  description:
    "From 527 to 565 AD, Emperor Justinian I sought to restore the Roman Empire, resulting in the reconquest of parts of the Western Empire and the construction of the Hagia Sophia. His reign is marked by ambitious military campaigns, architectural achievements, and significant legal reforms.",
  link: "https://en.wikipedia.org/wiki/Justinian_I",
  index: 527,
};

const PLAGUE_OF_JUSTINIAN: EventType = {
  id: "plague-of-justinian",
  title: "Plague of Justinian",
  description:
    "The Plague of Justinian, occurring from 541 to 542 AD, was a devastating pandemic that significantly weakened the Byzantine Empire. Thought to be the first recorded outbreak of the bubonic plague, it caused widespread mortality and economic turmoil, affecting the empire's stability and power.",
  link: "https://en.wikipedia.org/wiki/Plague_of_Justinian",
  index: 541,
};

const CODE_OF_JUSTINIAN: EventType = {
  id: "code-of-justinian",
  title: "Code of Justinian (Corpus Juris Civilis)",
  description:
    "Commissioned by Emperor Justinian, the Corpus Juris Civilis, or Code of Justinian, was a comprehensive codification of Roman law. This legal collection, completed between 529 and 534 AD, served as the foundation of legal systems in many European countries and significantly influenced Western legal tradition.",
  link: "https://en.wikipedia.org/wiki/Corpus_Juris_Civilis",
  index: 529,
};

const FALL_OF_VANDAL_KINGDOM: EventType = {
  id: "fall-of-vandal-kingdom",
  title: "Fall of the Vandal Kingdom",
  description:
    "In 534 AD, the Byzantine Empire conquered the Vandal Kingdom in North Africa. This conquest, led by General Belisarius, was part of Emperor Justinian's efforts to reclaim former Roman territories and marked the end of the Vandal control in the region.",
  link: "https://en.wikipedia.org/wiki/Vandal_Kingdom",
  index: 534,
};

const RISE_OF_SASSANIAN_EMPIRE: EventType = {
  id: "rise-of-sassanian-empire",
  title: "Rise of the Sassanian Empire",
  description:
    "During the 6th Century AD, the Sassanian Empire in Persia became a dominant power, frequently clashing with the Byzantine Empire. The Sassanians, known for their military prowess, cultural achievements, and administrative sophistication, played a crucial role in the geopolitical dynamics of the period.",
  link: "https://en.wikipedia.org/wiki/Sasanian_Empire",
  index: 500,
};

export const CENTURY_6_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REIGN_OF_JUSTINIAN_I,
    PLAGUE_OF_JUSTINIAN,
    CODE_OF_JUSTINIAN,
    FALL_OF_VANDAL_KINGDOM,
    RISE_OF_SASSANIAN_EMPIRE,
  ],
};
