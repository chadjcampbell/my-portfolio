import styles from "./skills.module.css";
import { motion } from "framer-motion";

const skillArray = [
  {
    class: "devicon-html5-plain colored",
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    class: "devicon-css3-plain colored",
    name: "CSS",
    link: "https://css-tricks.com/",
  },

  {
    class: "devicon-javascript-plain colored",
    name: "Javascript",
    link: "https://javascript.info/",
  },
  {
    class: "devicon-typescript-plain colored",
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    class: "devicon-react-original colored",
    name: "React",
    link: "https://react.dev/",
  },

  {
    class: "devicon-firebase-plain colored",
    name: "Firebase",
    link: "https://firebase.google.com/",
  },
  {
    class: "devicon-sqlite-plain colored",
    name: "SQLite",
    link: "https://sqlite.org/index.html",
  },
  {
    class: "devicon-nodejs-plain colored",
    name: "NodeJS",
    link: "https://nodejs.org/en",
  },
  {
    class: "devicon-git-plain colored",
    name: "Git",
    link: "https://git-scm.com/",
  },
  {
    class: "devicon-c-plain colored",
    name: "C",
    link: "https://www.learn-c.org/",
  },
  {
    class: "devicon-python-plain colored",
    name: "Python",
    link: "https://www.learnpython.org/",
  },

  {
    class: "devicon-flask-original colored",
    name: "Flask",
    link: "https://flask.palletsprojects.com/en/2.2.x/",
  },
];

export const Skills = () => {
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
    <section className={styles["skills-section"]}>
      <h2 className={styles.title}>Skills</h2>
      <motion.ul
        className={styles["skill-container"]}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillArray.map((skill) => (
          <motion.li
            key={skill.name}
            className={styles["each-skill"]}
            variants={item}
          >
            <a
              className={styles["skill-link"]}
              href={skill.link}
              target="_blank"
            >
              <i
                aria-hidden="true"
                className={`${styles["skill-icon"]} ${skill.class}`}
              ></i>
              <p className={styles["skill-name"]}>{skill.name}</p>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
