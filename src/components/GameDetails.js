import React from "react";
// import STYLES and animation
import "../styles/gameDetails.scss";
import { motion } from "framer-motion";
// REDUX
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// icons import from img folder
import apple from "../img/apple.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import gamepad from "../img/gamepad.svg";

const GameDetails = () => {
  // import useNavigate and add this below element
  // So we can navigate to any page
  const navigation = useNavigate();

  // Exit Detail while click on the shadow
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("card-shadow")) {
      // document.body.style.overflow = "auto";
      navigation("/projects");
    }
  };

  // Get platform icon images;
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Get the Data from state
  const { gameDetails, screenshots, achievements, isLoading } = useSelector(
    (state) => state.gameDetails
  );

  if (isLoading) {
    return <div className="spinner">Loading...</div>;
  }

  return (
    <div className="card-shadow" onClick={exitDetailsHandler}>
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
                <img
                  alt={each.platform.name}
                  key={each.platform.id}
                  src={getPlatform(each.platform.name)}
                ></img>
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
