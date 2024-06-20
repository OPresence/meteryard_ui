"use client";
import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ForgotPassword from "./ForgotPassword";
const DialogStyleComponent = styled(Box)(({ theme }) => ({}));
const CustomizedDialogContent = styled(DialogContent)({
  borderRadius: "8px",
  padding: "0",
});
const index = ({
  _forgot_open,
  handleOpenOTP,
  handleCloseForgot,
  setSaveForgot,
}) => {
  return (
    <Box>
      <DialogStyleComponent>
        <Dialog
          open={_forgot_open}
          keepMounted
          onClose={handleCloseForgot}
          fullWidth
          maxWidth="lg"
          sx={{
            "& .MuiDialog-paper": {
              maxWidth: "1080px",
            },
          }}
        >
          <CustomizedDialogContent>
            <ForgotPassword
              handleCloseForgot={handleCloseForgot}
              handleOpenOTP={handleOpenOTP}
              setSaveForgot={setSaveForgot}
            />
          </CustomizedDialogContent>
        </Dialog>
      </DialogStyleComponent>
    </Box>
  );
};

export default index;
