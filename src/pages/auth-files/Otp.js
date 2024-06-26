import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Grid } from "@mui/material";
import VerifyOTP from "./VerifyOTP";
const OTPstyle = styled(Box)(({ theme }) => ({
  "& .imageBox": {
    "@media(max-width:615px)": {
      display: "none",
    },
  },
}));

const Otp = ({
  _signcomplete,
  setSelectScreen,
  setSignUpComplete,
  type,
  setOpen,
}) => {
  return (
    <>
      <Box className="backgroundBox">
        <Container maxWidth>
          {type != "HIDE" && (
            <OTPstyle>
              <Box maxWidth={250} p={3}>
                <img src="/images/logo.png" width={"100%"} />
              </Box>
            </OTPstyle>
          )}

          <Grid container spacing={3}>
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box maxWidth={450} className="imageBox">
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
                setOpen={setOpen}
                // handleClickOpenLogin={handleClickOpenLogin}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Otp;
