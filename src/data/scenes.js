import sunsetDrive from "../assets/vice-sunset-drive.jpg";
import neonNights from "../assets/vice-neon-nights.jpg";
import oceanAvenue from "../assets/vice-ocean-avenue.jpg";
import downtown from "../assets/vice-downtown.jpg";
import palmCoast from "../assets/vice-palm-coast.jpg";
import midnightHighway from "../assets/vice-midnight-highway.jpg";

export const sunsetScene = {
  id: "sunset-drive",
  number: "01",
  title: "SUNSET DRIVE",
  description: "Golden roads. Open highways. One last ride.",
  image: sunsetDrive,
  location: "WEST VICE",
  time: "19:42",
};

export const neonScene = {
  id: "neon-nights",
  number: "02",
  title: "NEON NIGHTS",
  description: "City lights never sleep.",
  image: neonNights,
  location: "NOVA DISTRICT",
  time: "01:18",
};

export const oceanScene = {
  id: "ocean-avenue",
  number: "03",
  title: "OCEAN AVENUE",
  description: "Salt air. Pink skies. Endless summer.",
  image: oceanAvenue,
  location: "AZURE STRIP",
  time: "20:06",
};

export const downtownScene = {
  id: "downtown",
  number: "04",
  title: "DOWNTOWN",
  description: "Concrete, neon and controlled chaos.",
  image: downtown,
  location: "CENTRAL VICE",
  time: "22:31",
};

export const palmScene = {
  id: "palm-coast",
  number: "05",
  title: "PALM COAST",
  description: "Slow days. Fast cars.",
  image: palmCoast,
  location: "SOUTH COAST",
  time: "17:24",
};

export const midnightScene = {
  id: "midnight-highway",
  number: "06",
  title: "MIDNIGHT HIGHWAY",
  description: "No destination. Just keep driving.",
  image: midnightHighway,
  location: "STATE ROAD 09",
  time: "00:47",
};

export const scenes = [
  sunsetScene,
  neonScene,
  oceanScene,
  downtownScene,
  palmScene,
  midnightScene,
];

export const gallery = [
  { scene: neonScene, creator: "@mia", date: "SEP 18, 2026", position: "tall" },
  { scene: palmScene, creator: "@alex", date: "SEP 16, 2026", position: "wide" },
  { scene: downtownScene, creator: "@nico", date: "SEP 14, 2026", position: "standard" },
  { scene: oceanScene, creator: "@jordan", date: "SEP 11, 2026", position: "tall" },
  { scene: midnightScene, creator: "@alex", date: "SEP 09, 2026", position: "standard" },
];
