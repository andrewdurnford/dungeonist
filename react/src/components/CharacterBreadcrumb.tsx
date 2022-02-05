import { useParams } from "react-router-dom";
import Container from "./Container";
import { Link } from "./Link";
import Text from "./Text";

function CharacterBreadcrumb({ name }: { name?: string }) {
  const { characterId } = useParams();

  if (!characterId) return null;

  return (
    <Container forwardedAs="nav" gap="8" px="16" mx="auto">
      <Link size="24" to="/characters">
        Characters
      </Link>
      <Text size="24">/</Text>
      <Link size="24" to={`/characters/${characterId}`}>
        {name ?? "Loading..."}
      </Link>
    </Container>
  );
}

export default CharacterBreadcrumb;
