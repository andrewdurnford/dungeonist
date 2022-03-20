import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.AlignmentCreateInput[] = [
  {
    name: "Lawful Good",
    description: "",
  },
  {
    name: "Neutral Good",
    description: "",
  },
  {
    name: "Chaotic Good",
    description: "",
  },
  {
    name: "Lawful Neutral",
    description: "",
  },
  {
    name: "Neutral",
    description: "",
  },
  {
    name: "Chaotic Neutral",
    description: "",
  },
  {
    name: "Lawful Evil",
    description: "",
  },
  {
    name: "Neutral Evil",
    description: "",
  },
  {
    name: "Chaotic Evil",
    description: "",
  },
];

async function main() {
  for (const data of input) {
    await prisma.alignment.create({ data });
  }
}

export { main };
