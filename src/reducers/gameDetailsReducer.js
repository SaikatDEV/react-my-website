const initState = {
  gameDetails: {},
  screenshots: {},
  achievements: {},
  // initial loading
  isLoading: true,
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_GAME_DETAIL":
      // So we are updating the api data as below to the state
      return {
        ...state,
        gameDetails: action.payload.gameDetailsById,
        screenshots: action.payload.screenshotsById,
        achievements: action.payload.achievementsById,
        // When we finally fetch the data, loading is false
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
