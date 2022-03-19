import { useForm } from "react-hook-form";
import Button from "../components/Button";
import Notification from "../components/Notification";
import { useClassesQuery } from "../utils/graphql";

export interface CharacterClassFormValues {
  classId?: string;
}

interface CharacterClassFormProps {
  defaultValues: CharacterClassFormValues;
  onSubmit: (data: CharacterClassFormValues) => void;
  onChange: (classId: string) => void;
}

function CharacterClassForm({
  defaultValues,
  onSubmit,
  onChange,
}: CharacterClassFormProps) {
  const { data, loading, error } = useClassesQuery();

  if (error) return <Notification>{error.message}</Notification>;

  const { classes } = data || {};

  const {
    register,
    reset,
    handleSubmit,
    formState: { isDirty, isSubmitting },
  } = useForm<CharacterClassFormValues>({
    mode: "onTouched",
    defaultValues,
  });

  const classId = register("classId");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Button type="submit" disabled={!isDirty} loading={isSubmitting}>
          Save
        </Button>{" "}
        <Button
          variant="secondary"
          disabled={!isDirty}
          onClick={() => {
            reset(defaultValues);
            onChange(defaultValues.classId ?? "");
          }}
        >
          Reset
        </Button>
      </div>
      <div>
        <label htmlFor="classId">Class</label>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <select
            id="classId"
            {...register("classId")}
            onChange={(e) => {
              onChange(e.target.value);
              classId.onChange(e);
            }}
          >
            <option value="" disabled></option>
            {classes?.map(({ id, name }) => (
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

export default CharacterClassForm;
