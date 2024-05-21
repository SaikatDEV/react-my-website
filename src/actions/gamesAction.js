import axios from "axios";
import { all_games } from "../api/gamesApi";

// Action Creator as we are using thunk. So we can use async
export const loadGames = () => async (dispatch) => {
  try {
    //   FETCH data using AXIOS
    //   Using await, So it actually waits for the data to load
    // const all_free_games = await axios.get(all_free_games());
    // console.log("API:" + all_free_games());

    // const response = await axios.get(all_free_games());
    const response = await axios.get(all_games());
    console.log(response.data);
    const allGamesRes = response.data.results;

    // Dispatch the action with the fetched data
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        allGames: allGamesRes,
      },
    });
  } catch (error) {
    console.error("Failed to load games:", error);
  }
};

// allFree: [],
// byPlatform: [],
// byId: [],
// byCatagory: [],
