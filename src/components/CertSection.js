import React from "react";
import "../styles/certSection.scss";
import { Link } from "react-router-dom";

const CertSection = () => {
  return (
    <div className="certSection">
      <div className="certDesc">
        <div className="title">
          <h2>Professional Certifications. </h2>
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
        <p>
          <ul>
            <li>
              <b>
                <u>Microsoft Certified IT Professional(MCITP)</u>
              </b>
              : on ms sql server 2008r2 - Achieved on: 2014
            </li>
            <li>
              <b>
                <u>Certified Scrum Master(CSM)</u>
              </b>
              : Cert ID 000445251 (Active through: 16 December 2025)
            </li>
            <li>
              <b>
                <u>ICAgile Certified Professional(ICP)</u>
              </b>
              : Achieved on: 2015
            </li>
            <li>
              <b>
                <u>Security +</u>
              </b>
              : CompTIA Verification Code: QK65S6YZCBF1Q03W (Active through: 29
              January 2029)
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default CertSection;
