import { useNavigate } from "react-router-dom";
import { PageContainer } from "../components/Container";
import Notification from "../components/Notification";
import SignupForm from "../forms/SignupForm";
import { useSignupMutation } from "../utils/graphql";

function Signup() {
  const navigate = useNavigate();

  const [signup, { loading, error }] = useSignupMutation({
    onError: (err) => console.error(err),
    onCompleted: () => navigate("/"),
  });

  return (
    <PageContainer>
      <h1>Sign up</h1>
      {error && <Notification>Error: {error.message}</Notification>}
      <SignupForm
        loading={loading}
        onSubmit={({ email, password }) =>
          signup({ variables: { input: { email, password } } })
        }
      />
    </PageContainer>
  );
}

export default Signup;
