import { CenturyType, EventType } from "@/types/data";

const CRISIS_OF_THE_THIRD_CENTURY: EventType = {
  id: "crisis-of-the-third-century",
  title: "Crisis of the Third Century",
  description:
    "From 235 to 284 AD, the Roman Empire experienced the Crisis of the Third Century, a period of political instability, economic decline, and military upheaval. Multiple emperors rose and fell in quick succession, facing external invasions, internal rebellions, and severe economic difficulties.",
  link: "https://en.wikipedia.org/wiki/Crisis_of_the_Third_Century",
  index: 235,
};

const SPREAD_OF_MANICHAEISM: EventType = {
  id: "spread-of-manichaeism",
  title: "Spread of Manichaeism",
  description:
    "During the 3rd Century AD, Manichaeism, a syncretic religion founded by the prophet Mani in Persia, spread throughout the Roman and Sassanian Empires. Combining elements of Zoroastrianism, Christianity, and Buddhism, Manichaeism influenced religious thought and attracted followers across diverse regions.",
  link: "https://en.wikipedia.org/wiki/Manichaeism",
  index: 200,
};

const REIGN_OF_EMPEROR_DIOCLETIAN: EventType = {
  id: "reign-of-emperor-diocletian",
  title: "Reign of Emperor Diocletian",
  description:
    "From 284 to 305 AD, Emperor Diocletian implemented significant administrative and military reforms to stabilize the Roman Empire. His reign marked the end of the Crisis of the Third Century and introduced the Tetrarchy system, dividing the empire into four regions for more efficient governance.",
  link: "https://en.wikipedia.org/wiki/Diocletian",
  index: 284,
};

const EDICT_OF_CARACALLA: EventType = {
  id: "edict-of-caracalla",
  title: "Edict of Caracalla",
  description:
    "In 212 AD, the Edict of Caracalla granted Roman citizenship to all free inhabitants of the empire. This significant decree aimed to unify the empire's diverse populations, increasing tax revenues and bolstering the loyalty of subjects across the vast territories of Rome.",
  link: "https://en.wikipedia.org/wiki/Constitutio_Antoniniana",
  index: 212,
};

const PERSECUTION_OF_CHRISTIANS: EventType = {
  id: "persecution-of-christians",
  title: "Persecution of Christians",
  description:
    "Throughout the 3rd Century AD, several waves of intense persecution against Christians occurred, particularly under Emperor Decius and Emperor Diocletian. These persecutions aimed to suppress the growing Christian movement, leading to widespread martyrdom and the strengthening of Christian communities.",
  link: "https://en.wikipedia.org/wiki/Persecution_of_Christians_in_the_Roman_Empire",
  index: 250,
};

export const CENTURY_3_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    CRISIS_OF_THE_THIRD_CENTURY,
    SPREAD_OF_MANICHAEISM,
    REIGN_OF_EMPEROR_DIOCLETIAN,
    EDICT_OF_CARACALLA,
    PERSECUTION_OF_CHRISTIANS,
  ],
};
