import { CenturyType, EventType } from "@/types/data";

const BATTLE_OF_TOURS: EventType = {
  id: "battle-of-tours",
  title: "Battle of Tours",
  description:
    "In 732 AD, Charles Martel halted the Muslim advance into Western Europe at the Battle of Tours, securing the Frankish Kingdom. This decisive victory is often credited with preserving Christian Europe from Islamic conquest and significantly influencing the future of Western civilization.",
  link: "https://en.wikipedia.org/wiki/Battle_of_Tours",
  index: 732,
};

const ICONOCLASM_CONTROVERSY: EventType = {
  id: "iconoclasm-controversy",
  title: "Iconoclasm Controversy in the Byzantine Empire",
  description:
    "The Iconoclasm Controversy was a religious conflict over the use of icons in worship within the Byzantine Empire. Beginning in the 8th century, this controversy led to significant theological and political changes, including periods of icon destruction and restoration.",
  link: "https://en.wikipedia.org/wiki/Byzantine_Iconoclasm",
  index: 730,
};

const FOUNDATION_OF_ABBASID_CALIPHATE: EventType = {
  id: "foundation-of-abbasid-caliphate",
  title: "Foundation of the Abbasid Caliphate",
  description:
    "In 750 AD, the Abbasid Caliphate overthrew the Umayyad Caliphate and established Baghdad as its capital. This marked the beginning of a golden age of Islamic culture and science, with significant advancements in various fields and a flourishing of intellectual and cultural life.",
  link: "https://en.wikipedia.org/wiki/Abbasid_Caliphate",
  index: 750,
};

const REIGN_OF_CHARLEMAGNE: EventType = {
  id: "reign-of-charlemagne",
  title: "Reign of Charlemagne",
  description:
    "From 768 to 814 AD, Charlemagne expanded the Frankish Empire and was crowned Emperor of the Romans in 800 AD. His reign laid the foundations for the Holy Roman Empire and brought about significant political, cultural, and educational reforms that shaped medieval Europe.",
  link: "https://en.wikipedia.org/wiki/Charlemagne",
  index: 768,
};

const VIKING_RAIDS_BEGIN: EventType = {
  id: "viking-raids-begin",
  title: "Viking Raids Begin",
  description:
    "Norse Viking raids started in the late 8th century, leading to significant political and cultural changes in Europe. These raids, marked by their speed and ferocity, affected many regions, including the British Isles, Frankish territories, and beyond, shaping the medieval landscape.",
  link: "https://en.wikipedia.org/wiki/Viking_Age",
  index: 793,
};

export const CENTURY_8_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    BATTLE_OF_TOURS,
    ICONOCLASM_CONTROVERSY,
    FOUNDATION_OF_ABBASID_CALIPHATE,
    REIGN_OF_CHARLEMAGNE,
    VIKING_RAIDS_BEGIN,
  ],
};
