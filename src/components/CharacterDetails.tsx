import { skills } from "../api/ability"
import { useCharacter } from "../context"

function CharacterDetails() {
  const { character } = useCharacter()

  return (
    <div>
      <div className="flex gap-8">
        <section>
          <h2 className="mb-2 text-center text-sm font-medium uppercase">
            Abilities
          </h2>
          <div className="rounded-lg bg-gray-200 p-2 pb-5">
            <ul className="flex flex-col gap-5">
              {character.abilities.map((ability) => (
                <li
                  key={ability.id}
                  className="flex flex-col items-center rounded-lg border border-black bg-white py-1 px-3"
                >
                  <span className="text-xs font-medium uppercase">
                    {ability.name.substring(0, 3)}
                  </span>
                  <span className="text-xl">+{ability.modifier}</span>
                  <span className="mb-[-1.125rem] mt-1 rounded-lg border border-black bg-white px-1">
                    {ability.score}
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
        <section className="flex items-start gap-2">
          <div className="flex flex-col items-center rounded-lg border border-black p-2">
            <div className="text-xl">{character.armorClass}</div>
            <h2 className="text-sm">AC</h2>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-black p-2">
            <div className="text-xl">{character.hitPoints}</div>
            <h2 className="text-sm">HP</h2>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CharacterDetails
