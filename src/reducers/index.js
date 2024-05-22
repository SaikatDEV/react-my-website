import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer";
import gameDetailsReducer from "./gameDetailsReducer";

// As soon as we add below, we will be able to see them in REDUX tool
const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetails: gameDetailsReducer,
  //   we can add more reducer here
});

export default rootReducer;

// As soon as we dispatch the action in the js file,
// It goes to ACTION.js > verify the dispatch type is correct
// Then goes to the REDUCER.js > update the data from payload
