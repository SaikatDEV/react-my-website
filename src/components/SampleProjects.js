import React from "react";
import "../styles/sampleProjects.scss";
import { Link } from "react-router-dom";
import background from "../img/project-background.jpg";

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
            {/* 
   <Link to="/projects">
              <b>
                <u>All Popular Games:</u>
              </b>
              <p className="text-lg">
                (This will fetch games data from open source games API. Used:
                Axios, Redux, Scss)
              </p>
            </Link>
                */}

            <a href="https://buddhistcampus.netlify.app/" target="_blank">
              <b>
                <u>Buddhist Campus Website</u>
              </b>
              <p className="text-lg">(Used: Javascript, MUI, Tailwind etc)</p>
            </a>

            <Link to="/searchImage">
              <b>
                <u>Search For any Images:</u>
              </b>
              <p className="text-lg">
                (This will fetch images from open source API. Used: Axios, Scss)
              </p>
            </Link>

            <Link to="/myPlanner">
              <b>
                <u>Trip Itinerary</u>
              </b>
              <p className="text-lg">(Used: MaterialUI, Tailwind)</p>
            </Link>
            <Link to="/login">
              <b>
                <u>Login to update Trip Itinerary</u>
              </b>
              <p className="text-lg">
                Need to log-in for making any updates on the trip. <br /> (Used:
                MaterialUI, Tailwind)
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="background-overlay">
        <img src={background} alt="Background Image" />
      </div>
    </div>
  );
};

export default SampleProjects;
