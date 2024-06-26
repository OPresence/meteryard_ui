import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import SubMenuComponent from "./SubMenuComponent";
import SubMenu2Component from "./SubMenu2Component";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const MenuComponentStyle = styled(Box)(({ theme }) => ({
  "& .submenueTab": {
    display: "flex",
    "@media(max-width:615px)": {
      display: "grid",
      justifyContent: "start",
    },
    "& button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-4px",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "uppercase",
      "@media(max-width:615px)": {
        padding: "10px",
        width: "100%",
        display: "flex",
        boxShadow: "0px 3px 46px #00000029",
        margin: "5px",
      },
    },
    "& .rightBtn": {
      // marginTop: "4px",
    },
  },
}));

const MenuComponent = () => {
  return (
    <MenuComponentStyle>
      <Box className="submenueTab" justifyContent={"space-between"}>
        <Box className={"dropdown"} style={{ width: "100%" }}>
          <Box>
            <button className="dropbtn">
              States <ChevronRightIcon className="rightBtn" />
            </button>
          </Box>

          <Box className="dropdown-content" style={{ width: "100%" }}>
            <SubMenuComponent />
          </Box>
        </Box>
        <Box className={"dropdown"} style={{ width: "100%" }}>
          <Box>
            <button className="dropbtn">
              Property Type <ChevronRightIcon className="rightBtn" />
            </button>
          </Box>

          <Box className="dropdown-content" style={{ width: "100%" }}>
            <SubMenu2Component />
          </Box>
        </Box>
      </Box>
    </MenuComponentStyle>
  );
};

export default MenuComponent;
