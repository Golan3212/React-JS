import { Link } from "react-router-dom"
const Profile = () => {
    return <div>
      <main className="navigation">
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link className="navigation-link" to="/">Home</Link>
      </nav>
    </div>
}

export default Profile