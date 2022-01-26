import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function main() {
  const alignmentsInput: Prisma.AlignmentCreateInput[] = [
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

  alignmentsInput.map(async (alignment) => {
    const result = await prisma.alignment.create({
      data: alignment,
    });
    console.log(`Created { alignment: ${result.name} }`);
  });
}

export { main };
