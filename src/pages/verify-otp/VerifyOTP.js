import React from "react";
import { Box, Container, Grid } from "@mui/material";
import VerifyOTPF from "./VerifyOTPF";
import styled from "@emotion/styled";
// import VerifyOTP from "./VerifyOTP";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
const DialogStyleComponent = styled("Box")(({ theme }) => ({}));
const CustomizedDialogContent = styled(DialogContent)({
  borderRadius: "8px",
  padding: "0",
});
const VerifyOTP = ({
  _forotp_open,
  _saveForgot,
  handleCloseOTP,
  handleOpenReset,
  handleOpenOTP,
  handleOpenForgot,
}) => {
  return (
    <>
      <DialogStyleComponent>
        <Dialog
          open={true}
          keepMounted
          onClose={handleCloseOTP}
          fullWidth
          maxWidth="lg"
          sx={{
            "& .MuiDialog-paper": {
              maxWidth: "1080px",
            },
          }}
        >
          <CustomizedDialogContent>
            <Box className="backgroundBox" p={"56px 0"}>
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
                    <VerifyOTPF
                      _saveForgot={_saveForgot}
                      handleOpenReset={handleOpenReset}
                      handleCloseOTP={handleCloseOTP}
                      handleOpenOTP={handleOpenOTP}
                      handleOpenForgot={handleOpenForgot}
                    />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </CustomizedDialogContent>
        </Dialog>
      </DialogStyleComponent>
    </>
  );
};

export default VerifyOTP;
