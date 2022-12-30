import { Link } from "react-router-dom"
import { classes } from "../api/class"

function Classes() {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-medium">Class</h2>
      <ul className="list-disc pl-5">
        {classes.map((cls) => (
          <li key={cls.id}>
            <Link
              to={cls.id}
              className="mb-2 inline-block text-blue-500 hover:underline"
            >
              {cls.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Classes
