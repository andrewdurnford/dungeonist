import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function main() {
  const skillsInput: Prisma.SkillCreateInput[] = [
    {
      id: "1",
      name: "Acrobatics",
      ability: { connect: { id: "2" } },
    },
    {
      id: "2",
      name: "Athletics",
      ability: { connect: { id: "1" } },
    },
    {
      id: "3",
      name: "Animal Handling",
      ability: { connect: { id: "5" } },
    },
    {
      id: "4",
      name: "Arcana",
      ability: { connect: { id: "4" } },
    },
    {
      id: "5",
      name: "Deception",
      ability: { connect: { id: "6" } },
    },
    {
      id: "6",
      name: "History",
      ability: { connect: { id: "4" } },
    },
    {
      id: "7",
      name: "Insight",
      ability: { connect: { id: "5" } },
    },
    {
      id: "8",
      name: "Intimidation",
      ability: { connect: { id: "6" } },
    },
    {
      id: "9",
      name: "Investigation",
      ability: { connect: { id: "4" } },
    },
    {
      id: "10",
      name: "Medicine",
      ability: { connect: { id: "5" } },
    },
    {
      id: "11",
      name: "Nature",
      ability: { connect: { id: "4" } },
    },
    {
      id: "12",
      name: "Perception",
      ability: { connect: { id: "5" } },
    },
    {
      id: "13",
      name: "Performance",
      ability: { connect: { id: "6" } },
    },
    {
      id: "14",
      name: "Persuasion",
      ability: { connect: { id: "6" } },
    },
    {
      id: "15",
      name: "Religion",
      ability: { connect: { id: "4" } },
    },
    {
      id: "16",
      name: "Sleight of Hand",
      ability: { connect: { id: "2" } },
    },
    {
      id: "17",
      name: "Stealth",
      ability: { connect: { id: "2" } },
    },
    {
      id: "18",
      name: "Survival",
      ability: { connect: { id: "5" } },
    },
  ];

  skillsInput.map(async (skill) => {
    const result = await prisma.skill.create({
      data: skill,
    });
    console.log(`Created { skill: ${result.name} }`);
  });
}

export { main };
