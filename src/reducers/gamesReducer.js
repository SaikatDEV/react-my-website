const initState = {
  allGames: [],
  currentYearGames: [],
  futureYearGames: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      // So we are updating the api data as below to the state
      return {
        ...state,
        allGames: action.payload.allGames,
        currentYearGames: action.payload.currentYearGames,
        futureYearGames: action.payload.futureYearGames,
      };
    case "CLEAR_GAMES":
      return {};
    default:
      return { ...state };
  }
};

export default gamesReducer;
