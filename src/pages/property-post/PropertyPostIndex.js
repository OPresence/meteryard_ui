import { useEffect, useState } from "react";
import PropertyPost_s_1 from "./PropertyPost_s_1";
import { Box, Grid, Container } from "@mui/material";
import styled from "@emotion/styled";
const PropertyPostIndexStyle = styled("Box")(({ theme }) => ({
  "& .MainBox": {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

const PropertyPostIndex = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  console.log("windowSize----->", windowSize);
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PropertyPostIndexStyle>
      <Box
        mt={"136px"}
        className="MainBox"
        style={{ height: `${windowSize?.height - 100}px` }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              lg={7}
              md={7}
              sm={12}
              xs={12}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Box maxWidth={500}>
                <img src="/images/Group 8422.svg" width={"100%"} />
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box>
                <PropertyPost_s_1 />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PropertyPostIndexStyle>
  );
};

export default PropertyPostIndex;
