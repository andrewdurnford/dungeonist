import { Link } from "react-router-dom";
import Notification from "../components/Notification";

interface NotFoundProps {
  message?: string;
}

function NotFound({ message }: NotFoundProps) {
  return (
    <main>
      <h1>404</h1>
      <Notification>{message ? message : "Not Found"}</Notification>
      <Link to="/">Home</Link>
    </main>
  );
}

export default NotFound;
