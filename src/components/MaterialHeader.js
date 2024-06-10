import React, { useEffect, useState } from "react";
// Material UI
import { AppBar, Divider, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import axios from "axios";

const MaterialHeader = () => {
  // state
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Get the current base url, We cant use this below as API URL is diff
    const appBaseUrl = window.location.origin;
    console.log("BASEURL: ", appBaseUrl);

    axios
      .get("http://localhost:8000/skills")
      .then((response) => {
        setSkills(response.data);
      })
      .catch((error) => {
        console.error("Error fetching skills data:", error);
      });
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start">
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Toolbar>Express our Emotions through words</Toolbar>
      </AppBar>
      <div className="flex align-center flex-col mt-8 gap-4">
        <HomeIcon className="text-red-400 cursor-pointer scale-150" />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
      </div>
      <button className="py-2 px-4 bg-slate-400 rounded-xl mt-8 flex cursor-pointer">
        <SendRoundedIcon className="mr-2 scale-75" />
        Submit
      </button>

      <div>
        {skills.map((each) => (
          <p>{each.title}</p>
        ))}
      </div>
    </>
  );
};

export default MaterialHeader;
