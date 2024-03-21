import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const CheckBoxComponent = ({
  //   checked,
  setChecked_Get,
  handleChangeCheckBox,
  data,
  index,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      setChecked_Get(checked);
    }
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked); // Toggle the checked state
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default CheckBoxComponent;
