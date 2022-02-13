import styled from "styled-components";
import Container from "./Container";
import Text from "./Text";

const Row = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Col = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

const AbilityNameText = styled.span`
  text-transform: uppercase;
`;

const ModifierText = styled.h3`
  font-size: 24px;
  line-height: 32px;
`;

type Ability = {
  id: string;
  name: string;
  score: number;
  modifier: number;
};

interface AbilityBoxProps {
  ability: Ability;
}

function AbilityBox({ ability }: AbilityBoxProps) {
  const { id, name, score, modifier } = ability;

  return (
    <Col key={id}>
      <AbilityNameText>{name.slice(0, 3)}</AbilityNameText>
      <ModifierText>
        {modifier >= 0 ? "+" : "-"}
        {modifier}
      </ModifierText>
      <span>{score}</span>
    </Col>
  );
}

interface AbilitiesProps {
  abilities: Ability[];
}

function CharacterAbilities({ abilities }: AbilitiesProps) {
  return (
    <Container as="section" direction="column" gap="16">
      <Text as="h3" weight="600">
        Abilities
      </Text>
      <Row>
        {abilities.map((ability) => (
          <AbilityBox key={ability.id} ability={ability} />
        ))}
      </Row>
    </Container>
  );
}

export default CharacterAbilities;
