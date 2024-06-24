// import React from "react";
import PropTypes from "prop-types";

import { at } from "lodash";
import { useField } from "formik";
import {
  FormControl,
  FormHelperText,
  Box,
  Typography,
  NativeSelect,
  InputBase,
} from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { withStyles } from "@mui/styles";

// import { createTheme } from "@mui/material/styles";
// // import { useTheme } from "@mui/material/styles";
// // import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";

// const theme = createTheme({
//   overrides: {
//     MuiInputBase: {
//       root: {
//         height: "47px",
//         lineHeight: "23px",
//       },
//       input: {
//         height: "23px",
//       },
//     },
//     // .MuiInputBase-root-503
//     MuiOutlinedInput: {
//       input: {
//         padding: "12.5px 14px !important",
//       },
//       root: {
//         "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//           // Add your custom styles here
//           borderColor: "red !important", // Example style
//         },
//       },
//     },
//     MuiInputLabel: {
//       formControl: {
//         top: "-7px !important",
//         left: "14px !important",
//       },
//     },
//     MuiTypography: {
//       h6: {
//         color: "#000",
//         fontSize: "16px",
//         fontFamily: "system-ui",
//         fontWeight: "400",
//         lineHeight: "20px",
//       },
//     },
//   },
// });
// const BootstrapInput = withStyles((theme) => ({
//   root: {
//     "label + &": {
//       marginTop: theme.spacing(3),
//     },
//   },
//   input: {
//     borderRadius: 4,
//     position: "relative",
//     backgroundColor: theme.palette.background.paper,
//     border: "1px solid #ced4da",
//     fontSize: 16,
//     padding: "7px 26px 7px 12px",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: "system-ui",
//     "&:focus": {
//       borderRadius: 4,
//       borderColor: "#80bdff",
//       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
//     },
//   },
// }))(InputBase);

function SelectField(props) {
  const { label, data, ChangeDropDownValue, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  // onChange Dropdown Function
  const handleChange = (event) => {
    const { value } = event.target;
    field.onChange(event); // This is important to update the Formik state
    ChangeDropDownValue && ChangeDropDownValue(value || value?.stateId); // Optional: Call your custom function
  };

  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return (
        <FormHelperText style={{ color: "#d32f2f" }}>{error}</FormHelperText>
      );
    }
  }
  return (
    <>
      <FormControl fullWidth sx={{}} {...rest} error={isError}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <NativeSelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          {...field}
          value={selectedValue != undefined ? selectedValue : ""}
          disabled={props._isloading}
          onChange={(e) => {
            handleChange(e);
          }}
          error={meta.touched && meta.error && true}
          handleBlur={props.handleBlur}
          helperText={_renderHelperText()}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
          onFocus={props.handleFocus} // Add the onFocus function=
        >
          <option selected disabled>
            {/* {label} */}
          </option>

          {data?.length > 0 &&
            data?.map((item) => (
              <option
                key={item?._id || item?.value}
                value={item?._id || item?.value}
              >
                {item?.projectType || item?.name}
              </option>
            ))}
        </NativeSelect>
        {_renderHelperText()}
      </FormControl>
    </>
  );
}

SelectField.defaultProps = {
  data: [],
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired,
};

export default SelectField;
