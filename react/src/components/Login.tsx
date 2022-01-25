import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useLoginMutation } from "../utils/graphql";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(({ email, password }) =>
    signup({ variables: { input: { email, password } } })
  );

  return (
    <div>
      <h1>Login</h1>
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
            Log in
          </Button>
        </Container>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Login;
