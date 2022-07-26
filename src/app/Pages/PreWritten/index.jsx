import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, TextField } from "@mui/material";
import { addSkills, deleteSkills } from "../../Redux/SkillsSlice";
import { ReactComponent as Close1 } from "../../../icons/close1.svg";
import { ReactComponent as Papers } from "../../../icons/papers.svg";
import { ReactComponent as Search } from "../../../icons/search.svg";
import { ReactComponent as Add1 } from "../../../icons/add1.svg";
import { ReactComponent as Done } from "../../../icons/done.svg";
import "./style.css";

const PreWritten = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.preWrittenInfo.list);
  console.log("listt", list);
  const [isAdd, setIsAdd] = useState(list.find((item) => item.id === list.id));

  const handleAdd = (item) => {
    const newFormData = {
      id: item.id,
      skills: item.skills,
    };
    dispatch(addSkills(newFormData));
    setIsAdd(true);
  };
  const handleDelete = (item) => {
    dispatch(deleteSkills({ id: item.id }));
    setIsAdd(false);
  };

  return (
    <div className="preWritten">
      <Typography variant="h5" className="title">
        <Papers /> Pre-written phrases  <Close1 style={{ marginLeft: "70px" }} />
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
        <br />
        <br />
        {list.map((i) => (
          <div key={i.id} className="preWrittenDiv">
            {isAdd ? (
              <Done onClick={(e) => handleDelete(i, e)} />
            ) : (
              <Add1
                className="preWrittenIcon"
                onClick={(e) => handleAdd(i, e)}
              />
            )}{" "}
            &nbsp; {i.skills}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreWritten;
//{isAdd?(<Done onClick={(e)=>handleDelete (i,e)}/>):(<Add1 className="preWrittenIcon" onClick={(e)=>handleAdd(i,e)}/>)}
