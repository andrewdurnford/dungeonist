import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.25rem;
`;

const schema = Yup.object().shape({
  name: Yup.string(),
  level: Yup.number()
    .typeError("Level must be between 1 and 20")
    .integer("Level must be between 1 and 20")
    .strict()
    .min(1, "Level must be between 1 and 20")
    .max(20, "Level must be between 1 and 20"),
});

type UpdateCharacterDetailsInput = {
  name?: string;
  level?: number;
};

interface UpdateCharacterDetailsFormProps extends UpdateCharacterDetailsInput {
  loading?: boolean;
  onSubmit: (data: UpdateCharacterDetailsInput) => void;
}

function UpdateCharacterDetailsForm({
  name,
  level,
  loading,
  onSubmit,
}: UpdateCharacterDetailsFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateCharacterDetailsInput>({
    mode: "onTouched",
    defaultValues: {
      name,
      level: level ?? 1,
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
        <HorizontalContainer>
          <Button type="submit" loading={loading}>
            Update
          </Button>
          <Button variant="secondary">Cancel</Button>
        </HorizontalContainer>
      </Container>
    </form>
  );
}

export default UpdateCharacterDetailsForm;
