import "./App.scss";
import { Experience } from "./components/Experience";
import { experiences } from "./components/Experience/data";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="resume-wrapper">
        <section className="profile section-padding">
          <div className="container">
            <div className="picture-resume-wrapper">
              <div className="picture-resume">
                <span>M</span>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="name-wrapper">
              <h1>
                Marcelo <br />
                Nascimento
              </h1>
            </div>
            <div className="clearfix"></div>
            <div className="contact-info clearfix">
              <ul className="list-titles">
                <li>Call</li>
                <li>Contact</li>
                <li>LinkedIn</li>
                <li>Address</li>
              </ul>
              <ul className="list-content">
                <li>
                  <a href="tel:+351935453564">Call</a>
                </li>
                <li>Contact me</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/imarceloi/"
                    target="_blank"
                  >
                    @imarceloi
                  </a>
                </li>
                <li>Vila Nova de Famalicão, Braga, Portugal</li>
              </ul>
            </div>
            <div className="contact-presentation">
              <p>
                I have been a front-end engineer for over 8 years and, more than
                10 in the digital area. I started my career as a creative party
                where I built layouts’ websites, hotsites, portals, and email
                marketing campaigns. Then I went to the development area, coding
                in practice and I fell in love with these colorful letters that
                give life to all these technologies that we have seen today.
                Being able to see this evolution of technologies, participating,
                and contributing to it has been a great challenge for me.
              </p>

              <p>
                In this trajectory, I went to a lot of digital advertising
                agencies, and this experience gave me a more strategic vision of
                projects that I worked on, I always try to see with a more
                critical and user-focused.
              </p>

              <p>
                I've got a lot of experience working in different markets like
                HR, Health, Financial, Beauty, and Luxury. Working with:
              </p>
              <ul>
                <li>Angular</li>
                <li>
                  React (with all types of design systems, by market or private
                  ones)
                </li>
                <li>
                  React Native (from designing developing and publishing apps)
                </li>
                <li>
                  Cloud using AWS and more party of the time Microsoft Cloud (to
                  monitoring and to CI/CD)
                </li>
                <li>
                  Different architectures pass from static to more dynamic ways
                  using a different types of micro-frontends
                </li>
                <li>Git</li>
                <li>Agile (scrum and kanban)</li>
                <li>...</li>
              </ul>

              <p>
                I'm still on my way and just enjoying it to help real-life
                people with technology!
              </p>
            </div>
          </div>
        </section>

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
