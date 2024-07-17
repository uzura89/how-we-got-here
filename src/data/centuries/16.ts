import { CenturyType, EventType } from "@/types/data";

const PROTESTANT_REFORMATION: EventType = {
  id: "protestant-reformation",
  title: "Protestant Reformation",
  description:
    "In 1517, Martin Luther's 95 Theses sparked the Protestant Reformation, a religious movement that led to the division of Christianity. This movement challenged the authority of the Catholic Church, resulting in the formation of various Protestant denominations and significant religious, political, and cultural changes across Europe.",
  link: "https://en.wikipedia.org/wiki/Protestant_Reformation",
  index: 1517,
};

const SPANISH_CONQUEST_OF_AZTEC_EMPIRE: EventType = {
  id: "spanish-conquest-of-aztec-empire",
  title: "Spanish Conquest of the Aztec Empire",
  description:
    "From 1519 to 1521, the Spanish Conquest of the Aztec Empire was led by Hernán Cortés. The Spanish defeated the Aztecs and established control over Mexico, leading to the colonization of the Americas and significant cultural, demographic, and economic transformations.",
  link: "https://en.wikipedia.org/wiki/Spanish_conquest_of_the_Aztec_Empire",
  index: 1519,
};

const REIGN_OF_ELIZABETH_I: EventType = {
  id: "reign-of-elizabeth-i",
  title: "Reign of Elizabeth I of England",
  description:
    "From 1558 to 1603, Elizabeth I's reign saw the defeat of the Spanish Armada and the flourishing of the English Renaissance. Her leadership brought relative stability and prosperity to England, fostering advancements in the arts, exploration, and literature.",
  link: "https://en.wikipedia.org/wiki/Elizabeth_I",
  index: 1558,
};

const SCIENTIFIC_REVOLUTION_BEGINS: EventType = {
  id: "scientific-revolution-begins",
  title: "Scientific Revolution Begins",
  description:
    "During the 16th Century, the Scientific Revolution began, marked by major advancements in science. Pioneering works by scientists like Copernicus, Galileo, and Kepler challenged traditional views and laid the foundations for modern science, transforming our understanding of the natural world.",
  link: "https://en.wikipedia.org/wiki/Scientific_Revolution",
  index: 1500,
};

const COUNCIL_OF_TRENT: EventType = {
  id: "council-of-trent",
  title: "Council of Trent",
  description:
    "From 1545 to 1563, the Council of Trent was a major part of the Counter-Reformation. It addressed abuses within the Catholic Church and clarified Catholic doctrine, leading to significant reforms that aimed to revitalize the Church and counter the spread of Protestantism.",
  link: "https://en.wikipedia.org/wiki/Council_of_Trent",
  index: 1545,
};

export const CENTURY_16_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    PROTESTANT_REFORMATION,
    SPANISH_CONQUEST_OF_AZTEC_EMPIRE,
    REIGN_OF_ELIZABETH_I,
    SCIENTIFIC_REVOLUTION_BEGINS,
    COUNCIL_OF_TRENT,
  ],
};
