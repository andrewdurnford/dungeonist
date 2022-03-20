import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.ClassCreateInput[] = [
  {
    id: "1",
    name: "Barbarian",
  },
  {
    id: "2",
    name: "Bard",
  },
  {
    id: "3",
    name: "Cleric",
  },
  {
    id: "4",
    name: "Druid",
  },
  {
    id: "5",
    name: "Fighter",
  },
  {
    id: "6",
    name: "Monk",
  },
  {
    id: "7",
    name: "Paladin",
  },
  {
    id: "8",
    name: "Ranger",
  },
  {
    id: "9",
    name: "Rogue",
  },
  {
    id: "10",
    name: "Sorcerer",
  },
  {
    id: "11",
    name: "Warlock",
  },
  {
    id: "12",
    name: "Wizard",
  },
];

async function main() {
  for (const data of input) {
    await prisma.class.create({ data });
  }
}

export { main };
