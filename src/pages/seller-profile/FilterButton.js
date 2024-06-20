import React from "react";
import { styled } from "@mui/system";
import { Box, Button } from "@mui/material";

const FilterButtonStyle = styled("div")(({ theme }) => ({
  "& .mainBoxButton": {
    gap: "15px",
    "& button": {
      background: "#fff",
      border: "1px solid #D8D8D8",
      color: "#969696",
      borderRadius: "50px",
      padding: "8px 35px",
    },
  },
}));

const FilterButton = () => {
  const ButtonArray = ["All", "Top Searched", "Top Most Popular", "Top Rating"];
  return (
    <FilterButtonStyle>
      <Box className="mainBoxButton" display={"flex"}>
        {ButtonArray.map((data, index) => {
          return (
            <Box key={index}>
              <Button>{data}</Button>
            </Box>
          );
        })}
      </Box>
    </FilterButtonStyle>
  );
};

export default FilterButton;
