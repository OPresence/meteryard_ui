import React from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Banner from "../../home/Banner";
const useStyles = makeStyles(() => ({}));
const HomePage = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Banner />
      </Container>
    </Box>
  );
};
export default HomePage;
