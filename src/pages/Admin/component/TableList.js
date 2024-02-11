import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import {
  TableBody,
  Box,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#444444",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  // Set a fixed width for all StyledTableCell
  width: "15%",
  maxWidth: "120px",
  wordWrap: "break-word",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableList({ data, headerData }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headerData?.map((data, index) => {
              return (
                <StyledTableCell key={index}>{data?.title}</StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data?.map((value, index) => {
              return (
                <StyledTableRow key={index}>
                  {headerData.map((head, i) => {
                    if (head?.title == "Image") {
                      return (
                        <StyledTableCell component="th" scope="row">
                          <Box maxWidth={150}>
                            <img src={value[head.title]} width={"100%"} />
                          </Box>
                        </StyledTableCell>
                      );
                    } else {
                      return (
                        <StyledTableCell component="th" scope="row">
                          {value[head.title]}
                        </StyledTableCell>
                      );
                    }
                  })}
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
