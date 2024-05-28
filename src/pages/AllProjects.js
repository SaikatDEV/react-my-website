import React, { useEffect } from "react";
// style
import "../styles/allProjects.scss";
// Import below to get the current location
import { useLocation } from "react-router-dom";
// Redux
// useSelector will be used for retrieving the data from state
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

const AllProjects = () => {
  // Get the current location path
  const location = useLocation();
  // console.log(location.pathname);
  const pathId = location.pathname.split("/")[2];

  // We are doing dispaching loadGames() here for games data
  // If we dont use [dispatch] in useEffect, it will keep fetching
  const dispatch = useDispatch();
  useEffect(() => {
    // This below will scroll to the top at the beginning
    window.scrollTo(0, 0);
    dispatch(loadGames());
  }, [dispatch]);

  // Pull the data from state using useSelector then we can do dipatch
  // const games = useSelector((state) => state.games);
  // console.log(games);
  // Deconstruct the games object as below:
  const { allGames, currentYearGames, futureYearGames, achievementsById } =
    useSelector((state) => state.games);

  return (
    <div className="games">
      {pathId && <GameDetails></GameDetails>}
      <div className="current">
        <h2>Current Year Games:</h2>
        <div className="game">
          {currentYearGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              rating={game.rating}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
      </div>
      <div className="upcoming">
        <h2>Upcoming Games:</h2>
        <div className="game">
          {futureYearGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              rating={game.rating}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
      </div>
      <div className="allGames">
        <h2>All Popular Games:</h2>
        <div className="game">
          {allGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              rating={game.rating}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
