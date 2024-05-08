import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import RegisterSeller from "./RegisterSeller";
import Otp from "../../pages/auth-files/Otp";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import styled from "@emotion/styled";
import DialogTitle from "@mui/material/DialogTitle";
const DialogStyleComponent = styled(Dialog)({
  "& .MuiDialog-paper": {
    width: "100%",
    position: "relative",
    overflow: "initial",
    maxWidth: "850px",
  },
  "& .loginBox1": {
    display: "flex",
    gap: "10px",
    "& button": {
      background: "#A2D117",
      color: "#fff",
      padding: "10px",
    },
    "& span": {
      color: "red",
      cursor: "pointer",
    },
  },
  "& .mainDialogBox": {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-3px",
      left: "-9px",
      height: "300px",
      border: "5px solid #FE5D27",
      borderRadius: "0 0 10 76px",
      borderTopRightRadius: "25px",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "63px",
    },
    "&::after": {
      background: "#FE5D27",
      content: '""',
      position: "absolute",
      top: "-150px",
      left: "132px",
      height: "280px",
      border: "5px solid #FE5D27",
      borderRadius: "0 0 10 76px",
      borderTopRightRadius: "25px",
      borderTopLeftRadius: "0px",
      borderBottomRightRadius: "77px",
      borderBottomLeftRadius: "0px",
      WebkitTransform: "rotateZ(271deg)",
      MozTransform: "rotateZ(271deg)",
      MsTransform: "rotateZ(271deg)",
      transform: "rotateZ(270deg)",
      borderTopRightRadius: "90px",
    },
    "& .submit": {
      background: "#444444",
      color: "#fff",
      fontSize: "12px",
      padding: "10px 50px",
      clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    },

    "& .checkBox": {
      "& h6": {
        fontSize: "14px",
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
        fontSize: "24spx",
        fontWeight: "700",
        textAlign: "center",
      },
      "& h6": {
        marginTop: "5px",
        textAlign: "center",
        color: "#727272",
        fontSize: "18px",
      },
    },
  },
});
const RegisterModal = ({ open, setOpen, handleClickOpenLogin }) => {
  const [_signcomplete, setSignUpComplete] = useState(false);
  const [setscreen, setSelectScreen] = useState(false);

  return (
    <div>
      <DialogStyleComponent open={open} keepMounted onClose={""}>
        <Box className="mainDialogBox">
          <DialogTitle>
            <Box className="headingBox">
              <Typography variant="h2">Register As A Seller</Typography>
              <Typography variant="h6">Basic Information</Typography>
            </Box>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {!_signcomplete ? (
                <RegisterSeller
                  setSignUpComplete={setSignUpComplete}
                  open={open}
                  setOpen={setOpen}
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
