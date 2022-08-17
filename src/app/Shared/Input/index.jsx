import React from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useFormContext } from "react-hook-form";
import "./style.css";
import { height } from "@mui/system";

const Input = (props) => {
  const {
    name,
    label,
    rules=null,
    variant,
    errors,
    helperText,
    fullWidth = true,
    onChange
  } = props
  const { control } = useFormContext();
  return (
    
    <>
      <Controller
       className="input"
        name={name}
        control={control}
        rules={rules}
        onChange={onChange}
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
