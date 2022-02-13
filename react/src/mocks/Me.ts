import { graphql } from "msw";
import { MeQuery } from "../utils/graphql";

export const handlers = [
  graphql.query<MeQuery>("Me", (req, res, ctx) => {
    return res(
      ctx.data({
        me: {
          id: "1",
          email: "luke.skywalker@gmail.com",
          __typename: "User",
        },
        __typename: "Query",
      })
    );
  }),
];
