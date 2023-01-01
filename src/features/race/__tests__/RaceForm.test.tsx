import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { races } from "../../../api/race"
import { CharacterProvider } from "../../../context"
import RaceForm from "../RaceForm"

test.each(races)(
  "should render $id page",
  async ({
    id,
    name,
    description,
    details: { abilityScoreIncrease, age, alignment, size, speed },
  }) => {
    render(<RaceForm setRaceId={vi.fn()} defaultValues={{ id }} />, {
      wrapper: CharacterProvider,
    })

    screen.getByRole("heading", { name })
    screen.getByText(description)

    screen.getByText("Ability Score Increase.")
    screen.getByText(abilityScoreIncrease)
    screen.getByText("Age.")
    screen.getByText(age)
    screen.getByText("Alignment.")
    screen.getByText(alignment)
    screen.getByText("Size.")
    screen.getByText(size)
    screen.getByText("Speed.")
    screen.getByText(speed)

    screen.getByRole("button", { name: "Back" })
    screen.getByRole("button", { name: "Save" })

    await userEvent.click(screen.getByRole("button", { name: "Save" }))
    await screen.findByText("Selected")
    screen.getByRole("button", { name: "Change" })
  }
)

test("should return error if race does not exist", () => {
  render(<RaceForm setRaceId={vi.fn()} defaultValues={{ id: "bad-id" }} />, {
    wrapper: CharacterProvider,
  })

  screen.getByText("Error")
})

// TODO: should press back/change button
