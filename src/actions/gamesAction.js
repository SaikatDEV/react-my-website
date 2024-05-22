import axios from "axios";
import {
  all_games,
  current_year_games,
  future_year_games,
  achievements_by_id,
} from "../api/gamesApi";

// Action Creator as we are using thunk. So we can use async
export const loadGames = () => async (dispatch) => {
  try {
    //   FETCH data using AXIOS
    //   Using await, So it actually waits for the data to load
    // const all_free_games = await axios.get(all_free_games());
    // console.log("API:" + all_free_games());

    // Fetch ALL Games data using AXIOS
    const allGamesRes = await axios.get(all_games());
    // Current year Games data using AXIOS
    const currentYearGamesRes = await axios.get(current_year_games());
    // Future year Games data using AXIOS
    const futureYearGamesRes = await axios.get(future_year_games());
    // Achievements Games data using AXIOS
    const achievementsByIdGamesRes = await axios.get(achievements_by_id(12));

    // Dispatch the action
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        allGames: allGamesRes.data.results,
        currentYearGames: currentYearGamesRes.data.results,
        futureYearGames: futureYearGamesRes.data.results,
        achievementsById: achievementsByIdGamesRes.data.results,
      },
    });
  } catch (error) {
    console.error("Failed to load games:", error);
  }
};
