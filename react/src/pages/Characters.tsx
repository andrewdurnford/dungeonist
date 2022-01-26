import { gql } from "@apollo/client";
import styled from "styled-components";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import CreateCharacterForm from "../forms/CreateCharacterForm";
import {
  useCharactersQuery,
  useCreateCharacterMutation,
} from "../utils/graphql";

const List = styled.ul`
  margin-left: 2rem;
`;

function Characters() {
  const { data, loading, error } = useCharactersQuery();
  const [createCharacter, { loading: createLoading, error: createError }] =
    useCreateCharacterMutation({
      onError: (err) => console.error(err),
      update(cache, { data }) {
        cache.modify({
          fields: {
            characters(existingCharacters = []) {
              const newCharacterRef = cache.writeFragment({
                data: data?.createCharacter.character,
                fragment: gql`
                  fragment NewCharacter on Character {
                    id
                    name
                  }
                `,
              });
              return [...existingCharacters, newCharacterRef];
            },
          },
        });
      },
    });

  if (loading) return <p>Loading...</p>;

  if (error || !data)
    return <ErrorText>Error: {error && error.message}</ErrorText>;

  return (
    <Container>
      <h1>Characters</h1>
      <CreateCharacterForm
        loading={createLoading}
        onSubmit={({ name }) =>
          createCharacter({ variables: { input: { name: name || undefined } } })
        }
      />
      {/* TODO: change to notification component */}
      {createError && <ErrorText>Error: {createError?.message}</ErrorText>}
      <List>
        {data.characters.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </List>
    </Container>
  );
}

export default Characters;
