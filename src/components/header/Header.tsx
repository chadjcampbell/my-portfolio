import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <h2>CJC Dev Portfolio</h2>
      <div>
        <a
          href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
          target="_blank"
          aria-label="linked in new tab"
        >
          <BsGithub size={40} />
        </a>
        <a
          href="https://github.com/chadjcampbell"
          target="_blank"
          aria-label="github new tab"
        >
          <BsLinkedin size={40} />
        </a>
      </div>
    </header>
  );
};
