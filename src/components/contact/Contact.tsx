import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./contact.module.css";

export const Contact = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contact</h2>
      <section className={styles.section}>
        <form className={styles.form} action="">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name..." />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email..."
          />
          <label htmlFor="subject">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something..."
          ></textarea>
          <input type="submit" value="Submit" />
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
      </section>
    </footer>
  );
};
