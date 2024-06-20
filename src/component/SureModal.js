import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/system";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import CircularProgressComponent from "../component/CircularProgressComponent";
const DialogButtonStyle = styled(Box)(({ theme }) => ({
  "& button": {
    padding: "10px 40px",
    background: "#a0cf17",
    border: "1px solid #fff",
    color: "#fff",
    clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "&:hover": {
      background: "#a0cf17",
      color: "#444444",
      border: "1px solid #fff",
      color: "#fff",
    },
  },
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    minWidth: 500,
    minHeight: 100,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    // minWidth: 500,
  },
}));

export default function CustomizedDialogs({
  AD_Banner,
  confirmModalClose,
  _isloading,
  _confirm,
  DeleteBanner,
  type,
  screen,
}) {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={confirmModalClose}
        aria-labelledby="customized-dialog-title"
        open={_confirm}
        style={{ minWidth: "500px" }}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "600",
            textTransform: "uppercase",
          }}
          id="customized-dialog-title"
        >
          {screen} {type}
        </DialogTitle>
        <IconButton
          disabled={_isloading}
          aria-label="close"
          onClick={confirmModalClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography
            gutterBottom
            style={{ fontSize: "18px", fontWeight: "600", textAlign: "center" }}
          >
            Are you sure you want to{" "}
            <span style={{ color: "#a0cf17" }}>{type}</span> {screen}!
          </Typography>
        </DialogContent>
        <DialogActions>
          <DialogButtonStyle>
            <Button onClick={confirmModalClose} disabled={_isloading}>
              No
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              onClick={() => {
                type == "BLOCKED" ? AD_Banner() : DeleteBanner();
              }}
              disabled={_isloading}
            >
              Yes &nbsp;
              {_isloading && <CircularProgressComponent />}
            </Button>
          </DialogButtonStyle>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
