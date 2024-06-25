import React from "react";
import PropTypes from "prop-types";

import { at } from "lodash";
import { useField } from "formik";
import { FormControl, FormHelperText, NativeSelect } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

function SelectField(props) {
  const {
    label,
    handleChangeState,
    handleChangeCity,
    data,
    ChangeDropDownValue,
    ...rest
  } = props;
  const [field, meta, set_State] = useField(props);
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

    if (label == "State") {
      handleChangeState(value);
      props?.set_State(value);
    } else if (label == "City") {
      handleChangeCity(value);
    } else {
    }
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
      <FormControl fullWidth error={isError}>
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
          <option disabled></option>

          {data?.length > 0 &&
            data?.map((item) => (
              <option
                key={item?._id || item?.value}
                value={
                  item?.stateCode ? item?.stateCode : item?._id || item?.value
                }
              >
                {item?.projectType ||
                  item?.name ||
                  item?.cityName ||
                  item?.stateName ||
                  item?.projectFurnishing ||
                  item?.propFacing}
              </option>
            ))}
        </NativeSelect>
      </FormControl>
      {_renderHelperText()}
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
