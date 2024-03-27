import React from "react";
import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
const PropertyPostScreenStyle = styled("Box")(({ theme }) => ({
  "& .borderBox": {
    background: "red",
    width: "250px",
    height: "350px",
    position: "absolute",
  },
  "& .mainBox": {
    height: "500px",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    background: "#fff",
    borderRadius: "15px",
    position: "relative",
  },
}));

const PropertyPost_s_1 = () => {
  return (
    <PropertyPostScreenStyle>
      <Box className="mainBox">
        <Box className="borderBox">
          <Box></Box>
        </Box>
      </Box>
    </PropertyPostScreenStyle>
  );
};

export default PropertyPost_s_1;
