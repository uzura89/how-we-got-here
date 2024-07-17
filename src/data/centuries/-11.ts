import { CenturyType, EventType } from "@/types/data";

const BEGINNING_OF_DARK_AGES_IN_GREECE: EventType = {
  id: "beginning-of-dark-ages-in-greece",
  title: "Beginning of the Dark Ages in Greece",
  description:
    "Following the collapse of the Mycenaean civilization, Greece entered a period of reduced population and a decline in economic and cultural activity. This era, known as the Greek Dark Ages, saw a loss of literacy and the disappearance of major urban centers, leading to a more isolated and agrarian society.",
  link: "https://en.wikipedia.org/wiki/Greek_Dark_Ages",
  index: -1100,
};

const RISE_OF_NEW_KINGDOMS_IN_LEVANT: EventType = {
  id: "rise-of-new-kingdoms-in-levant",
  title: "Rise of New Kingdoms in the Levant",
  description:
    "Smaller kingdoms in regions like ancient Israel and Philistia began to emerge and grow. These new political entities developed from the remnants of larger Bronze Age states and played significant roles in the regional dynamics of the Near East during this period.",
  link: "https://en.wikipedia.org/wiki/History_of_the_Levant",
  index: -1100,
};

const USE_OF_IRON_IN_WEAPONRY: EventType = {
  id: "use-of-iron-in-weaponry",
  title: "Use of Iron in Weaponry",
  description:
    "The use of iron for weapons became more widespread, marking a significant technological advancement. Iron's durability and availability compared to bronze led to its adoption for tools and weapons, transforming warfare and daily life in various ancient cultures.",
  link: "https://en.wikipedia.org/wiki/Iron_Age",
  index: -1100,
};

const FORMATION_OF_KINGDOM_OF_ISRAEL: EventType = {
  id: "formation-of-kingdom-of-israel",
  title: "Formation of the Kingdom of Israel",
  description:
    "The Kingdom of Israel was established under the rule of Saul, unifying the twelve tribes and creating a centralized monarchy. This unification marked the beginning of a significant historical period for the Israelites, influencing their social, political, and religious structures.",
  link: "https://en.wikipedia.org/wiki/Kingdom_of_Israel_(united_monarchy)",
  index: -1020,
};

const RISE_OF_ZHOU_DYNASTY_IN_CHINA: EventType = {
  id: "rise-of-zhou-dynasty-in-china",
  title: "Rise of Zhou Dynasty in China",
  description:
    "The Zhou Dynasty began, introducing the Mandate of Heaven as a principle of imperial authority. This concept justified the rule of the king or emperor as divinely chosen, setting the foundation for Chinese political philosophy and governance that would last for millennia.",
  link: "https://en.wikipedia.org/wiki/Zhou_dynasty",
  index: -1046,
};

export const CENTURY_11_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    BEGINNING_OF_DARK_AGES_IN_GREECE,
    RISE_OF_NEW_KINGDOMS_IN_LEVANT,
    USE_OF_IRON_IN_WEAPONRY,
    FORMATION_OF_KINGDOM_OF_ISRAEL,
    RISE_OF_ZHOU_DYNASTY_IN_CHINA,
  ],
};
