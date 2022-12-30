import { Ability } from "./ability"

type Race = {
  id: string
  name: string
  description: string
  abilityScoreIncrease: Array<{ ability: Ability; increase: number }>
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
  },
  {
    id: "elf",
    name: "Elf",
    description:
      "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement.",
    abilityScoreIncrease: [{ ability: "dexterity", increase: 2 }],
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
  },
  {
    id: "gnome",
    name: "Gnome",
    description:
      "Your gnome character has certain characteristics in common with all other gnomes.",
    abilityScoreIncrease: [{ ability: "intelligence", increase: 2 }],
  },
  {
    id: "half-elf",
    name: "Half-Elf",
    description:
      "Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",
    abilityScoreIncrease: [{ ability: "charisma", increase: 2 }],
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
  },
]
