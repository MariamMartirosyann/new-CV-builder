import React from "react";
import Input from "../../Shared/Input";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { addJobsInfo } from "../../Redux/JobsSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Typography, Grid, Box } from "@mui/material";
import { nanoid } from "nanoid";
import InputSubmit from "../../Shared/InputSubmit";
import "./style.css";
import "../../../App.css";

const Jobs = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const methods = useForm({
    defaultValues: {
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  });
  const onSubmit = (formData1) => {
    const newFormData = {
      id: nanoid(),
      position: formData1.position,
      company: formData1.company,
      location: formData1.location,
      startDate: formData1.startDate,
      endDate: formData1.endDate,
      description: formData1.description,
    };
    dispatch(addJobsInfo(newFormData));
    navigate("/experience");
  };

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;

  return (
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
            Start with your most recent position and work backwards. Just add
            the most recent and relevant positions if you have lots of
            experience.
          </Typography>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1}  className="marginTop10">
              <Grid item lg={3} xs={8}>
                <Input
                  name="position"
                  control={control}
                  label={"Position"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your position"}
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 5,
                      message: "Input more then 5 letters",
                    },
                  }}
                />
              </Grid>
              <Grid item lg={3} xs={8} className="marginTop10">
                <Input
                  name="company"
                  control={control}
                  label={"Company"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your company"}
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 5,
                      message: "Input more then 5 letters",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item lg={6} xs={8} className="marginTop10">
              <Input
              className="marginTop10"
                name="location"
                control={control}
                label={"Location (city/state)"}
                variant={"outlined"}
                color={"primary"}
                helperText={"Enter location"}
                errors={errors}
                rules={{
                  required: {
                    value: true,
                    message: "required",
                  },
                  minLength: {
                    value: 5,
                    message: "Input more then 5 letters",
                  },
                }}
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={3} xs={8} className="marginTop10">
                <Input
                  name="startDate"
                  control={control}
                  label={"Start date"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter start date"}
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 5,
                      message: "Input more then 5 letters",
                    },
                  }}
                />
              </Grid>
              <Grid item lg={3} xs={8} className="marginTop10">
                <Input
                  name="endDate"
                  control={control}
                  label={"End date"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter end date"}
                  errors={errors}
                  rules={{
                    required: {
                      value: true,
                      message: "required",
                    },
                    minLength: {
                      value: 5,
                      message: "Input more then 5 letters",
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid item lg={6} xs={8} className="marginTop10">
              <Input
                name="description"
                control={control}
                label={"Description"}
                variant={"outlined"}
                color={"primary"}
                helperText={"Enter description"}
                errors={errors}
                style={{ height: "200px" }}
                rules={{
                  required: {
                    value: true,
                    message: "required",
                  },
                  minLength: {
                    value: 5,
                    message: "Input more then 5 letters",
                  },
                }}
              />
            </Grid>
            <InputSubmit />
          </form>
        </FormProvider>
      </Grid>
      <Grid item lg={4} xs={4}>
       
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default Jobs;
