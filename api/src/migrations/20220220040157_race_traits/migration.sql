/*
  Warnings:

  - Added the required column `raceId` to the `Trait` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "languages" TEXT;

-- AlterTable
ALTER TABLE "Trait" ADD COLUMN     "raceId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Trait" ADD CONSTRAINT "Trait_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
