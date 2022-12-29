import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { races } from "../../api/race"
import App from "../App"
import CharacterRace from "../CharacterRace"

test.each(races)("should render $id page", ({ id, name, description }) => {
  render(
    <MemoryRouter initialEntries={[`/character/race/${id}`]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name })
  screen.getByText(description)
})

test("should return error if raceId is not provided", () => {
  render(
    <MemoryRouter initialEntries={["/character/race/dwarf"]}>
      <CharacterRace />
    </MemoryRouter>
  )

  screen.getByText("raceId not found")
})

test("should return error if race does not exist", () => {
  render(
    <MemoryRouter initialEntries={["/character/race/bad-id"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByText("Error: race not found")
})
