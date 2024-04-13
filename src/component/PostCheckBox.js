import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GreenCheckbox = withStyles({
  root: {
    color: "#b8db53",
    "&$checked": {
      color: "#b8db53",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function PostCheckBox({
  data,
  index,
  checkedIndex,
  handleCheckboxChange,
}) {
  const { projectType, _id, state, isSelected } = data;

  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          checked={checkedIndex === index}
          onChange={() => handleCheckboxChange(index)}
          color="primary"
        />
      }
      label={projectType}
    />
  );
}
