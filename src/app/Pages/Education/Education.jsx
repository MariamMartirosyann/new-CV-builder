import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { deleteEducation } from "../../Redux/EducationSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { ReactComponent as Delete } from "../../../icons/delete.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import "./style.css";
import InputSubmit from "../../Shared/InputSubmit";

const Education = () => {
  const navigate = useNavigate();
  const list = useSelector((state) => state.educationInfo.list);
 
  console.log(list, "list")
  const dispatch = useDispatch();

  const handleAdd = () => {
    navigate("/educationItem/add");
  };

  const handleDelete = (id) => {
    dispatch(deleteEducation({ id: id }));
  };

  return (
    <>
    
    {(list.length===0)?( <div style={{display:"flex", flexDirection:"column"}}>
        <div>
          <Sidebar />
          <div className="contactInfo">
            <Typography
              variant="h4"
              style={{
                marginLeft: "0",
                marginTop: "30px",
                marginBottom: "15px",
              }}
            >
              Awesome! Now, what qualifications do you have?
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
            Start with your most recent period of education and work backwards. If you have many, just add the most recent and relevant ones.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginLeft: "0",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Education
            </Typography>
           
            <Grid className="container">
              <Grid className="item1">
                <Typography variant="h6" style={{ marginLeft: "0" }}>
                 Degree
                </Typography>
                Institution name startDate -endDate
              </Grid>
              <Grid className="item2">
                  &nbsp;
                <Link to={`/educationItem/add`}>
                  <Edit />
                </Link>
                
              </Grid>
            </Grid>

            {list.map((item) => (
              <Grid className="container" key={item.id}>
                <Grid className="item1">
                  <Typography variant="h6" style={{ marginLeft: "0" }}>
                    {item.position}
                  </Typography>
                  {item.company} {item.startDate}-{item.endDate}
                </Grid>
                <Grid className="item2">
            
                  &nbsp;
                  <Link to={`/educationItemEdit/${item.id}`}>
                    <Edit />
                  </Link>
                  &nbsp;
                  <Delete onClick={(e) => handleDelete(item.id, e)} />
                </Grid>
              </Grid>
            ))}
            <button className="add" onClick={handleAdd}>
              {" "}
              + Add Another
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div  className="btnDiv">
          <Link to="/skills-languages">
         <InputSubmit/>
          </Link>
        </div>
      </div>):( <div style={{display:"flex", flexDirection:"column"}}>
        <div>
          <Sidebar />
          <div className="contactInfo">
            <Typography
              variant="h3"
              style={{
                marginLeft: "0",
                marginTop: "30px",
                marginBottom: "15px",
              }}
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
              Start with your most recent position and work backwards. Just add
              the most recent and relevant positions if you have lots of
              experience.
            </Typography>
            <Typography
              variant="h6"
              style={{
                marginLeft: "0",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Experience
            </Typography>
      

            {list.map((item) => (
              <Grid className="container" key={item.id}>
                <Grid className="item1">
                  <Typography variant="h6" style={{ marginLeft: "0" }}>
                    {item.degree}
                  </Typography>
                  {item.institutionName} {item.startDate}-{item.endDate}
                </Grid>
                <Grid className="item2">
            
                  &nbsp;
                  <Link to={`/educationItemEdit/${item.id}`}>
                    <Edit />
                  </Link>
                  &nbsp;
                  <Delete onClick={(e) => handleDelete(item.id, e)} />
                </Grid>
              </Grid>
            ))}
            <button className="add" onClick={handleAdd}>
              {" "}
              + Add Another
            </button>
            {/* </Link> */}
          </div>
        </div>
        <div  className="btnDiv">
          <Link to="/skills-languages">
            <InputSubmit/>
          </Link>
        </div>
      </div>)}
     
    </>
  );
};

export default Education;

