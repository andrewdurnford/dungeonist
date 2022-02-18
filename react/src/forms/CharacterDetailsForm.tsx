import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Container from "../components/Container";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Select from "../components/Select";
import Subtitle from "../components/Subtitle";
import styled from "styled-components";

// TODO:  Container to not rely on 'width: 100%'
const Section = styled(Container).attrs({
  forwardedAs: "section",
  direction: "column",
  gap: "16",
  flexGrow: 1,
})`
  width: auto;
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

type CharacterDetailsInput = {
  name?: string;
  level?: number;
  alignmentId?: string;
  background?: string;
  traits?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
};

interface CharacterDetailsFormProps extends CharacterDetailsInput {
  alignments: Array<{ id: string; name: string }>;
  loading?: boolean;
  onSubmit: (data: CharacterDetailsInput) => void;
}

function CharacterDetailsForm({
  name,
  level,
  alignmentId,
  background,
  traits,
  ideals,
  bonds,
  flaws,
  alignments,
  loading,
  onSubmit,
}: CharacterDetailsFormProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<CharacterDetailsInput>({
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
      <Container direction="column" gap="16">
        <Subtitle
          name="Details"
          loading={loading}
          onReset={() =>
            reset(
              {
                alignmentId,
                background,
                bonds,
                flaws,
                ideals,
                level,
                name,
                traits,
              },
              { keepDefaultValues: true }
            )
          }
        />
        <Container wrap="wrap" gap="16" justifyContent="center">
          <Section>
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
              {...register("alignmentId")}
            >
              <option value="" disabled></option>
              {alignments.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </Select>
          </Section>
          <Section>
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
          </Section>
        </Container>
      </Container>
    </form>
  );
}

export default CharacterDetailsForm;
