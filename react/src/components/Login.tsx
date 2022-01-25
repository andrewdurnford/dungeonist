import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../utils/graphql";

type LoginInput = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const [signup, { loading, error }] = useLoginMutation({
    onError: (err) => console.error(err),
    onCompleted: ({ login }) => {
      localStorage.setItem("token", String(login));
      navigate("/");
    },
    // TODO: update user cache
  });
  const { register, handleSubmit } = useForm<LoginInput>();
  const onSubmit = handleSubmit(({ email, password }) =>
    signup({ variables: { input: { email, password } } })
  );

  return (
    <div>
      <h1>Login</h1>
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

export default Login;
