import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
const MobileComponentCss = styled(Box)(({ theme }) => ({
  "& .backgorunClass": {
    backgroundImage: `url("/images/image.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "330px",
    "& .h6": {
      fontSize: "22px",
      color: "#A1A1A1",
    },
    "& .h2": {
      fontSize: "24px",
      fontWeight: "600",
      color: "#000",
    },
  },
}));

const MobileAppComponent = () => {
  return (
    <Box>
      <MobileComponentCss>
        <Container maxWidth>
          <Box>
            <Box className="backgorunClass">
              <Box className="download-app-section">
                <Typography variant="h1">
                  Download 99acres Mobile App
                </Typography>
                <Box mt={2}>
                  <Typography variant="h6">
                    Download 99acres Mobile App
                  </Typography>
                  <Box>
                    <Box display={"flex"} alignItems={"center"} mt={3}>
                      <DoneIcon style={{ color: "#000" }} /> &nbsp;&nbsp;&nbsp;
                      <Typography variant="h2">
                        Download 99acres Mobile App
                      </Typography>{" "}
                    </Box>
                    <Box display={"flex"} alignItems={"center"} mt={3}>
                      <DoneIcon style={{ color: "#000" }} /> &nbsp;&nbsp;&nbsp;
                      <Typography variant="h2" style={{}}>
                        Download 99acres Mobile App
                      </Typography>{" "}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </MobileComponentCss>
    </Box>
  );
};

export default MobileAppComponent;
