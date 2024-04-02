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
  console.log("props---->", props?.name == "description");
  function handleChange(event) {
    helpers.setValue(event.target.value);
  }
  return (
    <>
      <TextField
        // sx={{
        //   "& .MuiInputBase": {
        //     "& .input": {
        //       "& .MuiOutlinedInput": {
        //         "& .input": {
        //           height: "90px",
        //         },
        //       },
        //     },
        //   },
        // }}
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
      {/* <Box mb={1}>
        <Typography variant="h6">
          {props?.label}
          {(props?.name == "Farmer" ||
            props?.name == "Mobile_Number" ||
            props?.name == "Note_Number" ||
            props?.name == "Mobile_Number" ||
            props?.name == "Branch_Code" ||
            props?.name == "Grievance_Description") && (
            <span style={{ color: "red", fontWeight: "900" }}>*</span>
          )}
        </Typography>
      </Box>
      {props?.valueName ? (
        <TextField
          type={props.inputType}
          fullWidth
          disabled={props._isloading}
          id="outlined-basic"
          placeholder={rest.label}
          variant="outlined"
          error={meta.touched && meta.error && true}
          helperText={_renderHelperText()}
          {...field}
          onChange={handleChange} // Add the onChange function
          onFocus={props.handleFocus} // Add the onFocus function=
          handleBlur={props.handleBlur}
          inputProps={{ maxLength: props.yourMaxLengthValue }} // Add this line
        />
      ) : (
        <TextField
          fullWidth
          id="outlined-basic"
          variant="outlined"
          {...field}
          type={props.inputType}
          placeholder={rest.label}
          onChange={handleChange} // Add the onChange function
          onFocus={props.handleFocus} // Add the onFocus function
          handleBlur={props.handleBlur}
          required={props?._Complaint_Type == "7"}
          disabled={
            props._get_user_type == "I" || props._isloading ? true : false
          }
          inputProps={{ maxLength: props.yourMaxLengthValue }} // Add this line
          style={
            props?._Complaint_Type == "7"
              ? { border: "1px solid #f44336", borderRadius: "5px" }
              : {}
          }
        />
      )} */}
    </>
  );
}
