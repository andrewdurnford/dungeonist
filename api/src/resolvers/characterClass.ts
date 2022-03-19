import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Character: {
    classes: async ({ id }, args, ctx) => {
      const characterId = id;

      return await ctx.prisma.characterClass.findMany({
        where: { characterId },
      });
    },
  },
  CharacterClass: {
    name: async ({ id  }, args, ctx) => {
      const cls = await ctx.prisma.class.findUnique({
        where: { id },
      });
      return cls?.name ?? "";
    },
  },
};
