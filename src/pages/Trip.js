import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import PrintIcon from "@mui/icons-material/Print";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const Trip = () => {
  const [plannerData, setPlannerData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which location is in edit mode
  const [updatedData, setUpdatedData] = useState(null); // Track updated data
  const [newTripTitle, setNewTripTitle] = useState(""); // State to capture new trip title
  const [editTitle, setEditTitle] = useState(""); // State to track which trip title is being edited
  const [departDate, setDepartDate] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/data/plannerData.json") // Adjust the path to your JSON file
      .then((response) => {
        console.log("response: ", response);
        // This will return a Promise as below So we need to use then
        return response.data;
      })
      .then((data) => {
        console.log("Type of the data:", typeof data);
        console.log("data:", data);
        if (typeof data !== "object") {
          throw new Error(
            "Data fetched is not an object, Please modify the data"
          );
        }
        setPlannerData(data);
      })
      .catch((error) => {
        console.error("Error fetching or processing planner data:", error);
      });
  }, []);

  const handleEdit = (tripKey, locationIndex) => {
    setEditMode({ tripKey, locationIndex });
    setUpdatedData({
      ...plannerData[tripKey].locations[locationIndex],
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const { tripKey, locationIndex } = editMode;
    const updatedLocations = [...plannerData[tripKey].locations];
    updatedLocations[locationIndex] = updatedData;

    const updatedTripData = {
      ...plannerData,
      [tripKey]: {
        ...plannerData[tripKey],
        locations: updatedLocations,
      },
    };

    setPlannerData(updatedTripData);
    setEditMode(null);
    setUpdatedData(null);
  };

  const handleAddRow = (tripKey) => {
    const newLocation = { name: "", time: "" };
    const updatedLocations = [...plannerData[tripKey].locations, newLocation];

    const updatedTripData = {
      ...plannerData,
      [tripKey]: {
        ...plannerData[tripKey],
        locations: updatedLocations,
      },
    };

    setPlannerData(updatedTripData);
  };

  const handleDeleteRow = (tripKey, locationIndex) => {
    const updatedLocations = plannerData[tripKey].locations.filter(
      (_, index) => index !== locationIndex
    );

    const updatedTripData = {
      ...plannerData,
      [tripKey]: {
        ...plannerData[tripKey],
        locations: updatedLocations,
      },
    };

    setPlannerData(updatedTripData);
  };

  // This will add a new trip in the Itinerary
  const handleAddTrip = () => {
    const newTripKey = `trip${Object.keys(plannerData).length + 1}`;
    const newTripData = {
      id: newTripTitle || `Trip ${Object.keys(plannerData).length + 1}`, // Use provided title or generate a default title
      locations: [],
    };

    const updatedTripData = {
      ...plannerData,
      [newTripKey]: newTripData,
    };

    setPlannerData(updatedTripData);
    setNewTripTitle(""); // Reset new trip title input after adding
  };

  const handleDeleteTrip = (tripKey) => {
    const updatedPlannerData = { ...plannerData };
    delete updatedPlannerData[tripKey];

    setPlannerData(updatedPlannerData);
  };

  const handleEditTripTitle = (tripKey, newTitle) => {
    const updatedTripData = {
      ...plannerData,
      [tripKey]: {
        ...plannerData[tripKey],
        id: newTitle,
      },
    };

    setPlannerData(updatedTripData);
  };

  const handleTitleClick = (tripKey) => {
    setEditTitle((prevState) => ({ ...prevState, [tripKey]: true }));
  };

  const handleTitleBlur = (tripKey, newTitle) => {
    if (newTitle == "") {
      handleEditTripTitle(tripKey, "Please add Trip name");
    } else {
      handleEditTripTitle(tripKey, newTitle);
    }
    setEditTitle((prevState) => ({ ...prevState, [tripKey]: false }));
  };

  const handlePrint = () => {
    // grab the element using below
    const navbar = document.querySelector(".navBar");
    if (navbar) {
      navbar.style.display = "none";
    }
    window.print();
  };

  const handleLogout = () => {
    // Implement logout logic here
    navigate("/"); // Navigate to the Home Page
  };

  const handleDepartureDate = (e) => {
    setDepartDate(e.target.value);
    // We need to save the date in the backend
  };

  const handleArrivalDate = (e) => {
    setArrivalDate(e.target.value);
    // We need to save the date in the backend
  };

  return (
    <div
      className="mx-6 mt-24 lg:mx-20 xl:mx-44 xl:mt-36 bg-cover bg-center text-black sm:mt-40"
      style={{
        backgroundColor: "#dfdfdf",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <div className="bg-white bg-opacity-80 p-4 lg:p-8 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h4" className="font-bold">
            Trip-Itinerary
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          className="mb-4"
        >
          Print
        </Button>
        <div className="tripInfo mb-4 mt-4 flex flex-col gap-4">
          <TextField
            label="Add Departure Date"
            type="date"
            value={departDate}
            onChange={handleDepartureDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Add Arrival Date"
            type="date"
            value={arrivalDate}
            onChange={handleArrivalDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <TextField
              fullWidth
              label="New Trip Title"
              value={newTripTitle}
              onChange={(e) => setNewTripTitle(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddTrip}
            disabled={!newTripTitle}
          >
            Add Trip
          </Button>
        </div>
        {Object.keys(plannerData).map((tripKey) => (
          <TableContainer component={Paper} key={tripKey} className="mb-6">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <div className="flex justify-between items-center">
                      {editTitle[tripKey] ? (
                        <TextField
                          fullWidth
                          defaultValue={plannerData[tripKey].id}
                          onBlur={(e) =>
                            handleTitleBlur(tripKey, e.target.value)
                          }
                          autoFocus
                        />
                      ) : (
                        <Typography
                          variant="h6"
                          component="h2"
                          onClick={() => handleTitleClick(tripKey)}
                          className="cursor-pointer"
                        >
                          {plannerData[tripKey].id}
                        </Typography>
                      )}
                      <IconButton onClick={() => handleDeleteTrip(tripKey)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Location</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Modify/Delete?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {plannerData[tripKey].locations.map((location, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {editMode &&
                      editMode.tripKey === tripKey &&
                      editMode.locationIndex === index ? (
                        <TextField
                          fullWidth
                          name="name"
                          value={updatedData?.name || location.name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        location.name
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode &&
                      editMode.tripKey === tripKey &&
                      editMode.locationIndex === index ? (
                        <TextField
                          fullWidth
                          name="time"
                          value={updatedData?.time || location.time}
                          onChange={handleInputChange}
                        />
                      ) : (
                        location.time
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode &&
                      editMode.tripKey === tripKey &&
                      editMode.locationIndex === index ? (
                        <IconButton onClick={handleSave}>
                          <SaveIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => handleEdit(tripKey, index)}>
                          <EditIcon />
                        </IconButton>
                      )}
                      <IconButton
                        onClick={() => handleDeleteRow(tripKey, index)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell>
                    <TextField
                      fullWidth
                      placeholder="New Location"
                      value={updatedData?.name || ""}
                      onChange={handleInputChange}
                      name="name"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      fullWidth
                      placeholder="Time"
                      value={updatedData?.time || ""}
                      onChange={handleInputChange}
                      name="time"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => handleAddRow(tripKey)}
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      </div>
      <style jsx>{`
        @media (max-width: 480px) {
          .mx-6 {
            margin-top: 16rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Trip;
