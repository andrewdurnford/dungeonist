import { graphql } from "msw";
import { UserQuery } from "../utils/graphql";

export const handlers = [
  graphql.query<UserQuery>("User", (req, res, ctx) => {
    return res(
      ctx.data({
        user: {
          id: "1",
          email: "luke.skywalker@gmail.com",
          __typename: "User",
        },
        __typename: "Query",
      })
    );
  }),
];
