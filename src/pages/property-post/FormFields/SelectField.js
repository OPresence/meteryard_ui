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

import { createTheme } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { unstable_createMuiStrictModeTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiInputBase: {
      root: {
        height: "47px",
        lineHeight: "23px",
      },
      input: {
        height: "23px",
      },
    },
    // .MuiInputBase-root-503
    MuiOutlinedInput: {
      input: {
        padding: "12.5px 14px !important",
      },
      root: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          // Add your custom styles here
          borderColor: "red !important", // Example style
        },
      },
    },
    MuiInputLabel: {
      formControl: {
        top: "-7px !important",
        left: "14px !important",
      },
    },
    MuiTypography: {
      h6: {
        color: "#000",
        fontSize: "16px",
        fontFamily: "system-ui",
        fontWeight: "400",
        lineHeight: "20px",
      },
    },
  },
});
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "7px 26px 7px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: "system-ui",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

function SelectField(props) {
  const {
    label,
    data,
    ChangeDropDownValue,
    // set_State_GetDropdown,
    // set_Destrict_Getdropdown,
    // set_Yaer_Getdropdown,
    // set_Year_Getdropdown,
    // set_Season_getdropdown,
    // set_ProductScheme_getdropdown,
    // setLabel_4_Getdropdown,
    // setLabel_5_Getdropdown,
    // setLabel_6_Getdropdown,
    // setLabel_7_Getdropdown,
    // set_CropName_dropdown,
    // setInsurance_type,
    // set_Policy_Type_dropdown,
    // set_Complaint_Type_dropdown,
    // setGet_User_Type,
    // type,

    ...rest
  } = props;

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
      <FormControl fullWidth sx={{}}>
        <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
        <NativeSelect
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          {...field}
          value={selectedValue ? selectedValue : ""}
          disabled={props._isloading}
          onChange={(e) => {
            handleChange(e);
          }}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          <option selected></option>

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
      {/* <>
      <Box mb={1}>
        <Typography variant="h6">
          {props?.label}
          {(props?.name == "Channel" ||
            props?.name == "State" ||
            props?.name == "District" ||
            props?.name == "product_State" ||
            props?.name == "product_Year" ||
            props?.name == "product_Season" ||
            props?.name == "Product_Scheme" ||
            props?.name == "product_District" ||
            props?.name == "Use_Type" ||
            props?.name == "Officer_Designation" ||
            props?.name == "Insurance_type" ||
            props?.name == "Policy_Type" ||
            props?.name == "Complaint_Type" ||
            props?.name == "Complaint_Description" ||
            props?.name == "Note_Number" ||
            props?.name == "Broker_License" ||
            props?.name == "Identifier_Type_Value") && (
            <span style={{ color: "red", fontWeight: "900" }}>*</span>
          )}
        </Typography>
      </Box>
      {props?.valueName ? (
        <>
          <FormControl {...rest} error={isError}>
            <NativeSelect
              {...field}
              id="demo-customized-select-native"
              input={<BootstrapInput />}
              value={selectedValue ? selectedValue : ""}
              label={label}
              variant="outlined"
              disabled={props._isloading}
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option selected>Select {props?.label}</option>

              {data?.length > 0 &&
                data?.map((item, index) => {
                  return (
                    <option
                      key={index}
                      value={
                        item?.GR_AGAINST_TYPE_ID ||
                        item?.yearId ||
                        item?.cropSeasonId ||
                        (type == "ProductDetails" && item?.stateId) ||
                        (type == "stateValue" && item?.GR_IGMS_STATE_ID) ||
                        (type == "destrictValue" &&
                          item?.GR_IGMS_DISTRICT_ID) ||
                        item?.productId ||
                        item?.distictId ||
                        item?.stateId ||
                        item?.GR_REGISTRATION_NUMBER_ID ||
                        item?.value ||
                        (type == undefined && item?.GR_POLICY_TYPE_ID) ||
                        (type == "complain" && item?.GR_COMPL_TYPE_ID) ||
                        item?.GR_INSURANCE_TYPE_ID ||
                        item?.GR_COMPL_DESC_ID
                      }
                    >
                      {item?.AGAINST_TYPE ||
                        item?.COMPL_TYPE ||
                        item?.BROKER_NAME ||
                        item?.STATE_NAME ||
                        item?.DISTRICT_NAME ||
                        item?.yearCd ||
                        item?.cropSeasonName ||
                        item?.productCd ||
                        item?.distictName ||
                        item?.stateName ||
                        item?.name ||
                        item?.POLICY_TYPE ||
                        item?.COMPL_TYPE ||
                        item?.INSURANCE_TYPE ||
                        item?.COMPL_DESC}
                    </option>
                  );
                })}
            </NativeSelect>
            {_renderHelperText()}
          </FormControl>
        </>
      ) : (
        <FormControl {...rest} fullWidth>
          <NativeSelect
            {...field}
            fullWidth
            disabled={props._isloading}
            id="demo-customized-select-native"
            input={<BootstrapInput />}
            value={selectedValue ? selectedValue : ""}
            label={label}
            variant="outlined"
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option selected>Select {props?.label}</option>
            {data?.length > 0 &&
              data?.map((item, index) => (
                <option
                  key={index}
                  value={
                    item?.listCd}
                >
                  {item?.listDesc ||
                    item?.CITY_NAME ||
                    item?.loctnHierarchyName ||
                    item?.CROP_NAME ||
                    item?.documentType ||
                    item?.name ||
                    item?.BROKER_NAME}
                </option>
              ))}
          </NativeSelect>
        </FormControl>
      )}
    </> */}
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
