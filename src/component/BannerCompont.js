import React from "react";
import { useTheme } from "@mui/material/styles";
import { Container, Box, useMediaQuery } from "@mui/material";

const BannerCompont = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        margin: { xs: "10px 0", md: "40px 0" },
      }}
      height={isMobile ? "140px" : "280px"}
    >
      <Box style={{ background: "#F7F7F7" }} height="100%">
        <Box height="100%">
          <img
            src="/images/banner-images.png"
            style={{ objectFit: "fill" }}
            width={"100%"}
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BannerCompont;
