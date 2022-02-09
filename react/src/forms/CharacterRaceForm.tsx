import { useForm } from "react-hook-form";
import Container from "../components/Container";
import Select from "../components/Select";
import Subtitle from "../components/Subtitle";
import { UpdateCharacterDetailsInput } from "../utils/graphql";

type CharacterRaceForm = {
  raceId?: string;
};

interface UpdateCharacterDetailsFormProps extends CharacterRaceForm {
  races: Array<{ id: string; name: string }>;
  loading?: boolean;
  onChange: (raceId: string) => void;
  onCancel: () => void;
  onSubmit: (data: UpdateCharacterDetailsInput) => void;
}

function CharacterRaceForm({
  raceId,
  races,
  loading,
  onChange,
  onCancel, // TODO: update to onReset?
  onSubmit,
}: UpdateCharacterDetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCharacterDetailsInput>({
    mode: "onTouched",
    defaultValues: {
      raceId,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container direction="column" gap="16">
        <Subtitle name="Race" loading={loading} onReset={onCancel} />
        <Container gap="16" justifyContent="center">
          <Container as="section" direction="column" gap="16" flexGrow={1}>
            <Select
              label="Race"
              error={errors.raceId?.message}
              {...register("raceId", {
                onChange: (e: any) => onChange(e.target.value),
              })}
            >
              <option value="" selected disabled></option>
              {races.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </Container>
        </Container>
      </Container>
    </form>
  );
}

export default CharacterRaceForm;
