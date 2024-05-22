import React, { useEffect } from "react";
import "../styles/allProjects.scss";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const AllProjects = () => {
  // We are doing dispaching loadGames() here for games data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div className="games">
      <h2>All Projects will be added here...</h2>
    </div>
  );
};

export default AllProjects;
