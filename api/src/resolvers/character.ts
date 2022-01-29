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
    createCharacter: async (_, { input }, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user?.id;

      const abilities = await ctx.prisma.ability.findMany();
      const skills = await ctx.prisma.skill.findMany();

      const { name, level } = input;

      const character = await ctx.prisma.character.create({
        data: {
          userId,
          name: name ?? undefined,
          level: level ?? undefined,
          experience:
            level && isLevel(level) ? getExperiencePerLevel(level) : undefined,
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

      return { character };
    },
    updateCharacterDetails: async (_, { input }, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user?.id;

      const { id, name, level } = input;

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
        },
      });

      return character;
    },
  },
};
