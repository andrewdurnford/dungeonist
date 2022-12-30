import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "../App"

test("should render races page", () => {
  render(
    <MemoryRouter initialEntries={["/character/class"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: /class/i })

  expect(screen.getByRole("link", { name: "Barbarian" })).toHaveAttribute(
    "href",
    "/character/class/barbarian"
  )
  expect(screen.getByRole("link", { name: "Bard" })).toHaveAttribute(
    "href",
    "/character/class/bard"
  )
  expect(screen.getByRole("link", { name: "Cleric" })).toHaveAttribute(
    "href",
    "/character/class/cleric"
  )
  expect(screen.getByRole("link", { name: "Druid" })).toHaveAttribute(
    "href",
    "/character/class/druid"
  )
  expect(screen.getByRole("link", { name: "Fighter" })).toHaveAttribute(
    "href",
    "/character/class/fighter"
  )
  expect(screen.getByRole("link", { name: "Monk" })).toHaveAttribute(
    "href",
    "/character/class/monk"
  )
  expect(screen.getByRole("link", { name: "Paladin" })).toHaveAttribute(
    "href",
    "/character/class/paladin"
  )
  expect(screen.getByRole("link", { name: "Ranger" })).toHaveAttribute(
    "href",
    "/character/class/ranger"
  )
  expect(screen.getByRole("link", { name: "Rogue" })).toHaveAttribute(
    "href",
    "/character/class/rogue"
  )
  expect(screen.getByRole("link", { name: "Sorcerer" })).toHaveAttribute(
    "href",
    "/character/class/sorcerer"
  )
  expect(screen.getByRole("link", { name: "Warlock" })).toHaveAttribute(
    "href",
    "/character/class/warlock"
  )
  expect(screen.getByRole("link", { name: "Wizard" })).toHaveAttribute(
    "href",
    "/character/class/wizard"
  )
})
