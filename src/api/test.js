const base_url = "https://api.rawg.io/api/";

// Current day/month/Year
const currentYear = new Date().getFullYear();
const currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);
const currentDay = new Date().getDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
// https://api.rawg.io/api/games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=2019-09-01,2019-09-30

const current_year_games = () =>
  `${base_url}games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=${lastYear},${currentDate}`;
const future_year_games = () =>
  `${base_url}games?key=a77e904e38434e63ad0cce0d0ac43e1f&dates=${currentDate},${nextYear}`;

console.log(current_year_games());
