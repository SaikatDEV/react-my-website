import React from "react";
// Material UI
import {
  AppBar,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MaterialHeader = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              alignItems: "flex-start",
            },
            "@media (max-width: 480px)": {
              flexDirection: "column",
              alignItems: "flex-start",
              mt: 10,
            },
          }}
        >
          <IconButton size="large" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Express our Emotions through words
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default MaterialHeader;
