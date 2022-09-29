import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { addSkills, deleteSkills } from "../../Redux/SkillsSlice";
import { preWrittenTextState } from "../../Redux/PreWrittenSlice";
import { Typography, Box, Grid } from "@mui/material";
import { ReactComponent as Close } from "../../../icons/close.svg";
import { ReactComponent as Add } from "../../../icons/add.svg";
import { ReactComponent as Edit } from "../../../icons/edit.svg";
import InputSubmit from "../../Shared/InputSubmit";
import Input from "../../Shared/Input";
import { nanoid } from "@reduxjs/toolkit";
import PreWritten from "../PreWritten";
import "../../../App.css";
import "./style.css";


const SkillsLanguages = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preWrittenState = useSelector(
    (state) => state.preWrittenInfo.showPreWrittenText
  );
  const list = useSelector((state) => state.skillsInfo.list);
  const langList = useSelector((state) => state.languagesInfo.list);

  const methods = useForm({
    defaultValues: {
      skills: "",
    },
  });
  console.log(preWrittenState,'1')
  const showPrewritten = () => {
    dispatch(preWrittenTextState(11));
    console.log(preWrittenState,"2")
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
        <Grid
          container
          className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}
        >
          <Grid item lg={8} xs={8}>
            <div className="marginTB3015">
              <Typography variant="h5" className="titleBig">
                Almost finished the basics! Just add a list of skills
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
              <Typography variant="p">
                The skills you add should reflect the requirements of the job
                you're applying for.
              </Typography>
            </div>
            <Box className="marginTopBottom30">
              <Grid container>
                <Grid item lg={4} xs={4}>
                  <Typography variant="h6" className="marginTopm30">
                    Experience
                  </Typography>
                </Grid>
                <Grid item lg={4} xs={4}>
                  <Box className="showPrewritten">
                    <Typography variant="p" onClick={showPrewritten}>
                      <Add /> Add pre-written text
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="skillsInput">
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
            
            <div className="marginTB3015">
              <Typography variant="h5" className="titleBig">
                Speak multiple languages?
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle1"}>
              <Typography variant="p">
                Add your languages and levels of ability here (only if you speak
                more than one language).
              </Typography>
            </div>
            <Typography variant="h6" className="marginTopBottom30">
              Languages
            </Typography>
            <Grid className="container">
              <Grid className="item1">
                <Typography variant="h6" className="marginLeft0">
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
              + Add Another
            </button>
            <Link to="/objective">
              <InputSubmit />
            </Link>
          </Grid>
          <Grid item lg={4} xs={4}>
            {preWrittenState ? <PreWritten /> : <Sidebar />}
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
                Almost finished the basics! Just add a list of skills
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle1"}>
              <Typography variant="p">
                The skills you add should reflect the requirements of the job
                you're applying for.
              </Typography>
            </div>
            <Grid container>
              <Grid item lg={8} xs={8}>
                <Typography variant="h6" className="marginTopBottom30">
                  Experience
                </Typography>
              </Grid>
              <Grid item lg={8} xs={8}>
              <Box className="showPrewritten">
                    <Typography variant="p" onClick={showPrewritten}>
                      <Add /> Add pre-written text
                    </Typography>
                  </Box>
              </Grid>
            </Grid>

            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
              <Grid item lg={8} xs={8} style={{
                    position: "relative",
                  }}>
              
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
                </Grid>
              </form>
            </FormProvider>
           
            <div className="marginTB3015">
              <Typography variant="h5" className="titleBig">
                Speak multiple languages?
              </Typography>
            </div>
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle1"}>
              <Typography variant="p">
                Add your languages and levels of ability here (only if you speak
                more than one language).
              </Typography>
            </div>
            <Typography variant="h6" className="marginTop30">
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
          </Grid>
          <Grid item lg={4} xs={4}>
           
            {preWrittenState ? <PreWritten /> : <Sidebar />}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default SkillsLanguages;
