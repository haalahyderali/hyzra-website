import rigidInteriors from "../assets/rigid-interiors.jpg";
import corbel from "../assets/corbel.jpg";
import markwater from "../assets/markwater.jpg";

const projects = [
  {
    image: rigidInteriors,
    category: "Website Development",
    title: "Rigid Interiors & Contractors",
    description:
      "A professional website designed to showcase interior design and contracting projects.",
  },
  {
    image: corbel,
    category: "Website Development",
    title: "Corbel",
    description:
      "A modern digital experience designed to present the brand and its services online.",
  },
  {
    image: markwater,
    category: "Website Development",
    title: "Markwater",
    description:
      "A professional website created to establish a strong and engaging online presence.",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="portfolio-heading">

        <div>
          <p className="section-tag">FEATURED WORK</p>

          <h2>
            Projects we've
            <span> brought to life.</span>
          </h2>
        </div>

        <p className="portfolio-intro">
          A selection of digital experiences and creative projects
          developed for businesses and brands.
        </p>

      </div>

      <div className="portfolio-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.title}>

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-info">

              <div>
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>
              </div>

              <p className="project-description">
                {project.description}
              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Portfolio;