import React, { useEffect } from "react";
// style
import "../styles/allProjects.scss";
// Redux
// useSelector will be used for retrieving the data from state
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";

const AllProjects = () => {
  // We are doing dispaching loadGames() here for games data
  // If we dont use [dispatch] in useEffect, it will keep fetching
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Pull the data from state using useSelector
  // const games = useSelector((state) => state.games);
  // console.log(games);
  // Deconstruct the games object as below:
  const { allGames, currentYearGames, futureYearGames, achievementsById } =
    useSelector((state) => state.games);

  return (
    <div className="games">
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
