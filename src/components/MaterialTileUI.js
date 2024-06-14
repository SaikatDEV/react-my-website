import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function MaterialTileUI() {
  const [expanded, setExpanded] = useState({});
  const cardRefs = useRef([]);

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = { ...prevExpanded, [index]: !prevExpanded[index] };
      if (newExpanded[index]) {
        cardRefs.current[index].scrollIntoView({ behavior: "smooth" });
      }
      return newExpanded;
    });
  };

  const tableData = [
    {
      name: "Raj",
      email: "Raj@gmail.com",
      phone: 7894561230,
      age: null,
      gender: "M",
      city: "Chennai",
      fee: 78456,
    },
    {
      name: "Mohan",
      email: "mohan@gmail.com",
      phone: 7845621590,
      age: 35,
      gender: "M",
      city: "Delhi",
      fee: 456125,
    },
    {
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
    },
    {
      name: "Vikas",
      email: "vikas@gmail.com",
      phone: 9876543210,
      age: 20,
      gender: "M",
      city: "Mumbai",
      fee: 874569,
    },
    {
      name: "Neha",
      email: "neha@gmail.com",
      phone: 7845621301,
      age: 25,
      gender: "F",
      city: "Patna",
      fee: 748521,
    },
  ];

  return (
    <div className="App">
      <h1 align="center">Material Tile</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {tableData.map((row, index) => (
          <Card
            key={index}
            style={{ width: 300, margin: 10 }}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                {row.name}
              </Typography>
              <Typography color="textSecondary">{row.city}</Typography>
              <Typography variant="body2" component="p">
                {row.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => handleExpandClick(index)}
                endIcon={
                  expanded[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />
                }
              >
                {expanded[index] ? "Show Less" : "More Details"}
              </Button>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Phone: {row.phone}</Typography>
                <Typography paragraph>
                  Age: {row.age ?? <em>null</em>}
                </Typography>
                <Typography paragraph>
                  Gender: {row.gender === "M" ? "Male" : "Female"}
                </Typography>
                <Typography paragraph>
                  School Fee:{" "}
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(row.fee)}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default MaterialTileUI;
