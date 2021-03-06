import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export const SnsIcons = () => {
  return (
    <div className="sns-icons">
      <span className="social-media-span">
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:arzumanyan.an@gmail.com"
        >
          <MdIcons.MdEmail className="sidebar-sns" />
        </a>
      </span>
      <span className="social-media-span">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/anna-arzumanyan/"
        >
          <FaIcons.FaLinkedin className="sidebar-sns" />
        </a>
      </span>
      <span className="social-media-span">
        <a target="_blank" rel="noreferrer" href="https://github.com/AnnaAn01">
          <FaIcons.FaGithubSquare className="sidebar-sns" />
        </a>
      </span>
      <span className="social-media-span">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/AnnaSoftwareDev"
        >
          <FaIcons.FaTwitterSquare className="sidebar-sns" />
        </a>
      </span>
      {/* 
      <span className="social-media-span">
        <a target="_blank" rel="noreferrer" href="https://youtube.com">
          <FaIcons.FaYoutube className="sidebar-sns" />
        </a>
      </span> */}
    </div>
  );
};
