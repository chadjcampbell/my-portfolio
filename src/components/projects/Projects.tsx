import { projectArray } from "./projectArray";
import styles from "./projects.module.css";

export type Project = {
  panel: string;
  hidden: boolean;
  name: string;
  icon: string;
  background: string;
  description: string;
};

export const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.wrapper}>
        <div className={styles.accordion}>
          {projectArray.map((project: Project) => (
            <div key={project.name} className={styles["accordion-panel"]}>
              <h3 id={project.panel + "-heading"}>
                <button
                  className={styles["accordion-trigger"]}
                  aria-controls={project.panel + "-content"}
                  aria-expanded={!project.hidden}
                >
                  <span
                    className={styles["project-title"]}
                    id={project.panel + "-title"}
                  >
                    {project.name}
                  </span>
                  <img
                    aria-hidden="true"
                    className={styles["accordion-icon"]}
                    src={project.icon}
                    alt={project.name}
                  />
                </button>
              </h3>
              <div
                className={styles["accordion-content"]}
                id={project.panel + "-content"}
                aria-labelledby={project.panel + "-heading"}
                aria-hidden={project.hidden}
                role="region"
              >
                <p>{project.description}</p>
                <img
                  className={styles["accordion-image"]}
                  src={project.background}
                  alt={project.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
