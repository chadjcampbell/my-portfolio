import { Header } from "../header/Header";
import styles from "./about.module.css";

export const About = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <section className={styles["about-section"]}>
        <p>Hello, I'm</p>
        <h1 className={styles["about-h1"]}>Chad J Campbell</h1>
        <p className={styles["about-p"]}>Fullstack Developer</p>
        <img className={styles["about-img"]} src="/chadjcampbell.jpeg" />
      </section>
    </div>
  );
};
