import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Main } from "../components/Container";
import Loader from "../components/Loader";
import Notification from "../components/Notification";
import Text from "../components/Text";
import CreateCharacterForm from "../forms/CreateCharacterForm";
import {
  useCharactersQuery,
  useCharacterCreateMutation,
} from "../utils/graphql";

const List = styled.ul`
  margin-left: 2rem;
`;

function Characters() {
  const { data, loading, error } = useCharactersQuery();
  const [createCharacter, { loading: createLoading, error: createError }] =
    useCharacterCreateMutation({
      onError: (err) => console.error(err),
      update(cache, { data }) {
        cache.modify({
          fields: {
            characters(existingCharacters = []) {
              const newCharacterRef = cache.writeFragment({
                data: data?.characterCreate,
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

  if (loading) return <Loader />;

  if (error || !data)
    return <Notification>Error: {error && error.message}</Notification>;

  return (
    <Main>
      <Text as="h1" size="32">
        Characters
      </Text>
      {createError && (
        <Notification>Error: {createError?.message}</Notification>
      )}
      {!import.meta.env.PROD && (
        <CreateCharacterForm
          loading={createLoading}
          onSubmit={({ name }) =>
            createCharacter({
              variables: {
                input: { name: name || undefined },
              },
            })
          }
        />
      )}
      <List>
        {data.characters.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/characters/${id}/edit`}>{name}</Link>
          </li>
        ))}
      </List>
    </Main>
  );
}

export default Characters;
