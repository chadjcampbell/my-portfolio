import "./skills.css";
import { motion } from "framer-motion";

const skillArray = [
  [
    "devicon-html5-plain colored",
    "HTML",
    "https://developer.mozilla.org/en-US/docs/Web/HTML",
  ],
  ["devicon-css3-plain colored", "CSS", "https://css-tricks.com/"],
  [
    "devicon-javascript-plain colored",
    "Javascript",
    "https://javascript.info/",
  ],
  [
    "devicon-typescript-plain colored",
    "Typescript",
    "https://www.typescriptlang.org/",
  ],
  ["devicon-react-original colored", "React", "https://react.dev/"],
  [
    "devicon-firebase-plain colored",
    "Firebase",
    "https://firebase.google.com/",
  ],
  ["devicon-sqlite-plain colored", "SQLite", "https://sqlite.org/index.html"],
  ["devicon-nodejs-plain colored", "NodeJS", "https://nodejs.org/en"],
  ["devicon-git-plain colored", "Git", "https://git-scm.com/"],
  ["devicon-c-plain colored", "C", "https://www.learn-c.org/"],
  ["devicon-python-plain colored", "Python", "https://www.learnpython.org/"],
  [
    "devicon-flask-original colored",
    "Flask",
    "https://flask.palletsprojects.com/en/2.2.x/",
  ],
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
    <section className="skills">
      <h2 className="title">Skills</h2>

      <motion.ul
        className="container skill-container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {skillArray.map((skill) => (
          <motion.li key={skill[0]} className="item each-skill" variants={item}>
            <a href={skill[2]} target="_blank">
              <i className={`skill-icon ${skill[0]}`}></i>
            </a>
            <p>{skill[1]}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};
