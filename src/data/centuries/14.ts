import { CenturyType, EventType } from "@/types/data";

const HUNDRED_YEARS_WAR: EventType = {
  id: "hundred-years-war",
  title: "Hundred Years' War",
  description:
    "From 1337 to 1453, the Hundred Years' War was a prolonged conflict between England and France over territorial and dynastic claims. This war significantly influenced medieval European politics, economics, and military tactics, ultimately leading to the rise of strong national identities in both countries.",
  link: "https://en.wikipedia.org/wiki/Hundred_Years'_War",
  index: 1337,
};

const BLACK_DEATH: EventType = {
  id: "black-death",
  title: "Black Death",
  description:
    "From 1347 to 1351, the Black Death was a bubonic plague pandemic that killed an estimated one-third of Europe's population. This devastating event had profound social, economic, and cultural impacts, drastically altering the course of European history.",
  link: "https://en.wikipedia.org/wiki/Black_Death",
  index: 1347,
};

const PEASANTS_REVOLT: EventType = {
  id: "peasants-revolt",
  title: "Peasants' Revolt",
  description:
    "In 1381, the Peasants' Revolt was a major uprising in England against social and economic injustices. Sparked by heavy taxation and political corruption, the revolt highlighted the tensions between the ruling class and the common people, leading to significant social change.",
  link: "https://en.wikipedia.org/wiki/Peasants'_Revolt",
  index: 1381,
};

const RISE_OF_OTTOMAN_EMPIRE: EventType = {
  id: "rise-of-ottoman-empire",
  title: "Rise of the Ottoman Empire",
  description:
    "From 1299 onwards, the Ottomans began their expansion, eventually leading to the conquest of Constantinople in 1453. This rise marked the beginning of a powerful empire that would dominate much of Southeast Europe, Western Asia, and North Africa for centuries.",
  link: "https://en.wikipedia.org/wiki/Ottoman_Empire",
  index: 1299,
};

const DANTE_WRITES_DIVINE_COMEDY: EventType = {
  id: "dante-writes-divine-comedy",
  title: "Dante Alighieri writes 'The Divine Comedy'",
  description:
    "From 1308 to 1320, Dante Alighieri wrote 'The Divine Comedy,' one of the greatest works of world literature. This epic poem depicts Dante's journey through Hell, Purgatory, and Paradise, offering profound insights into medieval theology, philosophy, and culture.",
  link: "https://en.wikipedia.org/wiki/Divine_Comedy",
  index: 1308,
};

export const CENTURY_14_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    HUNDRED_YEARS_WAR,
    BLACK_DEATH,
    PEASANTS_REVOLT,
    RISE_OF_OTTOMAN_EMPIRE,
    DANTE_WRITES_DIVINE_COMEDY,
  ],
};
