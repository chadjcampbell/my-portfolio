import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <h2>Contact</h2>
      <div className={styles.wrapper}>
        <form className={styles.form} action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="subject">Message</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Submit</button>
        </form>
        <div className={styles.socials}>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
              target="_blank"
              aria-label="linked-in"
              className={styles["header-a"]}
            >
              <BsGithub size="3rem" />
            </a>
            <a
              href="https://github.com/chadjcampbell"
              target="_blank"
              aria-label="github"
              className={styles["header-a"]}
            >
              <BsLinkedin size="3rem" />
            </a>
            <a
              href="https://github.com/chadjcampbell"
              target="_blank"
              aria-label="github"
              className={styles["header-a"]}
            >
              <BsLinkedin size="3rem" />
            </a>
          </div>
          <div className={styles.emial}>
            <h4>Email: chadjcampbell@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
