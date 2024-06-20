import React from "react";
import Aboutus from "./Aboutus";
import HomeLayout from "../../layout/HomeLayout";
import { Box } from "@mui/material";
function index() {
  return (
    <HomeLayout>
      <Box p={"80px 0"}>
        <Aboutus />
      </Box>
    </HomeLayout>
  );
}

export default index;
