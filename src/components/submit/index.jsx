import { Link } from "react-router-dom";

import "./style.scss";

function Submit() {
  return (
    <div className="submit">
      <Link className="submit__button" to="/finish">
        Submit
      </Link>

      <Link className="submit__back" to="/insight">
        go back
      </Link>
    </div>
  );
}
export default Submit;
