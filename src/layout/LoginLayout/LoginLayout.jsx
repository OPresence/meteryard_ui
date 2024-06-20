import React from "react";
import { Box, styled } from "@mui/material";

const MainComponent = styled(Box)(({ theme }) => ({}));

export default function LoginLayout({ children }) {
  return (
    <MainComponent>
      <Box>{children}</Box>
    </MainComponent>
  );
}
