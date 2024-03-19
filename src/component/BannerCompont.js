import React from "react";
import { Container, Box } from "@mui/material";

const BannerCompont = () => {
  return (
    <Box sx={{
      margin: { xs: "10px 0", md: "40px 0" },}}>
      <Box style={{ background: "#F7F7F7" }} sx={{
      margin: { xs: "0px 10px", md: "0px 20px" },}}>
        <Container maxWidth style={{ padding: "0" }}>
          <Box>
            <img src="/images/banner-images.png" width={"100%"} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default BannerCompont;
