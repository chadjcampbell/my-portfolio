import styles from "./nav.module.css";
import { AiOutlineHome, AiOutlineDesktop, AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

export const Nav = () => {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
};
