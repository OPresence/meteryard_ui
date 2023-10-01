import React from "react";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

const ButonStyle = styled("Box")(({ theme }) => ({
  "& .viewmoreButton": {
    "& button": {
      background: "none",
      border: "1px solid black",
    },
    "& span": {
      color: "#000",
      fontSize: "10px",
    },
  },
}));

const ButtonComponent = () => {
  return (
    <ButonStyle>
      <Box p={"10px 0 0 0"} className="viewmoreButton">
        <Button>
          <span>Get View More</span>
        </Button>
      </Box>
    </ButonStyle>
  );
};

export default ButtonComponent;
