import Container from "./Container";
import Text from "./Text";

interface BoxProps {
  name: string;
  description?: string | null;
}

function Box({ name, description }: BoxProps) {
  // If description is not provided, return null so that a box may be
  // optionally displayed
  if (!description) return null;

  return (
    <Container as="section" direction="column" gap="8" flexGrow={1}>
      <Text weight="600">{name}</Text>
      <Text>{description}</Text>
    </Container>
  );
}

export default Box;
