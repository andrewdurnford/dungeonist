/*
  Warnings:

  - A unique constraint covering the columns `[personalityId]` on the table `Character` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Character` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Character" ADD COLUMN     "alignmentId" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "experience" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "inspiration" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "level" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "personalityId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Ability" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Ability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alignment" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Alignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterAbility" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "abilityId" TEXT NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 10,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterAbility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CharacterSkill" (
    "id" TEXT NOT NULL,
    "characterId" TEXT NOT NULL,
    "skillId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CharacterSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personality" (
    "id" TEXT NOT NULL,
    "traits" TEXT,
    "ideals" TEXT,
    "bonds" TEXT,
    "flaws" TEXT,

    CONSTRAINT "Personality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "abilityId" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CharacterAbility_characterId_abilityId_key" ON "CharacterAbility"("characterId", "abilityId");

-- CreateIndex
CREATE UNIQUE INDEX "CharacterSkill_characterId_skillId_key" ON "CharacterSkill"("characterId", "skillId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_personalityId_key" ON "Character"("personalityId");

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_alignmentId_fkey" FOREIGN KEY ("alignmentId") REFERENCES "Alignment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Character" ADD CONSTRAINT "Character_personalityId_fkey" FOREIGN KEY ("personalityId") REFERENCES "Personality"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAbility" ADD CONSTRAINT "CharacterAbility_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterAbility" ADD CONSTRAINT "CharacterAbility_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CharacterSkill" ADD CONSTRAINT "CharacterSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
