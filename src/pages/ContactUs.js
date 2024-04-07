import React from "react";

import "../styles/contactUs.scss";

const ContactUs = () => {
  return (
    <div className="contact">
      <ul className="navLinks">
        <h3>
          <a
            href="https://www.linkedin.com/in/saikat-barua-mcitp-icp-csm/"
            target="_blank"
          >
            LinkedIn
          </a>
        </h3>

        <h3>
          <a href="https://github.com/SaikatDEV" target="_blank">
            Github
          </a>
        </h3>
        <h3>
          <a
            href="https://stackoverflow.com/users/3434387/asm?tab=profile"
            target="_blank"
          >
            StackOverflow
          </a>
        </h3>
        <h3>
          <a href="mailto:devsaikat00@gmail.com" target="_blank">
            Email
          </a>
        </h3>
      </ul>
      <div className="touch">
        <h2>Stay in touch...</h2>
      </div>
    </div>
  );
};

export default ContactUs;
