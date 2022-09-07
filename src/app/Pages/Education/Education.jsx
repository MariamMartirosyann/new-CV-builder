import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { deleteEducation } from "../../Redux/EducationSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import InputSubmit from "../../Shared/InputSubmit";
import { ReactComponent as Delete } from "../../../icons/delete.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import "../../../App.css";
import "./style.css";

const Education = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const navigate = useNavigate();
  const list = useSelector((state) => state.educationInfo.list);

  console.log(list, "list");
  const dispatch = useDispatch();

  const handleAdd = () => {
    navigate("/educationItem/add");
  };

  const handleDelete = (id) => {
    dispatch(deleteEducation({ id: id }));
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
                Awesome! Now, what qualifications do you have?
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
              <Typography variant="p">
                Start with your most recent period of education and work
                backwards. If you have many, just add the most recent and
                relevant ones.
              </Typography>
            </div>
            <Typography variant="h6" className="marginTopBottom30">
              Education
            </Typography>

            <Grid className="container">
              <Grid className="item1">
                <Typography variant="h6" className="marginLeft0">
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
                  <Typography variant="h6" className="marginLeft0">
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
              + Add Another
            </button>

            <div className={isMediumScreen ? "btnDivSmall" : "btnDiv"}>
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
            <Typography variant="h6" className="marginTopBottom30">
              Experience
            </Typography>

            {list.map((item) => (
              <Grid className="container" key={item.id}>
                <Grid className="item1">
                  <Typography variant="h6" className="marginLeft0">
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

            <div className={isMediumScreen ? "btnDivSmall" : "btnDiv"}>
              <Link to="/skills-languages">
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

export default Education;
