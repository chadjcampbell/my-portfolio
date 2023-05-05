import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles["header-section"]}>
      <div>
        <a
          href="https://github.com/chadjcampbell"
          target="_blank"
          aria-label="github"
          className={styles["header-a"]}
        >
          <BsGithub size="2.5rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
          target="_blank"
          aria-label="linked-in"
          className={styles["header-a"]}
        >
          <BsLinkedin size="2.5rem" />
        </a>
      </div>
    </header>
  );
};
