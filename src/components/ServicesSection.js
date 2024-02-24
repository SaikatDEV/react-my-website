import React from "react";
// import icons
import clock from "../img/clock.svg";
import diaPhragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          high <span>quality</span>services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficiant</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>TeamWork</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaPhragm} alt="icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              animi facilis possimus?
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} />
      </div>
    </div>
  );
};

export default ServicesSection;
