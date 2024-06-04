import styled from "@emotion/styled";
import { Typography, Box, Grid, Divider } from "@mui/material";
// import Divider from "@mui/material/Divider";
import ButtonComponent from "./ButtonComponent";
const ResidentCardStyle = styled(Box)(({ theme }) => ({
  // width: "500px",
  height: "250px",
  "& .mainCardBox": {
    maxHeight: "280px",
    // height: "100%",
    width: "100%",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    boxShadow: "0px 0px 7.2px 0px #00000024",
    "@media(max-width:615px)": {
      boxShadow: "#A9D91066 0px 3px 8px",
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
          <Box
            display="flex"
            flexDirection={isMobile ? "column" : "row"}
            alignItems="center"
          >
            <Box
              width={isMobile ? "100%" : "250px"}
              height={!isMobile ? "60px" : "280px"}
            >
              <img
                src={data?.coverImage}
                width="100%"
                height="100%"
                style={{ objectFit: "fill" }}
              />
            </Box>
            <Box
              width={isMobile ? "100%" : "350px"}
              height="280px"
              padding="10px 10px 10px 20px"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              alignItems="flex-start"
              gap={1}
            >
              <Typography variant="p" fontSize={18} fontWeight={500}>
                {data?.projectName}
              </Typography>
              <Box>
                <Typography
                  variant="p"
                  fontSize={14}
                  fontWeight={300}
                  width={"14lh"}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "4",
                    WebkitBoxOrient: "vertical",
                  }}
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
                  <Typography variant="p" color="#E0AF00" fontSize={14}>
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
                  <Typography variant="p" color="#E0AF00" fontSize={14}>
                    {data?.price?.toLocaleString()}/- Rs
                  </Typography>
                </Box>
              </Box>
              <Box>
                <ButtonComponent data={data} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ResidentCardStyle>
  );
};

export default ResidentialPostCard;
