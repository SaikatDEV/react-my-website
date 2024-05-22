import axios from "axios";
import { game_detail_by_id } from "../api/gamesApi";

// we need to export it, So we can use it in another file
export const loadDetail = (id) => async (dispatch) => {
  try {
    //   FETCH data using AXIOS
    //   Using await, So it actually waits for the data to load
    // const all_free_games = await axios.get(all_free_games());
    // console.log("API:" + all_free_games());

    const gameDetailsByIdRes = await axios.get(game_detail_by_id(id));

    // Dispatch the action
    dispatch({
      type: "GET_GAME_DETAIL",
      payload: {
        gameDetailsById: gameDetailsByIdRes.data,
      },
    });
  } catch (error) {
    console.error("Failed to load game Details:", error);
  }
};
