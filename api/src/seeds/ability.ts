import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.AbilityCreateInput[] = [
  {
    name: "Strength",
  },
  {
    name: "Dexterity",
  },
  {
    name: "Constitution",
  },
  {
    name: "Intelligence",
  },
  {
    name: "Wisdom",
  },
  {
    name: "Charisma",
  },
];

async function main() {
  for (const data of input) {
    await prisma.ability.upsert({
      where: { name: data.name },
      create: { ...data },
      update: { ...data },
    });
  }
}

export { main };
