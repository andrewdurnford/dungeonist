import { GraphQLHandler, GraphQLRequest } from "msw";

// See: https://vitejs.dev/guide/features.html#glob-import
const mocks = import.meta.glob("../mocks/**/*.ts");

// Extract each graphql handler from each file in './src/mocks/**/*.ts'
let modules: GraphQLHandler<GraphQLRequest<any>>[] = [];

// Regular for loop is required to iterate over the key (path) of the glob
// imports. Creating a mutable array, and pushing each resolved handler to it is
// required due to the complexity of return values from Promises inside a map.
// NOTE: 'esnext' is the required build target to support top-level await.
for (const path in mocks) {
  const handlers = await Promise.resolve(
    mocks[path]().then((module) => {
      return module.handlers;
    })
  );
  modules.push(...handlers);
}

export { modules as handlers };
