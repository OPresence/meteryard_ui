import React from "react";
import { ImageGrid } from "react-fb-image-video-grid";
const GalleryImg = ({ ArrayImage }) => {
  return (
    <>
      {console.log("ArrayImagesdsds--->", ArrayImage)}
      {ArrayImage != undefined && ArrayImage?.length > 0 && (
        <ImageGrid>
          {ArrayImage?.length > 0 &&
            ArrayImage?.map((data, index) => {
              return <img alt="image" src={data} key={index} />;
            })}
        </ImageGrid>
      )}
    </>
  );
};

export default GalleryImg;
