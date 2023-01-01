import { Ability } from "./ability"

type Race = {
  id: string
  name: string
  description: string
  abilityScoreIncrease: Array<{ ability: Ability; increase: number }>
  details: {
    abilityScoreIncrease: string
    age: string
    alignment: string
    size: string
    speed: string
  }
}

export const races: Race[] = [
  {
    id: "dwarf",
    name: "Dwarf",
    description:
      "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
    abilityScoreIncrease: [
      {
        ability: "constitution",
        increase: 2,
      },
    ],
    details: {
      abilityScoreIncrease: "Your Constitution score increases by 2.",
      age: "Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.",
      alignment:
        "Most dwarves are lawful, believing firmly in the benefits of a well‑ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
      size: "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
      speed:
        "Your base walking speed is 25 feet. Your speed is not reduced by wearing heavy armor.",
    },
  },
  {
    id: "elf",
    name: "Elf",
    description:
      "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
    abilityScoreIncrease: [{ ability: "dexterity", increase: 2 }],
    details: {
      abilityScoreIncrease: "Your Dexterity score increases by 2.",
      age: "Although elves reach physical maturity at about the same age as humans, the elven understanding of adulthood goes beyond physical growth to encompass worldly experience. An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
      alignment:
        "Elves love freedom, variety, and self-expression, so they lean strongly toward the gentler aspects of chaos. They value and protect others’ freedom as well as their own, and they are more often good than not. The drow are an exception; their exile has made them vicious and dangerous. Drow are more often evil than not.",
      size: "Elves range from under 5 to over 6 feet tall and have slender builds. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
    },
  },
  {
    id: "halfling",
    name: "Halfling",
    description:
      "Your halfling character has a number of traits in common with all other halflings.",
    abilityScoreIncrease: [
      {
        ability: "dexterity",
        increase: 2,
      },
    ],
    details: {
      abilityScoreIncrease: "Your Dexterity score increases by 2.",
      age: "A halfling reaches adulthood at the age of 20 and generally lives into the middle of his or her second century.",
      alignment:
        "Most halflings are lawful good. As a rule, they are good-hearted and kind, hate to see others in pain, and have no tolerance for oppression. They are also very orderly and traditional, leaning heavily on the support of their community and the comfort of their old ways.",
      size: "Halflings average about 3 feet tall and weigh about 40 pounds. Your size is Small.",
      speed: "Your base walking speed is 25 feet.",
    },
  },
  {
    id: "human",
    name: "Human",
    description:
      "It’s hard to make generalizations about humans, but your human character has these traits.",
    abilityScoreIncrease: [
      { ability: "strength", increase: 1 },
      { ability: "dexterity", increase: 1 },
      { ability: "constitution", increase: 1 },
      { ability: "intelligence", increase: 1 },
      { ability: "wisdom", increase: 1 },
      { ability: "charisma", increase: 1 },
    ],
    details: {
      abilityScoreIncrease: "Your ability scores each increase by 1.",
      age: "Humans reach adulthood in their late teens and live less than a century.",
      alignment:
        "Humans tend toward no particular alignment. The best and the worst are found among them.",
      size: "Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
    },
  },
  {
    id: "dragonborn",
    name: "Dragonborn",
    description:
      "Your draconic heritage manifests in a variety of traits you share with other dragonborn.",
    abilityScoreIncrease: [
      { ability: "strength", increase: 2 },
      { ability: "charisma", increase: 1 },
    ],
    details: {
      abilityScoreIncrease:
        "Your Strength score increases by 2, and your Charisma score increases by 1.",
      age: "Young dragonborn grow quickly. They walk hours after hatching, attain the size and development of a 10-year-old human child by the age of 3, and reach adulthood by 15. They live to be around 80.",
      alignment:
        "Dragonborn tend to extremes, making a conscious choice for one side or the other in the cosmic war between good and evil. Most dragonborn are good, but those who side with evil can be terrible villains.",
      size: "Dragonborn are taller and heavier than humans, standing well over 6 feet tall and averaging almost 250 pounds. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
    },
  },
  {
    id: "gnome",
    name: "Gnome",
    description:
      "Your gnome character has certain characteristics in common with all other gnomes.",
    abilityScoreIncrease: [{ ability: "intelligence", increase: 2 }],
    details: {
      abilityScoreIncrease: "Your Intelligence score increases by 2.",
      age: "Gnomes mature at the same rate humans do, and most are expected to settle down into an adult life by around age 40. They can live 350 to almost 500 years.",
      alignment:
        "Gnomes are most often good. Those who tend toward law are sages, engineers, researchers, scholars, investigators, or inventors. Those who tend toward chaos are minstrels, tricksters, wanderers, or fanciful jewelers. Gnomes are good-hearted, and even the tricksters among them are more playful than vicious.",
      size: "Gnomes are between 3 and 4 feet tall and average about 40 pounds. Your size is Small.",
      speed: "Your base walking speed is 25 feet.",
    },
  },
  {
    id: "half-elf",
    name: "Half-Elf",
    description:
      "Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",
    abilityScoreIncrease: [{ ability: "charisma", increase: 2 }],
    details: {
      abilityScoreIncrease:
        "Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.",
      age: "Half-elves mature at the same rate humans do and reach adulthood around the age of 20. They live much longer than humans, however, often exceeding 180 years.",
      alignment:
        "Half-elves share the chaotic bent of their elven heritage. They value both personal freedom and creative expression, demonstrating neither love of leaders nor desire for followers. They chafe at rules, resent others’ demands, and sometimes prove unreliable, or at least unpredictable.",
      size: "Half-elves are about the same size as humans, ranging from 5 to 6 feet tall. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
    },
  },
  {
    id: "half-orc",
    name: "Half-Orc",
    description:
      "Your half-orc character has certain traits deriving from your orc ancestry.",
    abilityScoreIncrease: [
      { ability: "strength", increase: 2 },
      { ability: "constitution", increase: 1 },
    ],
    details: {
      abilityScoreIncrease:
        "Your Strength score increases by 2, and your Constitution score increases by 1.",
      age: "Half-orcs mature a little faster than humans, reaching adulthood around age 14. They age noticeably faster and rarely live longer than 75 years.",
      alignment:
        "Half-orcs inherit a tendency toward chaos from their orc parents and are not strongly inclined toward good. Half-orcs raised among orcs and willing to live out their lives among them are usually evil.",
      size: "Half-orcs are somewhat larger and bulkier than humans, and they range from 5 to well over 6 feet tall. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
    },
  },
  {
    id: "tiefling",
    name: "Tiefling",
    description:
      "Tieflings share certain racial traits as a result of their infernal descent.",
    abilityScoreIncrease: [
      { ability: "intelligence", increase: 2 },
      { ability: "charisma", increase: 1 },
    ],
    details: {
      abilityScoreIncrease:
        "Your Intelligence score increases by 1, and your Charisma score increases by 2.",
      age: "Tieflings mature at the same rate as humans but live a few years longer.",
      alignment:
        "Tieflings might not have an innate tendency toward evil, but many of them end up there. Evil or not, an independent nature inclines many tieflings toward a chaotic alignment.",
      size: "Tieflings are about the same size and build as humans. Your size is Medium.",
      speed: "Your base walking speed is 30 feet.",
    },
  },
]
