import { useState } from "react";
import { Header } from "../header/Header";
import styles from "./about.module.css";

export const About = () => {
  const aboutArray = [
    "Family Man",
    "Gamer",
    "Lifelong Learner",
    "Fullstack Developer",
  ];
  const [headerArray, setHeaderArray] = useState<string[]>(aboutArray);
  function changeHeader(): void {}
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
