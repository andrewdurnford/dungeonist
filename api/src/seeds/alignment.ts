import { Prisma } from "@prisma/client";
import { prisma } from "../utils/seed";

const input: Prisma.AlignmentCreateInput[] = [
  {
    id: "1",
    name: "Lawful Good",
    description: "",
  },
  {
    id: "2",
    name: "Neutral Good",
    description: "",
  },
  {
    id: "3",
    name: "Chaotic Good",
    description: "",
  },
  {
    id: "4",
    name: "Lawful Neutral",
    description: "",
  },
  {
    id: "5",
    name: "Neutral",
    description: "",
  },
  {
    id: "6",
    name: "Chaotic Neutral",
    description: "",
  },
  {
    id: "7",
    name: "Lawful Evil",
    description: "",
  },
  {
    id: "8",
    name: "Neutral Evil",
    description: "",
  },
  {
    id: "9",
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
