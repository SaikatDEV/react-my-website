import React from "react";
// import STYLES and animation
import "../styles/gameDetails.scss";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";

const GameDetails = () => {
  // Get the Data from state
  const { gameDetails, screenshots, achievements, isLoading } = useSelector(
    (state) => state.gameDetails
  );

  if (isLoading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{gameDetails.name}</h3>
            <p>Rating: {gameDetails.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms:</h3>
            <div className="platforms">
              {gameDetails.platforms.map((each) => (
                <h3 key={each.platform.id}>{each.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <a href={gameDetails.website} target="_blank">
            <img src={gameDetails.background_image} alt={gameDetails.name} />
          </a>
        </div>
        <div className="description">
          <p>{gameDetails.description_raw}</p>
        </div>
        <div className="gallery">
          <h3>Achievements:</h3>
          <div className="achievements">
            {achievements.map((each) => (
              <img key={each.id} src={each.image} alt={each.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
