import styled from "styled-components";
import Container from "./Container";
import Text from "./Text";

const List = styled.ul`
  margin-left: 1.5rem;
`;

const Item = styled.li`
  /* TODO: Use disc or circle to indicate proficiency */
  list-style-type: circle;
`;

// TODO: refactor to use Container component
const HorizontalContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 4px 0;
`;

const ModifierText = styled.span`
  text-decoration: underline;
`;

const AbilityNameText = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.gray500};
`;

type Skill = {
  id: string;
  name: string;
  modifier: number;
  ability: { id: string; name: string };
};

interface SkillBoxProps {
  skill: Skill;
}

function SkillBox({ skill }: SkillBoxProps) {
  const { id, name, modifier, ability } = skill;

  return (
    <Item key={id}>
      <HorizontalContainer>
        <ModifierText>
          {modifier >= 0 ? "+" : "-"}
          {modifier}
        </ModifierText>
        <span>{name}</span>
        <AbilityNameText>({ability.name.slice(0, 3)})</AbilityNameText>
      </HorizontalContainer>
    </Item>
  );
}

interface CharacterSkillsProps {
  skills: Skill[];
}

function CharacterSkills({ skills }: CharacterSkillsProps) {
  return (
    <Container as="section" direction="column" gap="16">
      <Text weight="600">Skills</Text>
      <List>
        {skills.map((skill) => (
          <SkillBox key={skill.id} skill={skill} />
        ))}
      </List>
    </Container>
  );
}

export default CharacterSkills;
