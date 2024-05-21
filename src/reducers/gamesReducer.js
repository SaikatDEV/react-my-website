import { type } from "@testing-library/user-event/dist/type";

const initState = {
  allFree: [],
  byPlatform: [],
  byId: [],
  byCatagory: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    case "CLEAR_GAMES":
      return {};
    default:
      return { ...state };
  }
};

// ACTION
// {
//   type: "FETCH_GAMES";
// }
// dispatch({ type: "FETCH_GAMES" });

export default gamesReducer;
