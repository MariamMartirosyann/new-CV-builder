import React from "react";
import Input from "../../Shared/Input";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addContactInfo} from "../../Redux/ContactInfoSlice"
import { Box, Typography, Grid } from "@mui/material";

import "./style.css";
import Sidebar from "../../Shared/Sidebar/Sidebar";



const ContactInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const methods = useForm({
    defaultValues: {
      name: "",
      surname: "",
      occupation:"",
      nationality:"",
      dateOfBirth:"",
      address:"",
      phone:"",
      email:"",
      link:""
    },
  });

  const onSubmit = (formData) => {
    dispatch(addContactInfo(formData));
   navigate( navigate("/experience"))
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
        Tell us a little about yourself
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
        Let us know who you are, how employers can get in touch with you, and
        what your profession is
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
          <Grid>
            <Grid item>
              {" "}
              <Box style={{ width: "25%", marginTop: "10px" }}>
                {" "}
                <Input
                  name="name"
                  control={control}
                  label={"Name"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your name"}
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
              <Box style={{ width: "25%", marginTop: "10px" }}>
                <Input
                  name="surname"
                  control={control}
                  label={"Surname"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your surname"}
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
            <Grid item></Grid>
          </Grid>

          <Box style={{ width: "50%", marginTop: "10px"}}>
            <Input
              name="occupation"
              control={control}
              label={"Occupation"}
              variant={"outlined"}
              color={"primary"}
              helperText={"Enter your occupation"}
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
              <Box style={{ marginTop: "10px" }}>
                <Input
                  name="nationality"
                  control={control}
                  label={"Nationality"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your nationality"}
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
            <Box style={{ marginTop: "10px" }}>
                <Input
                  name="dateOfBirth"
                  control={control}
                  label={"Date of birth"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your Date of birth"}
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
          <Box style={{ width: "50%", marginTop: "10px" }}>
            <Input
              name="address"
              control={control}
              label={"Address"}
              variant={"outlined"}
              color={"primary"}
              helperText={"Enter your address"}
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
              <Box style={{ marginTop: "10px" }}>
                <Input
                  name="phone"
                  control={control}
                  label={"Phone"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your phone"}
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
            <Box style={{ marginTop: "10px" }}>
                <Input
                  name="email"
                  control={control}
                  label={"Email"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Enter your email"}
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
          <Box style={{ width: "50%", marginTop: "10px"}}>
            <Input
              name="link"
              control={control}
              label={"Link"}
              variant={"outlined"}
              color={"primary"}
              helperText={"Enter your  linkedin link"}
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
          <input type="submit" style={{margin:"20px 0"}}  className="btn"/>
        
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactInfo;
