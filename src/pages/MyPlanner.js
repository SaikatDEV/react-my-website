import React, { useEffect, useState } from "react";
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

const MyPlanner = () => {
  const [plannerData, setPlannerData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which location is in edit mode
  const [updatedData, setUpdatedData] = useState(null); // Track updated data
  const [newTripTitle, setNewTripTitle] = useState(""); // State to capture new trip title
  const [editTitle, setEditTitle] = useState({}); // State to track which trip title is being edited

  useEffect(() => {
    fetch("/data/plannerData.json") // Adjust the path to your JSON file
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!isObject(data)) {
          throw new Error("Data fetched is not an object");
        }
        setPlannerData(data);
      })
      .catch((error) => {
        console.error("Error fetching or processing planner data:", error);
      });
  }, []);

  const isObject = (value) => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  };

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

    // Here you can implement logic to save updated data to your backend or storage
    // Example: fetch('/api/updateTripData', { method: 'PUT', body: JSON.stringify(updatedTripData) })
    // .then(response => response.json())
    // .then(data => console.log('Updated data:', data))
    // .catch(error => console.error('Error updating data:', error));
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

    // Here you can implement logic to delete data from your backend or storage
    // Example: fetch('/api/deleteLocation', { method: 'DELETE', body: JSON.stringify({ tripKey, locationIndex }) })
    // .then(response => response.json())
    // .then(data => console.log('Deleted location:', data))
    // .catch(error => console.error('Error deleting location:', error));
  };

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

    // Here you can implement logic to delete data from your backend or storage
    // Example: fetch('/api/deleteTrip', { method: 'DELETE', body: JSON.stringify({ tripKey }) })
    // .then(response => response.json())
    // .then(data => console.log('Deleted trip:', data))
    // .catch(error => console.error('Error deleting trip:', error));
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

    // Here you can implement logic to save updated trip title to your backend or storage
    // Example: fetch('/api/updateTripTitle', { method: 'PUT', body: JSON.stringify({ tripKey, newTitle }) })
    // .then(response => response.json())
    // .then(data => console.log('Updated trip title:', data))
    // .catch(error => console.error('Error updating trip title:', error));
  };

  const handleTitleClick = (tripKey) => {
    setEditTitle((prevState) => ({ ...prevState, [tripKey]: true }));
  };

  const handleTitleBlur = (tripKey, newTitle) => {
    handleEditTripTitle(tripKey, newTitle);
    setEditTitle((prevState) => ({ ...prevState, [tripKey]: false }));
  };

  return (
    <div className="mx-44 mt-36">
      <h1 className="text-4xl font-bold mb-4 flex relative inline-block">
        Trip-Itinerary
      </h1>
      <div className="tripInfo">
        <h3>
          Departure Date: <span>July 24th</span>
        </h3>
        <h3>
          Arrival Date: <span>July 30th</span>
        </h3>
      </div>
      <div>
        <TextField
          fullWidth
          label="Trip Title"
          value={newTripTitle}
          onChange={(e) => setNewTripTitle(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddTrip}
          style={{ marginBottom: "1rem", marginLeft: "1rem" }}
          disabled={!newTripTitle}
        >
          Add Trip
        </Button>
        {Object.keys(plannerData).map((tripKey) => (
          <TableContainer component={Paper} key={tripKey} className="mb-6">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <TextField
                      fullWidth
                      defaultValue={plannerData[tripKey].id}
                      onBlur={(e) =>
                        handleEditTripTitle(tripKey, e.target.value)
                      }
                    />
                    <IconButton onClick={() => handleDeleteTrip(tripKey)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Location</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell></TableCell>
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
    </div>
  );
};

export default MyPlanner;
