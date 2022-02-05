import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import { Link } from "./Link";
import Text from "./Text";

const Nav = styled(Container).attrs({
  forwardedAs: "nav",
  gap: "8px",
  px: "20px",
})``;

const Divider = styled.span`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.gray700};
`;

function CharacterBreadcrumb({ name }: { name?: string }) {
  const { characterId } = useParams();

  if (!characterId) return null;

  return (
    <Nav>
      <Link size="24" to="/characters">
        Characters
      </Link>
      <Text size="24">/</Text>
      <Link size="24" to={`/characters/${characterId}`}>
        {name ?? "Loading..."}
      </Link>
    </Nav>
  );
}

export default CharacterBreadcrumb;
