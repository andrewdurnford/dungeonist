import { IResolvers } from "../utils/graphql";

export const resolvers: IResolvers = {
  Character: {
    skills: async ({ id }, {}, ctx) => {
      const characterId = id;

      const characterSkills = await ctx.prisma.characterSkill.findMany({
        where: { characterId },
      });

      return characterSkills
    },
  },
  CharacterSkill: {
    name: async ({ skillId }, {}, ctx) => {
      const skill = await ctx.prisma.skill.findUnique({
        where: { id: skillId },
      });
      return skill?.name ?? "";
    },
    modifier: async ({ characterId, skillId }, {}, ctx) => {
      const skill = await ctx.prisma.skill.findUnique({
        where: { id: skillId },
      });

      const ability = await ctx.prisma.characterAbility.findUnique({
        where: {
          characterId_abilityId: {
            characterId,
            abilityId: skill?.abilityId ?? "",
          },
        },
      });

      return Math.floor(((ability?.score || 10) - 10) / 2);
    },
    isProficient: (_, {}, ctx) => {
      return false;
    },
    ability: async ({ skillId, characterId }, {}, ctx) => {
      const skill = await ctx.prisma.skill.findUnique({
        where: { id: skillId },
      });

      if (!skill) throw new Error(`Invalid skillId ${skillId}`);

      const ability = await ctx.prisma.characterAbility.findUnique({
        where: {
          characterId_abilityId: {
            characterId,
            abilityId: skill.abilityId,
          },
        },
      });

      if (!ability) throw new Error(`Invalid abilityId ${skill.abilityId}`);

      return ability;
    },
  },
};
