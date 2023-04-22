import styles from "./skills.module.css";
import { motion } from "framer-motion";
import { skillArray } from "./skillArray";

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
    <section id="skills" className={styles["skills-section"]}>
      <h2>Skills</h2>
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
