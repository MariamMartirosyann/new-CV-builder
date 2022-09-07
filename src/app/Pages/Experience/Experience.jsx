import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Typography, Grid } from "@mui/material";
import { deleteJobsInfo } from "../../Redux/JobsSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import InputSubmit from "../../Shared/InputSubmit";
import { ReactComponent as Delete } from "../../../icons/delete.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import "../../../App.css";
import "./style.css";



const Experience = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const navigate = useNavigate();
  const list = useSelector((state) => state.jobsInfo.list);

  console.log(list, "list");
  const dispatch = useDispatch();

  const handleAdd = () => {
    navigate("/experienceJobs/add");
  };

  const handleDelete = (id) => {
    dispatch(deleteJobsInfo({ id: id }));
  };

  return (
    <>
      {list.length === 0 ? (
        <Grid
          container
          className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}
        >
          <Grid item lg={8} xs={8}>
            <div className="marginTB3015">
              <Typography variant="h5" className="titleBig">
                Great! Let's fill out your work experience next
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
              <Typography variant="p">
                Start with your most recent position and work backwards. Just
                add the most recent and relevant positions if you have lots of
                experience.
              </Typography>
            </div>
            <Typography
              variant="h6"
              className="marginTopBottom30"
            >
              Experience
            </Typography>

            <Grid className="container">
              <Grid className="item1">
                <Typography variant="h6" className="marginLeft0">
                  position
                </Typography>
                company startDate -endDate
              </Grid>
              <Grid className="item2">
                &nbsp;
                <Link to={`/experienceJobs/add`}>
                  <Edit />
                </Link>
              </Grid>
            </Grid>

            {list.map((item) => (
              <Grid className="container" key={item.id}>
                <Grid className="item1">
                  <Typography variant="h6" className="marginLeft0">
                    {item.position}
                  </Typography>
                  {item.company} {item.startDate}-{item.endDate}
                </Grid>
                <Grid className="item2">
                  &nbsp;
                  <Link to={`/experienceJobsEdit/${item.id}`}>
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

            <div className={isMediumScreen? "btnDivSmall" : "btnDiv"} >
              <Link to="/skills-languages">
                <InputSubmit />
              </Link>
            </div>
          </Grid>
          <Grid item lg={4} xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      ) : (
        <Grid container className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}>
          <Grid item lg={8} xs={8}>
         
              
          <div className="marginTB3015">
              <Typography variant="h5" className="titleBig">
                Great! Let's fill out your work experience next
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
              <Typography variant="p">
                Start with your most recent position and work backwards. Just
                add the most recent and relevant positions if you have lots of
                experience.
              </Typography>
            </div>
            <Typography
              variant="h6"
              className="marginTopBottom30"
            >
              Experience
            </Typography>

                {list.map((item) => (
                  <Grid className="container" key={item.id}>
                    <Grid className="item1">
                      <Typography variant="h6" className="marginLeft0">
                        {item.position}
                      </Typography>
                      {item.company} {item.startDate}-{item.endDate}
                    </Grid>
                    <Grid className="item2">
                      &nbsp;
                      <Link to={`/experienceJobsEdit/${item.id}`}>
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
              
            
            <div className={isMediumScreen? "btnDivSmall" : "btnDiv"}>
              <Link to="/education">
                <InputSubmit />
              </Link>
            </div>
          </Grid>
          <Grid item lg={4} xs={4}>
            <Sidebar />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Experience;
