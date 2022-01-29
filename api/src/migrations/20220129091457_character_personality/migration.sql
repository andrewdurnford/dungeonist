/*
  Warnings:

  - You are about to drop the column `personalityId` on the `Character` table. All the data in the column will be lost.
  - You are about to drop the `Personality` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Character" DROP CONSTRAINT "Character_personalityId_fkey";

-- DropIndex
DROP INDEX "Character_personalityId_key";

-- AlterTable
ALTER TABLE "Character" DROP COLUMN "personalityId",
ADD COLUMN     "bonds" TEXT,
ADD COLUMN     "flaws" TEXT,
ADD COLUMN     "ideals" TEXT,
ADD COLUMN     "traits" TEXT;

-- DropTable
DROP TABLE "Personality";
