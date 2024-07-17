import { CenturyType, EventType } from "@/types/data";

const RISE_OF_ISLAM: EventType = {
  id: "rise-of-islam",
  title: "Rise of Islam",
  description:
    "From 610 to 632 AD, the prophet Muhammad received revelations that led to the foundation of Islam. These revelations, compiled into the Quran, significantly shaped the religious and political landscape of the Middle East and laid the groundwork for the rapid expansion of the Islamic faith.",
  link: "https://en.wikipedia.org/wiki/Muhammad",
  index: 610,
};

const HIJRA: EventType = {
  id: "hijra",
  title: "Hijra",
  description:
    "In 622 AD, Muhammad's migration from Mecca to Medina, known as the Hijra, marked the beginning of the Islamic calendar. This pivotal event established the first Muslim community and set the stage for the spread of Islam across the Arabian Peninsula.",
  link: "https://en.wikipedia.org/wiki/Hijra_(Islam)",
  index: 622,
};

const CONQUESTS_BY_RASHIDUN_CALIPHATE: EventType = {
  id: "conquests-by-rashidun-caliphate",
  title: "Conquests by the Rashidun Caliphate",
  description:
    "From 632 to 661 AD, the Rashidun Caliphate led early Muslim conquests that rapidly expanded the Islamic Empire across the Middle East, North Africa, and Persia. These conquests facilitated the spread of Islamic culture, religion, and governance, significantly altering the region's dynamics.",
  link: "https://en.wikipedia.org/wiki/Rashidun_Caliphate",
  index: 632,
};

const BATTLE_OF_YARMOUK: EventType = {
  id: "battle-of-yarmouk",
  title: "Battle of Yarmouk",
  description:
    "In 636 AD, the Battle of Yarmouk saw the Rashidun Caliphate decisively defeat the Byzantine Empire, leading to the Muslim conquest of Syria. This victory was crucial in the expansion of the Islamic Empire and marked the decline of Byzantine influence in the region.",
  link: "https://en.wikipedia.org/wiki/Battle_of_Yarmouk",
  index: 636,
};

const FOUNDATION_OF_UMAYYAD_CALIPHATE: EventType = {
  id: "foundation-of-umayyad-caliphate",
  title: "Foundation of the Umayyad Caliphate",
  description:
    "In 661 AD, the Umayyad Caliphate was established by Muawiya I, becoming one of the largest empires in history. The Umayyad Caliphate extended its reach from Spain to India, fostering a period of significant cultural, scientific, and architectural advancements.",
  link: "https://en.wikipedia.org/wiki/Umayyad_Caliphate",
  index: 661,
};

export const CENTURY_7_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    RISE_OF_ISLAM,
    HIJRA,
    CONQUESTS_BY_RASHIDUN_CALIPHATE,
    BATTLE_OF_YARMOUK,
    FOUNDATION_OF_UMAYYAD_CALIPHATE,
  ],
};
