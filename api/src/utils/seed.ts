import { PrismaClient } from "@prisma/client";
import * as glob from "glob";
import * as path from "path";

export const prisma = new PrismaClient();

// middleware to log database seeds
prisma.$use(async (params, next) => {
  const result = await next(params);

  console.log(`${params.action} { ${params.model}: ${result?.name} }`);

  return result;
});

async function main() {
  const paths = glob.sync(path.join(__dirname, "../seeds/**/*.ts"));

  // Get the 'main' function from each seed file and call it
  for (const path of paths) {
    const { main } = await import(path);
    await main();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
