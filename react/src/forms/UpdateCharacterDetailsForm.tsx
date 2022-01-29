import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from "styled-components";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";

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
  alignmentId?: string;
  background?: string;
  traits?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
};

interface UpdateCharacterDetailsFormProps extends UpdateCharacterDetailsInput {
  loading?: boolean;
  onSubmit: (data: UpdateCharacterDetailsInput) => void;
}

function UpdateCharacterDetailsForm({
  name,
  level,
  alignmentId,
  background,
  traits,
  ideals,
  bonds,
  flaws,
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
      level,
      alignmentId,
      background,
      traits,
      ideals,
      bonds,
      flaws,
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
        <Input
          type="text"
          label="Background"
          placeholder="Acolyte"
          error={errors.background?.message}
          {...register("background")}
        />
        <Select
          label="Alignment"
          error={errors.alignmentId?.message}
          defaultChecked={false}
          {...register("alignmentId")}
        >
          {/* 
            TODO: remove empty option without showing the first
            alignment as selected (even though it isn't) when
            default value is ""
          */}
          <option value="" selected disabled></option>
          {/* TODO: query this from the api */}
          <option value="1">Lawful Good</option>
          <option value="2">Neutral Good</option>
          <option value="3">Chaotic Good</option>
          <option value="4">Lawful Neutral</option>
          <option value="5">Neutral</option>
          <option value="6">Chaotic Neutral</option>
          <option value="7">Lawful Evil</option>
          <option value="8">Neutral Evil</option>
          <option value="9">Chaotic Evil</option>
        </Select>
        <TextArea
          label="Personality traits"
          error={errors.traits?.message}
          {...register("traits")}
        />
        <TextArea
          label="Ideals"
          error={errors.ideals?.message}
          {...register("ideals")}
        />
        <TextArea
          label="Bonds"
          error={errors.bonds?.message}
          {...register("bonds")}
        />
        <TextArea
          label="Flaws"
          error={errors.flaws?.message}
          {...register("flaws")}
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
