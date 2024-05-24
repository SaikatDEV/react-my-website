import axios from "axios";
import {
  game_detail_by_id_url,
  game_screenshot_by_id_url,
  achievements_by_id_url,
} from "../api/gamesApi";

// we need to export it, So we can use it in another file
export const loadDetail = (id) => async (dispatch) => {
  try {
    //   Dispatch for Loading spinner
    dispatch({
      type: "LOADING_DETAIL",
    });

    //   FETCH data using AXIOS
    //   Using await, So it actually waits for the data to load
    // const all_free_games = await axios.get(all_free_games());
    // console.log("API:" + all_free_games());
    const gameDetailsByIdRes = await axios.get(game_detail_by_id_url(id));
    const screenshotsByIdRes = await axios.get(game_screenshot_by_id_url(id));
    const achievementsByIdRes = await axios.get(achievements_by_id_url(id));

    // Dispatch the action
    dispatch({
      type: "GET_GAME_DETAIL",
      payload: {
        gameDetailsById: gameDetailsByIdRes.data,
        screenshotsById: screenshotsByIdRes.data,
        achievementsById: achievementsByIdRes.data.results,
      },
    });
  } catch (error) {
    console.error("Failed to load game Details:", error);
  }
};
