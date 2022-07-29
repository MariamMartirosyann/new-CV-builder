import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Typography } from "@mui/material";
import InputSubmit from "../../Shared/InputSubmit";
import { addObjectiveInfo } from "../../Redux/ObjectiveInfoSlice";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { ReactComponent as Add } from "../../../icons/add.svg";
import "./style.css";

const Objective = () => {
  const [objective, setObjective] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(objective);
    dispatch(addObjectiveInfo({ objective: objective }));
  };

  return (
    <div className="main">
      <Sidebar />
      <Typography
        variant="h3"
        style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
      >
        Great! Let's edit your work experience
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

      <form onSubmit={onSubmit} className="formStyle">
        <div style={{ position: "relative", margin: "20px 0" }}>
          <div className="toolbar">
            <div className="tools">
              <FormatBoldIcon />
            </div>
            <div className="tools">
              <FormatItalicIcon />
            </div>
            <div className="tools">
              <FormatUnderlinedIcon />
            </div>
            <div className="tools">
              <FormatListBulletedIcon />
            </div>
            <div className="tools">
              <FormatListNumberedIcon />
            </div>
            <div className="tools">
              <FormatAlignCenterIcon />
            </div>
            <div className="tools">
              <FormatAlignJustifyIcon />
            </div>
            <div >
              {" "}
              <Typography
                variant="h6"
                style={{
                  marginLeft: "0",

                  color: "rgb(103, 103, 241)",
                  textAlign: "end",
                }}
              >
                <Add /> Add pre-written text
              </Typography>
            </div>
          </div>
          <textarea
            className="textfield"
            cols="50"
            rows="20"
            style={{ width: "50%", height: "250px", marginBottom: "30px" }}
            onChange={(e) => setObjective(e.target.value)}
          />
        </div>

        <br />
        <br />
        <br />
        <br />
        <InputSubmit />
      </form>
    </div>
  );
};

export default Objective;
