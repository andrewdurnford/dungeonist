import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function main() {
  const racesInput: Prisma.RaceCreateInput[] = [
    {
      id: "1",
      name: "Dwarf",
    },
    {
      id: "2",
      name: "Elf",
    },
    {
      id: "3",
      name: "Halfling",
    },
    {
      id: "4",
      name: "Human",
    },
    {
      id: "5",
      name: "Dragonborn",
    },
    {
      id: "6",
      name: "Gnome",
    },
    {
      id: "7",
      name: "Half-Elf",
    },
    {
      id: "8",
      name: "Half-Orc",
    },
    {
      id: "9",
      name: "Tiefling",
    },
  ];

  racesInput.map(async (race) => {
    const result = await prisma.race.create({
      data: race,
    });
    console.log(`Created { race: ${result.name} }`);
  });
}

export { main };
