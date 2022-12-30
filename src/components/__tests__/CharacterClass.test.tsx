import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { classes } from "../../api/class"
import { CharacterProvider } from "../../context"
import App from "../App"
import CharacterClass from "../CharacterClass"

test.each(classes)("should render $id page", async ({ id, name }) => {
  render(
    <MemoryRouter initialEntries={[`/character/class/${id}`]}>
      <App />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  screen.getByRole("heading", { name })

  userEvent.click(screen.getByRole("button", { name: "Save" }))
  await waitFor(() =>
    expect(
      screen.queryByRole("button", { name: "Save" })
    ).not.toBeInTheDocument()
  )
  screen.getByText("Selected")
})

test("should return error if classId is not provided", () => {
  render(
    <MemoryRouter>
      <CharacterClass />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  screen.getByText("classId not found")
})

test("should return error if class does not exist", () => {
  render(
    <MemoryRouter initialEntries={["/character/class/bad-id"]}>
      <App />
    </MemoryRouter>,
    { wrapper: CharacterProvider }
  )

  screen.getByText("Error: class not found")
})
