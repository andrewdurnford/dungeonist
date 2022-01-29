const experienceTable = {
  1: 0,
  2: 300,
  3: 900,
  4: 2700,
  5: 6500,
  6: 14000,
  7: 23000,
  8: 34000,
  9: 48000,
  10: 64000,
  11: 85000,
  12: 100000,
  13: 120000,
  14: 140000,
  15: 165000,
  16: 195000,
  17: 225000,
  18: 265000,
  19: 305000,
  20: 355000,
};

// [1, 2, 3, 4, ..., 20]
const level = Array.from({ length: 20 }, (_, i) => i + 2);

export type Level = keyof typeof experienceTable;

/** Check if the provider number is a valid Level (1-20) */
export const isLevel = (x: any): x is Level => level.includes(x);

/** Get the experience points for a given level */
export function getExperiencePerLevel(level: Level) {
  return experienceTable[level];
}
