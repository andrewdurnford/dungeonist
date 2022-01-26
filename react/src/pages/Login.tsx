import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import LoginForm from "../forms/LoginForm";
import useAuth from "../hooks/useAuth";
import { useLoginMutation } from "../utils/graphql";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [signup, { loading, error }] = useLoginMutation({
    onError: (err) => console.error(err),
    onCompleted: ({ login: data }) => {
      login(data);
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

  return (
    <Container>
      <h1>Log in</h1>
      <LoginForm
        loading={loading}
        onSubmit={({ email, password }) =>
          signup({ variables: { input: { email, password } } })
        }
      />
      {/* TODO: change to notification component */}
      {error && <ErrorText>Error: {error.message}</ErrorText>}
    </Container>
  );
}

export default Login;
