import React from "react";
import "./globals.css";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
function PageLayout({ children }) {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar
            style={{
              padding: "0px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box></Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={3}>{children}</Box>
      </Container>
    </>
  );
}

export default PageLayout;
