import styled from "@emotion/styled";
import { Typography, Box, Grid, Divider } from "@mui/material";
// import Divider from "@mui/material/Divider";
import ButtonComponent from "./ButtonComponent";
const ResidentCardStyle = styled("Box")(({ theme }) => ({
  "& .mainCardBox": {
    maxHeight: "280px",
    // height: "100%",
    width: "100%",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    boxShadow: "0px 0px 7.2px 0px #00000024",

    "& img": {
      width: "100%",
      height: "100%",
    },
    // "& h": {},
  },
}));

const ResidentialPostCard = ({ data }) => {
  return (
    <ResidentCardStyle>
      <Box m={"15px"} height={"100%"}>
        <Box className="mainCardBox">
          <Box height={"100%"}>
            <Grid container style={{ height: "100%" }}>
              <Grid item lg={6} md={6}>
                <Box
                  maxWidth={"190px"}
                  height={"100%"}
                  maxHeight={"265px"}
                  overflow={"hidden"}
                >
                  <img src={data?.coverImage} />
                </Box>
              </Grid>
              <Grid item lg={6} md={6}>
                <Box p={"15px 10px 0 0"}>
                  <div className="projectHeading-container">
                    {/* <p className="paragraph">{data?.description}</p> */}
                    <Typography className="projectHeading">
                      {data?.projectName}
                    </Typography>
                  </div>
                  <div className="paragraph-container">
                    <p className="paragraph">{data?.description}</p>
                  </div>
                  <Box m={"10px 0 5px 0"}>
                    <Divider color="#A9D910" />
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Box>
                      <Typography variant="h4">Property Size</Typography>
                      <Typography variant="h5">
                        {data?.superBuildupArea}
                      </Typography>
                      {/* <Typography variant="h5">900 Sqr Ft.</Typography> */}
                    </Box>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <Box>
                      <Typography variant="h4">Price</Typography>
                      <Typography variant="h5">
                        {data?.price?.toLocaleString()}/- Rs
                      </Typography>
                      {/* <Typography variant="h5">2,75000/-</Typography> */}
                    </Box>
                  </Box>
                  <Box m={"10px 0 10px 0"}>
                    <ButtonComponent data={data} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ResidentCardStyle>
  );
};

export default ResidentialPostCard;
