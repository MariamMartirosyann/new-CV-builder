import React from "react";
import { Typography, TextField } from "@mui/material";
import { ReactComponent as Close1 } from "../../../icons/close1.svg";
import { ReactComponent as Papers } from "../../../icons/papers.svg";
import { ReactComponent as Search } from "../../../icons/search.svg";
import "./style.css";

const PreWritten = () => {
  return (
    <div className="preWritten">
      <Typography variant="h5" className="title">
        <Papers /> Pre-written phrases <Close1 style={{ marginLeft: "70px" }} />
      </Typography>
      <Typography variant="p" className="title">
        Find, add, and edit phrases for your profession.
      </Typography>
      <br />
      <br />
      <div className="searchDiv">
        {" "}
        <TextField className="searchBar" helperText="Search" />{" "}
        <Search className="searchIcon" />
      </div>

      <div style={{ position: "relative", marginTop: "20px" }}>
        {" "}
        <Typography variant="p" className="title1">
          COMMON PHRASES
        </Typography>
      </div>
    </div>
  );
};

export default PreWritten;
