// MainPage.js

import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Resume from "../ResumeFolder/Resume";
import ContactInfo from "../ContactFolder/ContactInfo";

const resumeButton = "Resume";
const contactButton = "Contact Info";
const gitHub = "GitHub";
const leetCode = "Leet Code";
const personalImg =
  "https://media.licdn.com/dms/image/D4D03AQG2DcMrVstsmw/profile-displayphoto-shrink_800_800/0/1678821554248?e=1695254400&v=beta&t=ewg70PFYEA182awXJ_5weLmmDAYqhZgtVQ0c8GoNInA";

function MainPage() {
  const [currentPage, setCurrentPage] = useState(getInitialPage());

  useEffect(() => {
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  function getInitialPage() {
    const path = window.location.pathname;
    if (path === "/resume") {
      return "resume";
    } else if (path === "/contact") {
      return "contact";
    }
    return "main";
  }

  function handlePopState(event) {
    setCurrentPage(getInitialPage());
  }

  const navigateToPage = (page) => {
    setCurrentPage(page);
    const path = `/${page === "main" ? "" : page}`;
    window.history.pushState(null, null, path);
  };

  const openGitHub = () => {
    window.open("https://github.com/ahmedIbrahim84201", "_blank");
  };
  const openLeetCode = () => {
    window.open("https://leetcode.com/ahmedibrahim51836/", "_blank");
  };

  return (
    <div>
      <nav className="nav-bar contact-info">
        <div className="left flex">
          <button
            className={currentPage === "main" ? "active" : ""}
            onClick={() => navigateToPage("main")}
          >
            Home
          </button>
          <button
            className={currentPage === "resume" ? "active" : ""}
            onClick={() => navigateToPage("resume")}
          >
            {resumeButton}
          </button>
          <button type="button" onClick={openGitHub}>
            {gitHub}
          </button>
          <button type="button" onClick={openLeetCode}>
            {leetCode}
          </button>
          <button
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => navigateToPage("contact")}
          >
            {contactButton}
          </button>
        </div>
      </nav>
      {currentPage === "main" && (
        <div>
          <h1 className="name-design">Ahmed Ibrahim</h1>
          <div className="flex">
            <p className="about-me">
              👋 Welcome to my resume website! I'm a skilled React web developer
              with a passion for creating innovative solutions and crafting
              high-quality code. With expertise in both web and game
              development, I've successfully built functional websites using
              ReactJS and contributed significantly to Unity-based games. My
              strong problem-solving abilities and aptitude for learning new
              technologies allow me to overcome any obstacles that come my way.
              Whether it's crafting responsive user interfaces or diving into
              app development, I'm committed to delivering efficient and
              cutting-edge solutions. Take a peek inside my profile to explore
              my journey and accomplishments.🚀
            </p>
            <img className="img" src={personalImg} alt="Profile" />
          </div>
        </div>
      )}
      {currentPage === "resume" && <Resume />}
      {currentPage === "contact" && <ContactInfo />}
    </div>
  );
}

export default MainPage;
