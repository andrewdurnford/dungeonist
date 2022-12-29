import { abilities, skills } from "../api/ability"
import { useCharacter } from "../context"

function CharacterDetails() {
  const character = useCharacter()

  return (
    <div>
      <p className="mb-4">
        <strong>Name:</strong> {character.name}
      </p>
      <p className="mb-4">
        <strong>Level:</strong> {character.level}
      </p>
      <div className="flex gap-8">
        <section>
          <h2 className="mb-2 text-center text-sm font-medium uppercase">
            Abilities
          </h2>
          <div className="rounded-lg bg-gray-200 p-2 pb-5">
            <ul className="flex flex-col gap-5">
              {abilities.map((ability) => (
                <li
                  key={ability.id}
                  className="flex flex-col items-center rounded-lg border border-black bg-white py-1 px-3"
                >
                  <span className="text-xs font-medium uppercase">
                    {ability.name.substring(0, 3)}
                  </span>
                  <span className="text-xl">+0</span>
                  <span className="mb-[-1.125rem] mt-1 rounded-lg border border-black bg-white px-1">
                    10
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <h2 className="mb-2 text-center text-sm font-medium uppercase">
            Skills
          </h2>
          <ul className="flex flex-col gap-1 leading-6">
            {skills.map((skill) => (
              <li key={skill.id} className="flex justify-between gap-4">
                <span>{skill.name}</span>
                <span>+0</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default CharacterDetails
