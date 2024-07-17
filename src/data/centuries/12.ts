import { CenturyType, EventType } from "@/types/data";

const SECOND_CRUSADE: EventType = {
  id: "second-crusade",
  title: "Second Crusade",
  description:
    "From 1147 to 1149, the Second Crusade was launched in response to the fall of the County of Edessa. Despite significant efforts, it ended in failure for the European Crusaders, marking one of the less successful crusading campaigns.",
  link: "https://en.wikipedia.org/wiki/Second_Crusade",
  index: 1147,
};

const ESTABLISHMENT_OF_UNIVERSITY_OF_PARIS: EventType = {
  id: "establishment-of-university-of-paris",
  title: "Establishment of the University of Paris",
  description:
    "Around 1150, the University of Paris was established, becoming a leading center of medieval scholarship and education. Known for its theological and philosophical studies, it significantly influenced European intellectual life during the Middle Ages.",
  link: "https://en.wikipedia.org/wiki/University_of_Paris",
  index: 1150,
};

const REIGN_OF_KING_HENRY_II_OF_ENGLAND: EventType = {
  id: "reign-of-king-henry-ii-of-england",
  title: "Reign of King Henry II of England",
  description:
    "From 1154 to 1189, King Henry II of England's reign was marked by significant legal reforms that laid the foundations for English common law. His efforts to strengthen royal justice and administration had a lasting impact on the English legal system.",
  link: "https://en.wikipedia.org/wiki/Henry_II_of_England",
  index: 1154,
};

const CONSTRUCTION_OF_NOTRE_DAME_CATHEDRAL: EventType = {
  id: "construction-of-notre-dame-cathedral",
  title: "Construction of Notre-Dame Cathedral",
  description:
    "Beginning in 1163, the construction of Notre-Dame Cathedral in Paris continued until 1345. One of the most famous Gothic cathedrals in the world, its architectural innovations and artistic decorations have made it a symbol of medieval France and a masterpiece of Gothic architecture.",
  link: "https://en.wikipedia.org/wiki/Notre-Dame_de_Paris",
  index: 1163,
};

const THIRD_CRUSADE: EventType = {
  id: "third-crusade",
  title: "Third Crusade",
  description:
    "From 1189 to 1192, the Third Crusade was led by Richard the Lionheart, Philip II of France, and Frederick Barbarossa. It aimed to recapture Jerusalem but ended in a truce with Saladin, maintaining Muslim control over the Holy City while allowing Christian pilgrimages.",
  link: "https://en.wikipedia.org/wiki/Third_Crusade",
  index: 1189,
};

export const CENTURY_12_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    SECOND_CRUSADE,
    ESTABLISHMENT_OF_UNIVERSITY_OF_PARIS,
    REIGN_OF_KING_HENRY_II_OF_ENGLAND,
    CONSTRUCTION_OF_NOTRE_DAME_CATHEDRAL,
    THIRD_CRUSADE,
  ],
};
