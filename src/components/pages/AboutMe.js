import { Link } from "react-router-dom";
import "./AboutMe.css";
import Typewriter from "typewriter-effect";
import {
  SiCss3,
  SiHtml5,
  SiReact,
  SiStyledcomponents,
  SiGithub,
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

// import BackgroundImage from "../../components/image/glass-2.jpg";
// import BackgroundImage from "../../components/image/g-3.jpg";
// import BackgroundImage from "../../components/image/background_wals_white_generated.jpg";
// import BackgroundImage from "../../components/image/grey-wall.jpeg";
import BackgroundImage from "../../components/image/grey-brick-2.jpeg";
// import BackgroundImage from "../../components/image/sp-cer.jpg";

function AboutMe() {
  return (
    <div className="about-me">
      <img className="bg-image" src={BackgroundImage} alt="bg" />
      <div className="about-wrapper">
        <div className="about-card">
          <h3>
            <div className="about-title">Welcome</div>
            <div className="about-title typing">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  strings: [
                    "I'm Anna Arzumanyan.",
                    "I'm a front-end developer.",
                    "< Here's my tech stack / >",
                  ],
                }}
              ></Typewriter>
            </div>
          </h3>
        </div>
        <div className="about-card"></div>
        <div className="skills-container">
          <div className="skills-wrapper">
            <div className="skills-card skills-card-first">
              <p className="skills-list">
                <span className="tech-icons">
                  <SiHtml5 />
                </span>
                HTML
              </p>
              <p className="skills-list">
                <span className="tech-icons">
                  <SiCss3 />
                </span>
                CSS
              </p>
              <p className="skills-list">
                <span className="tech-icons javascript-icon">
                  <IoLogoJavascript />
                </span>
                Javascript
              </p>
              <p className="skills-list">
                <span className="tech-icons">
                  <SiReact />
                </span>
                ReactJS
              </p>
            </div>

            <div className="skills-card skills-card-second">
              <p className="skills-list">
                <span className="tech-icons">
                  <SiGithub />
                </span>
                GitHub
              </p>
              <p className="skills-list">
                <span className="tech-icons">
                  <DiSass />
                </span>
                Sass
              </p>
              <p className="skills-list styled-components-text">
                <span className="tech-icons styled-icon">
                  <SiStyledcomponents />
                </span>
                Styled Components
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutMeBtns">
        <Link to="/portfolio" className="projectsBtn">
          My Projects
        </Link>
        <Link to="/contactme" className="contactMeBtn">
          Contact me
        </Link>
      </div>
    </div>
  );
}

export default AboutMe;
