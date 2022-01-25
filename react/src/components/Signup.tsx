import { useForm } from "react-hook-form";
import { useSignupMutation } from "../utils/graphql";

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
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        <button type="submit">Signup</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Signup;
