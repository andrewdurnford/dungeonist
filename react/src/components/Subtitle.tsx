import Button from "./Button";
import Container from "./Container";
import Text from "./Text";

interface SubtitleProps {
  name: string;
  loading?: boolean;
  onCancel?: () => void;
}

function Subtitle({ name, loading, onCancel }: SubtitleProps) {
  return (
    <Container justifyContent="space-between" alignItems="center">
      <Text as="h1" size="32">
        {name}
      </Text>
      <Container gap="4px" fluid>
        <Button type="submit" loading={loading}>
          Save
        </Button>
        <Button variant="secondary">Reset</Button>
      </Container>
    </Container>
  );
}

export default Subtitle;
