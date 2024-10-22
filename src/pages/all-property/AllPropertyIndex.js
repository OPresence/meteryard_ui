import { useContext, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import PropertyLayout from "../../layout/PropertyLayout";
import { AuthContext } from "../../context/Auth";
import FeaturedPostCard from "../../component/FeaturedPostCard";
import SkeltonLoader from "../../component/SkeltonLoader";
import { useRouter } from "next/router";

const AllPropertyIndex = () => {
  const auth = useContext(AuthContext);

  const router = useRouter();
  const { query } = router;
  const property_id = query?._id;
  useEffect(() => {
    auth?.SubTypeListWithProType_Function();
  }, []);
  useEffect(() => {
    auth?.PropertyPostAPI(property_id);
  }, [property_id]);

  return (
    <Box>
      <PropertyLayout>
        <Grid container spacing={3}>
          {auth?._isloadingProp ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
                  <SkeltonLoader />
                </Grid>
              ))}
            </>
          ) : (
            <>
              {auth?._getproperyPostList?.length > 0 ? (
                <>
                  {auth?._getproperyPostList?.map((data, index) => {
                    return (
                      <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
                        <Box>
                          <FeaturedPostCard data={data} index={index} />
                          {/* {data?.projectTypeId?.projectType == "Residential" && (
                      <ResidentialPostCard data={data} />
                    )}
                    {data?.projectTypeId?.projectType == "Commercial" && (
                      <CommercialPostCard data={data} />
                    )}
                    {data?.projectTypeId?.projectType == "Agriculture" && (
                      <AgreeculturePostCard data={data} />
                    )} */}
                        </Box>
                      </Grid>
                    );
                  })}
                </>
              ) : (
                <Box display={"flex"} justifyContent={"center"} width={"100%"}>
                  <Box width={"100%"} maxWidth={"500px"}>
                    <img src="./images/no_property_found.png" width={"100%"} />
                  </Box>
                </Box>
              )}
            </>
          )}
        </Grid>
      </PropertyLayout>
    </Box>
  );
};

export default AllPropertyIndex;
