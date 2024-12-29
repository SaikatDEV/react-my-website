const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 3001; // The port your Express server will listen on

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection configuration
const db = mysql.createConnection({
  host: "localhost", // Local IP since we are using SSH tunnel
  user: "saikmmgk_frd", // Database user
  password: "db_user_password", // Database password
  database: "tunneltest_db", // Database name
  port: 5522, // Local port forwarded to MySQL server
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Route to fetch all trip itineraries
app.get("/api/trips", (req, res) => {
  const sql = "SELECT * FROM trip_itinerary";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

// Route to fetch a specific trip by ID
app.get("/api/trips/:id", (req, res) => {
  const tripId = req.params.id;
  const sql = "SELECT * FROM trip_itinerary WHERE trip_id = ?";
  db.query(sql, [tripId], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
