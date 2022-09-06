import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./style.css";
import { height } from "@mui/system";

const Input = (props) => {
  const {
    name,
    label,
    rules = null,
    variant,
    helperText,
    fullWidth = true,
    onChange,
  } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        className="input"
        name={name}
        control={control}
        rules={rules}
        onChange={onChange}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            helperText={helperText}
          />
        )}
      />
      <ErrorMessage errors={errors} name={name} />
    </>
  );
};

export default Input;

