import { PrismaClient } from "@prisma/client";
import { main as abilitySeed } from "../seeds/ability";
import { main as alignmentSeed } from "../seeds/alignment";
import { main as classSeed } from "../seeds/class";
import { main as raceSeed } from "../seeds/race";
import { main as skillSeed } from "../seeds/skill";

export const prisma = new PrismaClient();

// middleware to log database seeds
prisma.$use(async (params, next) => {
  const result = await next(params);

  // TODO: result <any> type
  console.log(`${params.action} { ${params.model}: ${result?.name} }`);

  return result;
});

// TODO: Update to use glob path '../seeds/*.ts
// The following code successfully calls each seed function with a glob import,
// but due to foreign-key constraints causes errors when seeding as the scripts
// will run out of order due to being asynchronous.
//
// ```
// async function main() {
//   glob
//     .sync(path.join(__dirname, "../seeds/**/*.ts"))
//     // Get the 'main' function from each seed file and call it
//     .map(async (path) => {
//       const { main } = await import(path);
//       await main();
//     });
// }
// ```

async function main() {
  await alignmentSeed();
  await abilitySeed();
  await skillSeed();
  await raceSeed();
  await classSeed();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
