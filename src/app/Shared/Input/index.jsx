import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import "./style.css";

const Input = (props) => {
  const {
    name,
    label,
    rules=null,
    variant,
    errors,
    helperText,
    fullWidth = true,
  } = props
  const { control } = useFormContext();
  return (
    
    <>
      <Controller
       className="input"
        name={name}
        control={control}
        rules={rules}
        render={({field}) => (
          <TextField
          {...field}
            label={label}
            variant={variant}
            fullWidth={fullWidth}
            helperText={helperText}
           
          />
        )}
      />
    {errors?.[name]?.message && <p>{errors[name].message}</p>}
     
    </>
  );
};

export default Input;