import React, { useState, useEffect } from "react";
import { useForm,  FormProvider } from "react-hook-form";
import { useNavigate, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  Typography,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { languageAbilityLevel } from "../../Redux/LanguagesSlice";
import { updateLanguageLevel } from "../../Redux/LanguagesSlice";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import Input from "../../Shared/Input";
import InputSubmit from "../../Shared/InputSubmit";
import "./style.css";

const LanguagesEdit = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery({ query: "(max-width: 1100px)" });
  const { id } = useParams();
  const levelList = languageAbilityLevel;
  const languages = useSelector((state) => state.languagesInfo.list);
  const selectedLanguage = languages.find((item) => item.id === id);


  const methods = useForm({
    defaultValues: {
      language: "",
      languageLevel:"",
      courseOrCertification: "",
    },
  });

  const onSubmit = (formData1) => {
    const newFormData = {
      id: id,
      language: formData1.language,
      languageLevel: formData1.languageLevel,
      courseOrCertification: formData1.courseOrCertification,
    };
    dispatch(updateLanguageLevel(newFormData));
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
    reset,
  } = methods;

  useEffect(() => {
    if (selectedLanguage) {
      reset({
        language: selectedLanguage.language,
        languageLevel: selectedLanguage.languageLevel,
        courseOrCertification: selectedLanguage.courseOrCertification,
      });
    }
  }, [reset, selectedLanguage]);

  return (
    <Grid
    container
    className={isMediumScreen ? "contactInfoSmall" : "contactInfo"}

  >
    <Grid item lg={8} xs={8}>
      <div className="marginTB3015">
        <Typography variant="h5" className="titleBig">
          Speak multiple languages? {id}
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

export default LanguagesEdit;
