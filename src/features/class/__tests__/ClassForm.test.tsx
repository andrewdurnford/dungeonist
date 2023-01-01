import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { classes } from "../../../api/class"
import { CharacterProvider } from "../../../context"
import ClassForm from "../ClassForm"

test.each(classes)("should render $id page", async ({ id, name }) => {
  render(<ClassForm setClassId={vi.fn()} defaultValues={{ id }} />, {
    wrapper: CharacterProvider,
  })

  screen.getByRole("heading", { name })
  screen.getByRole("button", { name: "Back" })
  screen.getByRole("button", { name: "Save" })

  await userEvent.click(screen.getByRole("button", { name: "Save" }))
  screen.getByText("Selected")
  screen.getByRole("button", { name: "Change" })
})

test("should return error if class does not exist", () => {
  render(<ClassForm setClassId={vi.fn()} defaultValues={{ id: "bad-id" }} />, {
    wrapper: CharacterProvider,
  })

  screen.getByText("Error")
})

// TODO: should press back/change button
