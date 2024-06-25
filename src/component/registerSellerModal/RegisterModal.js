import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import RegisterSeller from "./RegisterSeller";
import Otp from "../../pages/auth-files/Otp";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import styled from "@emotion/styled";
import DialogTitle from "@mui/material/DialogTitle";
import Login from "../../pages/auth-files/Login";
const DialogStyleComponent = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "100%",
    position: "relative",
    overflow: "initial",
    maxWidth: "820px",
    borderRadius: "50px",

    "@media(max-width:992px)": {
      // height: "auto",
      overflow: "scroll",
      width: "100%",
    },
  },
  "& .imageBox": {
    "@media(max-width:425px)": {
      display: "none",
    },
  },
  "& .loginBox1": {
    display: "flex",
    gap: "10px",

    "& button": {
      // background: "#A2D117",
      // color: "#fff",
      // padding: "10px",
      // clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
      width: "181px",
      height: "48px",
      gap: "0px",
      border: "1px solid #BADC54",
      opacity: "0px",
      background: "#BADC54",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "21.78px",
      textAlign: "left",
      color: "#fff",
      borderRadius: "10px",
    },

    "& span": {
      color: "red",
      cursor: "pointer",
    },
  },
  "& .mainDialogBox": {
    borderRadius: "50px",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   top: "-3px",
    //   left: "-9px",
    //   height: "300px",
    //   border: "5px solid #FE5D27",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "25px",
    //   borderTopLeftRadius: "20px",
    //   borderBottomLeftRadius: "63px",
    // },
    // "&::after": {
    //   background: "#FE5D27",
    //   content: '""',
    //   position: "absolute",
    //   top: "-150px",
    //   left: "132px",
    //   height: "280px",
    //   border: "5px solid #FE5D27",
    //   borderRadius: "0 0 10 76px",
    //   borderTopRightRadius: "25px",
    //   borderTopLeftRadius: "0px",
    //   borderBottomRightRadius: "77px",
    //   borderBottomLeftRadius: "0px",
    //   WebkitTransform: "rotateZ(271deg)",
    //   MozTransform: "rotateZ(271deg)",
    //   MsTransform: "rotateZ(271deg)",
    //   transform: "rotateZ(270deg)",
    //   borderTopRightRadius: "90px",
    // },
    "& .submit": {
      background: "#444444",
      color: "#fff",
      fontSize: "12px",
      padding: "10px 50px",
      // clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    },

    "& .checkBox": {
      "& h6": {
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    "& .profileBox": {
      border: "1px solid #B8B8B8",
      position: "absolute",
      borderRadius: "100px",
      width: 80,
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        color: "#B8B8B8",
      },
      "& span": {
        textAlign: "center",
        fontSize: "8px",
      },
    },
    "& .headingBox": {
      "& h2": {
        fontFamily: "Inter",
        fontSize: "32px",
        fontWeight: "600",
        lineHeight: "43.57px",
        textAlign: "center",
      },
      "& h6": {
        marginTop: "10px",
        fontFamily: "Inter",
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "29.05px",
        textAlign: "center",
      },
    },
  },
});
const RegisterModal = ({ open, setOpen, handleClickOpenLogin }) => {
  const [_signcomplete, setSignUpComplete] = useState(false);
  const [_screen, setSelectScreen] = useState(false);

  return (
    <div>
      <DialogStyleComponent
        open={open}
        // keepMounted
        onClose={() => setOpen(false)}
        style={{ borderRadius: "50px" }}
      >
        <Box className="mainDialogBox">
          <DialogTitle>
            <Box className="headingBox">
              <Typography variant="h2">Register As A Seller</Typography>
              <Typography variant="h6">Basic Information</Typography>
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {_screen == "Sign Up" ? (
                <RegisterSeller
                  setSignUpComplete={setSignUpComplete}
                  open={open}
                  setOpen={setOpen}
                  setSelectScreen={setSelectScreen}
                />
              ) : _screen == "Login" ? (
                <Login
                  _selectScreen={_screen}
                  setSelectScreen={setSelectScreen}
                  // setOpen={setOpen}
                  // handleClose={handleClose}
                />
              ) : (
                <Otp
                  type="HIDE"
                  _signcomplete={_signcomplete}
                  setOpen={setOpen}
                  setSignUpComplete={setSignUpComplete}
                  handleClickOpenLogin={handleClickOpenLogin}
                  setSelectScreen={setSelectScreen}
                />
              )}
            </DialogContentText>
          </DialogContent>
        </Box>
      </DialogStyleComponent>
    </div>
  );
};

export default RegisterModal;
