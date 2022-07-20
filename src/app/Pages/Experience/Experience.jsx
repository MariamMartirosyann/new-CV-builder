import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { ReactComponent as Delete } from "../../../icons/delete.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import "./style.css";

const Experience = () => {
  const list = useSelector((state) => state.jobsInfo.list);
  
  return (
    <>
      <Sidebar />
      <div className="contactInfo">
        
        <Typography
          variant="h3"
          style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
        >
          Great! Let's fill out your work experience next
        </Typography>
        <Typography
          variant="p"
          style={{
            width: "200px",
            marginLeft: "0",
            marginTop: "10px",
            marginBottom: "35px",
          }}
        >
          Start with your most recent position and work backwards. Just add the
          most recent and relevant positions if you have lots of experience.
        </Typography>
        <Typography
          variant="h6"
          style={{ marginLeft: "0", marginTop: "30px", marginBottom: "30px" }}
        >
          Experience
        </Typography>
        {/* <Grid className="container">
          <Grid className="item1">
            <Typography variant="h6" style={{ marginLeft: "0" }}>
              {position}
            </Typography>
            {company}{startDate}-{endDate}
          </Grid>
          <Grid className="item2">
            <Link to="/experienceJobs">
              {" "}
              <Edit />
            </Link>
            &nbsp;
            <Delete />
          </Grid>
        </Grid> */}
         
        {/* <Link to="/experienceJobs"> */}
          <button className="add"  > + Add Another</button>
          {list.map((item) => <Typography key={item.id}>{item.name}</Typography>)}
       
        {/* </Link> */}
      </div>
    </>
  );
};

export default Experience;
