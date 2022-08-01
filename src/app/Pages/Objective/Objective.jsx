import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import InputSubmit from "../../Shared/InputSubmit";
import { addObjectiveInfo } from "../../Redux/ObjectiveInfoSlice";
import { preWrittenTextState } from "../../Redux/PreWrittenSlice";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { ReactComponent as Add } from "../../../icons/add.svg";
import PreWrittenObjective from "../PreWrittenObjective";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import "./style.css";

const Objective = () => {
  const preWrittenState = useSelector(
    (state) => state.preWrittenInfo.showPreWrittenText
  );
  console.log("prewrittenState", preWrittenState);
  const [objective, setObjective] = useState("");
  const dispatch = useDispatch();
 

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addObjectiveInfo({ objective: objective }));
  };
  const showPrewritten = () => {
    dispatch(preWrittenTextState(true));
  };
  return (
    <div className="main">
      {}
      {preWrittenState ? <PreWrittenObjective /> : <Sidebar />}
      <Typography
        variant="h3"
        style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
      >
        Great! Let's edit your work experience
      </Typography>
      <Typography
        variant="p"
      >
        Start with your most recent position and work backwards. Just add the
        most recent and relevant positions if you have lots of experience.
      </Typography>
      <div className="toolbar">
        <div className="toolbarSmall">
          <div className="tools" >
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
        </div>
        <div className="tools">
          {" "}
          <Typography
            onClick={showPrewritten}
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
      <form onSubmit={onSubmit} className="formStyle">
        <div style={{ position: "relative", marginBottom: "20px" }}>
          <textarea
            className="textfield "
            cols="50"
            rows="20"
            style={{ width: "52%", height: "250px", marginBottom: "30px" }}
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
//https://www.npmjs.com/package/react-quill