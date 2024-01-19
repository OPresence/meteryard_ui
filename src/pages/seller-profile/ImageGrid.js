import React from "react";
import { Box } from "@mui/material";
// import { Gallery } from "react-grid-gallery";

// import FBImageGrid from "react-fb-image-grid";
const images = [
  {
    src: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/meteryard/Images/FRONT.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    width: 320,
    height: 212,
  },
];

const ImageGrid = () => {
  const images = [
    "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    "/images/meteryard/Images/FRONT.jpg",
    "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    "/images/meteryard/Images/Modern-4-floor-Building-Design.jpg",
    "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
    "/images/meteryard/ELEVATED-HOUSE-DESIGN-FEATURE-compressed.jpg",
  ];

  return (
    <Box>
      {/* <Gallery images={images} /> */}

      {/* <FBImageGrid images={images} /> */}
    </Box>
  );
};

export default ImageGrid;
