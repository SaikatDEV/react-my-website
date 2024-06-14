import React, { useEffect, useState } from "react";
// Material UI
import { AppBar, Divider, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MaterialHeader = () => {
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
    </>
  );
};

export default MaterialHeader;
