import "./Profile.scss";
import marcelo from "../../assets/images/marcelo.jpg";
import { useEffect, useRef, useState } from "react";
const paddings = 100; // default paddings top plus bottom
const tablet = 850; // default size for tablet on media queries

export const Profile = (): JSX.Element => {
  const [windowY, setWindowY] = useState<number>();
  const elementRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const offsetHeight =
    (containerRef.current?.offsetHeight || 0) + paddings - window.innerHeight;

  useEffect(() => {
    function updatePosition() {
      window.scrollY > offsetHeight && window.innerWidth > tablet
        ? elementRef.current?.classList.add("fixed")
        : elementRef.current?.classList.remove("fixed");
      setWindowY(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [offsetHeight, windowY]);

  return (
    <section ref={elementRef} className="profile section-padding ">
      <div ref={containerRef} className="container">
        <div className="picture-resume-wrapper">
          <div className="picture-resume">
            <span>
              <img src={marcelo} alt="Marcelo" />
            </span>
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
          <ul className="list-titles hide-on-print">
            <li>Call</li>
            <li>Contact</li>
            <li>LinkedIn</li>
            <li>Address</li>
          </ul>
          <ul className="list-content">
            <li>
              <a className="hide-on-print" href="tel:+351935453564">
                Call
              </a>
              <span className="show-on-print contact">
                <a className="bold" href="tel:+351935453564">
                  +351 935 453 564
                </a>
                <span className="bold">mcoclic10@gmail.com</span>
              </span>
            </li>
            <li>
              <span className="hide-on-print">Contact me</span>
            </li>
            <li>
              <a
                className="hide-on-print"
                href="https://www.linkedin.com/in/imarceloi/"
                target="_blank"
                rel="noreferrer"
              >
                @imarceloi
              </a>
              <a
                className="show-on-print"
                href="https://www.linkedin.com/in/imarceloi/"
              >
                @imarceloi (LinkedIn, Twitter and Github)
              </a>
            </li>
            <li>Vila Nova de Famalicão, Braga, Portugal</li>
          </ul>
        </div>

        <div className="contact-presentation">
          <div className="section-wrapper clearfix">
            <h3 className="section-title">Career</h3>
            <p>
              I have been a front-end engineer for over 8 years and, more than
              10 in the digital area. I started my career as a creative party
              where I built layouts' websites, hotsites, portals, and email
              marketing campaigns. Then I went to the development area, coding
              in practice and I fell in love with these colorful letters that
              give life to all these technologies that we have seen today. Being
              able to see this evolution of technologies, participating, and
              contributing to it has been a great challenge for me.
            </p>

            <p>
              In this trajectory, I went to a lot of digital advertising
              agencies, it gave me a more strategic vision of projects that I
              worked on, I always tried to see a more critical and user-focused.
            </p>

            <p>
              I've got a lot of experience working in different markets like HR,
              Health, Financial, Beauty, and Luxury.{" "}
              <span className="hide-on-print">Working with:</span>
            </p>
            <ul className="hide-on-print">
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
              I'm still on my way and just enjoying it to help real-life people
              with technology!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
