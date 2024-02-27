import React from "react";

// This below always needed to import to use styled components
import styled from "styled-components";
// import StyledAbout
import { StyledAbout } from "../styles/StyledAbout";
import Toggle from "../components/reusable/Toggle";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <Toggle title="How do I Start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
      </Toggle>

      <Toggle title="Daily Schedule">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
      </Toggle>

      <Toggle title="Different Payment mathod">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
      </Toggle>

      <Toggle title="What product do you offer?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            veritatis eum, molestiae assumenda doloremque maiores,
          </p>
        </div>
      </Toggle>
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
