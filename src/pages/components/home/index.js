import React from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Banner from "src/pages/home/Banner";
const useStyles = makeStyles(() => ({}));
const HomePage = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box maxWidth={700}>
        <Container>
          <Banner />
        </Container>
      </Box>
    </Box>
  );
};
export default HomePage;
