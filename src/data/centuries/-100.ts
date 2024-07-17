import { CenturyType, EventType } from "@/types/data";

const INVENTION_OF_AGRICULTURE: EventType = {
  id: "invention-of-agriculture",
  title: "Invention of Agriculture",
  description:
    "The transition from nomadic hunter-gathering to settled agricultural communities marked a fundamental shift in human society, enabling population growth and settled life.",
  link: "https://en.wikipedia.org/wiki/Neolithic_Revolution",
  index: -8000,
};

const DOMESTICATION_OF_ANIMALS: EventType = {
  id: "domestication-of-animals",
  title: "Domestication of Animals",
  description:
    "The domestication of animals like sheep, goats, and cattle, which began around 9000 BC, was crucial for stable food sources and the development of agricultural practices.",
  link: "https://en.wikipedia.org/wiki/Domestication_of_animals",
  index: -9000,
};

const DEVELOPMENT_OF_POTTERY: EventType = {
  id: "development-of-pottery",
  title: "Development of Pottery",
  description:
    "Around 7000 BC, the advent of pottery revolutionized the storage and transport of goods, significantly impacting the daily life and trade of Neolithic communities.",
  link: "https://en.wikipedia.org/wiki/Pottery#Prehistoric_pottery",
  index: -7000,
};

const ESTABLISHMENT_OF_PERMANENT_SETTLEMENTS: EventType = {
  id: "establishment-of-permanent-settlements",
  title: "Establishment of Permanent Settlements",
  description:
    "The establishment of permanent settlements like Çatalhöyük around 7500 BC highlights the shift towards complex societies with advanced social structures.",
  link: "https://en.wikipedia.org/wiki/%C3%87atalh%C3%B6y%C3%BCk",
  index: -7500,
};

export const CENTURY_100_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    INVENTION_OF_AGRICULTURE,
    DOMESTICATION_OF_ANIMALS,
    DEVELOPMENT_OF_POTTERY,
    ESTABLISHMENT_OF_PERMANENT_SETTLEMENTS,
  ],
};
