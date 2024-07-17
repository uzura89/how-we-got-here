import { CenturyType, EventType } from "@/types/data";

const REFORMS_OF_SOLON_IN_ATHENS: EventType = {
  id: "reforms-of-solon-in-athens",
  title: "Reforms of Solon in Athens",
  description:
    "In 594 BC, Solon implemented crucial political and economic reforms, laying the groundwork for Athenian democracy. His reforms addressed economic disparity, debt slavery, and political participation, significantly influencing the development of democratic principles in ancient Greece.",
  link: "https://en.wikipedia.org/wiki/Solon",
  index: -594,
};

const BUDDHAS_ENLIGHTENMENT: EventType = {
  id: "buddhas-enlightenment",
  title: "Buddha's Enlightenment",
  description:
    "Around 528 BC, Siddhartha Gautama, known as Buddha, achieved enlightenment, founding Buddhism and influencing spiritual practices across Asia. His teachings on suffering, karma, and the path to nirvana have had a profound impact on spiritual and philosophical traditions worldwide.",
  link: "https://en.wikipedia.org/wiki/Gautama_Buddha",
  index: -528,
};

const TEACHINGS_OF_CONFUCIUS: EventType = {
  id: "teachings-of-confucius",
  title: "Teachings of Confucius",
  description:
    "Between 551 and 479 BC, Confucius established Confucianism, which profoundly impacted Chinese culture and governance. His teachings emphasized moral integrity, filial piety, and social harmony, shaping Chinese thought and societal structures for centuries.",
  link: "https://en.wikipedia.org/wiki/Confucius",
  index: -551,
};

const RISE_OF_PERSIAN_EMPIRE: EventType = {
  id: "rise-of-persian-empire",
  title: "Rise of the Persian Empire",
  description:
    "Around 550 BC, Cyrus the Great unified the Medes and Persians, establishing the Achaemenid Empire. This empire became one of the largest and most influential in history, known for its administrative innovations, cultural diversity, and monumental architecture.",
  link: "https://en.wikipedia.org/wiki/Achaemenid_Empire",
  index: -550,
};

const CONSTRUCTION_OF_HANGING_GARDENS_OF_BABYLON: EventType = {
  id: "construction-of-hanging-gardens-of-babylon",
  title: "Construction of the Hanging Gardens of Babylon",
  description:
    "Attributed to Nebuchadnezzar II between 600 and 560 BC, the Hanging Gardens of Babylon are one of the Seven Wonders of the Ancient World. These legendary terraced gardens were reputedly built to please the king's homesick wife and showcased advanced engineering and lush vegetation.",
  link: "https://en.wikipedia.org/wiki/Hanging_Gardens_of_Babylon",
  index: -600,
};

export const CENTURY_6_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REFORMS_OF_SOLON_IN_ATHENS,
    BUDDHAS_ENLIGHTENMENT,
    TEACHINGS_OF_CONFUCIUS,
    RISE_OF_PERSIAN_EMPIRE,
    CONSTRUCTION_OF_HANGING_GARDENS_OF_BABYLON,
  ],
};
