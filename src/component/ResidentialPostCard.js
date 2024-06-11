import styled from "@emotion/styled";
import { Typography, Box, Grid, Divider } from "@mui/material";
// import Divider from "@mui/material/Divider";
import ButtonComponent from "./ButtonComponent";
const ResidentCardStyle = styled(Box)(({ theme }) => ({
  // width: "500px",
  height: "250px",
  "@media(max-width:615px)": {
    height: "100%",
  },
  "& .mainCardBox": {
    maxHeight: "300px",
    height: "100%",
    width: "100%",

    boxShadow: "0px 0px 7.2px 0px #00000024",
    "@media(max-width:615px)": {
      boxShadow: "#A9D91066 0px 3px 8px",
      maxHeight: "100%",
    },
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
}));

const ResidentialPostCard = ({ data, isMobile }) => {
  return (
    <ResidentCardStyle>
      <Box m="15px">
        <Box className="mainCardBox">
          <Box alignItems="center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={5}>
                <Box width={"100%"} height={"100%"}>
                  <img
                    src={data?.coverImage}
                    width="100%"
                    height="100%"
                    style={{ objectFit: "fill" }}
                  />
                </Box>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={7}>
                <Box
                  width={"100%"}
                  padding="10px 10px 10px 20px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  gap={1}
                >
                  <Typography
                    className="projectHeading"
                    fontSize={18}
                    fontWeight={500}
                  >
                    {data?.projectName}
                  </Typography>
                  <Box>
                    <Typography
                      className="paragraph"
                      fontSize={14}
                      fontWeight={300}
                    >
                      {data?.description}
                    </Typography>
                  </Box>
                  <Box width="100%" height="2px">
                    <Divider color="#A9D910" />
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"flex-start"}
                    justifyContent="flex-start"
                    style={{ gap: "15px" }}
                    width="100%"
                  >
                    <Box
                      width="40%"
                      display="flex"
                      flexDirection="column"
                      gap={0.5}
                    >
                      <Typography
                        variant="p"
                        fontSize={14}
                        fontWeight={400}
                        style={{ textWrap: "nowrap" }}
                      >
                        Property Size
                      </Typography>
                      <Typography
                        className="projectHeading"
                        color="#E0AF00"
                        fontSize={14}
                      >
                        {data?.superBuildupArea}
                      </Typography>
                    </Box>
                    <Box
                      width="55%"
                      display="flex"
                      flexDirection="column"
                      gap={0.5}
                    >
                      <Typography variant="p" fontSize={14} fontWeight={400}>
                        Price
                      </Typography>
                      <Typography
                        className="projectHeading"
                        color="#E0AF00"
                        fontSize={14}
                      >
                        {data?.price?.toLocaleString()}/- Rs
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
