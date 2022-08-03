import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuill } from "react-quilljs";
import { Typography, Box } from "@mui/material";
import InputSubmit from "../../Shared/InputSubmit";
import { submitObjectiveInfo } from "../../Redux/ObjectiveInfoSlice";
import { preWrittenTextState } from "../../Redux/PreWrittenSlice";
import { ReactComponent as Add } from "../../../icons/add.svg";
import PreWrittenObjective from "../PreWrittenObjective";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { nanoid } from "@reduxjs/toolkit";
import "react-quill/dist/quill.snow.css";
import "./style.css";
import { EventRepeat } from "@mui/icons-material";

const Objective = () => {
  const dispatch = useDispatch();
  const preWrittenState = useSelector(
    (state) => state.preWrittenInfo.showPreWrittenText
  );
  const preWrittenText = useSelector((state) => state.objectiveInfo.list);

  console.log("preWrittenText", preWrittenText);

  const [objective, setObjective] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(submitObjectiveInfo({ id: nanoid(), objective: objective }));
  };

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

  const { quill, quillRef } = useQuill({ modules });

  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setObjective(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill]);

  useEffect(() => {
    if (preWrittenText) {
      setObjective(preWrittenText);
      quill.insertText(
        quillRef.current.firstChild.innerHTML.length,
        preWrittenText
      );
    }
  }, [preWrittenText]);

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
      <form onSubmit={onSubmit} className="formStyle">
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
