import { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import { AuthContext } from "../context/Auth";
import Link from "next/link";

const SubMenuStyle = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    marginTop: "10px",
    boxShadow: "unset",
    "& .gridBox": {
      height: "300px",
      overflowY: "scroll",
      overflowX: "hidden",
    },
    "& h6": {
      fontSize: "15px",
      fontWeight: "600",
    },
    "& .choose-section": {
      paddingLeft: "9px",
      height: "300px",
      overflowY: "scroll",
    },
  },
}));

const SubMenuComponent = () => {
  const auth = useContext(AuthContext);

  return (
    <SubMenuStyle>
      <Box className="mainBox">
        <Grid
          container
          spacing={1}
          style={{
            background: "#fff",
          }}
        >
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={12}
            style={{
              boxShadow:
                window.innerWidth >= 600
                  ? "0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
                  : "unset",
            }}
          >
            <Box
              textAlign={{ xs: "left" }}
              height={"100%"}
              className="choose-section"
            >
              <Typography variant="h6">Choose your State</Typography>
              {/* <Box mt={1} style="overflowY:scroll"> */}
              {auth?.statesHome &&
                auth?.statesHome?.map((data, index) => {
                  return (
                    <Box
                      key={index}
                      style={{ cursor: "pointer", padding: "4px 0" }}
                      onClick={() => auth?.setGetCityValue(data?.stateCode)}
                    >
                      <Typography variant="overline">
                        {data.stateName}
                      </Typography>
                    </Box>
                  );
                })}
              {/* </Box> */}
              <Box maxWidth={125} position={"absolute"} bottom={0}>
                <img
                  src="/images/meteryard/Graphics/Group 7795.png"
                  width={"100%"}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Box className="gridBox">
              <Grid container spacing={1}>
                {auth?._citylist &&
                  auth?._citylist?.map((data, index) => {
                    return (
                      <Grid item lg={6} md={6} sm={12} xs={12} key={index}>
                        <Box style={{ cursor: "pointer", padding: "4px 0" }}>
                          <Link href="/all-property">
                            <Typography className="cityname" variant="h6">
                              {data?.cityName}
                            </Typography>
                          </Link>
                        </Box>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </SubMenuStyle>
  );
};

export default SubMenuComponent;
