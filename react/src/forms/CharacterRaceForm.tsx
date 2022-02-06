import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../components/Container";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Subtitle from "../components/SubTitle";
import { UpdateCharacterDetailsInput } from "../utils/graphql";

type CharacterRaceForm = {
  raceId?: string;
};

interface UpdateCharacterDetailsFormProps extends CharacterRaceForm {
  loading?: boolean;
  onCancel: () => void;
  onSubmit: (data: UpdateCharacterDetailsInput) => void;
}

function CharacterRaceForm({
  raceId,
  loading,
  onCancel,
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
              {...register("raceId")}
            >
              <option value="" selected disabled></option>
              {/* TODO: query this from the api */}
              <option value="1">Dwarf</option>
              <option value="2">Elf</option>
              <option value="3">Halfling</option>
              <option value="4">Human</option>
              <option value="5">Dragonborn</option>
              <option value="6">Gnome</option>
              <option value="7">Elf</option>
              <option value="8">Orc</option>
              <option value="9">Tiefling</option>
            </Select>
          </Container>
        </Container>
      </Container>
    </form>
  );
}

export default CharacterRaceForm;
