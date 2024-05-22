import React from "react";
import { motion } from "framer-motion";
// style
import "../styles/game.scss";
// import REDUX as we need to populate the detail while we click on each
// useSelector will be used for retrieving the data from state
import { useDispatch, useSelector } from "react-redux";
// import ACTION
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, rating, id }) => {
  // We are doing dispaching loadDetail() here for games data
  // This below provide the ability to dispatch
  const dispatch = useDispatch();
  // We will use event handler method here

  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <div className="game" onClick={loadDetailHandler}>
      <div>
        <h3>{name}</h3>
        <div className="data">
          <p>Release Date: {released}</p>
          <p>Rating: {rating}</p>
        </div>
        <img src={image} alt="{name}" />
      </div>
    </div>
  );
};

export default Game;
