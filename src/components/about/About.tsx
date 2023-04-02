import "./about.css";
import { BsArrowDownCircleFill } from "react-icons/bs";

export const About = () => {
  return (
    <section>
      <p>Hello, I'm</p>
      <h1 className="name">Chad J Campbell</h1>
      <p>Fullstack Developer</p>
      <img src="/chadjcampbell.jpeg" />
      <div className="arrow">
        <BsArrowDownCircleFill />
      </div>
    </section>
  );
};
