import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "../components/Button";
import { useAlignmentsQuery } from "../utils/graphql";
import Notification from "../components/Notification";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  level: Yup.number()
    .typeError("Level must be between 1 and 20")
    .integer("Level must be between 1 and 20")
    .min(1, "Level must be between 1 and 20")
    .max(20, "Level must be between 1 and 20")
    .required(),
});

export interface CharacterDetailsFormValues {
  name?: string;
  level?: number;
  alignmentId?: string;
  background?: string;
  traits?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
}

interface CharacterDetailsFormProps {
  defaultValues: CharacterDetailsFormValues;
  onSubmit: (data: CharacterDetailsFormValues) => void;
}

function CharacterDetailsForm({
  defaultValues,
  onSubmit,
}: CharacterDetailsFormProps) {
  const { data, loading, error } = useAlignmentsQuery();

  if (error) return <Notification>{error.message}</Notification>;

  const { alignments } = data || {};

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
  } = useForm<CharacterDetailsFormValues>({
    mode: "onTouched",
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Button type="submit" disabled={!isDirty} loading={isSubmitting}>
          Save
        </Button>{" "}
        <Button
          variant="secondary"
          disabled={!isDirty}
          onClick={() => reset(defaultValues)}
        >
          Reset
        </Button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        {errors?.name && <span>{errors.name.message}</span>}
        <input type="text" id="name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="level">Level</label>
        {errors?.level && <span>{errors.level.message}</span>}
        <input
          type="number"
          id="level"
          {...register("level", { valueAsNumber: true })}
        />
      </div>
      <div>
        <label htmlFor="background">Background</label>
        <input type="text" id="background" {...register("background")} />
      </div>
      <div>
        <label htmlFor="alignmentId">Alignment</label>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <select id="alignmentId" {...register("alignmentId")}>
            <option value="" disabled></option>
            {alignments?.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        <label htmlFor="traits">Traits</label>
        <textarea id="traits" rows={4} {...register("traits")}></textarea>
      </div>
      <div>
        <label htmlFor="ideals">Ideals</label>
        <textarea id="ideals" rows={4} {...register("ideals")}></textarea>
      </div>
      <div>
        <label htmlFor="bonds">Bonds</label>
        <textarea id="bonds" rows={4} {...register("bonds")}></textarea>
      </div>
      <div>
        <label htmlFor="flaws">Flaws</label>
        <textarea id="flaws" rows={4} {...register("flaws")}></textarea>
      </div>
    </form>
  );
}

export default CharacterDetailsForm;
