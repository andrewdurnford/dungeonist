import { Link } from "react-router-dom";
import Notification from "../components/Notification";
import { Main } from "../components/Container";
import Text from "../components/Text";

interface NotFoundProps {
  message?: string;
}

function NotFound({ message }: NotFoundProps) {
  return (
    <Main>
      <Text as="h1" size="32">
        404
      </Text>
      <Notification>{message ? message : "Not Found"}</Notification>
      <Link to="/">Home</Link>
    </Main>
  );
}

export default NotFound;
