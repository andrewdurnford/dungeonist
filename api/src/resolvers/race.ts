import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Query: {
    race: async (_, { id }, ctx) => {
      return await ctx.prisma.race.findUnique({ where: { id } });
    },
    races: async (_, {}, ctx) => {
      return await ctx.prisma.race.findMany({ orderBy: { id: "asc" } });
    },
  },
  Race: {
    abilityScoreIncreases: async (obj, {}, ctx) => {
      // TODO: sort by abilityId?
      return await ctx.prisma.abilityScoreIncrease.findMany({
        where: {
          raceId: obj.id,
        },
      });
    },
    traits: async (obj, {}, ctx) => {
      return await ctx.prisma.trait.findMany({
        where: {
          raceId: obj.id,
        },
      });
    },
  },
  AbilityScoreIncrease: {
    ability: async (obj, {}, ctx) => {
      const ability = await ctx.prisma.ability.findUnique({
        where: {
          id: obj.abilityId,
        },
      })!;

      if (!ability) throw Error("Not Found");

      return ability;
    },
  },
};
