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
    createCharacter: async (_, { input: { name } }, ctx) => {
      if (!ctx.user) throw new Error("Unauthenticated");

      const userId = ctx.user.id;

      const character = await ctx.prisma.character.create({
        data: {
          userId,
          name: name ?? undefined,
        },
      });

      return { character };
    },
  },
};
