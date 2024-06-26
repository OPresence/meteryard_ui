"use client";
import React from "react";
import styled from "@emotion/styled";
import { Box, Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import Login from "../pages/auth-files/Login";
import SignUp from "../pages/auth-files/SignUp";
import Otp from "../pages/auth-files/Otp";
const DialogStyleComponent = styled(Box)(({ theme }) => ({}));
const CustomizedDialogContent = styled(DialogContent)({
  borderRadius: "8px",
  padding: "0",
});
const LoginDialog = ({
  open,
  handleClose,
  _selectScreen,
  setSelectScreen,
  setOpen,
  setSignUpComplete,
  _signcomplete,
  SignUpDialog,
}) => {
  return (
    <DialogStyleComponent>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "1080px",
          },
        }}
      >
        <CustomizedDialogContent>
          {_selectScreen == "Login" ? (
            <Login
              _selectScreen={_selectScreen}
              setSelectScreen={setSelectScreen}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          ) : (
            <>
              {_selectScreen == "Sign Up" ? (
                <SignUp
                  _selectScreen={_selectScreen}
                  setSelectScreen={setSelectScreen}
                  setOpen={setOpen}
                  setSignUpComplete={setSignUpComplete}
                  SignUpDialog={SignUpDialog}
                  handleClose={handleClose}
                />
              ) : (
                <Otp
                  _signcomplete={_signcomplete}
                  setSelectScreen={setSelectScreen}
                  setSignUpComplete={setSignUpComplete}
                />
              )}
            </>
          )}
        </CustomizedDialogContent>
      </Dialog>
    </DialogStyleComponent>
  );
};

export default LoginDialog;
