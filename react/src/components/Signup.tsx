import { useForm } from "react-hook-form";
import { useSignupMutation } from "../utils/graphql";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";

type SignupInput = {
  email: string;
  password: string;
};

function Signup() {
  const [signup, { loading, error }] = useSignupMutation({
    onError: (err) => console.error(err),
  });
  const { register, handleSubmit } = useForm<SignupInput>();
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
            required
            {...register("email")}
          />
          <Input
            type="password"
            label="Password"
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
