import React from "react";
import Input from "../../Shared/Input";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addEducation } from "../../Redux/EducationSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { Typography, Grid, Box } from "@mui/material";
import "./style.css";
import { nanoid } from "nanoid";
import InputSubmit from "../../Shared/InputSubmit";

const EducationItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const methods = useForm({
    defaultValues: {
      degree: "",
      institutionName: "",
      location: "",
      startDate: "",
      endDate: "",
      description:"",
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
      description:formData1.description,
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
    <div className="contactInfo">
      <Sidebar />
      <Typography
        variant="h3"
        style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
      >
       Awesome! Now, what qualifications do you have?
      </Typography>
      <Typography
        variant="p"
        style={{
          width: "150px",
          marginLeft: "0",
          marginTop: "10px",
          marginBottom: "35px",
        }}
      >
     Start with your most recent period of education and work backwards. If you have many, just add the most recent and relevant ones.
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
          <Grid container spacing={2}>
            <Grid item lg={3}>
              {" "}
              <Box style={{ marginTop: "30px" }}>
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
            <Grid item lg={3}>
              <Box style={{ marginTop: "30px" }}>
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
          <Box style={{ width: "50%", marginTop: "20px" }}>
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
          <Box style={{ width: "50%", marginTop: "20px" }}>
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
          <InputSubmit/>
        </form>
      </FormProvider>
    </div>
  );
};

export default EducationItem ;
