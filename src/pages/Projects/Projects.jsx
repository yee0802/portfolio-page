import "./index.css";
export default function Projects() {
  return (
    <article id="projects">
      <h1>Example Projects</h1>
      <hr />

      <section className="spotify project">
        <h1>Spotify Layout</h1>
        <section className="project-info">
          <p>
            In this project, I used HTML & CSS to implement a static layout of
            the Spotify homepage with the knowledge I had at the time. A preview
            of this can be seen{" "}
            <a
              href="https://htmlpreview.github.io/?https://github.com/yee0802/html-spotify-challenge/blob/main/index.html"
              target="_blank"
            >
              here
            </a>
          </p>
          <a
            href="https://github.com/yee0802/html-spotify-challenge"
            target="_blank"
          >
            <button className="project-button">GitHub Repo</button>
          </a>
        </section>
      </section>

      <section className="cohort-dashboard project">
        <h1>Cohort Dashboard</h1>
        <section className="project-info">
          <p>
            Using React and a RESTful API, I created a social media style post
            feed where the user can post, comment on a post, delete a specific
            post/comment, and view a persons profile
          </p>
          <a
            href="https://github.com/yee0802/react-cohort-dashboard-challenge"
            target="_blank"
          >
            <button className="project-button">GitHub Repo</button>
          </a>
        </section>
      </section>

      <section className="brewery-tours project">
        <h1>Brewery Tours</h1>
        <section className="project-info">
          <p>
            With HTML, CSS and JavaScript, I replicated a common scenario in
            eCommerce and booking websites, using filters and search to modify
            what is rendered to the user
          </p>
          <a
            href="https://github.com/yee0802/js-dom-brewery-tours-challenge"
            target="_blank"
          >
            <button className="project-button">GitHub Repo</button>
          </a>
        </section>
      </section>
    </article>
  );
}
