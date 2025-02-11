import React from "react";
import "../styles/certSection.scss";
import { Link } from "react-router-dom";
import background from "../img/prof-background.jpg";

const CertSection = () => {
  return (
    <div className="certSection1">
      <div className="certDesc">
        <div className="title">
          <h2>Professional Certifications. </h2>
        </div>
        <div className="certs">
          <ul>
            <li>
              <b>
                <u>Microsoft Certified IT Professional(MCITP): </u>
              </b>
              <p className="text-lg">
                On ms sql server 2008r2 - Achieved on: 2014
              </p>
            </li>
            <li>
              <b>
                <u>Certified Scrum Master(CSM): </u>
              </b>
              <p className="text-lg">
                Cert ID 000445251 (Active through: 16 December 2025)
              </p>
            </li>
            <li>
              <b>
                <u>ICAgile Certified Professional(ICP):</u>
              </b>
              <p className="text-lg">Achieved on: 2015</p>
            </li>
            <li>
              <b>
                <u>Security +: </u>
              </b>
              <p className="text-lg">
                CompTIA Verification Code: QK65S6YZCBF1Q03W (Active through: 29
                January 2029)
              </p>
            </li>
          </ul>
          <div className="explore">
            <Link
              to="/certifications"
              href="https://docs.google.com/document/d/1CtdfXebvplwk0VU0mjf9Q3sI3qIhjWiD/edit"
              className="exploreCert navButton"
            >
              Explore Certs
            </Link>
          </div>
        </div>
      </div>
      <div className="background-overlay">
        <img src={background} alt="Background Image 2" />
      </div>
    </div>
  );
};

export default CertSection;
