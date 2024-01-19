import React, { useState } from "react";

import { Box } from "@mui/material";
import JoditComponent from "../Admin/component/JoditComponent";

const index = () => {
  const [_change_privacy, setChange_Privacy] = useState("");
  return (
    <Box>
      <JoditComponent
        _initial_state={_change_privacy}
        set_Content_State={setChange_Privacy}
        title="Privacy Policy"
      />
    </Box>
  );
};

export default index;
