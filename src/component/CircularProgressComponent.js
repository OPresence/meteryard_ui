import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate({ colorValue }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress
        sx={{
          color: `${colorValue} !important`,
          height: "35px !important ",
          width: "35px !important ",
        }}
      />
    </Box>
  );
}
