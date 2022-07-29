import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { languageAbilityLevel } from "../../Redux/LanguagesSlice";
import {
  Typography,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Input from "../../Shared/Input";
import InputSubmit from "../../Shared/InputSubmit";
import { updateLanguageLevel } from "../../Redux/LanguagesSlice";
import { nanoid } from "nanoid";
import "./style.css";

const LanguagesEdit = () => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const levelList = languageAbilityLevel;
  const languages = useSelector((state) => state.languagesInfo.list);
  const selectedLanguage = languages.find((item) => item.id === id);
  console.log("languages", languages);
  console.log("levelList", levelList);
  console.log("selectedLanguage", selectedLanguage);

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
    <div className="main">
      <Typography
        variant="h3"
        style={{ marginLeft: "0", marginTop: "30px", marginBottom: "15px" }}
      >
        Speak multiple languages?{id}
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
        Add your languages and levels of ability here (only if you speak more
        than one language).
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="formStyle">
          <Box style={{ width: "60%", marginTop: "10px" }}>
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
          </Box>
          <Typography
            variant="h6"
            style={{
              width: "200px",
              marginLeft: "0",
              marginTop: "20px",
              marginBottom: "35px",
            }}
          >
            Ability level
          </Typography>
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
                />
              </div>
            ))}
          </RadioGroup>

          <br />
          <Typography
            variant="p"
            style={{
              width: "200px",
              marginLeft: "0",
              marginTop: "10px",
              marginBottom: "35px",
            }}
          >
            Have you done any courses or got any certificates? (Optional)
          </Typography>
          <Box style={{ width: "60%", marginTop: "10px" }}>
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
          </Box>

          <InputSubmit />
        </form>
      </FormProvider>
    </div>
  );
};

export default LanguagesEdit;
