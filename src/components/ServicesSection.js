import React from "react";
// import icons
import clock from "../img/clock.svg";
import diaPhragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Import Styled component
// import styled component
import styled from "styled-components";

import {
  StyledAbout,
  StyledDescription,
  StyledImage,
} from "../styles/StyledAbout";

const ServicesSection = () => {
  return (
    <StyledService>
      <StyledDescription>
        <h2>
          high <span>quality</span> services
        </h2>
        <StyledCards>
          <StyledCard className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficiant</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </StyledCard>
          <StyledCard className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>TeamWork</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </StyledCard>
          <StyledCard className="card">
            <div className="icon">
              <img src={diaPhragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </StyledCard>
          <StyledCard className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} />
      </StyledImage>
    </StyledService>
  );
};

const StyledService = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    /* width: 25%; */
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  /* width: 50%; */
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: black;
    padding: 1rem;
  }
`;

const StyledIcon = styled.div``;

export default ServicesSection;
