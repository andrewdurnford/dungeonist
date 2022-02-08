import { graphql } from "msw";
import {
  CharacterQuery,
  CharacterQueryVariables,
  CharactersQuery,
  MeQuery,
  RaceQuery,
  RaceQueryVariables,
} from "../utils/graphql";

const api = graphql.link(
  import.meta.env.PROD ? "https://example.com" : import.meta.env.VITE_API_URL
);

export const handlers = [
  api.query<MeQuery>("Me", (req, res, ctx) => {
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
  api.query<CharactersQuery>("Characters", (req, res, ctx) => {
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
  api.query<CharacterQuery, CharacterQueryVariables>(
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
  api.query<RaceQuery, RaceQueryVariables>("Race", (req, res, ctx) => {
    if (req.variables.id === "1") {
      return res(
        ctx.data({
          race: {
            id: "1",
            name: "Dwarf",
            description:
              "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
            age: "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
            alignment:
              "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
            size: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
            speed:
              "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "3", name: "Constituion" },
                increase: 2,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }

    if (req.variables.id === "2") {
      return res(
        ctx.data({
          race: {
            id: "2",
            name: "Elf",
            description:
              "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
            age: "Although elves reach physical maturity at about the same age as  humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
            alignment:
              "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others' freedom as well as their own, and they are more often good than not.",
            size: "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
            speed: "Your base walking speed is 30 feet.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "3", name: "Constituion" },
                increase: 2,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "3") {
      return res(
        ctx.data({
          race: {
            id: "3",
            name: "Halfling",
            description:
              "Your halfling character has a number of traits in common with all other halflings.",
            age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
            alignment:
              "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for opression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
            size: "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
            speed: "Your base walking speed is 25 feet.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "2", name: "Dexterity" },
                increase: 2,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "4") {
      return res(
        ctx.data({
          race: {
            id: "4",
            name: "Human",
            description:
              "It's hard to make generalizations about humans, but your human character has these traits.",
            age: "Humans reach adulthood in their late teens and live less than a century.",
            alignment:
              "Humans tend toward no particular alignment. The best and the worst are found among them.",
            size: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size of Medium.",
            speed: "Your base walking speed is 30 feet.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "1", name: "Strength" },
                increase: 1,
              },
              {
                id: "2",
                ability: { id: "2", name: "Dexterity" },
                increase: 1,
              },
              {
                id: "3",
                ability: { id: "3", name: "Constituion" },
                increase: 1,
              },
              {
                id: "4",
                ability: { id: "4", name: "Intelligence" },
                increase: 1,
              },
              {
                id: "5",
                ability: { id: "5", name: "Wisdom" },
                increase: 1,
              },
              {
                id: "6",
                ability: { id: "6", name: "Charisma" },
                increase: 1,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "5") {
      return res(
        ctx.data({
          race: {
            id: "5",
            name: "Dragonborn",
            description:
              "Your draconic heritage manifests in a variety of traits you share with other dragonborn.",
            age: "Young dragonborn grow quickly. They walk hours after hatching, attiain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
            alignment:
              "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
            size: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
            speed: "Your base walking speed is 30 feet.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "1", name: "Strength" },
                increase: 2,
              },
              {
                id: "2",
                ability: { id: "6", name: "Charisma" },
                increase: 1,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "6") {
      return res(
        ctx.data({
          race: {
            id: "6",
            name: "Gnome",
            description:
              "Your gnome character has certain characteristics in common with all other gnomes.",
            age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
            alignment:
              "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
            size: "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
            speed: "Your base walking speed is 25 feet.",
            abilityScoreIncreases: [
              {
                id: "2",
                ability: { id: "4", name: "Intelligence" },
                increase: 1,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "7") {
      return res(
        ctx.data({
          race: {
            id: "7",
            name: "Half-Elf",
            description:
              "Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",
            age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
            alignment:
              "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others' demands, and sometimes provde unreliable, or at least unpredictable.",
            size: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
            speed: "Your base walking speed is 30 feet.",
            // TODO: choose 2 others to increase by 1
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "6", name: "Charisma" },
                increase: 1,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "8") {
      return res(
        ctx.data({
          race: {
            id: "8",
            name: "Half-Orc",
            description:
              "Your half-orc character has certain traits deriving from your orc ancestry.",
            age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
            alignment:
              "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live our their lives among them are usually evil.",
            size: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
            speed: "Your base walking speed is 30 feet.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "1", name: "Strength" },
                increase: 2,
              },
              {
                id: "2",
                ability: { id: "2", name: "Constitution" },
                increase: 1,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
    if (req.variables.id === "9") {
      return res(
        ctx.data({
          race: {
            id: "9",
            name: "Tiefling",
            description:
              "Tieflings share certain racial traits as a result of their infernal descent.",
            age: "Tieflings mature at the same rate as humans but live a few years longer.",
            alignment:
              "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inlines many tieflings toward a chaotic alignment.",
            size: "Tieflings are about the same size and build as humans. Your size is Medium.",
            speed: "Your base walking speed is 30 feet.",
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "4", name: "Intelligence" },
                increase: 1,
              },
              {
                id: "2",
                ability: { id: "6", name: "Charisma" },
                increase: 2,
              },
            ],
            __typename: "Race",
          },
        })
      );
    }
  }),
];
