import { CenturyType, EventType } from "@/types/data";

const FOURTH_CRUSADE: EventType = {
  id: "fourth-crusade",
  title: "Fourth Crusade",
  description:
    "From 1202 to 1204, the Fourth Crusade was diverted from its original mission and resulted in the sacking of Constantinople. This event deepened the schism between Eastern and Western Christianity and marked a significant and controversial moment in the history of the Crusades.",
  link: "https://en.wikipedia.org/wiki/Fourth_Crusade",
  index: 1202,
};

const MAGNA_CARTA: EventType = {
  id: "magna-carta",
  title: "Magna Carta",
  description:
    "In 1215, King John of England signed the Magna Carta, a document that limited royal power and established principles of legal rights. This landmark charter laid the foundation for constitutional governance and the protection of individual liberties in English law.",
  link: "https://en.wikipedia.org/wiki/Magna_Carta",
  index: 1215,
};

const REIGN_OF_GENGHIS_KHAN: EventType = {
  id: "reign-of-genghis-khan",
  title: "Reign of Genghis Khan",
  description:
    "From 1206 to 1227, Genghis Khan united the Mongol tribes and initiated vast conquests, creating one of the largest empires in history. His military strategies and leadership transformed the Mongol Empire into a dominant force that reshaped the geopolitical landscape of Eurasia.",
  link: "https://en.wikipedia.org/wiki/Genghis_Khan",
  index: 1206,
};

const FOUNDING_OF_UNIVERSITY_OF_OXFORD: EventType = {
  id: "founding-of-university-of-oxford",
  title: "Founding of the University of Oxford",
  description:
    "Around 1249, the University of Oxford was founded and grew to become one of the most prestigious universities in the world. Renowned for its academic excellence, Oxford has played a significant role in the development of education, scholarship, and research.",
  link: "https://en.wikipedia.org/wiki/University_of_Oxford",
  index: 1249,
};

const SICILIAN_VESPERS: EventType = {
  id: "sicilian-vespers",
  title: "Sicilian Vespers",
  description:
    "In 1282, the Sicilian Vespers was a successful rebellion against the rule of the French Angevin king in Sicily. This uprising led to the expulsion of the French and significantly altered the political landscape of the Mediterranean region.",
  link: "https://en.wikipedia.org/wiki/Sicilian_Vespers",
  index: 1282,
};

export const CENTURY_13_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    FOURTH_CRUSADE,
    MAGNA_CARTA,
    REIGN_OF_GENGHIS_KHAN,
    FOUNDING_OF_UNIVERSITY_OF_OXFORD,
    SICILIAN_VESPERS,
  ],
};
