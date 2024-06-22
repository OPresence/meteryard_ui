import React from "react";
import { Box } from "@mui/material";
// import zIndex from "@mui/material/styles/zIndex";
const PageLoading = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Box
        maxWidth={250}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        style={{ background: "#fff", zIndex: "999" }}
      >
        <img src="/images/loader.gif" width={"100%"} />
      </Box>
    </Box>
  );
};

export default PageLoading;
