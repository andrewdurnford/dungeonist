import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Notification from "../components/Notification";
import { useRacesQuery } from "../utils/graphql";

export interface CharacterRaceFormValues {
  raceId?: string;
}

interface CharacterRaceFormProps {
  defaultValues: CharacterRaceFormValues;
  onSubmit: (data: CharacterRaceFormValues) => void;
  onChange: (raceId: string) => void;
}

function CharacterRaceForm({
  defaultValues,
  onSubmit,
  onChange,
}: CharacterRaceFormProps) {
  const { data, loading, error } = useRacesQuery();

  if (error) return <Notification>{error.message}</Notification>;

  const { races } = data || {};

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CharacterRaceFormValues>({
    mode: "onTouched",
    defaultValues,
  });

  const raceId = register("raceId");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Button type="submit" loading={isSubmitting}>
          Save
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => {
            reset(defaultValues);
            onChange(defaultValues.raceId ?? "");
          }}
        >
          Reset
        </Button>
      </div>
      <div>
        <label htmlFor="raceId">Race</label>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <select
            id="raceId"
            {...register("raceId")}
            onChange={(e) => {
              onChange(e.target.value);
              raceId.onChange(e);
            }}
          >
            <option value="" disabled></option>
            {races?.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        )}
      </div>
    </form>
  );
}

export default CharacterRaceForm;
