import React, { useState } from "react";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const MuiPicker=(prop)=> {
  const {label,fullWidth,helperText}=prop
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <Stack spacing={4}>
      <DatePicker
        renderInput={(params) => <TextField {...params}  
        label={label}
        fullWidth={fullWidth}
        helperText={helperText}/>}
        value={selectedDate}
        onChange={(newValue)=>{
            setSelectedDate(newValue)
        }}
      />
    </Stack>
  );
};




/*import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export default function DatePickers(props) {
  const { name, label,helperText, fullWidth = true, onChange} = props;
  const [value, setValue] = React.useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          disableFuture
          name={name}
          openTo="year"
          views={["year", "month", "day"]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              fullWidth={fullWidth}
              helperText={helperText}
            />
          )}
        />
      </Stack>
    </LocalizationProvider>
  );
}*/
