import { getExperiencePerLevel, isLevel, Level } from "../utils/gameplay";
import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    character: async (_, { id }, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user.id;

      const character = await ctx.prisma.character.findUnique({
        where: { id },
      });

      if (character?.userId !== userId) return null;

      return character;
    },
    characters: async (_, {}, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user.id;

      return await ctx.prisma.character.findMany({
        where: { userId },
      });
    },
  },
  Mutation: {
    characterCreate: async (_, { input }, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user?.id;

      const abilities = await ctx.prisma.ability.findMany();
      const skills = await ctx.prisma.skill.findMany();

      const { name } = input;

      const character = await ctx.prisma.character.create({
        data: {
          userId,
          name: name ?? undefined,
          abilities: {
            createMany: {
              data: abilities.map(({ id }) => ({ abilityId: id })),
            },
          },
          skills: {
            createMany: {
              data: skills.map(({ id }) => ({ skillId: id })),
            },
          },
        },
      });

      return character;
    },
    characterUpdate: async (_, { input }, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user?.id;

      const {
        id,
        name,
        level,
        alignmentId,
        background,
        traits,
        ideals,
        bonds,
        flaws,
        raceId,
      } = input;

      const oldCharacter = await ctx.prisma.character.findUnique({
        where: { id },
      });

      if (!oldCharacter || oldCharacter.userId !== userId)
        throw new Error("Character not found");

      const character = await ctx.prisma.character.update({
        where: { id },
        data: {
          name: name ?? undefined,
          level: level ?? undefined,
          experience:
            level && isLevel(level) ? getExperiencePerLevel(level) : undefined,
          alignmentId: alignmentId ?? undefined,
          background: background ?? undefined,
          traits: traits ?? undefined,
          ideals: ideals ?? undefined,
          bonds: bonds ?? undefined,
          flaws: flaws ?? undefined,
        },
      });

      // TODO: Move race update to a new mutation 'characterUpdateRace'
      if (raceId) {
        const characterId = id;
        await ctx.prisma.characterRace.upsert({
          where: { characterId },
          // If 1-1 relation doesn't exist, create it with raceId
          create: { characterId, raceId },
          // If 1-1 relation does exist, update the raceId
          update: { raceId },
        });

        const characterAbilities = await ctx.prisma.characterAbility.findMany({
          where: { characterId },
        });

        const abilityIncreases = await ctx.prisma.abilityScoreIncrease.findMany(
          {
            where: {
              raceId,
            },
          }
        );

        // Remove previous increase (if any)
        await ctx.prisma.characterAbility.updateMany({
          where: {
            characterId,
          },
          data: {
            score: 10,
          },
        });

        characterAbilities.map((ability) =>
          abilityIncreases.map(async (abilityIncrease) => {
            if (ability.abilityId !== abilityIncrease.abilityId) return;

            await ctx.prisma.characterAbility.update({
              where: {
                characterId_abilityId: {
                  characterId,
                  abilityId: ability.abilityId,
                },
              },
              data: {
                score: 10 + abilityIncrease.increase,
              },
            });
          })
        );
      }

      return character;
    },
  },
  Character: {
    alignment: async ({ alignmentId }, {}, ctx) => {
      if (!alignmentId) return null;
      return await ctx.prisma.alignment.findUnique({
        where: { id: alignmentId },
      });
    },
  },
};
