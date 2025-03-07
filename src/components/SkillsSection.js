import React from "react";
import "../styles/skillsSection.scss";
import skillBackground from "../img/skills-background.jpg";

const SkillsSection = () => {
  return (
    <div className="skillsSection">
      <div className="skillsDesc">
        <div className="title">
          <h2>Skills...</h2>
        </div>
        <div className="skills">
          <ul>
            <li>
              <b>
                <u>Languages:</u>
              </b>
              <p className="text-lg">
                Javascript, Typescript, Java, Ruby, Groovy, SQL, PL-SQL, Shell
                Scripting, Python
              </p>
            </li>
            <li>
              <b>
                <u>Framework Technologies:</u>
              </b>
              <p className="text-lg">
                React, VueJS, TestNG, JUnit, Serenity, Cucumber, PlayWright,
                Karate, Rest Assured, Jmeter, ANT, Maven, Jenkins, Bamboo,
                GitHUB, Docker Container, Saucelabs etc
              </p>
            </li>
            <li>
              <b>
                <u>Scripting/Markup Languages:</u>
              </b>
              <p className="text-lg">
                HTML, JSON, CSS, JAVASCRIPT, Node.js, ES6 etc
              </p>
            </li>
            <li>
              <b>
                <u>IDE’s/Tools:</u>
              </b>
              <p className="text-lg">
                VScode, Eclipse 2.0/2.1/3.1, Spring Tool Suite, Rubymine,
                Sublime etc
              </p>
            </li>
            <li>
              <b>
                <u>Testing Tools:</u>
              </b>
              <p className="text-lg">
                Jest, Selenium WebDriver, Playwright etc
              </p>
            </li>
            <li>
              <b>
                <u>Defect Tracking Tools:</u>
              </b>
              <p className="text-lg">Trac, Jira, TFS, Rally</p>
            </li>
            <li>
              <b>
                <u>Databases:</u>
              </b>
              <p className="text-lg">
                Oracle 10g/11gR2/12C, SQL Server, MongoDB etc
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="background-overlay">
        <img src={skillBackground} alt="Background Image" />
      </div>
    </div>
  );
};

export default SkillsSection;
