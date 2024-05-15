import React from "react";
import { Skeleton, Box, Divider } from "@mui/material";

const SkeltonLoader = () => {
  return (
    <div>
      <React.Fragment>
        <Skeleton animation="wave" width={280} height={250} />
        <Box display="flex" alignItems="center" mt={"-40px"}>
          <Skeleton animation="wave" width={150} height={20} />
        </Box>
        <Box className="contentBox">
          <Skeleton animation="wave" width={250} height={20} />
          <Box mt={"-10px"}>
            <Skeleton animation="wave" width={250} height={100} />
          </Box>
          <Box mt={"-10px"}>
            <Skeleton animation="wave" width={100} height={50} />
          </Box>
        </Box>
      </React.Fragment>
    </div>
  );
};

export default SkeltonLoader;
