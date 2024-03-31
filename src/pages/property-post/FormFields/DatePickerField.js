import React, { useState, useEffect } from "react";
import { useField } from "formik";
import { Grid, Box, Typography } from "@material-ui/core";
import { convertDateTime } from "src/utils";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const theme = createTheme({
  overrides: {
    MuiTypography: {
      h6: {
        color: "#000",
        fontSize: "16px",
        fontFamily: "system-ui",
        fontWeight: "400",
        lineHeight: "1.6",
      },
    },
  },
});

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    if (value) {
      const [year, month, day] = value.split("-");
      const date = new Date(year, month - 1, day);
      setSelectedDate(date);
    }
  }, [value]);

  function _onChange(event) {
    const date = event.target.value;

    if (date) {
      setSelectedDate(new Date(date));
      setValue(date);
    } else {
      setSelectedDate(null);
      setValue("");
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Box mb={1}>
        <Typography variant="h6">{props?.label}</Typography>
      </Box>
      <Box width={"100%"}>
        <input
          style={{
            borderColor: "rgba(0, 0, 0, 0.23)",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            width: "90%",
            height: "36px",
            borderRadius: "5px",
            padding: "0 15px",
          }}
          type="date"
          id="dateInput"
          placeholder="yyyy-MM-dd"
          max="2006-02-01"
          {...field}
          {...props}
          value={selectedDate ? selectedDate.toISOString().split("T")[0] : ""}
          onChange={_onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error}
        />
      </Box>
    </ThemeProvider>
  );
}
