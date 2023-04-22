import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import styles from "./contact.module.css";
import { motion } from "framer-motion";

const Socials = () => {
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
    <div className={styles.socials}>
      <motion.div
        className={styles.icons}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.a
          variants={item}
          href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
          target="_blank"
          aria-label="github"
          className={styles["social-icon"]}
        >
          <BsGithub size="3rem" />
        </motion.a>
        <motion.a
          variants={item}
          href="https://github.com/chadjcampbell"
          target="_blank"
          aria-label="linked-in"
          className={styles["social-icon"]}
        >
          <BsLinkedin size="3rem" />
        </motion.a>
        <motion.a
          variants={item}
          href="https://www.instagram.com/chadjcampbell/"
          target="_blank"
          aria-label="instagram"
          className={styles["social-icon"]}
        >
          <BsInstagram size="3rem" />
        </motion.a>
      </motion.div>
      <div className={styles.email}>
        <h4>Email: chadjcampbell@gmail.com</h4>
      </div>
    </div>
  );
};

export default Socials;
