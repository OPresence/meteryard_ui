import React from "react";
import styled from "@emotion/styled";
import { Box, Container, IconButton, Grid, Typography } from "@mui/material";
import SubMenuComponent from "./SubMenuComponent";
import SubMenu2Component from "./SubMenu2Component";
const MenuComponentStyle = styled("Box")(({ theme }) => ({
  "& .submenueTab": {
    display: "flex",
    "@media(max-width:615px)": {
      display: "grid",
      justifyContent: "start",
    },
    "& button": {
      "@media(max-width:615px)": {
        padding: "10px",
        width: "100%",
        display: "flex",
        boxShadow: "0px 3px 46px #00000029",
        margin: "5px",
      },
    },
  },
}));

const MenuComponent = () => {
  return (
    <MenuComponentStyle>
      <Box className="submenueTab" justifyContent={"space-between"}>
        <div class={"dropdown"} style={{ width: "100%" }}>
          <Box style={{}}>
            <button class="dropbtn">cities</button>
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
            <SubMenu2Component />
          </div>
        </div>
      </Box>
    </MenuComponentStyle>
  );
};

export default MenuComponent;
