import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import {
  Button,
  Grid,
  Box,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
  Typography,
  Icon,
} from "@mui/material";
import { styled } from "@mui/system";
const LocationStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    position: "relative",
  },
  "& .locationStyleShow": {
    cursor: "pointer",
    // position: "absolute",
    display: "flex",
    // top: "0",
    zIndex: 1,
    "&:hover": {
      background: "green",
      color: "red",
    },
  },
}));

const LocationDialog = ({
  address,
  setAddress,
  coordinates,
  setCoordinates,
  type,
}) => {
  const mapStyles = {
    height: "250px",
    width: "100%",
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  console.log("Coordinates:", coordinates);

  return (
    <LocationStyle>
      <Box mt={2} className="mainBox">
        <PlacesAutocomplete
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <TextField
                {...getInputProps({
                  fullWidth: true,
                  label: type != "Area" ? "Location" : "Local Area Name",
                  variant: "outlined",
                  placeholder:
                    type != "Area" ? "Enter location" : "Enter Local Area Name",
                  name: "location",
                })}
              />
              {suggestions?.length > 0 && (
                <div style={{ border: "2px solid rgb(162, 209, 23)" }}>
                  {suggestions?.map((suggestion) => {
                    return (
                      <div
                        className="locationStyleShow"
                        key={suggestion.id}
                        {...getSuggestionItemProps(suggestion)}
                      >
                        <Box
                          style={{
                            background: "#fff",
                          }}
                        >
                          <Typography
                            style={{
                              borderBottom: "1px solid rgb(162, 209, 23)",
                            }}
                          >
                            <span style={{ color: "#000" }}>
                              {suggestion.description}
                            </span>
                          </Typography>
                        </Box>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </PlacesAutocomplete>
      </Box>
      {console.log("coordinates--->", coordinates)}
      {type != "Area" && (
        <Box mt={2} zIndex={0}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={14}
            center={coordinates}
          >
            <Marker position={coordinates} />
          </GoogleMap>
        </Box>
      )}
    </LocationStyle>
  );
};

export default LocationDialog;
