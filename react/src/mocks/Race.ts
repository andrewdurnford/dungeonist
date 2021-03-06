import { graphql } from "msw";
import { RaceQuery, RaceQueryVariables } from "../utils/graphql";

export const handlers = [
  graphql.query<RaceQuery, RaceQueryVariables>("Race", (req, res, ctx) => {
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
            languages:
              "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
            traits: [
              {
                id: "1",
                name: "Darkvision",
                description:
                  "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
              },
              {
                id: "2",
                name: "Dwarven Resilience",
                description:
                  "You have advantage on saving throws against poison, and you have resistance against poison damage.",
              },
              {
                id: "3",
                name: "Dwarven Combat Training",
                description:
                  "You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.",
              },
              {
                id: "4",
                name: "Tool Proficiency",
                description:
                  "You gain proficiency with the artisan's tools of your choice: smith's tools, brewer's supplies, or mason's tools.",
              },
              {
                id: "5",
                name: "Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
                description: "",
              },
            ],
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "3", name: "Constitution" },
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
            languages:
              "You can speak, read, and write Common and Elvish. Elvish is fluid, with subtle intonations and intricate grammar. Elven literature is rich and varied, and their songs and poems are famous among other races. Many bards learn their language so they can add Elvish ballads to their repertoires.",
            traits: [
              {
                id: "1",
                name: "Darkvision",
                description:
                  "Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
              },
              {
                id: "2",
                name: "Keen Senses",
                description: "You have proficiency in the Perception skill.",
              },
              {
                id: "3",
                name: "Fey Ancestry",
                description:
                  "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
              },
              {
                id: "4",
                name: "Trance",
                description:
                  'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
              },
            ],
            abilityScoreIncreases: [
              {
                id: "1",
                ability: { id: "3", name: "Constitution" },
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
            languages:
              "You can speak, read, and write Common and Halfling. The Halfling language isn't secret, but halflings are ",
            traits: [
              {
                id: "1",
                name: "Lucky",
                description:
                  "When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.",
              },
              {
                id: "2",
                name: "Brave",
                description:
                  "You have advantage on saving throws against being frightened.",
              },
              {
                id: "3",
                name: "Halfling Nimbleness",
                description:
                  "You can move through the space of any creature that is of a size larger than yours.",
              },
            ],
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
            languages:
              "You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.",
            traits: [],
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
                ability: { id: "3", name: "Constitution" },
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
            languages:
              "You can speak, read, and write Common and Draconic. Draconic is thought to be one of the oldest languages and is often used in the study of magic. The language sounds harsh to most other creatures and includes numerous hard consonants and sibilants.",
            traits: [
              {
                id: "1",
                name: "Draconic Ancestry",
                description:
                  "You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
              },
              // TODO: Breath Weapon
              {
                id: "2",
                name: "Damage Resistance",
                description:
                  "You have resistance to the damage type associated with your draconic ancestry",
              },
            ],
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
            languages:
              "You can speak, read, and write Common and Gnomish. The Gnomish language, which uses the Dwarvish script, is renowned for its technical treatises and its catalogs of knowledge about the natural world.",
            traits: [
              {
                id: "1",
                name: "Darkvision",
                description:
                  "Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
              },
              {
                id: "2",
                name: "Gnome Cunning",
                description:
                  "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
              },
            ],
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
            languages:
              "You can speak, read, and write Common, Elvish, and one extra language of your choice.",
            // TODO: choose 2 others to increase by 1
            traits: [
              {
                id: "1",
                name: "Darkvision",
                description:
                  "Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
              },
              {
                id: "2",
                name: "Fey Ancestry",
                description:
                  "You have advantage on saving throws against being charmed, and magic can't put you to sleep.",
              },
              {
                id: "3",
                name: "You gain proficiency in two skills of your choice.",
                description: "",
              },
            ],
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
            languages:
              "You can speak, read, and write Common and Orc. Orc is a harsh, grating language with hard consonants. It has no script of its own but is written in the Dwarvish script.",
            traits: [
              {
                id: "1",
                name: "Darkvision",
                description:
                  "Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
              },
              {
                id: "2",
                name: "Menacing",
                description: "You gain proficiency in the Intimidation skill.",
              },
              {
                id: "3",
                name: "Relentless Endurance",
                description:
                  "When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can't use this feature again until you finish a long rest.",
              },
              {
                id: "4",
                name: "Savage Attacks",
                description:
                  "When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
              },
            ],
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
            languages: "You can speak, read, and write Common and Infernal.",
            traits: [
              {
                id: "1",
                name: "Darkvision",
                description:
                  "Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of gray.",
              },
              {
                id: "2",
                name: "Hellish Resistance",
                description: "You have resistance to fire damage.",
              },
              {
                id: "3",
                name: "Infernal Legacy",
                description:
                  "You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
              },
            ],
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
