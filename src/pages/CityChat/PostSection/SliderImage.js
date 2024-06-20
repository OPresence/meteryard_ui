import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, ButtonBase } from '@mui/material';

function SliderImage({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 37) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.coverImage.length - 1 : prevIndex - 1));
    } else if (event.keyCode === 39) {
      setCurrentIndex((prevIndex) => (prevIndex === data.coverImage.length - 1 ? 0 : prevIndex + 1));
    }
  };

  return (
    <Box onKeyDown={handleKeyDown} tabIndex={0}>
      {Array.isArray(data.coverImage) ? (
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} style={{ position: 'relative' }}>
            <Card>
              <>
                <CardMedia component="img" image={data.coverImage[currentIndex]} alt="multiple Image" />
                <Box style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                  {data.coverImage.map((_, index) => (
                    <ButtonBase
                      key={index}
                      onClick={() => handleImageClick(index)}
                      style={{
                        fontSize: '24px',
                        color: index === currentIndex ? 'white' : 'gray',
                        margin: '0 4px',
                      }}
                    >
                      {index === currentIndex ? '●' : '○'}
                    </ButtonBase>
                  ))}
                </Box>
              </>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Box >
            <img src={data?.coverImage} width={"100%"}/>
        </Box>
      )}
    </Box>
  );
}

export default SliderImage;
