import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import Container from "../components/Container";

const schema = Yup.object().shape({
  name: Yup.string(),
});

type CreateCharacterInput = {
  name?: string;
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
        <Button type="submit" loading={loading}>
          Create
        </Button>
      </Container>
    </form>
  );
}

export default CreateCharacterForm;
