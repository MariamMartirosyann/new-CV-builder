import React from "react";
import { Grid, Typography } from "@mui/material";
import "./style.css";

const TamplateOne = () => {
  return (
    <div className="main1">
      <Grid className="main1" container spacing={2}>
        <Grid item md={8}>
        <Typography
                variant="h6"
                style={{
                  marginLeft: "0",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                Mariam Martirosyan
              </Typography>
        </Grid>
    
        <Grid item md={4} className="rigthSide"></Grid>
      </Grid>
    </div>
  );
};

export default TamplateOne;
