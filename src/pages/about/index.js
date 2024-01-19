import React, { useState } from "react";

import { Box } from "@mui/material";
import JoditComponent from "../Admin/component/JoditComponent";

const index = () => {
  const [_change_about, setChange_About] = useState("");
  return (
    <Box>
      <JoditComponent
        _initial_state={_change_about}
        set_Content_State={setChange_About}
        title="About"
      />
    </Box>
  );
};

export default index;
