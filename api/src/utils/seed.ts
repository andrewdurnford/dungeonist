import { PrismaClient } from "@prisma/client";
import { main as abilitySeed } from "../seeds/ability";
import { main as alignmentSeed } from "../seeds/alignment";
import { main as skillSeed } from "../seeds/skill";

const prisma = new PrismaClient();

async function main() {
  // TODO: Update to use glob path '../seeds/*.ts
  abilitySeed();
  alignmentSeed();
  skillSeed();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
