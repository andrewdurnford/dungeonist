import { graphql } from "msw";
import { RacesQuery } from "../utils/graphql";

export const handlers = [
  graphql.query<RacesQuery>("Races", (req, res, ctx) => {
    return res(
      ctx.data({
        races: [
          {
            id: "1",
            name: "Dwarf",
          },
          {
            id: "2",
            name: "Elf",
          },
          {
            id: "3",
            name: "Halfling",
          },
          {
            id: "4",
            name: "Human",
          },
          {
            id: "5",
            name: "Dragonborn",
          },
          {
            id: "6",
            name: "Gnome",
          },
          {
            id: "7",
            name: "Half-Elf",
          },
          {
            id: "8",
            name: "Half-Orc",
          },
          {
            id: "9",
            name: "Tiefling",
          },
        ],
      })
    );
  }),
];
