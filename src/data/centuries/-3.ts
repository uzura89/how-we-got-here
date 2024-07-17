import { CenturyType, EventType } from "@/types/data";

const REIGN_OF_ASHOKA_THE_GREAT: EventType = {
  id: "reign-of-ashoka-the-great",
  title: "Reign of Ashoka the Great",
  description:
    "Ashoka, emperor of the Maurya Dynasty from approximately 268 to 232 BC, promoted Buddhism and non-violence across his empire. His edicts, carved on pillars and rocks, emphasized moral governance, compassion, and respect for all life, significantly impacting Indian culture and spreading Buddhism.",
  link: "https://en.wikipedia.org/wiki/Ashoka",
  index: -268,
};

const FIRST_PUNIC_WAR: EventType = {
  id: "first-punic-war",
  title: "First Punic War",
  description:
    "From 264 to 241 BC, the First Punic War was the first of three wars between Rome and Carthage. This conflict, primarily a naval war, resulted in Roman control over Sicily and marked the beginning of Rome's expansion beyond the Italian Peninsula.",
  link: "https://en.wikipedia.org/wiki/First_Punic_War",
  index: -264,
};

const DEVELOPMENT_OF_SEPTUAGINT: EventType = {
  id: "development-of-septuagint",
  title: "Development of the Septuagint",
  description:
    "Around 250 BC, the Hebrew Bible was translated into Greek, creating the Septuagint. This translation made the Jewish scriptures accessible to the Hellenistic world and played a crucial role in the spread of Jewish thought and the later development of Christianity.",
  link: "https://en.wikipedia.org/wiki/Septuagint",
  index: -250,
};

const CONSTRUCTION_OF_COLOSSUS_OF_RHODES: EventType = {
  id: "construction-of-colossus-of-rhodes",
  title: "Construction of the Colossus of Rhodes",
  description:
    "Around 280 BC, the Colossus of Rhodes was constructed to celebrate Rhodes' victory over Cyprus. Standing approximately 33 meters high, this bronze statue of the sun god Helios was one of the Seven Wonders of the Ancient World and symbolized the unity and strength of the people of Rhodes.",
  link: "https://en.wikipedia.org/wiki/Colossus_of_Rhodes",
  index: -280,
};

const HELLENISTIC_PERIOD: EventType = {
  id: "hellenistic-period",
  title: "Hellenistic Period",
  description:
    "From 323 to 31 BC, the Hellenistic Period saw the spread of Greek culture across the eastern Mediterranean and Near East following the conquests of Alexander the Great. This era was marked by advancements in science, philosophy, art, and the blending of Greek and local cultures.",
  link: "https://en.wikipedia.org/wiki/Hellenistic_period",
  index: -323,
};

export const CENTURY_3_BCE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    REIGN_OF_ASHOKA_THE_GREAT,
    FIRST_PUNIC_WAR,
    DEVELOPMENT_OF_SEPTUAGINT,
    CONSTRUCTION_OF_COLOSSUS_OF_RHODES,
    HELLENISTIC_PERIOD,
  ],
};
