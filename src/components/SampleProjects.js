import React from "react";
import "../styles/sampleProjects.scss";
import { Link } from "react-router-dom";

const SampleProjects = () => {
  return (
    <div className="projects">
      <div className="sample">
        <div className="title">
          <h2>All sample projects</h2>
        </div>
        <div className="allGamesList">
          <ul style={{ listStyleType: "square" }}>
            <li>
              <Link to="/projects">
                <b>
                  <u>All Popular Games:</u>
                </b>
                <p>
                  (This will fetch the data from open source games API end
                  point)
                </p>
              </Link>
            </li>

            <li>
              <b>
                <u>Search For any Images:</u>
              </b>
              <p>
                (This will fetch the screenshots from open source API end point)
              </p>
            </li>
            <li>
              <b>
                <u>More:</u>
              </b>
              <p>(In Progress....)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
