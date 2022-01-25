import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSignupMutation } from "../utils/graphql";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";

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

function Signup() {
  const [signup, { loading, error }] = useSignupMutation({
    onError: (err) => console.error(err),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInput>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(({ email, password }) =>
    signup({ variables: { input: { email, password } } })
  );

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={onSubmit}>
        <Container>
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
        </Container>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Signup;
