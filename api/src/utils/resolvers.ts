import { merge } from "lodash";
import { resolvers as Ability } from "../resolvers/ability";
import { resolvers as Alignment } from "../resolvers/alignment";
import { resolvers as Character } from "../resolvers/character";
import { resolvers as CharacterAbility } from "../resolvers/characterAbility";
import { resolvers as CharacterRace } from "../resolvers/characterRace";
import { resolvers as CharacterSkill } from "../resolvers/characterSkill";
import { resolvers as Personality } from "../resolvers/personality";
import { resolvers as Race } from "../resolvers/race";
import { resolvers as Skill } from "../resolvers/skill";
import { resolvers as User } from "../resolvers/user";

// TODO: automate with glob pattern 'src/resolvers/**/*'
const resolvers = merge(
  {},
  Ability,
  Alignment,
  Character,
  CharacterAbility,
  CharacterRace,
  CharacterSkill,
  Personality,
  Race,
  Skill,
  User
);

export default resolvers;
