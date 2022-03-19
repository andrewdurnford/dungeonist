import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    ability: async (_, { id }, ctx) => {
      return await ctx.prisma.ability.findUnique({ where: { id } });
    },
    abilities: async (_, {}, ctx) => {
      return await ctx.prisma.ability.findMany();
    },
  },
  Ability: {
    skills: async ({ id }, {}, ctx) => {
      const abilityId = id;
      return await ctx.prisma.skill.findMany({
        where: { abilityId },
      });
    },
  },
};
