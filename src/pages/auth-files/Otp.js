import React from "react";
import { Box, Container, Grid } from "@mui/material";
import VerifyOTP from "./VerifyOTP";
const index = ({ _signcomplete, setSelectScreen, setSignUpComplete }) => {
  return (
    <>
      <Box className="backgroundBox">
        <Container maxWidth>
          <Box maxWidth={250} p={3}>
            <img src="/images/logo.png" width={"100%"} />
          </Box>
          <Grid container spacing={3}>
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box maxWidth={500}>
                <img src="/images/Group 8422.svg" width={"100%"} />
              </Box>
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={12}
              xs={12}
              style={{
                padding: "25px",
              }}
            >
              <VerifyOTP
                setSignUpComplete={setSignUpComplete}
                _signcomplete={_signcomplete}
                setSelectScreen={setSelectScreen}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default index;
