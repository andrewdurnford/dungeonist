import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Container from "../components/Container";

interface CharacterCreateFormValues {
  name?: string;
}

interface CreateCharacterFormProps {
  onSubmit: (data: CharacterCreateFormValues) => void;
}

function CharacterCreateForm({ onSubmit }: CreateCharacterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CharacterCreateFormValues>({
    mode: "onTouched",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container direction="column">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <Button type="submit" loading={isSubmitting}>
          Create
        </Button>
      </Container>
    </form>
  );
}

export default CharacterCreateForm;
