import { graphql } from "msw";
import { ClassQuery, ClassQueryVariables } from "../utils/graphql";

export const handlers = [
  graphql.query<ClassQuery, ClassQueryVariables>("Class", (req, res, ctx) => {
    if (req.variables.id === "1") {
      return res(
        ctx.data({
          class: {
            id: "1",
            name: "Barbarian",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "2") {
      return res(
        ctx.data({
          class: {
            id: "2",
            name: "Bard",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "3") {
      return res(
        ctx.data({
          class: {
            id: "3",
            name: "Cleric",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "4") {
      return res(
        ctx.data({
          class: {
            id: "4",
            name: "Druid",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "5") {
      return res(
        ctx.data({
          class: {
            id: "5",
            name: "Fighter",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "6") {
      return res(
        ctx.data({
          class: {
            id: "6",
            name: "Monk",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "7") {
      return res(
        ctx.data({
          class: {
            id: "7",
            name: "Paladin",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "8") {
      return res(
        ctx.data({
          class: {
            id: "8",
            name: "Ranger",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "9") {
      return res(
        ctx.data({
          class: {
            id: "9",
            name: "Rogue",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "10") {
      return res(
        ctx.data({
          class: {
            id: "10",
            name: "Sorcerer",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "11") {
      return res(
        ctx.data({
          class: {
            id: "11",
            name: "Warlock",
            __typename: "Class",
          },
        })
      );
    }

    if (req.variables.id === "12") {
      return res(
        ctx.data({
          class: {
            id: "12",
            name: "Wizard",
            __typename: "Class",
          },
        })
      );
    }
  }),
];
