import { render, screen } from "@testing-library/react"
import { CharacterProvider } from "../../../context"
import ClassList from "../ClassList"

test("should render classes page", () => {
  render(<ClassList setClassId={vi.fn()} />, { wrapper: CharacterProvider })

  screen.getByRole("button", { name: "Barbarian" })
  screen.getByRole("button", { name: "Bard" })
  screen.getByRole("button", { name: "Cleric" })
  screen.getByRole("button", { name: "Druid" })
  screen.getByRole("button", { name: "Fighter" })
  screen.getByRole("button", { name: "Monk" })
  screen.getByRole("button", { name: "Paladin" })
  screen.getByRole("button", { name: "Ranger" })
  screen.getByRole("button", { name: "Rogue" })
  screen.getByRole("button", { name: "Sorcerer" })
  screen.getByRole("button", { name: "Warlock" })
  screen.getByRole("button", { name: "Wizard" })
})
