import { CenturyType, EventType } from "@/types/data";

const WORLD_WAR_I: EventType = {
  id: "world-war-i",
  title: "World War I",
  description:
    "From 1914 to 1918, World War I was a global conflict that resulted in significant political changes and the downfall of empires. This war saw unprecedented levels of destruction and loss of life, leading to major geopolitical shifts and the Treaty of Versailles.",
  link: "https://en.wikipedia.org/wiki/World_War_I",
  index: 1914,
};

const WORLD_WAR_II: EventType = {
  id: "world-war-ii",
  title: "World War II",
  description:
    "From 1939 to 1945, World War II was a devastating global conflict involving most of the world's nations. It led to the Holocaust, the use of atomic bombs, and significant geopolitical shifts, including the emergence of the United States and the Soviet Union as superpowers.",
  link: "https://en.wikipedia.org/wiki/World_War_II",
  index: 1939,
};

const COLD_WAR: EventType = {
  id: "cold-war",
  title: "Cold War",
  description:
    "From 1947 to 1991, the Cold War was a period of geopolitical tension between the Soviet Union and the United States and their respective allies. This era was marked by ideological conflict, nuclear arms race, and various proxy wars, significantly influencing global politics.",
  link: "https://en.wikipedia.org/wiki/Cold_War",
  index: 1947,
};

const CIVIL_RIGHTS_MOVEMENT: EventType = {
  id: "civil-rights-movement",
  title: "Civil Rights Movement",
  description:
    "During the 1950s and 1960s, the Civil Rights Movement was a struggle for social justice and equality for African Americans in the United States. Led by figures like Martin Luther King Jr., this movement aimed to end racial segregation and discrimination through nonviolent protest and legal challenges.",
  link: "https://en.wikipedia.org/wiki/Civil_Rights_Movement",
  index: 1950,
};

const FALL_OF_BERLIN_WALL: EventType = {
  id: "fall-of-berlin-wall",
  title: "Fall of the Berlin Wall",
  description:
    "In 1989, the fall of the Berlin Wall symbolized the end of the Cold War and the reunification of Germany. This event marked the collapse of communist regimes in Eastern Europe and paved the way for the expansion of democracy and market economies.",
  link: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall",
  index: 1989,
};

const MOON_LANDING: EventType = {
  id: "moon-landing",
  title: "Moon Landing",
  description:
    "In 1969, NASA's Apollo 11 mission successfully landed the first humans on the Moon. This monumental achievement in space exploration was a major milestone in human history and a significant technological and scientific accomplishment.",
  link: "https://en.wikipedia.org/wiki/Apollo_11",
  index: 1969,
};

const INDEPENDENCE_MOVEMENTS: EventType = {
  id: "independence-movements",
  title: "Independence Movements",
  description:
    "Throughout the 20th century, decolonization led to the independence of many countries in Africa, Asia, and the Caribbean from European colonial powers. These movements reshaped global politics and led to the emergence of new nations and political structures.",
  link: "https://en.wikipedia.org/wiki/Decolonization",
  index: 1950,
};

const INTERNET_REVOLUTION: EventType = {
  id: "internet-revolution",
  title: "Internet Revolution",
  description:
    "In the late 20th century, the development and widespread adoption of the internet transformed communication, commerce, and information sharing. This revolution created a connected global community, fundamentally altering how people live, work, and interact.",
  link: "https://en.wikipedia.org/wiki/History_of_the_Internet",
  index: 1990,
};

export const CENTURY_20_CE: CenturyType = {
  lastUpdated: "2024-07-16",
  events: [
    WORLD_WAR_I,
    WORLD_WAR_II,
    COLD_WAR,
    CIVIL_RIGHTS_MOVEMENT,
    FALL_OF_BERLIN_WALL,
    MOON_LANDING,
    INDEPENDENCE_MOVEMENTS,
    INTERNET_REVOLUTION,
  ],
};
