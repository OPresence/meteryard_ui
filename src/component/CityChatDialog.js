import * as React from "react";
import { Button, Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { styled } from "@mui/system";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const CityChatDialog = ({handleClose,open,HeadingDialog}) => {
  return (
    <div><Dialog
    maxWidth={"sm"    }
    fullWidth
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <Box mt={3} mb={3} >
      <DialogTitle>
        <Box textAlign="center">
          <Typography variant="h4">{HeadingDialog}</Typography>{" "}
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-slide-description"
          className="chat-now-buyer-seller-btn"
        >
          <Box>
            <Button
              onClick={() =>
                router.push({
                  pathname: "/CityChat",
                  query: { BuyerKey: "Buyer", search: "Buyer" },
                })
              }
              style={{
                borderBottomLeftRadius: "20px",
                padding: 0,
                background: "#acacac",
                clipPath:
                  "polygon(0% 4%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
                color: "#fff",
              }}
            >
              <Box
                p={"10px"}
                className={"buttonIconBox"}
                style={{
                  background: "#fff",
                }}
                sx={{
                  borderTopRightRadius: { xs: "10px", md: "20px" },
                  borderBottomLeftRadius: { xs: "10px", md: "20px" },
                }}
              >
                <Box
                  maxWidth={25}
                  sx={{
                    width: {
                      xs: "15px",
                      md: "25px",
                    },
                  }}
                >
                  <img
                    src="/images/meteryard/icons/advisory.png"
                    width={"100%"}
                  />
                </Box>
              </Box>
              <Box p={"0px 70px 0 30px"}>
                <span
                  style={{
                    textTransform: "none",
                  }}
                >
                  Buyer
                </span>
              </Box>
            </Button>
            &nbsp;
            <Button
              onClick={() =>
                router.push({
                  pathname: "/CityChat",

                  query: { BuyerKey: "Seller", search: "Seller" },
                })
              }
              className="ButtonClass"
              style={{
                borderBottomLeftRadius: "20px",
                padding: 0,
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24% 0%)",
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "0px",
                marginLeft: "-40px",
                background: "#A7D325",
                color: "#fff",
              }}
            >
              <Box p={"0px 30px 0 70px"}>
                <span
                  style={{
                    textTransform: "none",
                  }}
                >
                  Seller
                </span>
              </Box>
              <Box
                p="10px"
                className="buttonIconBox"
                style={{
                  background: "#fff",
                }}
                sx={{
                  borderTopRightRadius: { xs: "10px", md: "20px" },
                  borderBottomLeftRadius: { xs: "10px", md: "20px" },
                }}
              >
                <Box
                  maxWidth={25}
                  sx={{
                    width: {
                      xs: "15px",
                      md: "25px",
                    },
                  }}
                >
                  <img
                    src="/images/meteryard/icons/advisory.png"
                    width={"100%"}
                  />
                </Box>
              </Box>
            </Button>
          </Box>
        </DialogContentText>
      </DialogContent>
    </Box>
  </Dialog></div>
  )
}

export default CityChatDialog