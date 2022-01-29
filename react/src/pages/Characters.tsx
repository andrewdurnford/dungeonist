import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PageContainer } from "../components/Container";
import Notification from "../components/Notification";
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
    return <Notification>Error: {error && error.message}</Notification>;

  return (
    <PageContainer>
      <h1>Characters</h1>
      {createError && (
        <Notification>Error: {createError?.message}</Notification>
      )}
      <CreateCharacterForm
        loading={createLoading}
        onSubmit={({ name }) =>
          createCharacter({ variables: { input: { name: name || undefined } } })
        }
      />
      <List>
        {data.characters.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/characters/${id}`}>{name}</Link>
          </li>
        ))}
      </List>
    </PageContainer>
  );
}

export default Characters;
