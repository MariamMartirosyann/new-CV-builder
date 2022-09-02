import { DatePicker, Space } from "antd";
import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import "antd/dist/antd.css";
import React from "react";
import "./style.css";

const DatePiker = ({
  name,
  label,
  rules = null,
  variant,
  errors,
  helperText,
  fullWidth = true,
}) => {
  const { control } = useFormContext();
  return (
    <>
    <Space direction="vertical">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => {
          return (
            <DatePicker
              {...field}
              label={label}
              fullWidth={fullWidth}
              
              variant={variant}
              helperText={helperText}
            />
          );
        }}
      />
    </Space>
    {errors?.[name]?.message && <p>{errors[name].message}</p>}
    </>
  );
};

export default DatePiker;
