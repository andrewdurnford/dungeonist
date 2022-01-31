import { Link, Outlet } from "react-router-dom";
import List from "../components/List";
import { CharacterQuery } from "../utils/graphql";

interface CharacterMenuProps {
  character: CharacterQuery["character"];
}

function CharacterMenu({ character }: CharacterMenuProps) {
  if (!character) return <div>error</div>;

  return (
    <>
      <nav>
        <List>
          <li>
            <Link to={`/characters/${character.id}`}>Summary</Link>
          </li>
          <li>
            <Link to={`/characters/${character.id}/details`}>Details</Link>
          </li>
        </List>
      </nav>

      <Outlet context={{ character }} />
    </>
  );
}

export default CharacterMenu;
