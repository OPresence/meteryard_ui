import { useContext } from "react";
import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import { AuthContext } from "../context/Auth";
import Link from "next/link";
import { height } from "@mui/system";

const SubMenuStyle = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    // padding: "20px 20px 0 20px  ",
    marginTop: "10px",

    boxShadow: "unset",
    // "& h5": {
    //   fontSize: "16px",
    //   fontWeight: "600",
    //   position: "relative",
    //   "@media(max-width:615px)": {
    //     "&::after": {
    //       top: "27px",
    //       width: "100px !important",
    //       height: "1.5px",
    //       backgroundColor: "#a2d017",
    //     },
    //   },
    //   "&::after": {
    //     content: '""',
    //     position: "absolute",
    //     bottom: "0",
    //     width: "0",
    //     left: "0",
    //     right: "0",
    //     height: "2px",
    //     transition: "0.1s ease-in-out",
    //   },
    // },
    "& h6": {
      fontSize: "15px",
      fontWeight: "600",
    },
    "& .choose-section": {
      paddingLeft: "9px",
      height: "300px",
      overflowY:"scroll",
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
              <Typography variant="h6">Choose your city</Typography>
              <Box mt={1} overflowY="scroll">
                {auth?.statesHome &&
                  auth?.statesHome?.map((data, index) => {
                    return (
                      <Box
                        key={index}
                        style={{ cursor: "pointer", padding: "4px 0" }}
                        onClick={() => auth?.setGetCityValue(data?.stateCode)}
                      >
                        <Typography  variant="overline">
                          {data.stateName}
                        </Typography>
                      </Box>
                    );
                  })}
              </Box>
              <Box maxWidth={125} position={"absolute"} bottom={0}>
                <img
                  src="/images/meteryard/Graphics/Group 7795.png"
                  width={"100%"}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Box overflowY="scroll" style={{height:"300px",overflowY:"scroll",overflowX:"hidden"}} overflowX="hidden">
            <Grid container spacing={1}>
            {auth?._citylist &&
              auth?._citylist?.map((data, index) => {
                return (
                  <Grid item lg={6} md={6} sm={12} xs={12}>

                  <Box
                    key={index}
                    style={{ cursor: "pointer", padding: "4px 0" }}
                  >
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
