import { useEffect, useState } from "react";
import { Header } from "../header/Header";
import styles from "./about.module.css";
import { motion } from "framer-motion";

export const About = () => {
  const aboutArray = [
    "Family Man",
    "Gamer",
    "Lifelong Learner",
    "Fullstack Developer",
  ];
  const [header, setHeader] = useState<string | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setHeader(aboutArray[index]);
  }, [index]);

  useEffect(() => {
    if (index === aboutArray.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, 2000);
  }, [header]);

  return (
    <div className={styles.hero}>
      <Header />
      <section className={styles["about-section"]}>
        <p>Hello, I'm</p>
        <h1 className={styles["about-h1"]}>Chad J Campbell</h1>
        <AnimatedHeader header={header} />
        <img className={styles["about-img"]} src="/chadjcampbell.jpeg" />
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
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles["about-p"]}
    >
      {header}
    </motion.p>
  );
};
