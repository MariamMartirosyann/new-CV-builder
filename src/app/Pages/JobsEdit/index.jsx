import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, FormProvider} from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { Typography, Grid, Box } from "@mui/material";
import { updateJobsInfo } from "../../Redux/JobsSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import InputSubmit from "../../Shared/InputSubmit";
import Input from "../../Shared/Input";
import "../../../App.css"




const JobsEdit = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const jobs = useSelector((state) => state.jobsInfo.list);
  const selectedJob = jobs.find((item) => item.id === id);

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
      id: id,
      position: formData1.position,
      company: formData1.company,
      location: formData1.location,
      startDate: formData1.startDate,
      endDate: formData1.endDate,
      description: formData1.description,
    };
    dispatch(updateJobsInfo(newFormData));
    navigate("/experience");
  };

  const {
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = methods;

  console.log(selectedJob, "selectedJob");
  useEffect(() => {
    if (selectedJob) {
      reset({
        position: selectedJob.position,
        company: selectedJob.company,
        number: selectedJob.number,
        location: selectedJob.location,
        startDate: selectedJob.startDate,
        endDate: selectedJob.endDate,
        description: selectedJob.description,
      });
    }
  }, [reset, selectedJob]);

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
          <form onSubmit={handleSubmit(onSubmit)} >
            <Grid container spacing={2}>
              <Grid item lg={3} xs={8}>
                
                <Box className="marginTop10">
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
              <Grid item lg={3} xs={8}>
                <Box className="marginTop10">
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
            <Box className="marginTop10">
            <Grid item lg={6} xs={8} >
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
            </Box>
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

export default JobsEdit;
