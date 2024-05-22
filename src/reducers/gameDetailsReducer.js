import { type } from "@testing-library/user-event/dist/type";
import { game_detail_by_id } from "../api/gamesApi";

const initState = {
  gameDetails: [],
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAIL":
      // So we are updating the api data as below to the state
      return {
        ...state,
        gameDetails: action.payload.gameDetailsById,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
