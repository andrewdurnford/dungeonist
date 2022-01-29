import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Character: {
    abilities: async ({ id }, {}, ctx) => {
      const characterId = id;
      return await ctx.prisma.characterAbility.findMany({
        where: { characterId },
        orderBy: { abilityId: "asc" },
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

      const characterSkills = await ctx.prisma.characterSkill.findMany({
        where: { characterId, skillId: { in: skillIds } },
      });

      // TODO: refactor to sort by name in sql query
      return characterSkills.sort((a, b) => {
        const skillA = skills.find((x) => x.id === a.skillId)?.name;
        const skillB = skills.find((x) => x.id === b.skillId)?.name;

        if (!skillA || !skillB) return 0;

        return skillA > skillB ? 1 : -1;
      });
    },
  },
};
