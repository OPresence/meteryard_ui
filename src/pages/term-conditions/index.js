import React, { useState } from "react";

import { Box } from "@mui/material";
import JoditComponent from "../Admin/component/JoditComponent";

const index = () => {
  const [_change_term_condition, setChange_Term_Condition] = useState("");
  return (
    <Box>
      <JoditComponent
        _initial_state={_change_term_condition}
        set_Content_State={setChange_Term_Condition}
        title="Term & Condition"
      />
    </Box>
  );
};

export default index;
