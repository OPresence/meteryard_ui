import React, { useContext } from "react";
import ResidentialProjects from "../component/ResidentialProjects";
import CardComponent from "../component/CardComponent";
import { AuthContext } from "../context/Auth";
import { Box, Grid, Container } from "@mui/material";
import SkeltonLoader from "./SkeltonLoader";
import styled from "@emotion/styled";

const MasterCardProduct = () => {
  const auth = useContext(AuthContext);

  return (
    <Box>
      {auth?._loadingAllProduct ? (
        <Container>
          <Grid container spacing={3}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={index}>
                <SkeltonLoader />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <>
          <Box>
            {!auth?._loadingAllProduct &&
              auth?._getallProduct?.length > 0 &&
              auth?._getallProduct?.map((ProductData, _id) => {
                if (ProductData?.projectType == "Residential") {
                  return (
                    <Box key={_id}>
                      <ResidentialProjects ProductData={ProductData} />
                    </Box>
                  );
                } else {
                  return (
                    <Box key={_id} mt={5}>
                      <CardComponent ProductData={ProductData} />
                    </Box>
                  );
                }
              })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default MasterCardProduct;
