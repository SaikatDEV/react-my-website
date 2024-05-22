import React from "react";
import { motion } from "framer-motion";
// style
import "../styles/game.scss";

const Game = ({ name, released, image, rating }) => {
  return (
    <div className="game">
      <div>
        <h3>{name}</h3>
        <div className="data">
          <p>{released}</p>
          <p>Rating: {rating}</p>
        </div>
        <img src={image} alt="{name}" />
      </div>
    </div>
  );
};

export default Game;
