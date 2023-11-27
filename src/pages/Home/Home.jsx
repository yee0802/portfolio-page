import profilePic from "../../assets/profile.png";
import htmlLogo from "../../assets/HTML5_Badge.svg";
import cssLogo from "../../assets/CSS3_logo.svg";
import javascriptLogo from "../../assets/JS_logo.svg";
import reactjsLogo from "../../assets/react.svg";
import nodejsLogo from "../../assets/Node.js_logo.svg";
import linkedinLogo from "../../assets/linkedin_icon.svg";
import githubLogo from "../../assets/github.svg";
import "./index.css";

export default function Home() {
  return (
    <article id="home">
      <section className="profile-pic">
        <img src={profilePic} alt="profile-picture" />
      </section>
      <section className="info">
        <h1>Full-Stack Developer 👾</h1>
        <hr />
        <p>
          Hi, I'm Kye👋 <br />
          An aspiring Full-Stack developer located in Bath, UK📍
        </p>
      </section>

      <section className="skills">
        <span>Technical Skills:</span>
        <ul>
          <li>
            <img src={htmlLogo} alt="HTML5 logo" width={40} />
          </li>
          <li>
            <img src={cssLogo} alt="CSS3 logo" width={40} />
          </li>
          <li>
            <img src={javascriptLogo} alt="JavaScript logo" width={40} />
          </li>
          <li>
            <a href="https://react.dev/" target="_blank">
              <img
                className="react-logo"
                src={reactjsLogo}
                alt="ReactJS logo"
                width={40}
              />
            </a>
          </li>
          <li>
            <img src={nodejsLogo} alt="NodeJS logo" width={60} />
          </li>
        </ul>
      </section>
      <section className="connect-container">
        <p>
          <b>📫 Contact me at: </b>
          <em>NovusAa12@proton.me</em>
        </p>
        <section className="connect__links">
          <a href="#" target="_blank">
            <img src={linkedinLogo} alt="linkedin-logo" width={23} />
          </a>

          <a href="https://github.com/yee0802" target="_blank">
            <img src={githubLogo} alt="github-logo" width={23} />
          </a>
        </section>
      </section>
    </article>
  );
}
