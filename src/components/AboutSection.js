import React from "react";
import image from "../img/saikat.jpg";
import background from "../img/about-background.jpg";

import "../styles/aboutSection.scss";

const AboutSection = () => {
  return (
    <div className="aboutProfile">
      <div className="container">
        <div className="background-overlay">
          <img src={background} alt="Background Image" />
        </div>
        <div className="profileImg">
          <img src={image} alt="Saikat profile photo" />
          <div className="reveal-img"></div>
        </div>

        <div className="desc">
          <div className="title">
            <h2>About me...</h2>
          </div>
          <p className="text-lg">
            <span>
              I am a Technology-minded individual with a passion for Front End
              Web Development using REACT, VueJS, HTML, CSS, Javascript etc.
            </span>
            <br /> <br />
            <span>
              As well expert on designing Test Automation Framework from scratch
              using Selenium or any other framework like GEB-Spock, Cucumber BDD
              using Ruby/Java, Serenity-BDD, PlayWright-Java, Karate, Rspec,
              Java Junit/TestNG, RestAssured API, Jmeter, QTP. As well
              experienced on AWS, CI-CD environment using Jenkins, Bamboo,
              Saucelabs etc.
            </span>
          </p>
          <a
            href="https://docs.google.com/document/d/1CtdfXebvplwk0VU0mjf9Q3sI3qIhjWiD/edit"
            target="_blank"
            className="explore navButton"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
