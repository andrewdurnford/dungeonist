import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../utils/graphql";
import Button from "./Button";

type LoginInput = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const [signup, { loading, error }] = useLoginMutation({
    onError: (err) => console.error(err),
    onCompleted: ({ login: { token } }) => {
      localStorage.setItem("token", token);
      navigate("/");
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          me() {
            return data?.login.user;
          },
        },
      });
    },
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
        <Button type="submit" loading={loading}>
          Log in
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Login;
