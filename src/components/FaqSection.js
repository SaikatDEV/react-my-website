import React from "react";

// This below always needed to import to use styled components
import styled from "styled-components";
// import StyledAbout
import { StyledAbout } from "../styles/StyledAbout";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      <div className="question">
        <h4>How do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment mathod</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What product do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  /* this below will ignore previously styled display flex  */
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
