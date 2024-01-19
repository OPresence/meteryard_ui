import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const DialogButtonStyle = styled("Box")(({ theme }) => ({
  "& button": {
    padding: "10px 40px",
    background: "#444444",
    border: "1px solid #fff",
    color: "#fff",
    clipPath: "polygon(0 0, 130% 0, 82% 99%, 0 100%)",
    "&:hover": {
      background: "#fff",
      color: "#444444",
      border: "1px solid #fff",
    },
  },
}));
const AddBanner = ({ handleClose, ButtonName }) => {
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = (files) => {
    const uploadedFile = files[0];

    // Set the file to state
    setFile(uploadedFile);

    // Create a URL for the uploaded file
    const objectURL = URL.createObjectURL(uploadedFile);
    setImageUrl(objectURL);
  };
  return (
    <DialogButtonStyle>
      <Box display={"flex"} justifyContent={"center"} minHeight={300}>
        <Box maxWidth={350}>
          <FileUploader
            multiple={true}
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          <Box mt={2} textAlign={"center"}>
            {file ? (
              <>
                <p>File Image Dimension: 1920 x 1080 {file.name}</p>
                <Box display={"flex"} justifyContent={"center"}>
                  <Box maxWidth={200}>
                    <img
                      src={imageUrl}
                      alt="Uploaded File"
                      style={{ maxWidth: "100%" }}
                    />
                  </Box>
                </Box>
              </>
            ) : (
              <p>No files uploaded yet</p>
            )}
          </Box>
          <Box mt={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Add Title"
              variant="outlined"
              placeholder="Add Title"
            />
          </Box>
          <Box display={"flex"} gap={"20px"} mt={3}>
            <Button onClick={handleClose}>
              <span>CANCEL</span>
            </Button>
            <Button
              style={{
                background: "#A2D117",
              }}
            >
              <span>Add</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </DialogButtonStyle>
  );
};

export default AddBanner;
