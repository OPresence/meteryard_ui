import { withStyles } from "@mui/styles";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

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
