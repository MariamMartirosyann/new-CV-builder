import React from "react";
import Input from "../../Shared/Input";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContactInfo } from "../../Redux/ContactInfoSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Typography, Grid, Box } from "@mui/material";
import "./style.css";

const Jobs = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
        position: "",
        company:"",
        location:"",
        startDate:"",
        endDate:"",

    },
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;
  const onSubmit = (formData) => {
    console.log(formData);
    dispatch(addContactInfo(formData));
   navigate( navigate("/experience"))
  };
  return (
    <div className="contactInfo">
      <Sidebar />
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
        <Grid container spacing={2}>
            <Grid item lg={3}>
              {" "}
              <Box style={{ marginTop: "30px" }}>
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
              </Box>
            </Grid>
            <Grid item lg={3}> 
            <Box style={{ marginTop: "30px" }}>
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
              </Box>
              
            </Grid>
          </Grid>
          <Box style={{ width: "50%", marginTop: "20px"}}>
            <Input
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
          </Box>
          <Grid container spacing={2}>

            <Grid item lg={3}>
              {" "}
              <Box style={{ marginTop: "20px" }}>
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
              </Box>
            </Grid>
            <Grid item lg={3}> 
            <Box style={{ marginTop: "20px" }}>
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
              </Box>
              
            </Grid>
          </Grid>
          <Box style={{ width: "50%", marginTop: "20px"}}>
            <Input
              name="description"
              control={control}
              label={"Description"}
              variant={"outlined"}
              color={"primary"}
              helperText={"Enter description"}
              errors={errors}
              style={{height:"200px"}}
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
          </Box>
          <input type="submit" style={{margin:"20px 0"}}  className="btn"/>
        </form>
      </FormProvider>
    </div>
  );
};

export default Jobs;
