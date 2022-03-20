import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.SkillCreateInput[] = [
  {
    name: "Acrobatics",
    ability: {
      connectOrCreate: {
        where: { name: "Dexterity" },
        create: { name: "Dexterity" },
      },
    },
  },
  {
    name: "Athletics",
    ability: {
      connectOrCreate: {
        where: { name: "Strength" },
        create: { name: "Strength" },
      },
    },
  },
  {
    name: "Animal Handling",
    ability: {
      connectOrCreate: {
        where: { name: "Wisdom" },
        create: { name: "Wisdom" },
      },
    },
  },
  {
    name: "Arcana",
    ability: {
      connectOrCreate: {
        where: { name: "Intelligence" },
        create: { name: "Intelligence" },
      },
    },
  },
  {
    name: "Deception",
    ability: {
      connectOrCreate: {
        where: { name: "Charisma" },
        create: { name: "Charisma" },
      },
    },
  },
  {
    name: "History",
    ability: {
      connectOrCreate: {
        where: { name: "Intelligence" },
        create: { name: "Intelligence" },
      },
    },
  },
  {
    name: "Insight",
    ability: {
      connectOrCreate: {
        where: { name: "Wisdom" },
        create: { name: "Wisdom" },
      },
    },
  },
  {
    name: "Intimidation",
    ability: {
      connectOrCreate: {
        where: { name: "Charisma" },
        create: { name: "Charisma" },
      },
    },
  },
  {
    name: "Investigation",
    ability: {
      connectOrCreate: {
        where: { name: "Intelligence" },
        create: { name: "Intelligence" },
      },
    },
  },
  {
    name: "Medicine",
    ability: {
      connectOrCreate: {
        where: { name: "Wisdom" },
        create: { name: "Wisdom" },
      },
    },
  },
  {
    name: "Nature",
    ability: {
      connectOrCreate: {
        where: { name: "Intelligence" },
        create: { name: "Intelligence" },
      },
    },
  },
  {
    name: "Perception",
    ability: {
      connectOrCreate: {
        where: { name: "Wisdom" },
        create: { name: "Wisdom" },
      },
    },
  },
  {
    name: "Performance",
    ability: {
      connectOrCreate: {
        where: { name: "Charisma" },
        create: { name: "Charisma" },
      },
    },
  },
  {
    name: "Persuasion",
    ability: {
      connectOrCreate: {
        where: { name: "Charisma" },
        create: { name: "Charisma" },
      },
    },
  },
  {
    name: "Religion",
    ability: {
      connectOrCreate: {
        where: { name: "Intelligence" },
        create: { name: "Intelligence" },
      },
    },
  },
  {
    name: "Sleight of Hand",
    ability: {
      connectOrCreate: {
        where: { name: "Dexterity" },
        create: { name: "Dexterity" },
      },
    },
  },
  {
    name: "Stealth",
    ability: {
      connectOrCreate: {
        where: { name: "Dexterity" },
        create: { name: "Dexterity" },
      },
    },
  },
  {
    name: "Survival",
    ability: {
      connectOrCreate: {
        where: { name: "Wisdom" },
        create: { name: "Wisdom" },
      },
    },
  },
];

async function main() {
  for (const data of input) {
    await prisma.skill.create({ data });
  }
}

export { main };
