-- AlterTable
ALTER TABLE "Race" ADD COLUMN     "age" TEXT,
ADD COLUMN     "alignment" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "size" TEXT,
ADD COLUMN     "speed" TEXT;

-- CreateTable
CREATE TABLE "AbilityScoreIncrease" (
    "id" TEXT NOT NULL,
    "abilityId" TEXT NOT NULL,
    "raceId" TEXT NOT NULL,
    "increase" INTEGER NOT NULL,

    CONSTRAINT "AbilityScoreIncrease_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Trait_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AbilityScoreIncrease_abilityId_raceId_key" ON "AbilityScoreIncrease"("abilityId", "raceId");

-- AddForeignKey
ALTER TABLE "AbilityScoreIncrease" ADD CONSTRAINT "AbilityScoreIncrease_abilityId_fkey" FOREIGN KEY ("abilityId") REFERENCES "Ability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AbilityScoreIncrease" ADD CONSTRAINT "AbilityScoreIncrease_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
