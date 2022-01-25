import { Link } from "react-router-dom";
import { useMeQuery } from "../utils/graphql";

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
              Logout
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
