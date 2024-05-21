import { type } from "@testing-library/user-event/dist/type";

const initState = {
  allGames: [],
  byPlatform: [],
  byId: [],
  achievementsById: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      // So we are updating the api data as below to the state
      return { ...state, allGames: action.payload.allGames };
    case "CLEAR_GAMES":
      return {};
    default:
      return { ...state };
  }
};

export default gamesReducer;
