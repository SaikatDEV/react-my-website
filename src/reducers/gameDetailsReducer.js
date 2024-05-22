const initState = {
  gameDetails: {},
  screenshots: {},
  achievements: {},
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
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
