import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    class: async (_, { id }, ctx) => {
      return await ctx.prisma.class.findUnique({ where: { id } });
    },
    classes: async (_, {}, ctx) => {
      // TODO: update order by
      return await ctx.prisma.class.findMany();
    },
  },
};
