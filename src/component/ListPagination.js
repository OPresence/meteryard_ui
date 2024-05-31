import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";

const Root = styled(Box)(({ theme }) => ({
  "& .Mui-selected": {
    backgroundColor: "#A2D117 !important",
    color: "white",
  },
  "& .PaginationBox": {
    color: "red",
  },
  "& .PaginationBox": {
    color: "red",
  },
}));

export default function PaginationRounded({ page, _count, handleChange }) {
  return (
    <Stack spacing={2}>
      <Root>
        <Pagination
          className="PaginationBox"
          count={_count}
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </Root>
    </Stack>
  );
}
