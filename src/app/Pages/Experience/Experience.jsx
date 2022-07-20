import React from "react";
import { useSelector } from "react-redux";
import { Typography, Grid } from "@mui/material";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { ReactComponent as Delete } from "../../../icons/delete.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import "./style.css";

const Experience = () => {
  const info = useSelector((state) => state.contactInfo.list);
  console.log("info", info);
  return (
    <>
      <Sidebar />
      <div className="contactInfo">
        {" "}
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
        <Grid className="container" spacing={3}>
          <Grid className="item1">
          <Typography
          variant="h6"
          style={{ marginLeft: "0"}}
        >
          Experience 1
        </Typography>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisia qui dolore iure
            mollitia perferendis facere voluptatum perspiciatis.
          </Grid>
          <Grid className="item2">
            <Delete /> &nbsp; 
            <Edit />
          </Grid>
        </Grid>
        <button className="add"> + Add Another</button>
      </div>
    </>
  );
};

export default Experience;
