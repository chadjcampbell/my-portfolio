import { BsGithub, BsTvFill } from "react-icons/bs";
import { projectArray } from "./projectArray";
import styles from "./projects.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export type Project = {
  panel: string;
  hidden: boolean;
  name: string;
  code: string;
  preview: string;
  icon: string;
  background: string;
  description: string;
};

export const Projects = () => {
  const [projectsView, setProjectsView] = useState<Project[]>(projectArray);

  const setActive = (name: string) => {
    const newProjects = projectsView.map((project: Project) => {
      if (project.name === name) {
        return { ...project, hidden: false };
      } else {
        return { ...project, hidden: true };
      }
    });
    setProjectsView(newProjects);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.accordion}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsView.map((project: Project) => (
            <motion.div
              variants={item}
              key={project.name}
              className={styles["accordion-panel"]}
            >
              <div className={styles["card-header"]}>
                <h3 id={project.panel + "-heading"}>
                  <button
                    className={styles["accordion-trigger"]}
                    aria-controls={project.panel + "-content"}
                    aria-expanded={!project.hidden}
                    onClick={() => setActive(project.name)}
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
                {!project.hidden && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={styles["project-links"]}
                  >
                    <a
                      href={project.code}
                      target="_blank"
                      aria-label="linked-in"
                    >
                      <BsGithub size="1.5rem" />
                      Code
                    </a>
                    <a
                      href={project.preview}
                      target="_blank"
                      aria-label="github"
                    >
                      <BsTvFill size="1.75rem" />
                      Live
                    </a>
                  </motion.div>
                )}
              </div>
              <div
                className={styles["accordion-content"]}
                id={project.panel + "-content"}
                aria-labelledby={project.panel + "-heading"}
                aria-hidden={project.hidden}
                role="region"
              >
                {!project.hidden && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={styles.description}
                  >
                    <p>{project.description}</p>
                  </motion.div>
                )}
                <img
                  className={styles["accordion-image"]}
                  src={project.background}
                  alt={project.name}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
