import React from "react";
import home1 from "../img/home1.png";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles/StyledAbout";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sint
          iusto rem nisi laborum quod iste reiciendis explicabo, molestias
          harum!
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="Guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
