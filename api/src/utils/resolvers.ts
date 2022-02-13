import * as glob from "glob";
import { merge } from "lodash";
import * as path from "path";

// TODO: Use top-level await and return merged 'resolvers' array
export async function getResolvers() {
  let allResolvers = {};

  await Promise.all(
    glob
      .sync(path.join(__dirname, "../resolvers/**/*.ts"))
      .map(async (path) => {
        // Get the 'resolvers' object from each file
        const { resolvers } = await import(path);
        // Deep merge the object with all other resolvers
        allResolvers = merge({}, allResolvers, resolvers);
      })
  );

  return allResolvers;
}
