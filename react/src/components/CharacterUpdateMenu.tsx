import { Link } from "react-router-dom";

function CharacterUpdateMenu() {
  return (
    <nav>
      <Link to="./">Details</Link> <Link to="race">Race</Link>{" "}
      <Link to="class">Class</Link> <Link to="abilities">Abilities</Link>{" "}
      <Link to="equipment">Equipment</Link>
    </nav>
  );
}

export default CharacterUpdateMenu;
