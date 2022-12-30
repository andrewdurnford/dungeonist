import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { races } from "../../api/race"
import { CharacterProvider } from "../../context"
import App from "../App"
import CharacterRace from "../CharacterRace"

test.each(races)(
  "should render $id page",
  async ({ id, name, description }) => {
    render(
      <MemoryRouter initialEntries={[`/character/race/${id}`]}>
        <App />
      </MemoryRouter>,
      { wrapper: CharacterProvider }
    )

    screen.getByRole("heading", { name })
    screen.getByText(description)

    userEvent.click(screen.getByRole("button", { name: "Save" }))
    await waitFor(() =>
      expect(
        screen.queryByRole("button", { name: "Save" })
      ).not.toBeInTheDocument()
    )
    screen.getByText("Selected")
  }
)

test("should return error if raceId is not provided", () => {
  render(
    <MemoryRouter>
      <CharacterRace />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  screen.getByText("raceId not found")
})

test("should return error if race does not exist", () => {
  render(
    <MemoryRouter initialEntries={["/character/race/bad-id"]}>
      <App />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  screen.getByText("Error: race not found")
})
