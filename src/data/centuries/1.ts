import { CenturyType, EventType } from "@/types/data";

const CRUCIFIXION_OF_JESUS_CHRIST: EventType = {
  id: "crucifixion-of-jesus-christ",
  title: "Crucifixion of Jesus Christ",
  description:
    "The crucifixion and resurrection of Jesus Christ, occurring around 30-33 AD, are foundational events for Christianity. These events, commemorated during Easter, are central to Christian belief and have had a profound impact on the development of Western civilization and religious thought.",
  link: "https://en.wikipedia.org/wiki/Crucifixion_of_Jesus",
  index: 30,
};

const REIGN_OF_EMPEROR_AUGUSTUS: EventType = {
  id: "reign-of-emperor-augustus",
  title: "Reign of Emperor Augustus",
  description:
    "From 27 BC to 14 AD, Augustus established the Roman Empire and the Pax Romana, a period of relative peace and stability. His reign transformed Rome with significant administrative, military, and architectural advancements, solidifying his legacy as one of Rome's greatest leaders.",
  link: "https://en.wikipedia.org/wiki/Augustus",
  index: 1,
};

const GREAT_FIRE_OF_ROME: EventType = {
  id: "great-fire-of-rome",
  title: "Great Fire of Rome",
  description:
    "In 64 AD, a massive fire destroyed much of Rome. Emperor Nero's response to the disaster included extensive rebuilding efforts and the first organized persecution of Christians, whom he blamed for the fire. This event significantly affected the history and development of early Christianity.",
  link: "https://en.wikipedia.org/wiki/Great_Fire_of_Rome",
  index: 64,
};

const DESTRUCTION_OF_SECOND_TEMPLE: EventType = {
  id: "destruction-of-second-temple",
  title: "Destruction of the Second Temple",
  description:
    "In 70 AD, the Roman siege of Jerusalem led to the destruction of the Second Temple, a pivotal event in Jewish history. This event marked the end of the Jewish revolt against Roman rule and had lasting impacts on Jewish religious life and identity.",
  link: "https://en.wikipedia.org/wiki/Destruction_of_the_Second_Temple",
  index: 70,
};

const REIGN_OF_EMPEROR_NERO: EventType = {
  id: "reign-of-emperor-nero",
  title: "Reign of Emperor Nero",
  description:
    "From 54 to 68 AD, Emperor Nero's reign was marked by significant political turmoil and tyrannical rule. Known for his persecution of Christians, extravagant lifestyle, and the Great Fire of Rome, Nero's leadership left a controversial and enduring legacy in Roman history.",
  link: "https://en.wikipedia.org/wiki/Nero",
  index: 54,
};

const SPREAD_OF_CHRISTIANITY: EventType = {
  id: "spread-of-christianity",
  title: "Spread of Christianity",
  description:
    "Throughout the 1st Century AD, the apostles and early Christian missionaries spread Christianity throughout the Roman Empire. Their efforts established Christian communities and laid the foundations for the religion's growth, significantly influencing the cultural and spiritual landscape of the ancient world.",
  link: "https://en.wikipedia.org/wiki/Spread_of_Christianity",
  index: 1,
};

export const CENTURY_1_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    CRUCIFIXION_OF_JESUS_CHRIST,
    REIGN_OF_EMPEROR_AUGUSTUS,
    GREAT_FIRE_OF_ROME,
    DESTRUCTION_OF_SECOND_TEMPLE,
    REIGN_OF_EMPEROR_NERO,
    SPREAD_OF_CHRISTIANITY,
  ],
};
