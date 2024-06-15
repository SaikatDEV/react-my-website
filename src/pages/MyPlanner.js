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
import PrintIcon from "@mui/icons-material/Print";

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

  const handlePrint = () => {
    window.print();
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
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 relative">
          Trip-Itinerary
        </h1>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          className="mb-4"
        >
          Print
        </Button>
        <div className="tripInfo mb-4">
          <h3 className="text-lg lg:text-xl">
            Departure Date: <span>July 24th</span>
          </h3>
          <h3 className="text-lg lg:text-xl">
            Arrival Date: <span>July 30th</span>
          </h3>
        </div>
        <div className="mb-4">
          <TextField
            fullWidth
            label="Trip Title"
            value={newTripTitle}
            onChange={(e) => setNewTripTitle(e.target.value)}
            className="mb-4"
          />
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

export default MyPlanner;
