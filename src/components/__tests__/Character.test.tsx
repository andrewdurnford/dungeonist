import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import App from "../App"

test("should render character header", () => {
  render(
    <MemoryRouter initialEntries={["/character"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: /character/i })
  expect(screen.getByRole("link", { name: /details/i })).toHaveAttribute(
    "href",
    "/character"
  )
  expect(screen.getByRole("link", { name: /race/i })).toHaveAttribute(
    "href",
    "/character/race"
  )
})

test("should render character details page", () => {
  render(
    <MemoryRouter initialEntries={["/character"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: /abilities/i })
  screen.getAllByText("+0")
  screen.getAllByText("10")
  screen.getAllByText(/str/i)
  screen.getAllByText(/dex/i)
  screen.getAllByText(/con/i)
  screen.getAllByText(/int/i)
  screen.getAllByText(/wis/i)
  screen.getAllByText(/cha/i)

  screen.getAllByRole("heading", { name: /skills/i })
  screen.getAllByText("+0")
  screen.getAllByText(/acrobatics/i)
  screen.getAllByText(/animal handling/i)
  screen.getAllByText(/arcana/i)
  screen.getAllByText(/athletics/i)
  screen.getAllByText(/deception/i)
  screen.getAllByText(/history/i)
  screen.getAllByText(/insight/i)
  screen.getAllByText(/intimidation/i)
  screen.getAllByText(/investigation/i)
  screen.getAllByText(/medicine/i)
  screen.getAllByText(/nature/i)
  screen.getAllByText(/perception/i)
  screen.getAllByText(/performance/i)
  screen.getAllByText(/persuasion/i)
  screen.getAllByText(/religion/i)
  screen.getAllByText(/sleight of hand/i)
  screen.getAllByText(/stealth/i)
  screen.getAllByText(/survival/i)
})

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

test("should render character race page", () => {
  render(
    <MemoryRouter initialEntries={["/character/race/dwarf"]}>
      <App />
    </MemoryRouter>
  )

  screen.getByRole("heading", { name: "Dwarf" })
})
