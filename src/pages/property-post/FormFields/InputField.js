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
  function handleChange(event) {
    helpers.setValue(event.target.value);
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
        placeholder={rest.label}
        error={meta.touched && meta.error && true}
        helperText={_renderHelperText()}
        {...field}
        onChange={handleChange} // Add the onChange function
        onFocus={props.handleFocus} // Add the onFocus function=
        handleBlur={props.handleBlur}
        inputProps={{ maxLength: props.yourMaxLengthValue }}
      />
    </>
  );
}
