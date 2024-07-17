import { CenturyType, EventType } from "@/types/data";

const SACK_OF_ROME_BY_VISIGOTHS: EventType = {
  id: "sack-of-rome-by-visigoths",
  title: "Sack of Rome by the Visigoths",
  description:
    "In 410 AD, the Visigoths, led by Alaric, sacked Rome, marking a significant event in the decline of the Western Roman Empire. This event symbolized the vulnerability of Rome and the growing power of barbarian groups within the empire's borders.",
  link: "https://en.wikipedia.org/wiki/Sack_of_Rome_(410)",
  index: 410,
};

const FALL_OF_WESTERN_ROMAN_EMPIRE: EventType = {
  id: "fall-of-western-roman-empire",
  title: "Fall of the Western Roman Empire",
  description:
    "In 476 AD, the deposition of the last Roman emperor, Romulus Augustulus, by the Germanic chieftain Odoacer marked the fall of the Western Roman Empire. This event is traditionally considered the end of ancient Rome and the beginning of the Middle Ages in Western Europe.",
  link: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire",
  index: 476,
};

const COUNCIL_OF_CHALCEDON: EventType = {
  id: "council-of-chalcedon",
  title: "Council of Chalcedon",
  description:
    "In 451 AD, the Council of Chalcedon, an ecumenical council, defined the two natures of Christ (divine and human). This council was a significant event in the development of Christian theology and helped to address and resolve key doctrinal disputes within the early Church.",
  link: "https://en.wikipedia.org/wiki/Council_of_Chalcedon",
  index: 451,
};

const REIGN_OF_ATTILA_THE_HUN: EventType = {
  id: "reign-of-attila-the-hun",
  title: "Reign of Attila the Hun",
  description:
    "From approximately 434 to 453 AD, Attila led the Huns in invasions across Europe, posing a significant threat to the Roman Empire. Known as the 'Scourge of God,' Attila's campaigns caused widespread destruction and terror, challenging the stability and security of the Roman territories.",
  link: "https://en.wikipedia.org/wiki/Attila",
  index: 434,
};

const RISE_OF_OSTROGOTHIC_KINGDOM: EventType = {
  id: "rise-of-ostrogothic-kingdom",
  title: "Rise of the Ostrogothic Kingdom",
  description:
    "In 493 AD, Theodoric the Great established the Ostrogothic Kingdom in Italy. This kingdom marked the continuation of Roman traditions under Ostrogothic rule, blending Roman and Germanic cultures and laying the foundations for the future medieval European states.",
  link: "https://en.wikipedia.org/wiki/Ostrogothic_Kingdom",
  index: 493,
};

export const CENTURY_5_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    SACK_OF_ROME_BY_VISIGOTHS,
    FALL_OF_WESTERN_ROMAN_EMPIRE,
    COUNCIL_OF_CHALCEDON,
    REIGN_OF_ATTILA_THE_HUN,
    RISE_OF_OSTROGOTHIC_KINGDOM,
  ],
};
