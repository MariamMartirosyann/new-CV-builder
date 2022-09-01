import { Controller, useFormContext } from "react-hook-form";
//import moment from "moment";
//import { Box, FormHelperText } from "@mui/material";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
//import { IDatePickerProps } from "./types";


const MyDatePicker = (props) => {
  const {
    //name,
  //  label,
    //rules=null,
    //variant,
   // errors,
    //helperText,
    //fullWidth = true,
    onChange
  } = props
  const { control } = useFormContext();
  return (
    
    <>
     
          <DatePicker  onChange={onChange} />
      
    </>
  );
};

export default MyDatePicker;

/*import { DatePicker, Space } from "antd";
import { Controller } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import "antd/dist/antd.css";
import React from "react";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

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
  return;
  <Space direction="vertical">
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => <DatePicker {...field} onChange={onChange} />}
    />
  </Space>;
};

export default DatePiker;
/*<Space direction="vertical">
    <DatePicker onChange={onChange} / >    
  </Space>*/
/*<Controller
       control={control}
        render={({field}) => (
          <DatePicker {...field} onChange={onChange} />
        )}
      />
   
     */