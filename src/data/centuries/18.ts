import { CenturyType, EventType } from "@/types/data";

const AMERICAN_REVOLUTION: EventType = {
  id: "american-revolution",
  title: "American Revolution",
  description:
    "From 1775 to 1783, the American Revolution saw the thirteen American colonies gain independence from Britain, leading to the founding of the United States. This war was a pivotal moment in history, promoting ideals of liberty, democracy, and the formation of a new nation.",
  link: "https://en.wikipedia.org/wiki/American_Revolution",
  index: 1775,
};

const FRENCH_REVOLUTION: EventType = {
  id: "french-revolution",
  title: "French Revolution",
  description:
    "From 1789 to 1799, the French Revolution was a period of radical social and political upheaval in France. It led to the rise of Napoleon Bonaparte, the abolition of the monarchy, and significant changes in French society, influencing the course of world history.",
  link: "https://en.wikipedia.org/wiki/French_Revolution",
  index: 1789,
};

const INDUSTRIAL_REVOLUTION_BEGINS: EventType = {
  id: "industrial-revolution-begins",
  title: "Industrial Revolution Begins",
  description:
    "In the late 18th century, the Industrial Revolution began in Britain, marking a period of major industrialization and technological advancement. This era saw the development of machinery, factories, and innovations in energy and transportation, profoundly transforming economic and social structures.",
  link: "https://en.wikipedia.org/wiki/Industrial_Revolution",
  index: 1760,
};

const ENLIGHTENMENT: EventType = {
  id: "enlightenment",
  title: "Enlightenment",
  description:
    "Throughout the 18th century, the Enlightenment was an intellectual movement emphasizing reason, individualism, and skepticism of traditional authority. Thinkers like Voltaire, Rousseau, and Kant challenged established norms, advocating for freedom, democracy, and scientific inquiry.",
  link: "https://en.wikipedia.org/wiki/Age_of_Enlightenment",
  index: 1700,
};

const SEVEN_YEARS_WAR: EventType = {
  id: "seven-years-war",
  title: "Seven Years' War",
  description:
    "From 1756 to 1763, the Seven Years' War was a global conflict that involved most of the great powers and affected Europe, North America, Central America, the West African coast, India, and the Philippines. This war significantly altered the balance of power and colonial possessions worldwide.",
  link: "https://en.wikipedia.org/wiki/Seven_Years%27_War",
  index: 1756,
};

export const CENTURY_18_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    AMERICAN_REVOLUTION,
    FRENCH_REVOLUTION,
    INDUSTRIAL_REVOLUTION_BEGINS,
    ENLIGHTENMENT,
    SEVEN_YEARS_WAR,
  ],
};
