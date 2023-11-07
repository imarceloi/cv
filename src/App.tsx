import "./App.scss";
import "./assets/scss/print/_colors.scss";
import "./assets/scss/print/_print.scss";
import { Academics } from "./components/Academic";
import { Experience } from "./components/Experience";
import { experiences } from "./components/Experience/data";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <div className="resume-wrapper">
        <Profile />

        <section className="experience section-padding">
          <div className="section-wrapper">
            <h3 className="section-title">Experience</h3>

            {experiences.map((experience, index) => (
              <Experience key={`experience_${index}`} experience={experience} />
            ))}
          </div>
          <div className="clearfix"></div>
          <Academics />
          <div className="clearfix"></div>
          <div className="hide-on-print">
            <Skills />
            <div className="clearfix"></div>
          </div>
          <div className="section-wrapper clearfix hide-on-print">
            <h3 className="section-title">Hobbies</h3>
            <p>IN PROGRESS</p>
          </div>
        </section>

        <section className="skills-print show-on-print section-padding">
          <div className="clearfix"></div>
          <Skills />
          <div className="clearfix"></div>
        </section>

        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default App;
