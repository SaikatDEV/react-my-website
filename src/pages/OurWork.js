import React from "react";
import styled from "styled-components";
// We can use below for Router and navigate to another page
import { Link } from "react-router-dom";
// import the pictures
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="Picture of an Athlete" />
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="Picture of a racer" />
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="Picture of Good times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  /* We will animate this So we want this below: */
  overflow: hidden;
  /* color: white; */
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
  /* background: white; */
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
