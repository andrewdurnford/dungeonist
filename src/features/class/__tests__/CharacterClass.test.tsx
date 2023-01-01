import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { CharacterProvider } from "../../../context"
import CharacterClass from "../CharacterClass"

test("should set classId", async () => {
  render(
    <MemoryRouter>
      <CharacterClass />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  userEvent.click(screen.getByRole("button", { name: "Barbarian" }))

  await screen.findByText("Barbarian Features")
})
