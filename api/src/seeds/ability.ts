import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const abilitiesInput: Prisma.AbilityCreateInput[] = [
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
  for (const ability of abilitiesInput) {
    const result = await prisma.ability.create({
      data: ability,
    });
    console.log(`Created { ability: ${result.name} }`);
  }
}

export { main };
