import { graphql } from "msw";
import { CharactersQuery } from "../utils/graphql";

export const handlers = [
  graphql.query<CharactersQuery>("Characters", (req, res, ctx) => {
    return res(
      ctx.data({
        characters: [
          {
            id: "1",
            name: "Obi-Wan Kenobi",
            __typename: "Character",
          },
        ],
      })
    );
  }),
];
