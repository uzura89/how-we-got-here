import { CenturyType, EventType } from "@/types/data";

const FORMATION_OF_HOLY_ROMAN_EMPIRE: EventType = {
  id: "formation-of-holy-roman-empire",
  title: "Formation of the Holy Roman Empire",
  description:
    "In 962 AD, Otto I was crowned Holy Roman Emperor, solidifying the relationship between the Germanic states and the papacy. This event marked the beginning of the Holy Roman Empire, a political entity that played a crucial role in European history for centuries.",
  link: "https://en.wikipedia.org/wiki/Holy_Roman_Empire",
  index: 962,
};

const CHRISTIANIZATION_OF_EASTERN_EUROPE: EventType = {
  id: "christianization-of-eastern-europe",
  title: "Christianization of Eastern Europe",
  description:
    "During the 10th century, the spread of Christianity to Poland, Hungary, and the Kievan Rus significantly shaped the religious landscape of Eastern Europe. The adoption of Christianity by these regions had lasting cultural, political, and social impacts.",
  link: "https://en.wikipedia.org/wiki/Christianization_of_Eastern_Europe",
  index: 950,
};

const REIGN_OF_BASIL_II: EventType = {
  id: "reign-of-basil-ii",
  title: "Reign of Basil II",
  description:
    "From 976 to 1025 AD, Basil II, known as the 'Bulgar Slayer,' expanded and consolidated the Byzantine Empire. His military campaigns and administrative reforms strengthened the empire, and his reign is often considered one of the most successful in Byzantine history.",
  link: "https://en.wikipedia.org/wiki/Basil_II",
  index: 976,
};

const RISE_OF_FATIMID_CALIPHATE: EventType = {
  id: "rise-of-fatimid-caliphate",
  title: "Rise of the Fatimid Caliphate",
  description:
    "In 909 AD, the Fatimid Caliphate was established in North Africa, becoming a major political and religious power in the Islamic world. The Fatimids, who claimed descent from Fatimah, the daughter of Muhammad, expanded their influence across North Africa, Egypt, and the Levant.",
  link: "https://en.wikipedia.org/wiki/Fatimid_Caliphate",
  index: 909,
};

const CLUNY_ABBEY_REFORM_MOVEMENT: EventType = {
  id: "cluny-abbey-reform-movement",
  title: "Cluny Abbey Reform Movement",
  description:
    "The establishment of Cluny Abbey in France initiated a monastic reform movement that emphasized religious piety and independence from secular authorities. This movement, beginning in 910 AD, sought to restore the Benedictine rule and had a profound influence on the medieval Church.",
  link: "https://en.wikipedia.org/wiki/Cluny_Abbey",
  index: 910,
};

export const CENTURY_10_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    FORMATION_OF_HOLY_ROMAN_EMPIRE,
    CHRISTIANIZATION_OF_EASTERN_EUROPE,
    REIGN_OF_BASIL_II,
    RISE_OF_FATIMID_CALIPHATE,
    CLUNY_ABBEY_REFORM_MOVEMENT,
  ],
};
