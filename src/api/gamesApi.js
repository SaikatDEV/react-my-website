export const base_url = "https://www.freetogame.com/api/";
export const all_free_games = `${base_url}games`;
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
export const games_details_by_id = (id) => `${base_url}game?id=${id}`;
