import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import SignupForm from "../forms/SignupForm";
import { useSignupMutation } from "../utils/graphql";

function Signup() {
  const navigate = useNavigate();

  const [signup, { loading, error }] = useSignupMutation({
    onError: (err) => console.error(err),
    onCompleted: () => navigate("/"),
  });

  return (
    <Container>
      <h1>Sign up</h1>
      <SignupForm
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

export default Signup;
