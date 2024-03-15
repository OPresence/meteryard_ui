import React from "react";
import { Button, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

const DialogStyleComponent = styled("Box")(({ theme }) => ({
  "& .mainDialogBox": {
    background: "red",
    "& .ButtonClass1": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 4%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
      color: "#fff",
      "& .buttonIconBox": {
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
      },
    },
    "& .ButtonClass": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24% 0%)",
      borderTopRightRadius: "20px",
      borderBottomLeftRadius: "0px",
      marginLeft: "-40px",
      background: "#A7D325",
      color: "#fff",

      "@media(max-width:433px)": {
        marginTop: "20px",
        marginLeft: "0px",
      },
      "& .buttonIconBox": {
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
      },
    },
  },
}));

export default function DialogComponent({ open, handleClose }) {
  const router = useRouter();

  return (
    <DialogStyleComponent>
      <Box>
        <Box className="mainDialogBox">
          <Dialog open={open} keepMounted onClose={handleClose}>
            <DialogTitle>
              <Box display={"flex"} justifyContent={"center"}>
                <Box
                  maxWidth={150}
                  style={{
                    justifyContent: "center",
                    background: "#EEEEEE",
                    maxWidth: "100px",
                    padding: "25px",
                    maxHeight: "100px",
                    borderRadius: "100px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/Icon awesome-user-tie.png" width={"100%"} />
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description" className="chat-now-buyer-seller-btn">
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
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    >
                      <Box maxWidth={25}>
                        <img
                          src="/images/meteryard/icons/advisory.png"
                          width={"100%"}
                        />
                      </Box>
                    </Box>
                    <Box p={"0px 70px 0 30px"}>
                      <span>Buyer</span>
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
                      <span>Seller</span>
                    </Box>
                    <Box
                      p={"10px"}
                      className={"buttonIconBox"}
                      style={{
                        background: "#fff",
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                      }}
                    >
                      <Box maxWidth={25}>
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
          </Dialog>
        </Box>
      </Box>
    </DialogStyleComponent>
  );
}
