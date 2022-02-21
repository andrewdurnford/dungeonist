import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Notification from "../components/Notification";
import SignupForm from "../forms/SignupForm";
import useAuth from "../hooks/useAuth";
import { useSignupMutation } from "../utils/graphql";

function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [signup, { error }] = useSignupMutation({
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
    <main>
      <h1>Sign up</h1>
      {error && <Notification>Error: {error.message}</Notification>}
      <SignupForm
        onSubmit={({ email, password }) =>
          signup({ variables: { input: { email, password } } })
        }
      />
    </main>
  );
}

export default Signup;
