import React, { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import PropertyLayout from "../../layout/PropertyLayout";
import { AuthContext } from "../../context/Auth";
import ResidentialPostCard from "../../component/ResidentialPostCard";
import CommercialPostCard from "../../component/CommercialPostCard";
import AgreeculturePostCard from "../../component/AgreeculturePostCard";
import FeaturedPostCard from "../../component/FeaturedPostCard";

import { useRouter } from "next/router";

const AllPropertyIndex = () => {
  const auth = useContext(AuthContext);

  const router = useRouter();
  const { query } = router;
  const property_id = query?._id;
  console.log("datandsbfmdbmf------->", property_id);

  useEffect(() => {
    auth?.PropertyPostAPI(property_id);
  }, [property_id]);
  return (
    <Box>
      <PropertyLayout>
        <Grid container spacing={3}>
          {property_id != "FEATURED" ? (
            <>
              {auth?._getproperyPostList &&
                auth?._getproperyPostList?.map((data, index) => {
                  return (
                    <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                      <Box>
                        {property_id === "65dc4b9cda234100342352b1" && (
                          <ResidentialPostCard data={data} />
                        )}
                        {property_id === "65dc4c11da234100342352f4" && (
                          <CommercialPostCard data={data} />
                        )}
                        {property_id === "65dc4c1eda234100342352fc" && (
                          <AgreeculturePostCard data={data} />
                        )}
                      </Box>
                    </Grid>
                  );
                })}
            </>
          ) : (
            <>
              {auth?._isFeaturedPost &&
                auth?._isFeaturedPost?.map((data, index) => {
                  return (
                    <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
                      <Box>
                        <FeaturedPostCard data={data} />
                      </Box>
                    </Grid>
                  );
                })}
            </>
          )}
        </Grid>
      </PropertyLayout>
    </Box>
  );
};

export default AllPropertyIndex;
