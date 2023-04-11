import { projectArray } from "./projectArray";
import styles from "./projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className="wrapper">
        <div className="accordion">
          {projectArray.map((project) => (
            <div key={project.name} className="accordion-panel">
              <h3 id={project.panel + "-heading"}>
                <button
                  id="accordion-trigger"
                  aria-controls={project.panel + "-content"}
                  aria-expanded="true"
                >
                  <span id={project.panel + "-title"}>Tally Yo</span>
                  <img
                    aria-hidden="true"
                    className="accordion-icon"
                    src={project.icon}
                    alt={project.name}
                  />
                </button>
              </h3>
              <div
                className="accordion-content"
                id={project.panel + "-content"}
                aria-labelledby={project.panel + "-heading"}
                aria-hidden="true"
                role="region"
              >
                <p>{project.description}</p>
                <img
                  className="accordion-image"
                  src={project.background}
                  alt={project.name}
                />
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </section>
  );
};
