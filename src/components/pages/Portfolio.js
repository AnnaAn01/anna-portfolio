import React from "react";
import "./Portfolio.css";
import projectImgDefault from "../image/project-image-default.jpg";
import projectGifDefault from "../image/project-gif-test.gif";
import projectimg1 from "../image/lang-course-1.PNG";
import ComingSoon from "../image/coming-soon.png";
import RecipeWebsite from "../image/recipe-website-screenshot.png";
import projectvideoDefault from "../video/project-video-default.mp4";
import { FaArrowCircleUp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import Sidebar from "../Sidebar";

function Portfolio() {
  return (
    <section className="portfolio">
      {/* <Sidebar />*/}
      <div className="project-wrapper">
        <h1 className="project-title-h1">My Projects</h1>
        <div className="project-card-wrapper">
          <div className="project-card">
            <h2 className="project-name-h2">Language Learning Website</h2>
            <img className="project-img" src={projectimg1} alt="" />
            <div className="project-tech-stack-wrapper">
              <p className="project-teck-stack">React JS</p>
              <p className="project-teck-stack">Styled Comp.</p>
            </div>
            <p className="project-description">
              A React JS website, made using React Router, React Link and Styled
              Components.
            </p>
            <div className="project-btn-wrapper">
              <a
                className="project-btn project-btn-live"
                href="https://annaan01.github.io/language-courses-react-website/#/"
                target="_blank"
                rel="noreferrer"
              >
                <FaArrowCircleUp className="live-icon" />
                &nbsp; Live
              </a>
              <a
                className="project-btn"
                href="https://github.com/AnnaAn01/language-courses-react-website"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="github-icon" />
                &nbsp; Source
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-name-h2">Recipe Website </h2>
            <img className="project-img" src={RecipeWebsite} alt="" />

            {/*<video autoplay loop className="project-video" width="250">
              <source
                src={projectvideoDefault}
                type="video/mp4"
                autoplay
                loop
              />
            </video> */}
            <div className="project-tech-stack-wrapper">
              <p className="project-teck-stack">React JS</p>
              <p className="project-teck-stack">CSS3</p>
            </div>
            <p className="project-description">
              A React JS website, made using React HashRouter, React Link and
              CSS3. Mobile responsive coming soon!
            </p>
            <div className="project-btn-wrapper">
              <a
                className="project-btn project-btn-live"
                href="https://annaan01.github.io/recipe-website/#/"
                target="_blank"
                rel="noreferrer"
              >
                <FaArrowCircleUp className="live-icon" />
                &nbsp; Live
              </a>
              <a
                className="project-btn"
                href="https://github.com/AnnaAn01/recipe-website"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="github-icon" />
                &nbsp; Source
              </a>
            </div>
          </div>
          <div className="project-card">
            <h2 className="project-name-h2">Project 3 website </h2>
            <img className="project-img" src={ComingSoon} alt="" />

            {/*<video autoplay loop className="project-video" width="250">
            <source
              src={projectvideoDefault}
              type="video/mp4"
              autoplay
              loop
            />
          </video> */}
            <div className="project-tech-stack-wrapper">
              <p className="project-teck-stack">HTML</p>
              <p className="project-teck-stack">CSS</p>
              <p className="project-teck-stack">Javascript</p>
            </div>
            <p className="project-description">
              A new website is being worked on right now. Coming very soon!
            </p>
            <div className="project-btn-wrapper">
              <a
                className="project-btn project-btn-live"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaArrowCircleUp className="live-icon" />
                &nbsp; Live
              </a>
              <a
                className="project-btn"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub className="github-icon" />
                &nbsp; Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
