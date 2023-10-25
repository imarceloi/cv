import "./Skills.scss";
import { skills } from "./data";

export const Skills = (): JSX.Element => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li className="skill-percentage" key={`skill_${index}`}>
          {skill}
        </li>
      ))}
    </ul>
  );
};
