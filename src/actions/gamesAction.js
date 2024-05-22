import axios from "axios";
import {
  all_games_url,
  current_year_games_url,
  future_year_games_url,
} from "../api/gamesApi";

// Action Creator as we are using thunk. So we can use async
// we need to export it, So we can use it in another file
export const loadGames = () => async (dispatch) => {
  try {
    //   FETCH data using AXIOS
    //   Using await, So it actually waits for the data to load
    // const all_free_games = await axios.get(all_free_games());
    // console.log("API:" + all_free_games());

    // Fetch ALL Games data using AXIOS
    const allGamesRes = await axios.get(all_games_url());
    // Current year Games data using AXIOS
    const currentYearGamesRes = await axios.get(current_year_games_url());
    // Future year Games data using AXIOS
    const futureYearGamesRes = await axios.get(future_year_games_url());

    // Dispatch the action
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        allGames: allGamesRes.data.results,
        currentYearGames: currentYearGamesRes.data.results,
        futureYearGames: futureYearGamesRes.data.results,
      },
    });
  } catch (error) {
    console.error("Failed to load games:", error);
  }
};
