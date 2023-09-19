import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  mainBox: {
    height: "100vh",
  },
  bacBox: {
    position: "relative",
    left: "200px",
  },
  handImage: {
    left: "55px",
    bottom: "-10px",
    position: "absolute",
    maxWidth: "700px",
  },
  contentBox: {
    top: "35%",
    "& .find": {
      color: "#444444",
    },
    "& .Make": {
      color: "#A7D325",
    },
  },
  ButtonClass: {
    borderBottomLeftRadius: "20px",
    padding: 0,
    clipPath: "polygon(0% 4%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
    "& .buttonIconBox": {
      background: "#fff",
      borderTopRightRadius: "20px",
      borderBottomLeftRadius: "20px",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Container>
        <Box position={"absolute"} className={classes.contentBox}>
          <Box>
            <Typography variant="h1">
              <span className="find">Find Your Place</span>
              <span className="Make">, Make It Home</span>
            </Typography>
            <Box mt={3.5}>
              <Typography variant="h4">Please Select Your Category</Typography>
            </Box>
            <Box mt={5}>
              <Button variant="button" className={classes.ButtonClass}>
                <Box p={"10px"} className={"buttonIconBox"}>
                  <Box maxWidth={25}>
                    <img
                      src="/images/meteryard/icons/advisory.png"
                      width={"100%"}
                    />
                  </Box>
                </Box>
                <Box p={"0 90px 0 50px"}>
                  <span>Buyer</span>
                </Box>
              </Button>
              &nbsp;
              <Button
                variant="button"
                className={classes.ButtonClass}
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24% 1%)",
                  borderTopRightRadius: "20px",
                  borderBottomLeftRadius: "0px",
                  marginLeft: "-40px",
                  background: "#A7D325",
                }}
              >
                <Box p={"0px 50px 0 90px"}>
                  <span>Buyer</span>
                </Box>
                <Box p={"10px"} className={"buttonIconBox"}>
                  <Box maxWidth={25}>
                    <img
                      src="/images/meteryard/icons/advisory.png"
                      width={"100%"}
                    />
                  </Box>
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box className={classes.mainBox}>
        <Box display={"flex"} justifyContent={"end"} className={classes.bacBox}>
          <Box>
            <Box
              mt={"20px"}
              maxWidth={950}
              maxHeight={670}
              overflow={"hidden"}
              position={"relative"}
            >
              <img
                src="/images/meteryard/Graphics/Path 7886.png"
                alt=""
                width={"90%"}
              />
              <Box>
                <Box className={classes.handImage}>
                  <img
                    src="/images/meteryard/Images/home-background-images.png"
                    alt=""
                    width={"100%"}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
