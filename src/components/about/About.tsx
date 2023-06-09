import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export const aboutArray = [
  "Family Man",
  "Gamer",
  "Lifelong Learner",
  "Fullstack Developer",
];

export const About = () => {
  const [header, setHeader] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setHeader(aboutArray[index]);
  }, [index]);

  useEffect(() => {
    if (index === aboutArray.length - 1) return;
    const timeoutId = setTimeout(() => {
      setIndex(index + 1);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div id="hero" className={`${styles.hero} observe`}>
      <Header />
      <section className={styles["about-section"]}>
        <p>Hello, I'm</p>
        <h1 className={styles["about-h1"]}>Chad J Campbell</h1>
        <AnimatedHeader header={header} />
        <img
          className={styles["about-img"]}
          alt="Chad Campbell Profile Picture"
          src="/chadjcampbell.webp"
        />
      </section>
    </div>
  );
};

type AnimatedHeaderProps = {
  header: string | null;
};
const AnimatedHeader = ({ header }: AnimatedHeaderProps) => {
  return (
    <motion.p
      key={header}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className={styles["animated-header"]}
    >
      {header}
    </motion.p>
  );
};
