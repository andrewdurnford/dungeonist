import { render, screen } from "@testing-library/react"
import { CharacterProvider } from "../../../context"
import RaceList from "../RaceList"

test("should render races page", () => {
  render(<RaceList setRaceId={vi.fn()} />, { wrapper: CharacterProvider })

  screen.getByRole("button", { name: "Dwarf" })
  screen.getByRole("button", { name: "Elf" })
  screen.getByRole("button", { name: "Halfling" })
  screen.getByRole("button", { name: "Human" })
  screen.getByRole("button", { name: "Dragonborn" })
  screen.getByRole("button", { name: "Gnome" })
  screen.getByRole("button", { name: "Half-Elf" })
  screen.getByRole("button", { name: "Half-Orc" })
  screen.getByRole("button", { name: "Tiefling" })
})
