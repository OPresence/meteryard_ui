import React, { useContext, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../context/Auth";

const CheckBoxComponent = ({
  propName,
  setChecked_Get,
  handleCheckboxChange,
  data,
  selectedSubTypes,
}) => {
  const auth = useContext(AuthContext);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (checked) {
      setChecked_Get(checked);
    } else {
    }
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked); // Toggle the checked state
    auth?.setPropertySubType(data?._id);
  };

  return (
    <div>
      <Checkbox
        sx={{ padding: "0px" }}
        // checked={checked}
        // onChange={handleChange}
        checked={selectedSubTypes?.some(
          (item) =>
            item.parentId === propName._id && item.subTypeId === data._id
        )}
        onChange={() => {
          // handleChange();
          handleCheckboxChange(propName?._id, data._id);
        }}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default CheckBoxComponent;
