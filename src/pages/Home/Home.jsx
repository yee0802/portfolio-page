import "./index.css";

export default function Home() {
  return (
    <article id="home">
      <h1>Aspiring Full-Stack Developer 👾</h1>
      <section className="info">
        <p>Hi, I'm Kye👋</p>
        <p>I am based in Bath, England📍</p>
      </section>

      <section className="skills">
        <span>Technical Skills:</span>
        <ul>
          <li>
            <img
              src="../../src/assets/HTML5_Badge.svg"
              alt="HTML logo"
              width={40}
            />
          </li>
          <li>
            <img
              src="../../src/assets/CSS3_logo.svg"
              alt="CSS logo"
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
            <img
              src="../../src/assets/react.svg"
              alt="ReactJS logo"
              width={40}
            />
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
        <a href="https://github.com/yee0802" target="_blank">
          <img src="../../src/assets/github.svg" alt="github-logo" width={23} />
        </a>
      </section>
    </article>
  );
}
