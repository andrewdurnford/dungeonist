import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Character: {
    race: async ({ id }, args, ctx) => {
      const characterId = id;

      return await ctx.prisma.characterRace.findUnique({
        where: { characterId },
      });
    },
  },
  CharacterRace: {
    // TODO: update to return character.raceId;
    id: ({ raceId }, {}, ctx) => {
      return raceId ?? "";
    },
    name: async ({ raceId }, args, ctx) => {
      const race = await ctx.prisma.race.findUnique({
        where: { id: raceId },
      });
      return race?.name ?? "";
    },
  },
};
