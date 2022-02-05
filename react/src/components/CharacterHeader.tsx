import CharacterBreadcrumb from "./CharacterBreadcrumb";
import CharacterMenu from "./CharacterMenu";
import { FluidContainer } from "./Container";

function CharacterHeader({ name }: { name?: string }) {
  return (
    <FluidContainer
      forwardedAs="header"
      direction="column"
      gap="16"
      pt="16"
      background="gray100"
    >
      <CharacterBreadcrumb name={name} />
      <CharacterMenu />
    </FluidContainer>
  );
}

export default CharacterHeader;
