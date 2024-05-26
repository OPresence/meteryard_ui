import React from "react";
import { Box, Container } from "@mui/material";
import { borderRadius } from "@mui/system";

const VideoPlayer = ({ src, poster }) => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <video width="100%" controls poster={poster}>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Container>
  );
};

export default VideoPlayer;
