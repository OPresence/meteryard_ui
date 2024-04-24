import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Divider,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { FaShare } from "react-icons/fa6";
import { BsChatDots } from "react-icons/bs";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { FaShareAlt, FaShareAltSquare } from "react-icons/fa";
const CityPropertyStyle = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    marginTop: "20px",
    boxShadow: "0px 13px 13px #00000026", 
    borderRadius:'20px',
    position: "relative",
    "& .bottomBox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems:'center',
      height:'20px',
   
      "& h6": {
        fontWeight: "600",
        fontSize: "12px",
      },
      "& svg": {
        fontSize: "18px",
        color: "#444444",
      },
    },
    "& .commentBox": {
      "& .iconBox": {
        background: "#444444",
        display: "flex",
        justifyContent: "center",
        // padding: "5px",
        borderRadius: "50px",
        width: 40,
        height: 40,
        alignItems: "center",
        "& svg": {
          fontSize: "30px",
          color: "#fff",
          background: "#444444",
        },
      },
      "& .viewBox": {
        "& h6": {
          color: "#838383",
          fontSize: "12px",
          paddingBottom: "10px",
        },
        "& span": {
          color: "#FBB415",
        },
      },
      "& svg": {
        color: "#fff",
        padding: "5px",
        background: "blue",
        borderRadius: "50px",
      },
      "& h6": {
        fontSize: "12px",
        color: "#838383",
      },
    },
    "& .ProfileBox": {
      padding: "15px",
     
      "& h6": {
        fontSize: "12px",
        fontWeight: "500",
      },
      "& .imgBox": {
        background: "#fff",
        borderRadius: "100px",
        maxWidth: 60,
        minHeight: 60,
        maxHeight: 60,
        boxShadow: theme.shadows[2],
        overflow: "hidden",
        "& img": {
          width: "70px",
          height: "70px",
        },
      },
      "& .contentBox": {
        "& h6": {
          fontSize: "14px",
          fontWeight: "500",
        },
        "& h5": {
          fontSize: "13px",
          fontWeight: "400",
          color: "#444444",
          marginTop: "5px",
        },
      },
    },
  },
}));

const PostCard = ({ data, onLike, AddCommentFunction }) => {
  const [liked, setLiked] = useState(false);
  const [_addcomment, setAddComment] = useState("");

  const [_showcomment, setShowComment] = useState(false);
  console.log("mjnnkn--->", liked);
  console.log("data--->", data);
  const handleLike = () => {
    setLiked(!liked);
    onLike(data?._id, !liked);
  };
  const showComment_function = () => {
    setShowComment(!_showcomment);
  };
  return (
    <CityPropertyStyle>
      <Box className="mainBox">
        <Box maxWidth={280} position={"absolute"} right={-17} top={-13}>
          <img src="/images/Path 8257.svg" width={"100%"}  />
        </Box>
        <Box>
          <Box className="ProfileBox">
            <Box display={"flex"} alignItems={"center"}>
              <Box className="imgBox">
                <img
                  src={
                    data?.sellerId?.profilePicture == ""
                      ? "/images/1567018939360.png"
                      : data?.sellerId?.profilePicture
                  }
                  width={"100%"}
                />
              </Box>
              &nbsp;&nbsp;&nbsp;
              <Typography variant="h6">{data?.sellerId?.name}</Typography>
            </Box>
            <Box mt={1} className="contentBox">
              <Typography variant="h6">{data?.title}</Typography>
              <Typography variant="h5">{data?.description}</Typography>
              <Box display={"flex"} alignItems={"center"} mt={1}>
                <Box>
                  <Typography variant="h6">Property Size</Typography>
                  <Typography variant="h5">{data?.superBuildupArea}</Typography>
                </Box>
                &nbsp;&nbsp; &nbsp;&nbsp;
                <Box>
                  <Typography variant="h6">Property Price</Typography>
                  <Typography variant="h5">{data?.Price}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <img src={data?.coverImage} width={"100%"} />
          </Box>
          <Box padding={"15px"}>
            <Box
              className="commentBox"
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <ThumbUpIcon /> &nbsp;&nbsp;&nbsp;
                <Typography variant="h6">
                  ashok sharma and 560k others
                </Typography>
              </Box>
              {/* <Box display={"flex"} alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Box className="iconBox">
                    <Box>
                      <img src={"/images/Group 4144.png"} width={"100%"} />
                    </Box>
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Box className="viewBox">
                    <Typography variant="h6">reviews</Typography>
                    <span>4.5</span>
                  </Box>
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box display={"flex"} alignItems={"center"}>
                  <Box className="iconBox">
                    <ApartmentIcon />
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Box className="viewBox">
                    <Typography variant="h6">ranking</Typography>
                    <span>4.5</span>
                  </Box>
                </Box>
                &nbsp;&nbsp;&nbsp;
                <Box display={"flex"} alignItems={"center"}>
                  <Box className="iconBox">
                    <PublicIcon />
                  </Box>
                  &nbsp;&nbsp;&nbsp;
                  <Box className="viewBox">
                    <Typography variant="h6">City</Typography>
                    <span>4.5</span>
                  </Box>
                </Box>
              </Box> */}
            </Box>
            <Box m={"15px 0"}>
              <Divider />
            </Box>
            <Box >
              <Box className="bottomBox">
                <Button onClick={handleLike}>
                  <Box
                   
                 
                   
                  >
                    {liked ? (
                      <ThumbUpIcon style={{ color: "blue", }} />
                    ) : (
                      <ThumbUpOffAltIcon />
                    )}
                    <Typography variant="h6">Like</Typography>
                  </Box>
                </Button>
                <Button onClick={showComment_function}>
                  <Box
                  
                   
                   
                  >
                    <BsChatDots />
                    <Typography variant="h6">Comment</Typography>
                  </Box>
                </Button>
                <Box 

                
                 >
                  <FaShare />
                  &nbsp;
                  <Typography variant="h6">SHARE</Typography>
                </Box>
              </Box>
            </Box>


            {_showcomment && (
              <Box p={"0 40px"}>
                <Box className="comment-section">
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/images/1567018939360.png" />
                  </Stack>
                  <Box width={"70%"}>
                    <TextField
                      fullWidth
                      value={_addcomment}
                      placeholder="Comments...."
                      onChange={(e) => setAddComment(e.target.value)}
                    />
                  </Box>
                  <Button
                    disabled={_addcomment?.length > 0 ? false : true}
                    className="sendButton"
                    onClick={() => {
                      AddCommentFunction(data?._id, _addcomment);
                      setAddComment("");
                    }}
                  >
                    <SendIcon />
                  </Button>
                </Box>
                <Box className="comment-details">
                  <Stack
                    direction="row"
                    spacing={2}
                    className="comment-details-below"
                  >
                    <Avatar
                      sx={{ width: "20px", height: "20px" }}
                      alt="Remy Sharp"
                      src="/images/1567018939360.png"
                    />
                    <Typography variant="h6">ashok sharma</Typography>
                  </Stack>
                  <Box className="sub-comment-section">
                    <Typography sx={{ marginTop: "8px" }}>
                      <span>Good</span>
                    </Typography>
                    <Box className="iconBox activity-icon-comments">
                      <span>8 min ago</span>
                      <FavoriteBorderIcon />
                      <EditIcon />
                      <DeleteIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </CityPropertyStyle>
  );
};

export default PostCard;
