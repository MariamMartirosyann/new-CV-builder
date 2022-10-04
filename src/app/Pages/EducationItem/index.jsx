import React from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Typography, Grid, Box } from "@mui/material";
import Input from "../../Shared/Input";
import InputSubmit from "../../Shared/InputSubmit";
import { addEducation } from "../../Redux/EducationSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { nanoid } from "nanoid";
import "../../../App.css";

const EducationItem = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      degree: "",
      institutionName: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  });
  const onSubmit = (formData1) => {
    const newFormData = {
      id: nanoid(),
      degree: formData1.degree,
      institutionName: formData1.institutionName,
      location: formData1.location,
      startDate: formData1.startDate,
      endDate: formData1.endDate,
      description: formData1.description,
    };
    dispatch(addEducation(newFormData));
    navigate("/education");
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
            Awesome! Now, what qualifications do you have?
          </Typography>
        </div>
        <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
          <Typography variant="p">
            Start with your most recent period of education and work backwards.
            If you have many, just add the most recent and relevant ones.
          </Typography>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item lg={3} xs={8}>
                <Box className="marginTop10">
                  <Input
                    name="degree"
                    control={control}
                    label={"Degree"}
                    variant={"outlined"}
                    color={"primary"}
                    helperText={"Enter your degree"}
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
              <Grid item lg={3} xs={8}>
                <Box className="marginTop10">
                  <Input
                    name="institutionName"
                    control={control}
                    label={"Name of institution"}
                    variant={"outlined"}
                    color={"primary"}
                    helperText={"Enter your institution name"}
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

            <Grid item lg={6} xs={8}>
              <Box className="marginTop10">
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
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={3} xs={8}>
                <Box className="marginTop10">
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
              <Grid item lg={3} xs={8}>
                <Box className="marginTop10">
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
            <Grid item lg={6} xs={8}>
              <Box className="marginTop10">
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
              </Box>
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

export default EducationItem;
