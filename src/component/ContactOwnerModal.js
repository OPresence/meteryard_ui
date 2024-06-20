import * as React from "react";
import {
  Button,
  Grid,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactOwnerModal({ open, dataArray, handleClose }) {
  console.log("dataArray9090---->", dataArray);
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle textAlign={"center"} fontSize={25} fontWeight={600}>
          {" Get ONWER Details"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container spacing={2}>
              <Grid item lg={5} md={5} sm={5} xs={5}>
                Name
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                :
              </Grid>
              <Grid item lg={5} md={5} sm={5} xs={5}>
                {dataArray?.sellerId?.name}
              </Grid>

              <Grid item lg={5} md={5} sm={5} xs={5}>
                Email
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                :
              </Grid>
              <Grid item lg={5} md={5} sm={5} xs={5}>
                {dataArray?.sellerId?.email}
              </Grid>

              <Grid item lg={5} md={5} sm={5} xs={5}>
                Mobile Number
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                :
              </Grid>
              <Grid item lg={5} md={5} sm={5} xs={5}>
                {dataArray?.sellerId?.phoneNumber}
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Box className="getQnwerontactBtn">
            <Button onClick={handleClose}>OK</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
