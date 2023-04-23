import { motion } from "framer-motion";
import styles from "./nav.module.css";
import { AiOutlineHome, AiOutlineDesktop, AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

export const Nav = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 4.5 }}
      className={styles.navbar}
    >
      <a href="#">
        <AiOutlineHome />
        <p>Home</p>
      </a>
      <a href="#skills">
        <VscTools />
        <p>Skills</p>
      </a>
      <a href="#projects">
        <AiOutlineDesktop />
        <p>Projects</p>
      </a>
      <a href="#contact">
        <AiOutlineMail />
        <p>Contact</p>
      </a>
    </motion.nav>
  );
};
