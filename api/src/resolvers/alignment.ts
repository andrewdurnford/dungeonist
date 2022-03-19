import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    alignment: async (_, { id }, ctx) => {
      return await ctx.prisma.alignment.findUnique({ where: { id } });
    },
    alignments: async (_, {}, ctx) => {
      return await ctx.prisma.alignment.findMany();
    },
  },
};
