import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.AbilityCreateInput[] = [
  {
    id: "1",
    name: "Strength",
  },
  {
    id: "2",
    name: "Dexterity",
  },
  {
    id: "3",
    name: "Constitution",
  },
  {
    id: "4",
    name: "Intelligence",
  },
  {
    id: "5",
    name: "Wisdom",
  },
  {
    id: "6",
    name: "Charisma",
  },
];

async function main() {
  for (const data of input) {
    await prisma.ability.create({ data });
  }
}

export { main };
