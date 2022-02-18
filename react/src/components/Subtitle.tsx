import Button from "./Button";
import Container, { FluidContainer } from "./Container";
import Text from "./Text";

interface SubtitleProps {
  name: string;
  loading?: boolean;
  onReset?: () => void;
}

function Subtitle({ name, loading, onReset }: SubtitleProps) {
  return (
    <Container alignItems="center">
      <Text as="h1" size="32">
        {name}
      </Text>
      <FluidContainer justifyContent="flex-end" gap="4">
        <Button type="submit" loading={loading}>
          Save
        </Button>
        <Button variant="secondary" type="reset" onClick={onReset}>
          Reset
        </Button>
      </FluidContainer>
    </Container>
  );
}

export default Subtitle;
