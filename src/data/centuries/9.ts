import { CenturyType, EventType } from "@/types/data";

const CORONATION_OF_CHARLEMAGNE: EventType = {
  id: "coronation-of-charlemagne",
  title: "Coronation of Charlemagne as Holy Roman Emperor",
  description:
    "In 800 AD, Charlemagne was crowned as Holy Roman Emperor by Pope Leo III, marking the revival of the Western Roman Empire under the Holy Roman Empire. This event symbolized the fusion of Roman, Christian, and Germanic elements and significantly influenced the political and cultural development of medieval Europe.",
  link: "https://en.wikipedia.org/wiki/Charlemagne",
  index: 800,
};

const TREATY_OF_VERDUN: EventType = {
  id: "treaty-of-verdun",
  title: "Treaty of Verdun",
  description:
    "In 843 AD, the Treaty of Verdun divided the Carolingian Empire into three kingdoms, shaping the future political landscape of Europe. This treaty marked the end of the unified empire created by Charlemagne and laid the foundations for the modern nations of France and Germany.",
  link: "https://en.wikipedia.org/wiki/Treaty_of_Verdun",
  index: 843,
};

const VIKING_EXPANSION_AND_SETTLEMENTS: EventType = {
  id: "viking-expansion-and-settlements",
  title: "Viking Expansion and Settlements",
  description:
    "During the 9th century, Viking explorers and settlers established colonies in Iceland, Greenland, and parts of the British Isles. These Norse seafarers significantly impacted the political and cultural landscapes of the regions they settled, leaving a lasting legacy on European history.",
  link: "https://en.wikipedia.org/wiki/Viking_expansion",
  index: 850,
};

const GOLDEN_AGE_OF_BAGHDAD: EventType = {
  id: "golden-age-of-baghdad",
  title: "Golden Age of Baghdad",
  description:
    "During the 9th century, the Abbasid Caliphate's capital, Baghdad, became a center of learning and culture, contributing significantly to science, mathematics, and literature. The city's intellectual and cultural achievements during this period had a profound impact on the Islamic world and beyond.",
  link: "https://en.wikipedia.org/wiki/Baghdad",
  index: 830,
};

const REIGN_OF_ALFRED_THE_GREAT: EventType = {
  id: "reign-of-alfred-the-great",
  title: "Reign of Alfred the Great",
  description:
    "From 871 to 899 AD, Alfred the Great defended England against Viking invasions and initiated significant legal and educational reforms. His efforts to strengthen his kingdom, promote learning, and codify laws established him as one of the most revered monarchs in English history.",
  link: "https://en.wikipedia.org/wiki/Alfred_the_Great",
  index: 871,
};

export const CENTURY_9_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    CORONATION_OF_CHARLEMAGNE,
    TREATY_OF_VERDUN,
    VIKING_EXPANSION_AND_SETTLEMENTS,
    GOLDEN_AGE_OF_BAGHDAD,
    REIGN_OF_ALFRED_THE_GREAT,
  ],
};
