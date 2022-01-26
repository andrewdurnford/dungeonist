import { merge } from "lodash";
import { resolvers as CharacterResolver } from "../resolvers/character";
import { resolvers as UserResolver } from "../resolvers/user";

// TODO: automate with glob pattern 'src/resolvers/**/*'
const resolvers = merge({}, CharacterResolver, UserResolver);

export default resolvers;
