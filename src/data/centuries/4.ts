import { CenturyType, EventType } from "@/types/data";

const CONVERSION_OF_CONSTANTINE: EventType = {
  id: "conversion-of-constantine",
  title: "Conversion of Constantine",
  description:
    "In 312 AD, Emperor Constantine converted to Christianity, leading to the religion's legalization in the Roman Empire. His conversion marked a significant turning point for Christianity, contributing to its spread and eventual dominance in Europe and the Mediterranean.",
  link: "https://en.wikipedia.org/wiki/Constantine_the_Great_and_Christianity",
  index: 312,
};

const COUNCIL_OF_NICAEA: EventType = {
  id: "council-of-nicaea",
  title: "Council of Nicaea",
  description:
    "In 325 AD, the first ecumenical council of the Christian Church, known as the Council of Nicaea, was convened. This council resulted in the Nicene Creed, a statement of Christian faith that addressed theological disputes and sought to unify the doctrine of the early Christian Church.",
  link: "https://en.wikipedia.org/wiki/First_Council_of_Nicaea",
  index: 325,
};

const DIVISION_OF_ROMAN_EMPIRE: EventType = {
  id: "division-of-roman-empire",
  title: "Division of the Roman Empire",
  description:
    "In 395 AD, the Roman Empire was permanently split into the Western Roman Empire and the Eastern Roman Empire (Byzantine Empire). This division marked a significant administrative and cultural shift, leading to distinct historical trajectories for the two regions.",
  link: "https://en.wikipedia.org/wiki/Division_of_the_Roman_Empire",
  index: 395,
};

const CONSTRUCTION_OF_CONSTANTINOPLE: EventType = {
  id: "construction-of-constantinople",
  title: "Construction of Constantinople",
  description:
    "In 330 AD, Emperor Constantine founded Constantinople (modern-day Istanbul) as the new capital of the Roman Empire. The city became a major center of trade, culture, and political power, playing a crucial role in the history of both the Roman and Byzantine Empires.",
  link: "https://en.wikipedia.org/wiki/Constantinople",
  index: 330,
};

const GOTHIC_WAR: EventType = {
  id: "gothic-war",
  title: "Gothic War",
  description:
    "From 376 to 382 AD, the Gothic War involved a series of conflicts between the Roman Empire and Gothic tribes, culminating in the Battle of Adrianople. This conflict exposed the vulnerabilities of the Roman military and contributed to the eventual decline of the Western Roman Empire.",
  link: "https://en.wikipedia.org/wiki/Gothic_War_(376–382)",
  index: 376,
};

export const CENTURY_4_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    CONVERSION_OF_CONSTANTINE,
    COUNCIL_OF_NICAEA,
    DIVISION_OF_ROMAN_EMPIRE,
    CONSTRUCTION_OF_CONSTANTINOPLE,
    GOTHIC_WAR,
  ],
};
