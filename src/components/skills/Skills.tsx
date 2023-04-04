import "./skills.css";

const skillArray = [
  "devicon-html5-plain colored",
  "devicon-css3-plain colored",
  "devicon-javascript-plain colored",
  "devicon-typescript-plain colored",
  "devicon-react-original colored",
  "devicon-firebase-plain colored",
  "devicon-sqlite-plain colored",
  "devicon-nodejs-plain colored",
  "devicon-git-plain colored",
  "devicon-c-plain colored",
  "devicon-python-plain colored",
  "devicon-flask-original colored",
];

export const Skills = () => {
  return (
    <section className="skills">
      <h2 className="title">Skills</h2>
      <div className="skill-container">
        {skillArray.map((skill) => (
          <i className={`skill-icon ${skill}`}></i>
        ))}
      </div>
    </section>
  );
};
