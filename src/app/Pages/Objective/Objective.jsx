import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuill } from "react-quilljs";
import { Typography, Box, Grid} from "@mui/material";
import { submitObjectiveInfo } from "../../Redux/SubmitObjectiveInfoSlice";
import { preWrittenTextState } from "../../Redux/PreWrittenSlice";
import { ReactComponent as Add } from "../../../icons/add.svg";
import Input from "../../Shared/Input";
import PreWrittenObjective from "../PreWrittenObjective";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { nanoid } from "@reduxjs/toolkit";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import { EventRepeat } from "@mui/icons-material";

const Objective = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preWrittenState = useSelector(
    (state) => state.preWrittenInfo.showPreWrittenText
  );
  const preWrittenText = useSelector((state) => state.objectiveInfo.list);
  const lastElement = preWrittenText[preWrittenText.length - 1];
  const El = lastElement?.objective;
  const ElIndex = lastElement?.index;
  console.log("lastElement", lastElement);
  console.log("El", El);
  console.log("ElIndex", ElIndex);

  const [objective, setObjective] = useState("");

  useEffect(() => {
    if (preWrittenText) {
      setObjective(preWrittenText.objective);
    }
  }, [preWrittenText]);

  const showPrewritten = () => {
    dispatch(preWrittenTextState(true));
  };
  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
    ],
  };
  const handleSubmit = (event) => {
    console.log("11111111");
    event.preventDefault();
    dispatch(submitObjectiveInfo({ id: nanoid(), objective: objective }));
    navigate("/templates");
  };
  const { quill, quillRef } = useQuill({ modules });

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setObjective(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  useEffect(() => {
    if (El) {
      setObjective(preWrittenText);
      quill.insertText(quillRef.current.firstChild.innerHTML.length, El);
    }
  }, [El]);

  /* useEffect(() => {
    if (ElIndex) {
      setObjective(preWrittenText);
      quill.deleteText(quillRef.current.firstChild.innerHTML.length+1,ElIndex);
    }
  }, [ElIndex]);*/

  return (
    <div className="main">
      {preWrittenState ? <PreWrittenObjective /> : <Sidebar />}

      <Typography
        variant="h4"
        style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
      >
        Great! Let's edit your work experience
      </Typography>
      <Box style={{ width: "40%" }}>
        <Typography variant="p">
          Start with your most recent position and work backwards. Just add the
          most recent and relevant positions if you have lots of experience.
        </Typography>
      </Box>

      <Typography
        variant="h5"
        style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
      >
        Objective
      </Typography>
      <form className="formStyle">
        <div
          style={{
            width: 700,
            height: 300,
            background: "rgba(206, 241, 229, .2)",
            position: "relative",
            border: "none",
          }}
        >
          <div ref={quillRef} />
          <Typography
            onClick={showPrewritten}
            variant="h6"
            className="addText"
            style={{
              margin: "10px",
              marginLeft: "0",
              color: "rgb(103, 103, 241)",
            }}
          >
            <Add /> Add pre-written text
          </Typography>
          <Typography variant="p" className="subText">
            e.g. Proactive, customer-orientated retail professional with over 4
            years of experience in reputable shops. Received 3 ‘Passion Awards’
            for delivering outstanding service and have consistently surpassed
            my target KPIs for mystery shoppers.
          </Typography>
        </div>

        <Box container className="btnDiv">
          {" "}
          <button className="finishBtn" onClick={handleSubmit}>
            Finish
          </button>
        </Box>
      </form>
    </div>
  );
};

export default Objective;
