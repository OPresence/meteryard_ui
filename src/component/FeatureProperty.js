import { useContext } from "react";
import FeaturedPostCard from "../component/FeaturedPostCard";
import { useTheme } from "@mui/material/styles";
import { AuthContext } from "../context/Auth";
import { Box, Container, Typography, useMediaQuery, Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styled from "@emotion/styled";

const CardComponentStyle = styled(Box)(({ theme }) => ({
  "& .mainSliderDiv": {
    padding: "0 40px",
    position: "relative",
    background: "#fff",
    "@media(max-width:615px)": {
      padding: "0",
      marginTop: "2rem",
    },
    "& container": {
      padding: "0px",
    },
  },
  "& .circleimg": {
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "250px",
    "& h6": {
      color: "#A7D325",
      fontSize: "14px",
    },
    "& svg": {
      color: "#A7D325",
    },
  },
  "& .large": {
    background: "#FFF",
  },

  "& .viewmoreButtonShow": {
    padding: "10px",
    position: "absolute",
    right: "55px",
    bottom: "0",
    zIndex: "999",
    "@media(max-width:615px)": {
      right: "0px",
      bottom: "-20px",
    },
    "& button": {
      border: "2px solid #a7d325",
      background: "none",
      borderRadius: "20px",
      color: "#000",
      border: "none",

      "& span": {
        color: "#a7d325 ",
      },
    },
  },
}));

const IconButtonLeftContent = styled(Box)({
  position: "absolute",
  left: "3rem",
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
  "@media(max-width:615px)": {
    left: "0rem",
  },
});

const IconButtonRightContent = styled(Box)({
  position: "absolute",
  right: "3rem",
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
  cursor: "pointer",
  "@media(max-width:615px)": {
    right: "0rem",
  },
});
const FeatureProperty = () => {
  const auth = useContext(AuthContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CardComponentStyle>
      <Box className="mainSliderDiv">
        <Container>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h1"
                fontSize={isMobile ? 28 : 48}
                fontWeight={500}
                lineHeight={isMobile && 1.5}
              >
                Featured Projects
              </Typography>
              <Typography
                variant="h6"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Featured Projects Across India
              </Typography>
            </Box>
          </Box>
        </Container>
        {/* {ProductData?.allProperty?.length > 4 && (
          <IconButtonLeftContent onClick={handlePrevious}>
            <ArrowBackIosIcon />
          </IconButtonLeftContent>
        )} */}
        <Box mt={4} width={"95%"} margin={"0 auto"}>
          {!auth?._loadingAllProduct &&
            auth?._getallProduct?.length > 0 &&
            auth?._getallProduct?.map((ProductData, _id) => {
              return (
                <Box>
                  <Grid container>
                    {ProductData?.allProperty?.length &&
                      ProductData?.allProperty?.map((data, index) => {
                        console.log(
                          "nhjgfhjkl;j894498--->",
                          data?.featuredProperty
                        );
                        if (data?.featuredProperty) {
                          return (
                            <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                              <Box key={index} mt={5}>
                                <FeaturedPostCard data={data} />
                              </Box>
                            </Grid>
                          );
                        }
                      })}
                  </Grid>
                </Box>
              );
            })}
        </Box>
        {/* {ProductData?.allProperty?.length > 4 && (
          <IconButtonRightContent onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButtonRightContent>
        )} */}
      </Box>
    </CardComponentStyle>
  );
};

export default FeatureProperty;
