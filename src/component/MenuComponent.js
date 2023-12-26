import React from "react";
import styled from "@emotion/styled";
import { Box, Container, IconButton, Grid, Typography } from "@mui/material";
import SubMenuComponent from "./SubMenuComponent";
const MainComponent = styled("Box")(({ theme }) => ({}));

const MenuComponent = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <div class={"dropdown"} style={{ width: "100%" }}>
        <Box style={{}}>
          <button class="dropbtn">Cities</button>
        </Box>

        <div class="dropdown-content" style={{ width: "100%" }}>
          <SubMenuComponent />
        </div>
      </div>
      <div class={"dropdown"} style={{ width: "100%" }}>
        <Box style={{}}>
          <button class="dropbtn">Property Type</button>
        </Box>

        <div class="dropdown-content" style={{ width: "100%" }}>
          <SubMenuComponent />
        </div>
      </div>
    </Box>
  );
};

export default MenuComponent;
