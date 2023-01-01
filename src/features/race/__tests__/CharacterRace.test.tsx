import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { CharacterProvider } from "../../../context"
import CharacterRace from "../CharacterRace"

test("should set raceId", async () => {
  render(
    <MemoryRouter>
      <CharacterRace />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  userEvent.click(screen.getByRole("button", { name: "Dwarf" }))

  await screen.findByText("Dwarf Traits")
})
