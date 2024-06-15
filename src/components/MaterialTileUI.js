import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Collapse,
  Typography,
  Pagination,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function MaterialTileUI() {
  const [expanded, setExpanded] = useState({});
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
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

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setPage(1); // Reset to the first page whenever items per page changes
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
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
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
      name: "Sweety",
      email: "sweety@gmail.com",
      phone: 741852912,
      age: 17,
      gender: "F",
      city: "Noida",
      fee: 458796,
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

  const paginatedData = tableData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="App">
      <h1 align="center">Material Tile</h1>
      <div className="flex flex-wrap justify-center">
        {paginatedData.map((row, index) => (
          <Card
            key={index}
            className="w-72 m-2"
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
      <div className="flex justify-center mt-4 items-center">
        <FormControl variant="outlined" className="mr-4">
          <InputLabel id="items-per-page-label">Items Per Page</InputLabel>
          <Select
            labelId="items-per-page-label"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            label="Items Per Page"
          >
            {[5, 10, 15, 20].map((count) => (
              <MenuItem key={count} value={count}>
                {count}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Pagination
          count={Math.ceil(tableData.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
}

export default MaterialTileUI;
