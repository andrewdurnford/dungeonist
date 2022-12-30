import { Character } from "./context"
import { reducer } from "./reducer"

const initialState: Character = {
  name: "Untitled",
  level: 1,
  race: null,
  abilities: [
    { id: "strength", name: "Strength", score: 10 },
    { id: "constitution", name: "Constitution", score: 10 },
  ],
}

test("should set name", () => {
  const state = reducer(initialState, {
    type: "setName",
    payload: { name: "Test" },
  })
  expect(state).toStrictEqual({ ...initialState, name: "Test" })
})

test("should set level", () => {
  const state = reducer(initialState, {
    type: "setLevel",
    payload: { level: 10 },
  })
  expect(state).toStrictEqual({ ...initialState, level: 10 })
})

test("should return initial state for invalid type", () => {
  const state = reducer(initialState, {
    // @ts-ignore
    type: "non-existant",
  })
  expect(state).toStrictEqual(initialState)
})

test("should return initial state for invalid race", () => {
  const state = reducer(initialState, {
    type: "setRace",
    payload: { race: "bad-race" },
  })
  expect(state).toStrictEqual(initialState)
})

test("should set race", () => {
  const state = reducer(initialState, {
    type: "setRace",
    payload: { race: "dwarf" },
  })
  expect(state).toStrictEqual({
    ...initialState,
    race: "dwarf",
    abilities: [
      { id: "strength", name: "Strength", score: 10, modifier: 0 },
      {
        id: "constitution",
        name: "Constitution",
        score: 12,
        modifier: 1,
      },
    ],
  })
})
