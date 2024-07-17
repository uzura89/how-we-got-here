import { CenturyType, EventType } from "@/types/data";

const NORMAN_CONQUEST_OF_ENGLAND: EventType = {
  id: "norman-conquest-of-england",
  title: "Norman Conquest of England",
  description:
    "In 1066, William the Conqueror defeated King Harold II at the Battle of Hastings, establishing Norman rule in England. This conquest significantly influenced English culture, language, and governance, leading to profound changes in the medieval English society.",
  link: "https://en.wikipedia.org/wiki/Norman_Conquest",
  index: 1066,
};

const INVESTITURE_CONTROVERSY: EventType = {
  id: "investiture-controversy",
  title: "Investiture Controversy",
  description:
    "From 1075 to 1122, the Investiture Controversy was a conflict between the papacy and secular rulers over the appointment of church officials. This struggle had long-term implications for church-state relations and significantly influenced the development of the medieval European political landscape.",
  link: "https://en.wikipedia.org/wiki/Investiture_Controversy",
  index: 1075,
};

const FIRST_CRUSADE: EventType = {
  id: "first-crusade",
  title: "First Crusade",
  description:
    "Initiated by Pope Urban II, the First Crusade (1096-1099) was a military expedition by European Christians to reclaim the Holy Land. The crusaders' efforts resulted in the capture of Jerusalem, establishing a series of Crusader states and significantly impacting Christian-Muslim relations.",
  link: "https://en.wikipedia.org/wiki/First_Crusade",
  index: 1096,
};

const FOUNDATION_OF_UNIVERSITY_OF_BOLOGNA: EventType = {
  id: "foundation-of-university-of-bologna",
  title: "Foundation of the University of Bologna",
  description:
    "Founded in 1088, the University of Bologna is recognized as the oldest university in continuous operation. It became a model for higher education in Europe, significantly influencing the development of universities and academic traditions throughout the continent.",
  link: "https://en.wikipedia.org/wiki/University_of_Bologna",
  index: 1088,
};

const REIGN_OF_EMPEROR_HENRY_IV: EventType = {
  id: "reign-of-emperor-henry-iv",
  title: "Reign of Emperor Henry IV",
  description:
    "From 1056 to 1106, Emperor Henry IV's reign was marked by significant conflicts with the papacy during the Investiture Controversy. His struggles with church authority and efforts to consolidate imperial power were pivotal events in medieval history.",
  link: "https://en.wikipedia.org/wiki/Henry_IV,_Holy_Roman_Emperor",
  index: 1056,
};

export const CENTURY_11_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    NORMAN_CONQUEST_OF_ENGLAND,
    INVESTITURE_CONTROVERSY,
    FIRST_CRUSADE,
    FOUNDATION_OF_UNIVERSITY_OF_BOLOGNA,
    REIGN_OF_EMPEROR_HENRY_IV,
  ],
};
