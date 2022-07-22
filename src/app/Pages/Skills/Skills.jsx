import React from "react";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { Typography, Box } from "@mui/material";
import Input from "../../Shared/Input";

const Skills = () => {
  const methods = useForm({
    defaultValues: {
      skills: "",
    },
  });

  const onSubmit=(formData)=>{

  }
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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
          <Box style={{ width: "50%", marginTop: "10px" }}>
            <Input
              name="Skills"
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
                  value: 5,
                  message: "Input more then 5 letters",
                },
              }}
            />
          </Box>
        </form>
      </FormProvider>
    </div>
  );
};

export default Skills;
