import { Link } from "react-router-dom";
import Notification from "../components/Notification";
import { PageContainer } from "../components/Container";

interface NotFoundProps {
  message?: string;
}

function NotFound({ message }: NotFoundProps) {
  return (
    <PageContainer>
      <h1>404</h1>
      <Notification>{message ? message : "Not Found"}</Notification>
      <Link to="/">Home</Link>
    </PageContainer>
  );
}

export default NotFound;
