import { Link } from "react-router-dom";
import Notification from "../components/Notification";
import Container from "../components/Container";

interface NotFoundProps {
  message?: string;
}

function NotFound({ message }: NotFoundProps) {
  return (
    <Container direction="column" gap="16" mx="auto" p="32">
      <h1>404</h1>
      <Notification>{message ? message : "Not Found"}</Notification>
      <Link to="/">Home</Link>
    </Container>
  );
}

export default NotFound;
