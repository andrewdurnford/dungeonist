import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const schema = Yup.object().shape({
  name: Yup.string(),
  level: Yup.number()
    .typeError("Level must be between 1 and 20")
    .integer("Level must be between 1 and 20")
    .strict()
    .min(1, "Level must be between 1 and 20")
    .max(20, "Level must be between 1 and 20"),
});

type CreateCharacterInput = {
  name?: string;
  level?: number;
};

interface CreateCharacterFormProps {
  loading?: boolean;
  onSubmit: (data: CreateCharacterInput) => void;
}

function CreateCharacterForm({ loading, onSubmit }: CreateCharacterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCharacterInput>({
    mode: "onTouched",
    defaultValues: {
      level: 1,
    },
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Input
          type="text"
          label="Name"
          placeholder="Untitled"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          type="number"
          label="Level"
          error={errors.level?.message}
          {...register("level", { valueAsNumber: true })}
        />
        <Button type="submit" loading={loading}>
          Create
        </Button>
      </Container>
    </form>
  );
}

export default CreateCharacterForm;
