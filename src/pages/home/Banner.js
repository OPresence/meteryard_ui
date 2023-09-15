import { Container, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
const BannerBox = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.main,
  backgroundImage: "url(/images/bg_banner.png)",
  backgroundPosition: "center center",
  padding: "120px 0 68px",
  width: "100%",
  "& img": { height: "100%" },
}));

export default function Home() {
  return (
    <BannerBox>
      <Container>
        xcvcxv
        <Box align="center">
          <img src="/images/banner_img.svg" alt="" />
        </Box>
      </Container>
    </BannerBox>
  );
}
