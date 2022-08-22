import React from "react";
import Input from "../../Shared/Input";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ImageUploading from 'react-images-uploading';
import {addContactInfo} from "../../Redux/ContactInfoSlice"
import { Box, Typography, Grid } from "@mui/material";
import Empty from "../../../images/empty.webp";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import InputSubmit from "../../Shared/InputSubmit";
import "./style.css";



const ContactInfo = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  
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
          <Grid container  spacing={1}>
            <Grid item lg={3}>
              {" "}
              <Box style={{ width: "100%", marginTop: "10px" }}>
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
              <Box style={{ width: "100%", marginTop: "10px" }}>
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
            <Grid item lg={3}>
              <Grid container>
                <Grid item>
           
                  <div className="App">
              
                    
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            
            <p
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
             Add Profile Photo
            </p>
            &nbsp;
            <img src={Empty} alt="Empty"/>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <Grid container spacing={3}>
                  <Grid item><img src={image['data_url']} alt="" width="100" /></Grid>
                  <Grid item>
                  <div className="image-item__btn-wrapper">
                    
                  <button onClick={() => onImageUpdate(index)}>Update</button><br/>
                  <button onClick={() => onImageRemove(index)}>x</button>
                </div></Grid>
                </Grid>
                
                
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
                </Grid>
                <Grid item> 
                <p>Add Profile Photo</p>        
     </Grid>
              </Grid>
   
            </Grid>
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
          <InputSubmit/>
        
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactInfo;
