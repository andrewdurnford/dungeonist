import { graphql } from "msw";
import { AlignmentsQuery } from "../utils/graphql";

export const handlers = [
  graphql.query<AlignmentsQuery>("Alignments", (req, res, ctx) => {
    return res(
      ctx.data({
        alignments: [
          {
            id: "1",
            name: "Lawful Good",
          },
          {
            id: "2",
            name: "Neutral Good",
          },
          {
            id: "3",
            name: "Chaotic Good",
          },
          {
            id: "4",
            name: "Lawful Neutral",
          },
          {
            id: "5",
            name: "Neutral",
          },
          {
            id: "6",
            name: "Chaotic Neutral",
          },
          {
            id: "7",
            name: "Lawful Evil",
          },
          {
            id: "8",
            name: "Neutral Evil",
          },
          {
            id: "9",
            name: "Chaotic Evil",
          },
        ],
        __typename: "Query",
      })
    );
  }),
];
