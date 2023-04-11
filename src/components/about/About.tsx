import styles from "./about.module.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <section className={styles["about-section"]}>
      <p>Hello, I'm</p>
      <h1 className={styles["about-h1"]}>Chad J Campbell</h1>
      <p>Fullstack Developer</p>
      <img className={styles["about-img"]} src="/chadjcampbell.jpeg" />
      <div className={styles.arrow}>
        <BsArrowDownCircleFill />
      </div>
    </section>
  );
};
