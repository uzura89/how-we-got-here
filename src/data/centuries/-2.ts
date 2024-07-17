import { CenturyType, EventType } from "@/types/data";

const SECOND_PUNIC_WAR: EventType = {
  id: "second-punic-war",
  title: "Second Punic War",
  description:
    "From 218 to 201 BC, the Second Punic War saw Hannibal's invasion of Italy and the eventual Roman victory. This significant conflict featured famous battles like Cannae and Zama, solidifying Rome's power and influence in the Mediterranean region.",
  link: "https://en.wikipedia.org/wiki/Second_Punic_War",
  index: -218,
};

const MACCABEAN_REVOLT: EventType = {
  id: "maccabean-revolt",
  title: "Maccabean Revolt",
  description:
    "From 167 to 160 BC, the Maccabean Revolt was a Jewish uprising against the Seleucid Empire, leading to the rededication of the Second Temple and the celebration of Hanukkah. This revolt was a crucial moment in Jewish history, emphasizing the struggle for religious freedom and autonomy.",
  link: "https://en.wikipedia.org/wiki/Maccabean_Revolt",
  index: -167,
};

const ESTABLISHMENT_OF_SILK_ROAD: EventType = {
  id: "establishment-of-silk-road",
  title: "Establishment of the Silk Road",
  description:
    "Around 130 BC, the Silk Road was established, connecting China to the Mediterranean and facilitating cultural and economic exchange. This network of trade routes enabled the movement of goods, ideas, and technologies between the East and West, profoundly impacting the civilizations it connected.",
  link: "https://en.wikipedia.org/wiki/Silk_Road",
  index: -130,
};

const REIGN_OF_HAN_WUDI: EventType = {
  id: "reign-of-han-wudi",
  title: "Reign of Han Wudi",
  description:
    "From 141 to 87 BC, Han Emperor Wudi expanded the Chinese empire and promoted Confucianism as the state philosophy. His reign was marked by military conquests, territorial expansion, and significant cultural and economic development in China.",
  link: "https://en.wikipedia.org/wiki/Emperor_Wu_of_Han",
  index: -141,
};

const THIRD_PUNIC_WAR: EventType = {
  id: "third-punic-war",
  title: "Third Punic War",
  description:
    "From 149 to 146 BC, the Third Punic War was the final conflict between Rome and Carthage, resulting in the destruction of Carthage and Roman dominance in the Mediterranean. This war marked the end of Carthaginian power and the beginning of an era of Roman expansion and hegemony.",
  link: "https://en.wikipedia.org/wiki/Third_Punic_War",
  index: -149,
};

export const CENTURY_2_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    SECOND_PUNIC_WAR,
    MACCABEAN_REVOLT,
    ESTABLISHMENT_OF_SILK_ROAD,
    REIGN_OF_HAN_WUDI,
    THIRD_PUNIC_WAR,
  ],
};
