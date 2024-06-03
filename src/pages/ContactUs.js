import React from "react";
// Style
import "../styles/contactUs.scss";
// Images
import github from "../img/github.svg";
import stackoverflow from "../img/stack-overflow.svg";
import email from "../img/email.svg";
import linkedin from "../img/linkedin.svg";

const ContactUs = () => {
  return (
    <div className="contact">
      <ul className="navLinks">
        <li data-tooltip="LinkedIn">
          <a
            href="https://www.linkedin.com/in/saikat-barua-mcitp-icp-csm/"
            target="_blank"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
        </li>

        <li data-tooltip="GitHub">
          <a href="https://github.com/SaikatDEV" target="_blank">
            <img src={github} alt="GitHub" />
          </a>
        </li>

        <li data-tooltip="Stackoverflow">
          <a
            href="https://stackoverflow.com/users/3434387/asm?tab=profile"
            target="_blank"
          >
            <img src={stackoverflow} alt="Stackoverflow" />
          </a>
        </li>

        <li data-tooltip="Email">
          <a href="mailto:devsaikat00@gmail.com" target="_blank">
            <img src={email} alt="Email" />
          </a>
        </li>
      </ul>
      <div className="touch">
        <h2></h2>
      </div>
    </div>
  );
};

export default ContactUs;
