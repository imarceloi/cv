import "./Academic.scss";
import { academics } from "./data";

export const Academics = (): JSX.Element => {
  return (
    <>
      <div className="section-wrapper clearfix">
        <h3 className="section-title">Academics</h3>
        <ul className="academics">
          {academics.map((academic, index) => (
            <li className="academic" key={`academic_${index}`}>
              <span>
                <p>
                  <b>{academic.title}</b>
                  {academic.place && `, ${academic.place}`}
                </p>
                <p>{academic.school}</p>
              </span>
              <span>
                <p>{academic.when}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
