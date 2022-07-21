import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { addJobsInfo } from "../../Redux/JobsSlice";
import { deleteJobsInfo } from "../../Redux/JobsSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { ReactComponent as Delete } from "../../../icons/delete.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import { nanoid } from "nanoid";
import "./style.css";

const Experience = () => {
  /* const info= useSelector((state)=>state.contactInfo.list)
  const position= info.position*/
  /*const jobs= useSelector((state)=>state.jobs.list)
  const job= jobs.find(item=>item.id===id)*/

 

  const list = useSelector((state) => state.jobsInfo.list);
  console.log("listmmmm", list)
  const position=list.position
  console.log("position", position)
  const dispatch = useDispatch();
 

  const handleAdd = (formData1) => {
    const newFormData={
      id:nanoid(),
      position:formData1.position,
       company:formData1.company,
       location:formData1.location ,
       startDate:formData1.startDate,
       endDate:formData1.endDate,
    }
    dispatch(
      addJobsInfo({newFormData})
    );
  };


  const handleDelete=(id)=>{
    dispatch(deleteJobsInfo({id:id}))
  }
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
        <Grid className="container">
          <Grid className="item1">
            <Typography variant="h6" style={{ marginLeft: "0" }}>
              position
            </Typography>
            company startDate -endDate
          </Grid>
          <Grid className="item2">
            <Link to= {`/experienceJobs/${nanoid()}`}>
              {" "}
              <Edit />
            </Link>
            &nbsp;
            <Delete />
          </Grid>
        </Grid>

        {/* <Link to="/experienceJobs"> */}

        {list.map((item) => (
          <Grid className="container">
            <Grid className="item1" key={item.id}>
              <Typography variant="h6" style={{ marginLeft: "0" }}>
                {item.position}
              </Typography>
              {item.company} {item.startDate}-{item.endDate}
            </Grid>
            <Grid className="item2">
              <Link to={`/experienceJobs/${item.id}`}> 
                {" "}
                <Edit />
              </Link>
              &nbsp;
             <Delete onClick={e=>handleDelete(item.id, e)} />
            </Grid>
          </Grid>
        ))}
        <button className="add" onClick={handleAdd}>
          {" "}
          + Add Another
        </button>
        {/* </Link> */}
      </div>
    </>
  );
};

export default Experience;
// {list.map((item) => <Typography key={item.id}>{item.name}</Typography>)}
