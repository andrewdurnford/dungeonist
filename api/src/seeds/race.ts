import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function main() {
  const racesInput: Prisma.RaceCreateInput[] = [
    {
      id: "1",
      name: "Dwarf",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Constitution increases by 2
            {
              abilityId: "3",
              increase: 2,
            },
          ],
        },
      },
    },
    {
      id: "2",
      name: "Elf",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Constitution increases by 2
            {
              abilityId: "2",
              increase: 2,
            },
          ],
        },
      },
    },
    {
      id: "3",
      name: "Halfling",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Dexterity increases by 2
            {
              abilityId: "2",
              increase: 2,
            },
          ],
        },
      },
    },
    {
      id: "4",
      name: "Human",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // All abilities increase by 1
            {
              abilityId: "1",
              increase: 1,
            },
            {
              abilityId: "2",
              increase: 1,
            },
            {
              abilityId: "3",
              increase: 1,
            },
            {
              abilityId: "4",
              increase: 1,
            },
            {
              abilityId: "5",
              increase: 1,
            },
            {
              abilityId: "6",
              increase: 1,
            },
          ],
        },
      },
    },
    {
      id: "5",
      name: "Dragonborn",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Strength increases by 2
            {
              abilityId: "1",
              increase: 2,
            },
            // Charisma increases by 1
            {
              abilityId: "6",
              increase: 1,
            },
          ],
        },
      },
    },
    {
      id: "6",
      name: "Gnome",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Intelligence increases by 1
            {
              abilityId: "4",
              increase: 1,
            },
          ],
        },
      },
    },
    {
      id: "7",
      name: "Half-Elf",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Charisma increases by 1
            {
              abilityId: "6",
              increase: 1,
            },
            // TODO: choose 2 others to increase by 1
          ],
        },
      },
    },
    {
      id: "8",
      name: "Half-Orc",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Strength increases by 2
            {
              abilityId: "1",
              increase: 2,
            },
            // Constitution increases by 1
            {
              abilityId: "2",
              increase: 1,
            },
          ],
        },
      },
    },
    {
      id: "9",
      name: "Tiefling",
      abilityScoreIncreases: {
        createMany: {
          data: [
            // Intelligence increases by 1
            {
              abilityId: "4",
              increase: 1,
            },
            // Charisma increases by 2
            {
              abilityId: "6",
              increase: 2,
            },
          ],
        },
      },
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
