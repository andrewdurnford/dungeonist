const { printSchema } = require("graphql");

// TODO: update to typescript
module.exports = {
  plugin: (schema, documents, config) => {
    return [
      'import gql from "graphql-tag";',
      "",
      "export const typeDefs = gql`",
      printSchema(schema),
      "`;",
      "",
    ].join("\n");
  },
};
