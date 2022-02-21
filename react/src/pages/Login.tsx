import { useNavigate } from "react-router-dom";
import { Main } from "../components/Container";
import Notification from "../components/Notification";
import Text from "../components/Text";
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
          user() {
            return data?.login.user;
          },
        },
      });
    },
  });

  return (
    <Main>
      <Text as="h1" size="32">
        Log in
      </Text>
      {error && <Notification>Error: {error.message}</Notification>}
      <LoginForm
        loading={loading}
        onSubmit={({ email, password }) =>
          signup({ variables: { input: { email, password } } })
        }
      />
    </Main>
  );
}

export default Login;
