/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Ability` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Alignment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Ability_name_key" ON "Ability"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Alignment_name_key" ON "Alignment"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_name_key" ON "Skill"("name");
