import { type } from "@testing-library/user-event/dist/type";
import { achievements_by_id } from "../api/gamesApi";

const initState = {
  allGames: [],
  currentYearGames: [],
  futureYearGames: [],
  achievementsById: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      // So we are updating the api data as below to the state
      return {
        ...state,
        allGames: action.payload.allGames,
        currentYearGames: action.payload.currentYearGames,
        futureYearGames: action.payload.futureYearGames,
        achievementsById: action.payload.achievementsById,
      };
    case "CLEAR_GAMES":
      return {};
    default:
      return { ...state };
  }
};

export default gamesReducer;
