import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { Typography, Grid, Box } from "@mui/material";
import { updateEducation } from "../../Redux/EducationSlice";
import Input from "../../Shared/Input";
import InputSubmit from "../../Shared/InputSubmit";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import "../../../App.css";

const EducationItemEdit = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const education = useSelector((state) => state.educationInfo.list);
  const selectedEducation = education.find((item) => item.id === id);

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
      id: id,
      degree: formData1.degree,
      institutionName: formData1.institutionName,
      location: formData1.location,
      startDate: formData1.startDate,
      endDate: formData1.endDate,
      description: formData1.description,
    };
    dispatch(updateEducation(newFormData));
    navigate("/education");
  };

  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = methods;

  console.log(selectedEducation, "selectedEducation");
  useEffect(() => {
    if (selectedEducation) {
      reset({
        degree: selectedEducation.degree,
        institutionName: selectedEducation.institutionName,
        number: selectedEducation.number,
        location: selectedEducation.location,
        startDate: selectedEducation.startDate,
        endDate: selectedEducation.endDate,
        description: selectedEducation.description,
      });
    }
  }, [reset, selectedEducation]);

  return (
    <Grid
      container
      className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}
    >
      <Grid item lg={8} xs={8}>
        <div className="marginTB3015">
          <Typography variant="h5" className="titleBig">
            Great! Let's edit your work experience {id}
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

export default EducationItemEdit;
