import React, { useState } from "react";
import Input from "../../Shared/Input";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { addContactInfo } from "../../Redux/ContactInfoSlice";
import { addImage } from "../../Redux/ImageSlice";
import { Box, Typography, Grid } from "@mui/material";
import DatePicker from "../../Shared/DatePicker";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import InputSubmit from "../../Shared/InputSubmit";
import "./style.css";
import "../../../App.css";
import Detection from "./Compoents/ObjectDetect";
const maxNumber = 69;

const ContactInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });

  const methods = useForm({
    defaultValues: {
      name: "",
      surname: "",
      occupation: "",
      nationality: "",
      dateOfBirth: "",
      address: "",
      phone: "",
      email: "",
      link: "",
      datePicker: "",
    },
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    dispatch(addImage(imageList));
  };

  const onSubmit = (formData) => {
    dispatch(addContactInfo(formData));
    navigate("/experience");
  };

  return (
    <Grid
      container
      className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}
    >
      <Grid item lg={8} xs={8}>
        <div>
          <div className="marginTB3015">
            <Typography variant="h5" className="titleBig">
              Tell us a little about yourself
            </Typography>
          </div>

          <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
            <Typography variant="p">
              Let us know who you are, how employers can get in touch with you,
              and what your profession is
            </Typography>
          </div>

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} >
              <Grid container spacing={1}>
                <Grid item lg={3} xs={8}>
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
                </Grid>
                <Grid item lg={3} xs={8}>
                  <Grid container className={isMediumScreen ? "margin015Small" : "margin015"}>
                    <Grid item>
                      <Detection/>
                      <div className="App">
                        <ImageUploading
                          multiple
                          value={images}
                          onChange={onChange}
                          maxNumber={1}
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
                            <div className="upload__image-wrapper">
                              <button
                              className={isMediumScreen ? "imageBtnSmall":"imageBtn"}
                                style={
                                  isDragging ? { color: "red" } : undefined
                                }
                                onClick={onImageUpload}
                                {...dragProps}
                              >
                                Add Profile Photo
                              </button>
                              &nbsp;
                              {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                  <Grid container spacing={3}>
                                    <Grid item>
                                      <img
                                        src={image["data_url"]}
                                        alt=""
                                        width="100"
                                      />
                                    </Grid>
                                    <Grid item>
                                      <div className="image-item__btn-wrapper">
                                        <button
                                          onClick={() => onImageUpdate(index)}
                                        >
                                          Update
                                        </button>
                                        <br />
                                        <button
                                          onClick={() => onImageRemove(index)}
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </div>
                              ))}
                            </div>
                          )}
                        </ImageUploading>
                      </div>
                    </Grid>
                    <Grid item></Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item lg={6} xs={8}>
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
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={3} xs={8}>
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
                <Grid item lg={3} xs={8}>
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
              <Grid container>
                <Grid item lg={6} xs={8}>
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
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item lg={3} xs={8}>
                  {" "}
                  <Box className="marginTop10">
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
                <Grid item lg={3} xs={8}>
                  <Box className="marginTop10">
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
              <Grid container>
                <Grid item lg={6} xs={8}>
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
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={6} xs={8}>
                  <DatePicker
                    control={control}
                    name="datePicker"
                    variant={"outlined"}
                    label={"DatePicker"}
                    helperText={"helperText"}
                  />
                </Grid>
              </Grid>
              <InputSubmit />
            </form>
          </FormProvider>
        </div>
      </Grid>
      <Grid item lg={4} xs={4}>
        <Sidebar />
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
