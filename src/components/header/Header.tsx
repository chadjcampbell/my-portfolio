import { BsLinkedin, BsGithub } from "react-icons/bs";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div>
        <a
          href="https://www.linkedin.com/in/chad-campbell-b6b59693/"
          target="_blank"
          aria-label="linked-in"
        >
          <BsGithub size="3rem" />
        </a>
        <a
          href="https://github.com/chadjcampbell"
          target="_blank"
          aria-label="github"
        >
          <BsLinkedin size="3rem" />
        </a>
      </div>
    </header>
  );
};
