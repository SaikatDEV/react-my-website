// const base_url = "https://rawg-video-games-database.p.rapidapi.com/";
// const base_url = "https://www.freetogame.com/api/";
const base_url = "https://api.rawg.io/api/";
export const all_games = () =>
  `${base_url}games?key=a77e904e38434e63ad0cce0d0ac43e1f&page_size=10`;
export const achievements_by_id = (id) =>
  `${base_url}games/${id}/achievements?key=a77e904e38434e63ad0cce0d0ac43e1f`;

// Current day/month/Year
const currentYear = new Date().getFullYear();
const currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
const currentDay = new Date().getDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// https://api.rawg.io/api/games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=2019-09-01,2019-09-30

export const current_year_games = () =>
  `${base_url}games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=${lastYear},${currentDate}`;
export const future_year_games = () =>
  `${base_url}games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=${currentDate},${nextYear}`;

// Below API needed to be refactored
export const games_by_platform = (platform) =>
  `${base_url}games?platform=${platform}`;
// Games by category or tag. eg: mmorpg, shooter, pvp, mmofps
export const games_by_catagory = (catagory) =>
  `${base_url}games?category=${catagory}`;
//   Sort games by release date, alphabetical or relevance. release-date, popularity, alphabetical or relevance
// `${base_url}games?sort-by=alphabetical`;
export const games_sorting = (sort) => `${base_url}games?sort-by=${sort}`;
//   Return details from a specific game
// `${base_url}game?id=452`;
export const games_details_by_id = (id) =>
  `${base_url}game/${id}?key=a77e904e38434e63ad0cce0d0ac43e1f`;

// export const popular_games = () => ({
//   method: "GET",
//   url: "https://opencritic-api.p.rapidapi.com/game/popular",
//   headers: {
//     "x-rapidapi-key": "bf3f265f3bmsh72077035427e1a6p100c42jsn98fa1a3e33e4",
//     "x-rapidapi-host": "opencritic-api.p.rapidapi.com",
//   },
// });
