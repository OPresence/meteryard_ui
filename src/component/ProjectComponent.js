import { useRef, useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, Container, useMediaQuery } from "@mui/material";
import styled from "@emotion/styled";
import { AuthContext } from "../context/Auth";
import "../Scss/border.css";
const ProjectStyle = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    marginTop: "3rem",
    "@media(max-width:615px)": {
      padding: "34px 0 100px 0",
    },

    "& .heading": {
      padding: "10px 45px",
    },
    "& .shodowBox": {
      margin: "40px 0 0 0",
      display: "flex",
      justifyContent: "space-between",
      "@media(max-width:1280px)": {},
      "@media(max-width:460px)": {
        padding: "0",
      },
      "@media(max-width:615px)": {
        margin: "34px 0 0 0",
      },
      "& .smallBox": {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "20px",
        textAlign: "center",
        width: "150px",
        height: "150px",
        alignItems: "center",
        display: "flex",
        background: "#fff",
        justifyContent: "center",
        position: "relative",
        border: "5px solid #A7D325",
        "& .contentBox": {
          padding: "10px",
          boxShadow: "0px 3px 39px #0000001C",
          borderRadius: "20px",
         
        },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "-4px",
          left: "-6px",
          height: "90px",
          border: "5px solid #a7d325",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
        },
        "&::after": {
          background: "#a7d325",
          content: '""',
          position: "absolute",
          bottom: "-20px",
          left: "10px",
          height: "30px",
          border: "5px solid #a7d325",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
          transform: "rotateZ(271deg)",
        },
      },
      "& .smallBox1": {
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "20px",
        textAlign: "center",
        width: "150px",
        height: "150px",
        alignItems: "center",
        display: "flex",
        background: "#fff",
        justifyContent: "center",
        position: "relative",
        border: "5px solid #444444",
        "& .contentBox": {
          padding: "10px 35px",
          boxShadow: "0px 3px 39px #0000001C",
          borderRadius: "20px",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "43px",
          right: "-6px",
          height: "90px",
          border: "5px solid #444444",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
        },
        "&::after": {
          background: "#444444",
          content: '""',
          position: "absolute",
          top: "-21px",
          right: "10px",
          height: "30px",
          border: "5px solid #444444",
          borderRadius: "0 0 10 76px",
          borderTopRightRadius: "25px",
          borderTopLeftRadius: "20px",
          borderBottomRightRadius: "25px",
          borderBottomLeftRadius: "20px",
          WebkitTransform: "rotateZ(280deg)",
          MozTransform: "rotateZ(269deg)",
          MsTransform: "rotateZ(269deg)",
          transform: "rotateZ(271deg)",
        },
      },
    },
    "& .contentBox": {
      padding: "10px",
      boxShadow: "0px 3px 39px #0000001C",
      borderRadius: "20px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));
const ProjectComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sliderRef = useRef(null);
  const auth = useContext(AuthContext);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
          initialSlide: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          infinite: true,
          autoplay: false,
          initialSlide: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <ProjectStyle>
      <Box className="mainBox">
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
                Projects
              </Typography>
              <Typography
                variant="h6"
                fontSize={isMobile ? 20 : 24}
                pl={0.3}
                fontWeight={300}
              >
                Projects Across India
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box className="shodowBox">
              <Box width={"100%"}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                  gap={2}
                >
                  <Box align="center">
                    <Box
                      className="rainbow"
                      width={isMobile ? 160 : 200}
                      height="100%"
                    >
                      <Box className="contentBox" textAlign={"center"} minHeight={"135px"}>
                        <Typography variant="h1" fontSize={isMobile ? 28 : 48} color={"#000000"}>
                          51
                        </Typography>
                        <Box mt={isMobile ? 0 : 2} mb={2}>
                          <Typography variant="h3" fontSize={isMobile && 16}>
                            Buyers Online
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box align="center">
                    <Box
                      className="rainbowSecond"
                      width={isMobile ? 160 : 200}
                      height="100%"
                    >
                      <Box className="contentBox" textAlign={"center"} minHeight={"135px"}>
                        <Typography variant="h1" fontSize={isMobile ? 28 : 48} color={"#000000"}>
                          150
                        </Typography>
                        <Box mt={isMobile ? 0 : 2} mb={2}>
                          <Typography variant="h3" fontSize={isMobile && 16}>
                            Sellers Online
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box align="center">
                    <Box
                      className={isMobile ? "rainbowSecond" : "rainbow"}
                      width={isMobile ? 160 : 200}
                      height="100%"
                    >
                      <Box className="contentBox" textAlign={"center"} minHeight={"135px"}>
                        <Typography variant="h1" fontSize={isMobile ? 28 : 48} color={"#000000"}>
                          51
                        </Typography>
                        <Box mt={isMobile ? 0 : 2} mb={2}>
                          <Typography variant="h3" fontSize={isMobile && 16}>
                            Visiters
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  <Box align="center">
                    <Box
                      className={isMobile ? "rainbow" : "rainbowSecond"}
                      width={isMobile ? 160 : 200}
                      height="100%"
                    >
                      <Box className="contentBox" textAlign={"center"} minHeight={"135px"}>
                        <Typography variant="h1" fontSize={isMobile ? 28 : 48} color={"#000000"}>
                          150
                        </Typography>
                        <Box mt={isMobile ? 0 : 2} mb={2}>
                          <Typography variant="h3" fontSize={isMobile && 16}>
                            Listed Projects
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
        {/* </Container> */}
      </Box>
    </ProjectStyle>
  );
};

export default ProjectComponent;
