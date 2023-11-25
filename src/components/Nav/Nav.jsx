import "./index.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <aside id="nav">
      <nav>
        <ul>
          <Link to="/" className="link">
            <li className="home-link">HOME</li>
          </Link>
          <hr />
          <Link to="/projects" className="link">
            <li className="projects-link">PROJECTS</li>
          </Link>
          <hr />
          <Link to="/contact" className="link">
            <li className="contact-link">CONTACT</li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
}
