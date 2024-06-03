import React from "react";
import "../styles/sampleProjects.scss";
import { Link } from "react-router-dom";

const SampleProjects = () => {
  return (
    <div className="projects">
      <div className="sample">
        <div className="title">
          <h2>
            Sample projects <span>For Fun!</span>
          </h2>
        </div>
        <div className="allGamesList">
          <div className="lists">
            <Link to="/projects">
              <b>
                <u>All Popular Games:</u>
              </b>
              <p>(This will fetch games data from open source games API)</p>
            </Link>

            <Link to="/searchImage">
              <b>
                <u>Search For any Images:</u>
              </b>
              <p>(This will fetch images from open source API)</p>
            </Link>

            <Link to="/">
              <b>
                <u>More:</u>
              </b>
              <p>(In Progress....)</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
