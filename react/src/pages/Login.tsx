import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/Container";
import Notification from "../components/Notification";
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
    <PageContainer>
      <h1>Log in</h1>
      {error && <Notification>Error: {error.message}</Notification>}
      <LoginForm
        loading={loading}
        onSubmit={({ email, password }) =>
          signup({ variables: { input: { email, password } } })
        }
      />
    </PageContainer>
  );
}

export default Login;
