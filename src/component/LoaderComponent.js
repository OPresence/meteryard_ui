import React from "react";
import { Box } from "@mui/material";

const LoaderComponent = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box maxWidth={150}>
        <img src="../images/loader.gif" width={"100%"} />
      </Box>
    </Box>
  );
};

export default LoaderComponent;
