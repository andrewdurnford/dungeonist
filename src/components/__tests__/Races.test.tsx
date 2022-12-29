import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "../App"

test("should render races page", () => {
  render(
    <MemoryRouter initialEntries={["/character/race"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: /race/i })

  expect(screen.getByRole("link", { name: "Dwarf" })).toHaveAttribute(
    "href",
    "/character/race/dwarf"
  )
  expect(screen.getByRole("link", { name: "Elf" })).toHaveAttribute(
    "href",
    "/character/race/elf"
  )
  expect(screen.getByRole("link", { name: "Halfling" })).toHaveAttribute(
    "href",
    "/character/race/halfling"
  )
  expect(screen.getByRole("link", { name: "Human" })).toHaveAttribute(
    "href",
    "/character/race/human"
  )
  expect(screen.getByRole("link", { name: "Dragonborn" })).toHaveAttribute(
    "href",
    "/character/race/dragonborn"
  )
  expect(screen.getByRole("link", { name: "Gnome" })).toHaveAttribute(
    "href",
    "/character/race/gnome"
  )
  expect(screen.getByRole("link", { name: "Half-Elf" })).toHaveAttribute(
    "href",
    "/character/race/half-elf"
  )
  expect(screen.getByRole("link", { name: "Half-Orc" })).toHaveAttribute(
    "href",
    "/character/race/half-orc"
  )
  expect(screen.getByRole("link", { name: "Tiefling" })).toHaveAttribute(
    "href",
    "/character/race/tiefling"
  )
})
