import React, { useEffect, useState } from "react";
// Material UI-Create Card component
import { Container, Grid, Paper } from "@mui/material";

import SkillCard from "./MaterialSkillCard";

// Axios
import axios from "axios";

const MaterialBody = () => {
  // state
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    // Get the current base url, We are not using this below
    const appBaseUrl = window.location.origin;

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
    <div className="mx-40">
      {/*   <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>1</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>2</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>3</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper>4</Paper>
          </Grid>
        </Grid> 
        
        {skills.map((each) => (
          <p key={each.id}>{each.title}</p>
        ))}
        
        */}
      <Grid container justify="space-around" spacing={3}>
        {skills.map((each) => (
          <Grid item key={each.id} sx={12} md={6} lg={3}>
            <SkillCard
              title={each.title}
              details={each.details}
              thumbnail={each.thumbnail}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MaterialBody;
