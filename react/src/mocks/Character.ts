import { graphql } from "msw";
import { CharacterQuery, CharacterQueryVariables } from "../utils/graphql";

export const handlers = [
  graphql.query<CharacterQuery, CharacterQueryVariables>(
    "Character",
    (req, res, ctx) => {
      return res(
        ctx.data({
          character: {
            id: "1",
            name: "Obi-Wan Kenobi",
            level: 2,
            experience: 300,
            inspiration: 0,
            abilities: [
              {
                id: "1",
                name: "Strength",
                score: 11,
                modifier: 0,
                __typename: "CharacterAbility",
              },
              {
                id: "2",
                name: "Dexterity",
                score: 11,
                modifier: 0,
                __typename: "CharacterAbility",
              },
              {
                id: "3",
                name: "Constitution",
                score: 11,
                modifier: 0,
                __typename: "CharacterAbility",
              },
              {
                id: "4",
                name: "Intelligence",
                score: 11,
                modifier: 0,
                __typename: "CharacterAbility",
              },
              {
                id: "5",
                name: "Wisdom",
                score: 11,
                modifier: 0,
                __typename: "CharacterAbility",
              },
              {
                id: "6",
                name: "Charisma",
                score: 11,
                modifier: 0,
                __typename: "CharacterAbility",
              },
            ],
            skills: [
              {
                id: "1",
                name: "Acrobatics",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "2",
                  name: "Dexterity",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "2",
                name: "Athletics",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "1",
                  name: "Strength",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "3",
                name: "Animal Handling",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "5",
                  name: "Wisdom",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "4",
                name: "Arcana",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "4",
                  name: "Intelligence",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "5",
                name: "Deception",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "6",
                  name: "Charisma",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "6",
                name: "History",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "4",
                  name: "Intelligence",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "7",
                name: "Insight",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "5",
                  name: "Wisdom",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "8",
                name: "Intimidation",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "6",
                  name: "Charisma",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "9",
                name: "Investigation",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "4",
                  name: "Intelligence",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "10",
                name: "Medicine",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "5",
                  name: "Wisdom",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "11",
                name: "Nature",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "4",
                  name: "Intelligence",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "12",
                name: "Perception",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "5",
                  name: "Wisdom",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "13",
                name: "Performance",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "6",
                  name: "Charisma",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "14",
                name: "Persuasion",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "6",
                  name: "Charisma",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "15",
                name: "Religion",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "4",
                  name: "Intelligence",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "16",
                name: "Sleight of Hand",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "2",
                  name: "Dexterity",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "17",
                name: "Stealth",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "2",
                  name: "Dexterity",
                  __typename: "CharacterAbility",
                },
              },
              {
                id: "18",
                name: "Survival",
                modifier: 0,
                isProficient: false,
                ability: {
                  id: "5",
                  name: "Wisdom",
                  __typename: "CharacterAbility",
                },
              },
            ],
            alignment: {
              name: "Lawful Good",
              id: "1",
              __typename: "Alignment",
            },
            background: "Jedi Master",
            race: { id: "4", name: "Human", __typename: "CharacterRace" },
            classes: [{ id: "6", name: "Monk", __typename: "CharacterClass" }],
            traits: "",
            ideals: "",
            bonds: "",
            flaws: "",
            __typename: "Character",
          },
          __typename: "Query",
        })
      );
    }
  ),
];
