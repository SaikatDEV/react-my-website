import React from "react";

import mcitp from "../img/mcitp.jpg";
import csm from "../img/csm.jpg";
import security from "../img/comptia.jpg";
import icp from "../img/icp.jpg";

import "../styles/exploreCert.scss";

const ExploreCertifications = () => {
  return (
    <div className="certSection">
      <div className="detailSlide">
        <div className="cert-text">
          <h2>MCITP</h2>
          <p>
            Microsoft Certified IT professional on ms sql server 2008r2 -
            Achieved on: 2014
          </p>
        </div>
        <div className="certImg">
          <img src={mcitp} alt="MCITP logo"></img>
        </div>
      </div>

      <div className="detailSlide">
        <div className="cert-text">
          <h2>CSM</h2>
          <p>
            Certified Scrum Master Cert ID: 000445251 (Active through: 16
            December 2025)
          </p>
        </div>
        <div className="certImg">
          <img src={csm} alt="CSM logo"></img>
        </div>
      </div>

      <div className="detailSlide">
        <div className="cert-text">
          <h2>Security+</h2>
          <p>
            CompTIA <br />
            (Active through: 29 January 2029)
          </p>
        </div>
        <div className="certImg">
          <img src={security} alt="Security logo"></img>
        </div>
      </div>

      <div className="detailSlide">
        <div className="cert-text">
          <h2>ICP</h2>
          <p>ICAgile Certified Professional</p>
        </div>
        <div className="certImg">
          <img src={icp} alt="ICP image"></img>
        </div>
      </div>
    </div>
  );
};

export default ExploreCertifications;
