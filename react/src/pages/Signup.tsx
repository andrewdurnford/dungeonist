import { useNavigate } from "react-router-dom";
import { Main } from "../components/Container";
import Notification from "../components/Notification";
import Text from "../components/Text";
import SignupForm from "../forms/SignupForm";
import useAuth from "../hooks/useAuth";
import { useSignupMutation } from "../utils/graphql";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [signup, { loading, error }] = useSignupMutation({
    onError: (err) => console.error(err),
    onCompleted: ({ signup: data }) => {
      login(data);
      navigate("/");
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          user() {
            return data?.signup.user;
          },
        },
      });
    },
  });

  return (
    <Main>
      <Text as="h1" size="32">
        Sign up
      </Text>
      {error && <Notification>Error: {error.message}</Notification>}
      <SignupForm
        loading={loading}
        onSubmit={({ email, password }) =>
          signup({ variables: { input: { email, password } } })
        }
      />
    </Main>
  );
}

export default Signup;
