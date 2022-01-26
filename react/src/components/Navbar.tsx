import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useMeQuery } from "../utils/graphql";
import Button from "./Button";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const { data, loading } = useMeQuery();

  if (loading) return <p>Loading...</p>;

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <>
            <li>Welcome {data?.me?.email}!</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Button variant="secondary" onClick={logout}>
                Log out
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Button as={Link} to="/signup" variant="secondary">
                Sign up
              </Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
