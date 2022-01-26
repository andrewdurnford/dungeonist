import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Character: {
    abilities: async ({ id }, {}, ctx) => {
      const characterId = id;
      return await ctx.prisma.characterAbility.findMany({
        where: { characterId },
        // orderBy: { name: "desc" },
      });
    },
  },
  CharacterAbility: {
    name: async ({ abilityId }, {}, ctx) => {
      const ability = await ctx.prisma.ability.findUnique({
        where: { id: abilityId },
      });
      return ability?.name ?? "";
    },
    modifier: (obj, {}, ctx) => {
      return (obj.score - 10) / 2;
    },
    skills: async ({ characterId, abilityId }, {}, ctx) => {
      const skills = await ctx.prisma.skill.findMany({ where: { abilityId } });

      const skillIds = skills.map(({ id }) => id);

      return await ctx.prisma.characterSkill.findMany({
        where: { characterId, skillId: { in: skillIds } },
        // orderBy: { name: 'asc' }
      });
    },
  },
};
