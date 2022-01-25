import { Link } from "react-router-dom";
import { useMeQuery } from "../utils/graphql";

function Navbar() {
  const { data, loading } = useMeQuery();

  if (loading) return <p>Loading...</p>;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        {data?.me && <li>Welcome {data.me.email}!</li>}
      </ul>
    </nav>
  );
}

export default Navbar;
