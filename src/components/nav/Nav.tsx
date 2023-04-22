import { AiOutlineHome, AiOutlineDesktop, AiOutlineMail } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";

export const Nav = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#skills">
        <VscTools />
      </a>
      <a href="#projects">
        <AiOutlineDesktop />
      </a>
      <a href="#contact">
        <AiOutlineMail />
      </a>
    </nav>
  );
};
