import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { addSkills, deleteSkills } from "../../Redux/SkillsSlice";
import { preWrittenTextState } from "../../Redux/PreWrittenSlice";
import { FormProvider } from "react-hook-form";
import { Typography, Box, Grid } from "@mui/material";
import { ReactComponent as Close } from "../../../icons/close.svg";
import { ReactComponent as Add } from "../../../icons/add.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import Input from "../../Shared/Input";
import { nanoid } from "@reduxjs/toolkit";
import PreWritten from "../PreWritten";
import "./style.css";
import InputSubmit from "../../Shared/InputSubmit";

const SkillsLanguages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preWrittenState = useSelector(
    (state) => state.preWrittenInfo.showPreWrittenText
  );
  const list = useSelector((state) => state.skillsInfo.list);
  const langList = useSelector((state) => state.languagesInfo.list);
  console.log("langList", langList);

  console.log(preWrittenState);
  const methods = useForm({
    defaultValues: {
      skills: "",
    },
  });

  const showPrewritten = () => {
    dispatch(preWrittenTextState(true));
  };
  const handleAdd = () => {
    navigate("/languages/add");
  };
  const onSubmit = (formData) => {
    const newFormData = {
      id: nanoid(),
      skills: formData.skills,
    };
    dispatch(addSkills(newFormData));
    reset();
    console.log("newFormData", newFormData);
  };

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = methods;

  const handleClick = (id) => {
    dispatch(deleteSkills({ id: id }));
  };

  return (
    <>
      {langList.length === 0 ? (
        <div className="contactInfo">
          {preWrittenState ? <PreWritten /> : <Sidebar />}
          <Typography
            variant="h3"
            style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
          >
            Almost finished the basics! Just add a list of skills
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
            The skills you add should reflect the requirements of the job you're
            applying for.
          </Typography>
          <Grid container style={{ width: "50%", position: "relative" }}>
            <Grid item xs={8}>
              {" "}
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
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Typography
                variant="h6"
                onClick={showPrewritten}
                style={{
                  marginLeft: "0",
                  marginTop: "30px",
                  marginBottom: "30px",
                  color: "rgb(103, 103, 241)",
                  textAlign: "end",
                }}
              >
                <Add /> Add pre-written text
              </Typography>
            </Grid>
          </Grid>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
              <Box
                style={{
                  width: "50%",
                  marginTop: "10px",
                  position: "relative",
                }}
              >
                <Input
                  name="skills"
                  control={control}
                  label={"Skills"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your skills"}
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 2,
                      message: "Input more then 5 letters",
                    },
                  }}
                />
                <input type="submit" className="submit" />
                {list.map((i) => (
                  <div key={i.id} className="skills">
                    {i.skills} &nbsp;{" "}
                    <Close
                      className="close"
                      onClick={(e) => handleClick(i.id, e)}
                    />
                  </div>
                ))}
              </Box>
            </form>
          </FormProvider>
          <br />
          <br />
          <Typography
            variant="h3"
            style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
          >
            Speak multiple languages?
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
            Add your languages and levels of ability here (only if you speak
            more than one language).
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginLeft: "0",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Languages
          </Typography>
          <Grid className="container">
            <Grid className="item1">
              <Typography variant="h6" style={{ marginLeft: "0" }}>
                Armenian
              </Typography>
              Native - Diploma in Advanced Armenian
            </Grid>
            <Grid className="item2">
              &nbsp;
              <Link to={`/languages/add`}>
                <Edit />
              </Link>
            </Grid>
          </Grid>

          <button className="add" onClick={handleAdd}>
            {" "}
            + Add Another
          </button>
          <Link to="/objective">
            <InputSubmit />
          </Link>
        </div>
      ) : (
        <div className="contactInfo">
          {preWrittenState ? <PreWritten /> : <Sidebar />}
          <Typography
            variant="h3"
            style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
          >
            Almost finished the basics! Just add a list of skills
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
            The skills you add should reflect the requirements of the job you're
            applying for.
          </Typography>
          <Grid container style={{ width: "50%", position: "relative" }}>
            <Grid item xs={8}>
              {" "}
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
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Typography
                variant="h6"
                onClick={showPrewritten}
                style={{
                  marginLeft: "0",
                  marginTop: "30px",
                  marginBottom: "30px",
                  color: "rgb(103, 103, 241)",
                  textAlign: "end",
                }}
              >
                <Add /> Add pre-written text
              </Typography>
            </Grid>
          </Grid>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
              <Box
                style={{
                  width: "50%",
                  marginTop: "10px",
                  position: "relative",
                }}
              >
                <Input
                  name="skills"
                  control={control}
                  label={"Skills"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your skills"}
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 2,
                      message: "Input more then 5 letters",
                    },
                  }}
                />
                <input type="submit" className="submit" />
                {list.map((i) => (
                  <div key={i.id} className="skills">
                    {i.skills} &nbsp;{" "}
                    <Close
                      className="close"
                      onClick={(e) => handleClick(i.id, e)}
                    />
                  </div>
                ))}
              </Box>
            </form>
          </FormProvider>
          <br />
          <br />
          <Typography
            variant="h3"
            style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
          >
            Speak multiple languages?
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
            Add your languages and levels of ability here (only if you speak
            more than one language).
          </Typography>
          <Typography
            variant="h6"
            style={{
              marginLeft: "0",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Languages
          </Typography>

          {langList.map((i) => (
            <Grid className="container" key={i.id}>
              <Grid className="item1">
                <Typography variant="h6" style={{ marginLeft: "0" }}>
                  {i.language}
                </Typography>
                {i.languageLevel} - {i.courseOrCertification}
              </Grid>
              <Grid className="item2">
                &nbsp;
                <Link to={`/languages/edit/${i.id}`}> 
                  <Edit />
                </Link>
              </Grid>
            </Grid>
          ))}
          <button className="add" onClick={handleAdd}>
            {" "}
            + Add Another
          </button>
          <Link to="/objective">
            <InputSubmit />
          </Link>
        </div>
      )}
    </>
  );
};

export default SkillsLanguages;
