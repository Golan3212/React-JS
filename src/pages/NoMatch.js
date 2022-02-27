import { Link } from "react-router-dom";
function NoMatch() {
    return (
      <div className="navigation">
        <h2>Nothing to see here!</h2>
        <p>
          <Link className="navigation-link" to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }
  export default NoMatch;