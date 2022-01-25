import { Link } from "react-router-dom";
import Container from "../components/Container";

function NotFound() {
  return (
    <Container>
      <h1>404</h1>
      <Link to="/">Home</Link>
    </Container>
  );
}

export default NotFound;
