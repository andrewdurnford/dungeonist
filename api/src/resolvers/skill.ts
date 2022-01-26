import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    skill: async (_, { id }, ctx) => {
      return await ctx.prisma.skill.findUnique({ where: { id } });
    },
    skills: async (_, {}, ctx) => {
      return await ctx.prisma.skill.findMany({ orderBy: { name: "asc" } });
    },
  },
  Skill: {
    ability: async ({ abilityId }, {}, ctx) => {
      const ability = await ctx.prisma.ability.findUnique({
        where: { id: abilityId },
      });

      if (!ability) throw new Error(`Invalid ability with id ${abilityId}`);

      return ability;
    },
  },
};
