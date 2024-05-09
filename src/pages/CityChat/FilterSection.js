import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import CityProperty from "./CityProperty";
import PostSection from "./PostSection/index";
import AdvertisementComponent from "../../component/AdvertisementComponent";
import SellerListComponent from "../../component/SellerListComponent";
import SellerUploadProperty from "../../component/SellerUploadProperty";
import EnquiryForm from "./EnquiryForm";
import { PostApiFunction } from "@/utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";

const BuyerStyle = styled("div")(({ theme }) => ({
  "& .mainBox": {
    background: theme.palette.background.default,
    "& .EnquiryButton": {
      background: "#BADF4E",
      color: "#000",
      borderRadius: "50px",
      padding: "10px 30px",

      "& span": {
        fontSize: "12px",
      },
    },
    "& .SellerBox": {
      padding: "20px",
      boxShadow: "0px 1px 13px #00000026",
    },
    "& .filterBox": {
      padding: "15px",
      // boxShadow: theme.shadows[3],
      boxShadow: "0px 1px 13px #00000026",
      "& .devider": {
        background: "#00000040",
      },
      "& h2": {
        fontWeight: "600",
      },
      "& .imgBox": {
        background: "#fff",
        borderRadius: "100px",
        maxWidth: 60,
        minHeight: 60,
        maxHeight: 60,
        boxShadow: theme.shadows[2],
        overflow: "hidden",
        "& img": {
          width: "70px",
          height: "70px",
        },
      },
    },
  },
}));
const FilterSection = () => {
  const router = useRouter();
  const [open, setOpen] = useState("");
  const [sellerList, setSellerList] = useState([]);
  const { BuyerKey } = router.query;
  const isDesktop = useMediaQuery("(min-width:960px)");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const fetchSellerList = async () => {
      const body = {
        search: "SELLER",
      };
      try {
        const response = await PostApiFunction({
          endPoint: Apiconfigs?.listAllUsers,
          body
        });

        setSellerList(response.result.docs);
      } catch (error) {
        console.error("Error fetching seller list:", error);
      }
    };
    fetchSellerList();
  }, []);

  return (
    <BuyerStyle>
      <Box minHeight={"100vh"} mt={"30px"} className="mainBox">
        <Container maxWidth style={{ padding: "0 0 0 25px" }}>
          {/* nikita */}
          <Grid
            container
            spacing={3}
            sx={{
              width: { xs: "150vw", sm: "70vw" },
              marginLeft: { xs: "-65px", sm: "-20px" },
            }}
          >
            <Grid
              item
              lg={8}
              md={8}
              style={{
                overflow: "hidden",
              }}
              sm={8}
              xs={8}
            >
              <Box p={"5px"}>
                <CityProperty />
                {BuyerKey != "Seller" && (
                  <Box mt={2}>
                    <Button className="EnquiryButton" onClick={handleClickOpen}>
                      <span>Raise Enquiry</span>
                    </Button>
                  </Box>
                )}
                {BuyerKey == "Seller" && (
                  <Box>
                    <SellerUploadProperty />
                  </Box>
                )}

                <PostSection />
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4} hidden={!isDesktop}>
              <Box>
                <Box m={"0 0px 10px 0"}>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    Sponsored
                  </Typography>
                </Box>
                <AdvertisementComponent />
                <Box m={"10px 0"}>
                  <Typography variant="h6" sx={{ fontWeight: "500" }}>
                    {BuyerKey == "Seller" ? "Seller's" : "Buyer's"}
                  </Typography>
                </Box>
                <Box className="SellerBox">
                  {sellerList &&
                    sellerList?.filter((seller) => seller.isOnline).map(
                      (data, index) => {
                        return (
                          <Box m={"20px 0"} key={index}>
                            <SellerListComponent data={data} index={index} />
                          </Box>
                        );
                      }
                    )}
                </Box>
              </Box>
            </Grid>
          </Grid>
          {open && (
            <EnquiryForm
              open={open}
              setOpen={setOpen}
              handleClose={handleClose}
            />
          )}
        </Container>
      </Box>
    </BuyerStyle>
  );
};

export default FilterSection;