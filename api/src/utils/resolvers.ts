import * as glob from "glob";
import { merge } from "lodash";
import * as path from "path";

export const resolvers = glob
  .sync(path.join(__dirname, "../resolvers/**/*.ts"))
  .map((file) => require(file))
  .reduce((acc, curr) => merge({}, acc, curr.resolvers), {});
