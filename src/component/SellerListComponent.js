import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const SellerListStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    "& .detailsBox": {
      display: "flex",
      alignItems: "center",
      position: "relative",
     
      "& svg": {
        zIndex: "1",
        left: "25px",
        position: "absolute",
        bottom: "-5px",
        fontSize: "12px",
      },
    },
  },
}));
const SellerListComponent = ({ data, index }) => {
  return (
    <SellerListStyle>
      <Box className="mainBox" key={index}>
        <Box className="detailsBox">
          <FiberManualRecordIcon
            style={data?.online ? { color: "green" } : { color: "red" }}
          />
          <Avatar src={data?.img} /> &nbsp;&nbsp;&nbsp;
          <Typography variant="h6">{data?.name}</Typography>
        </Box>
      </Box>
    </SellerListStyle>
  );
};

export default SellerListComponent;
