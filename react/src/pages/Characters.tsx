import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Notification from "../components/Notification";
import CharacterCreateForm from "../forms/CharacterCreateForm";
import {
  useCharactersQuery,
  useCharacterCreateMutation,
} from "../utils/graphql";

function Characters() {
  const { data, loading, error } = useCharactersQuery();
  const [characterCreate, { error: createError }] = useCharacterCreateMutation({
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
    <main>
      <h1>Characters</h1>
      {createError && (
        <Notification>Error: {createError?.message}</Notification>
      )}
      {!import.meta.env.PROD && (
        <CharacterCreateForm
          onSubmit={({ name }) =>
            characterCreate({
              variables: {
                input: { name: name || undefined },
              },
            })
          }
        />
      )}
      <ul>
        {data.characters.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/characters/${id}/edit`}>{name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Characters;
