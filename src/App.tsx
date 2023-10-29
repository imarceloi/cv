import "./App.scss";
import { Experience } from "./components/Experience";
import { experiences } from "./components/Experience/data";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="resume-wrapper">
        <Profile />

        <section className="experience section-padding">
          <div className="container">
            <h3 className="experience-title">Experience</h3>

            {experiences.map((experience, index) => (
              <Experience key={`experience_${index}`} experience={experience} />
            ))}

            <div className="section-wrapper clearfix">
              <h3 className="section-title">Skills</h3>
              <Skills />
            </div>

            <div className="section-wrapper clearfix">
              <h3 className="section-title">Hobbies</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                elit facilisis, adipiscing leo in, dignissim magna.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
                elit facilisis, adipiscing leo in, dignissim magna.
              </p>
            </div>
          </div>
        </section>

        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default App;
