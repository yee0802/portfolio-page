import "./index.css";

export default function Home() {
  return (
    <article id="home">
      <section className="profile-pic">
        <img src="../../src/assets/profile.png" alt="profile-picture" />
      </section>
      <section className="info">
        <h1>Aspiring Full-Stack Developer 👾</h1>
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
            <img
              src="../../src/assets/HTML5_Badge.svg"
              alt="HTML5 logo"
              width={40}
            />
          </li>
          <li>
            <img
              src="../../src/assets/CSS3_logo.svg"
              alt="CSS3 logo"
              width={40}
            />
          </li>
          <li>
            <img
              src="../../src/assets/JS_logo.svg"
              alt="JavaScript logo"
              width={40}
            />
          </li>
          <li>
            <a href="https://react.dev/" target="_blank">
              <img
                className="react-logo"
                src="../../src/assets/react.svg"
                alt="ReactJS logo"
                width={40}
              />
            </a>
          </li>
          <li>
            <img
              src="../../src/assets/Node.js_logo.svg"
              alt="NodeJS logo"
              width={60}
            />
          </li>
        </ul>
      </section>
      <section className="github--link">
        <p>
          <b>📫 Contact me at: </b>
          <em>NovusAa12@proton.me</em>
        </p>
        <a href="https://github.com/yee0802" target="_blank">
          <img src="../../src/assets/github.svg" alt="github-logo" width={23} />
        </a>
      </section>
    </article>
  );
}
