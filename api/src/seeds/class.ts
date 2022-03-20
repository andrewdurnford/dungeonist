import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.ClassCreateInput[] = [
  {
    name: "Barbarian",
  },
  {
    name: "Bard",
  },
  {
    name: "Cleric",
  },
  {
    name: "Druid",
  },
  {
    name: "Fighter",
  },
  {
    name: "Monk",
  },
  {
    name: "Paladin",
  },
  {
    name: "Ranger",
  },
  {
    name: "Rogue",
  },
  {
    name: "Sorcerer",
  },
  {
    name: "Warlock",
  },
  {
    name: "Wizard",
  },
];

async function main() {
  for (const data of input) {
    await prisma.class.create({ data });
  }
}

export { main };
