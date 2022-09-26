import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm,FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid
} from "@mui/material";
import { languageAbilityLevel } from "../../Redux/LanguagesSlice";
import { addLanguageLevel } from "../../Redux/LanguagesSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Input from "../../Shared/Input";
import InputSubmit from "../../Shared/InputSubmit";
import { nanoid } from "nanoid";
import "./style.css";

const LanguagesAdd = () => {
  const [isActive, setIsActive] = useState(false);
  const levelList = languageAbilityLevel;

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      language: "",
      courseOrCertification: "",

    },
  });

  const onSubmit = (formData) => {
    const newFormData = {
      id: nanoid(),
      language: formData.language,
      languageLevel: formData.languageLevel,
      courseOrCertification: formData.courseOrCertification,
    }
    dispatch(addLanguageLevel(newFormData));
    navigate("/skills-languages");
  };
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const {
    formState: { errors },
    handleSubmit,
    control,
    setValue,
  } = methods;

  return (
    <Grid
      container
      className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}

    >
      <Grid item lg={8} xs={8}>
        <div className="marginTB3015">
          <Typography variant="h5" className="titleBig">
            Speak multiple languages?
          </Typography>
        </div>
        <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
          <Typography variant="p">
            Add your languages and levels of ability here (only if you speak more
            than one language).
          </Typography>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
            <Grid container >
              <Grid item lg={8} xs={8}>
                <Input
                  name="language"
                  control={control}
                  label={"Language"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"e g Armenian"}
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
            <div className="marginTB3015">
              <Typography variant="h5" className="titleBig">
                Ability level
              </Typography>
            </div>
            <Grid container>
              <RadioGroup
                row
                aria-label="position"
                onChange={(e) => {
                  setValue("languageLevel", String(e.target.value));
                }}
              >
                {levelList.map((i) => (

                  <div className="level">
                    <FormControlLabel
                      onClick={handleClick}
                      key={i.id}
                      value={i.level}
                      control={<Radio className="radio" />}
                      label={i.level}
                      labelPlacement="end"
                    /></div>
                ))}

              </RadioGroup>
            </Grid>
            <br />
            <div className={isMediumScreen ? "smallTitleSmall" : "smallTitle"}>
              <Typography variant="p">
                Have you done any courses or got any certificates? (Optional)
              </Typography>
            </div>
            <Grid container  >
              <Grid item lg={8} xs={8}>
                <Input
                  name="courseOrCertification"
                  control={control}
                  label={"Course or certification"}
                  variant={"outlined"}
                  color={"primary"}
                  helperText={"Course or certification"}
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

export default LanguagesAdd;
