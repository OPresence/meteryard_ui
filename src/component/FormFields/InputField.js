import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField, Box, Typography } from "@mui/material";

export default function InputField(props) {
  const { errorText, ...rest } = props;
  const [field, meta, helpers] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  function handleNameKeyDown(event) {
    if (
      props?.name == "price" ||
      props?.name == "price breakup" ||
      props?.name == "floors_no" ||
      props?.name == "total_floors"
    ) {
      if (!(/[0-9\s]/.test(event.key) || event.key === "Backspace")) {
        event.preventDefault();
      }
    }
  }

  // function handleChange(event) {
  //   if (props?.name == "price" || props?.name == "price_breakup") {
  //     const inputValue = event.target.value || 0;
  //     const numericValue = inputValue.replace(/[^0-9.]/g, "");
  //     const formattedValue = parseFloat(numericValue).toLocaleString("en-IN", {
  //       maximumFractionDigits: 2,
  //     });
  //     helpers.setValue(formattedValue);
  //   } else {
  //     helpers.setValue(event.target.value);
  //   }
  // }
  function handleChange(event) {
    if (props?.name === "price" || props?.name === "price_breakup") {
      let inputValue = event.target.value;
      if (inputValue === "0") {
        inputValue = ""; // Set value to empty string if it's '0'
      } else {
        inputValue = inputValue.replace(/^0+/, ""); // Remove leading zeros
      }

      let numericValue = inputValue.replace(/[^0-9.]/g, "");

      // If numericValue is empty or contains only ".", set it to "0"
      if (numericValue === "" || numericValue === ".") {
        numericValue = "0";
      }

      const formattedValue = parseFloat(numericValue).toLocaleString("en-IN", {
        maximumFractionDigits: 2,
      });
      helpers.setValue(formattedValue);
    } else {
      helpers.setValue(event.target.value);
    }
  }
  return (
    <>
      <TextField
        style={props?.name == "description" ? { height: "90px" } : {}}
        id="outlined-basic"
        label={rest.label}
        variant="outlined"
        type={props.inputType}
        fullWidth
        disabled={props._isloading}
        placeholder={rest.Placeholder_name}
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        onKeyDown={handleNameKeyDown}
        {...field}
        onChange={handleChange} // Add the onChange function
        onFocus={props.handleFocus} // Add the onFocus function=
        handleBlur={props.handleBlur}
        inputProps={{ maxLength: props.yourMaxLengthValue }}
        sx={{
          "& .MuiFormHelperText-root": {
            marginLeft: "0px !important",
          },
        }}
      />
    </>
  );
}
