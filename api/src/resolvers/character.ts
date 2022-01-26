import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
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
  },
};
