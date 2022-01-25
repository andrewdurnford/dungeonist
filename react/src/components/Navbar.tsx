import { Link } from "react-router-dom";
import { useMeQuery } from "../utils/graphql";
import Button from "./Button";

function Navbar() {
  const { data, loading, refetch } = useMeQuery();

  if (loading) return <p>Loading...</p>;

  const isLoggedIn = !!data?.me;

  return (
    <nav>
      <ul>
        {isLoggedIn ? (
          <>
            <li>Welcome {data?.me?.email}!</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                localStorage.removeItem("token");
                // TODO: Update to clear user context
                refetch();
              }}
            >
              Log out
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
