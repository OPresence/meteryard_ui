import React from "react";
import { Box } from "@mui/material";
// import zIndex from "@mui/material/styles/zIndex";
const PageLoading = () => {
  return (
    <div>
      <Box
        // maxWidth={250}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        style={{ background: "#fff", zIndex: "999" }}
      >
        <img
          src="https://res.cloudinary.com/mobiloitteblockchain/image/upload/v1714070452/jles2cbdr0nz8rytfhx2.gif"
          //   width={"100%"}
        />
      </Box>
    </div>
  );
};

export default PageLoading;
