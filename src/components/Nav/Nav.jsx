import "./index.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/projects" className="link">
              PROJECTS
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
