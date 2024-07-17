import { CenturyType, EventType } from "@/types/data";

const FALL_OF_CONSTANTINOPLE: EventType = {
  id: "fall-of-constantinople",
  title: "Fall of Constantinople",
  description:
    "In 1453, the Ottoman Empire captured Constantinople, marking the end of the Byzantine Empire. This event was a significant turning point in history, leading to the rise of Ottoman power and the transformation of the city into Istanbul, a major center of Islamic culture and influence.",
  link: "https://en.wikipedia.org/wiki/Fall_of_Constantinople",
  index: 1453,
};

const INVENTION_OF_PRINTING_PRESS: EventType = {
  id: "invention-of-printing-press",
  title: "Invention of the Printing Press",
  description:
    "Around 1440, Johannes Gutenberg's invention of the printing press revolutionized the dissemination of knowledge. This innovation made books more accessible, spurred the spread of information, and played a crucial role in the development of the Renaissance, Reformation, and Scientific Revolution.",
  link: "https://en.wikipedia.org/wiki/Printing_press",
  index: 1440,
};

const RECONQUISTA_AND_FALL_OF_GRANADA: EventType = {
  id: "reconquista-and-fall-of-granada",
  title: "Reconquista and the Fall of Granada",
  description:
    "In 1492, the completion of the Reconquista ended Muslim rule in Spain with the fall of Granada. This event marked the consolidation of Christian kingdoms in Spain and the end of centuries of Islamic presence, significantly shaping the religious and cultural landscape of the Iberian Peninsula.",
  link: "https://en.wikipedia.org/wiki/Reconquista",
  index: 1492,
};

const COLUMBUS_FIRST_VOYAGE: EventType = {
  id: "columbus-first-voyage",
  title: "Christopher Columbus' First Voyage",
  description:
    "In 1492, Christopher Columbus' expedition led to the European discovery of the Americas. Sponsored by Spain, his voyage across the Atlantic opened the way for the widespread exploration and colonization of the New World, profoundly impacting global history.",
  link: "https://en.wikipedia.org/wiki/Christopher_Columbus",
  index: 1492,
};

const WARS_OF_THE_ROSES: EventType = {
  id: "wars-of-the-roses",
  title: "Wars of the Roses",
  description:
    "From 1455 to 1487, the Wars of the Roses were a series of civil wars for control of the English throne between the houses of Lancaster and York. These conflicts led to significant political upheaval, ultimately resulting in the rise of the Tudor dynasty.",
  link: "https://en.wikipedia.org/wiki/Wars_of_the_Roses",
  index: 1455,
};

export const CENTURY_15_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    FALL_OF_CONSTANTINOPLE,
    INVENTION_OF_PRINTING_PRESS,
    RECONQUISTA_AND_FALL_OF_GRANADA,
    COLUMBUS_FIRST_VOYAGE,
    WARS_OF_THE_ROSES,
  ],
};
