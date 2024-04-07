import React from "react";
import "../styles/skillsSection.scss";

const SkillsSection = () => {
  return (
    <div className="skillsSection">
      <div className="skillsDesc">
        <div className="title">
          <h2>Skills...</h2>
        </div>
        <p>
          <ul>
            <li>
              <b>
                <u>Languages</u>
              </b>
              : Java, Ruby, Groovy, SQL, PL-SQL, Shell Scripting, Python
            </li>
            <li>
              <b>
                <u>Framework Technologies</u>
              </b>
              : React, VueJS, TestNG, JUnit, Serenity, Cucumber, PlayWright,
              Karate, Rest Assured, Jmeter, ANT, Maven, Jenkins, Bamboo, GitHUB,
              Docker Container, Saucelabs etc
            </li>
            <li>
              <b>
                <u>Scripting/Markup Languages</u>
              </b>
              : HTML, JSON, CSS, JAVASCRIPT, Node.js, ES6 etc
            </li>
            <li>
              <b>
                <u>IDE’s/Tools</u>
              </b>
              : VScode, Eclipse 2.0/2.1/3.1, Spring Tool Suite, Rubymine,
              Sublime etc
            </li>
            <li>
              <b>
                <u>Testing Tools</u>
              </b>
              : Selenium WebDriver, Playwright, Quality Center, QTP, RFT
            </li>
            <li>
              <b>
                <u>Defect Tracking Tools</u>
              </b>
              : TRAC, JIRA, TFS, Rally
            </li>
            <li>
              <b>
                <u>Databases</u>
              </b>
              : Oracle 10g/11gR2/12C, SQL Server, MongoDB etc
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;
