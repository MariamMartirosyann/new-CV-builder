import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, TextField } from "@mui/material";
import {
  addObjectiveInfo,
  deleteObjectiveInfo,
} from "../../Redux/ObjectiveInfoSlice";
import { preWrittenTextState } from "../../Redux/PreWrittenSlice";
import { ReactComponent as Close1 } from "../../../icons/close1.svg";
import { ReactComponent as Papers } from "../../../icons/papers.svg";
import { ReactComponent as Search } from "../../../icons/search.svg";
import { ReactComponent as Add1 } from "../../../icons/add1.svg";
import { ReactComponent as Done } from "../../../icons/done.svg";
import "./style.css";

const PreWrittenObjective = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.preWrittenInfo.list1);
  const listNew = useSelector((state) => state.objectiveInfo.list);
  const state = useSelector((state) => state.preWrittenInfo.showPreWrittenText);
  console.log("list", list);
  console.log("listNew", listNew);

  const handleAdd = (item) => {
    const newFormData = {
      id: item.id,
      objective: item.objective,
    };
    dispatch(addObjectiveInfo(newFormData));
    console.log("newFormData", newFormData);
  };
  const handleDelete = (item) => {
    dispatch(deleteObjectiveInfo({ id: item.id }));
  };
  const handleClose = () => {
    dispatch(preWrittenTextState(false));
  };

  return (
    <>
      <div className="preWritten">
        <Typography variant="h5" className="title">
          <Papers />
          Pre-written phrases{" "}
          <Close1 style={{ marginLeft: "70px" }} onClick={handleClose} />
        </Typography>
        <Typography variant="p" className="title">
          Find, add, and edit phrases for your profession.
        </Typography>
        <br />
        <br />
        <div className="searchDiv">
          {" "}
          <TextField
            className="searchBar"
            helperText="Search"
            onChange={(e) => setValue(e.target.value)}
          ></TextField>
          <Search className="searchIcon" />
        </div>

        <div style={{ position: "relative", marginTop: "20px" }}>
          {" "}
          <Typography variant="p" className="title1">
            COMMON PHRASES
          </Typography>
          <br />
          {list.map((i) => (
            <div key={i.id} className="preWrittenDiv">
              {list.indexOf(listNew ==1)?(
                <Done
                  className="preWrittenIcon"
                  onClick={(e) => handleDelete(i, e)}
                />
              ):(
                <Add1
                  className="preWrittenIcon"
                  onClick={(e) => handleAdd(i, e)}
                />
              ) }
              {list.indexOf(listNew ==-1)?(
                <Add1
                  className="preWrittenIcon"
                  onClick={(e) => handleAdd(i, e)}
                />
              ):(
                <Done
                  className="preWrittenIcon"
                  onClick={(e) => handleDelete(i, e)}
                />
              ) }
              &nbsp; {i.objective}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreWrittenObjective;
/*{listNew?.find((item) => item.id === i.id) ?( <Done
  className="preWrittenIcon"
  onClick={(e) => handleDelete(i, e)}
/>):( <Add1
  className="preWrittenIcon"
  onClick={(e) => handleAdd(i, e)}
/>)}*/
/*{list.map((i) => (
            <div key={i.id} className="preWrittenDiv">
              <div>
                <Add1
                  className="preWrittenIcon"
                  onClick={(e) => handleDelete(i, e)}
                />
              </div>
              &nbsp; &nbsp;
              <div> {i.objective}</div>
            </div>
          ))}

*/
