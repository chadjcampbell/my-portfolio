import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import styles from "./contact.module.css";

const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.icons}>
        <a
          href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
          target="_blank"
          aria-label="linked-in"
          className={styles["social-icon"]}
        >
          <BsGithub size="3rem" />
        </a>
        <a
          href="https://github.com/chadjcampbell"
          target="_blank"
          aria-label="github"
          className={styles["social-icon"]}
        >
          <BsLinkedin size="3rem" />
        </a>
        <a
          href="https://www.instagram.com/chadjcampbell/"
          target="_blank"
          aria-label="instagram"
          className={styles["social-icon"]}
        >
          <BsInstagram size="3rem" />
        </a>
      </div>
      <div className={styles.email}>
        <h4>Email: chadjcampbell@gmail.com</h4>
      </div>
    </div>
  );
};

export default Socials;
