import { Link } from "react-router-dom";
import { PageContainer } from "../components/Container";

function NotFound() {
  return (
    <PageContainer>
      <h1>404</h1>
      <Link to="/">Home</Link>
    </PageContainer>
  );
}

export default NotFound;
