import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../components/Input";
import Button from "../components/Button";
import Flex from "../components/Flex";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

type SignupInput = {
  email: string;
  password: string;
};

interface SignupFormProps {
  loading?: boolean;
  onSubmit: (data: SignupInput) => void;
}

function SignupForm({ loading, onSubmit }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex>
        <Input
          type="text"
          label="Email"
          placeholder="example@gmail.com"
          error={errors.email?.message}
          required
          {...register("email")}
        />
        <Input
          type="password"
          label="Password"
          error={errors.password?.message}
          required
          {...register("password")}
        />
        <Button type="submit" loading={loading}>
          Sign up
        </Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
