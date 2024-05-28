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
          <ul>
            <li>
              <Link to="/projects">
                <b>
                  <u>All Popular Games:</u>
                </b>
                <p>(This will fetch games data from open source games API)</p>
              </Link>
            </li>

            <li>
              <Link to="/searchImage">
                <b>
                  <u>Search For any Images: (In progress...)</u>
                </b>
                <p>(This will fetch images from open source API)</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <b>
                  <u>More:</u>
                </b>
                <p>(In Progress....)</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
