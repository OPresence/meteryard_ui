import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Modal from "@mui/material/Modal";
import {
  Divider,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  ButtonGroup,
  Grid,
  Card,
  CardMedia,
  ButtonBase,
  Skeleton,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { BsChatDots } from "react-icons/bs";
import SendIcon from "@mui/icons-material/Send";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { RiShareForwardLine } from "react-icons/ri";
import SliderImage from "./SliderImage";
import { PostApiFunction } from "@/utils";
import Apiconfigs from "../../../ApiConfig/ApiConfig";

const CityPropertyStyle = styled(Box)(({ theme }) => ({
  "& .mainBox": {
    marginTop: "20px",
    boxShadow: "0px 13px 13px #00000026",
    borderRadius: "20px",
    position: "relative",
    "& .bottomBox": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "20px",

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
        },
      },
    },
  },
}));

const PostCard = ({ data, onLike, AddCommentFunction, AddReplyFunction }) => {
  const [liked, setLiked] = useState(false);
  const [_addcomment, setAddComment] = useState("");
  const [_showcomment, setShowComment] = useState(false);
  const [open, setOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [_addReply, setAddReply] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleEdit = () => {
    setEditModal(true);
  };
  const handleDelete = () => {
    setDeleteModal(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditModal(false);
    setDeleteModal(false);
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
  };

  console.log("mjnnkn--->", liked);
  console.log("data--->", data);
  const handleLike = () => {
    setLiked(!liked);
    onLike(data?._id, !liked);
  };

  const showComment_function = async () => {
    setShowComment(!_showcomment);
    if (!_showcomment) {
      try {
        const res = await PostApiFunction({
          endPoint: Apiconfigs?.commentList,
          data: {
            propertyPostId: data?._id,
            page: page,
            limit: 5,
          },
        });
        const commentsWithReplies = await Promise.all(
          res.result.docs.map(async (comment) => {
            const repliesRes = await PostApiFunction({
              endPoint: Apiconfigs?.commentList,
              data: {
                commentId: comment._id,
                page: 1,
                limit: 100,
              },
            });
            return {
              ...comment,
              replies: repliesRes.result.docs,
            };
          })
        );
        setComments(commentsWithReplies);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  };

  const fetchComments = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.commentList,
        data: {
          propertyPostId: data?._id,
          page: page,
          limit: 5,
        },
      });
      const commentsWithReplies = await Promise.all(
        res.result.docs.map(async (comment) => {
          const repliesRes = await PostApiFunction({
            endPoint: Apiconfigs?.commentList,
            data: {
              commentId: comment._id,
              page: 1,
              limit: 100,
            },
          });
          return {
            ...comment,
            replies: repliesRes.result.docs,
          };
        })
      );
      const new_comments = comments.concat(commentsWithReplies);
      console.log("new comments", new_comments);
      setComments(new_comments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchComments();
    };
    fetchData();
  }, [page]);

  const handleAddReply = async (commentId) => {
    try {
      await AddReplyFunction(commentId, _addReply);

      try {
        const res = await PostApiFunction({
          endPoint: Apiconfigs?.commentList,
          data: {
            propertyPostId: data?._id,
            page: 1,
            limit: 5,
          },
        });
        const commentsWithReplies = await Promise.all(
          res.result.docs.map(async (comment) => {
            const repliesRes = await PostApiFunction({
              endPoint: Apiconfigs?.commentList,
              data: {
                commentId: comment._id,
                page: 1,
                limit: 100,
              },
            });
            return {
              ...comment,
              replies: repliesRes.result.docs,
            };
          })
        );
        setComments(commentsWithReplies);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
      setAddReply("");
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const getTimeDifference = (submittedAt) => {
    const currentDate = new Date();
    const submittedDate = new Date(submittedAt);

    const differenceInMilliseconds = currentDate - submittedDate;

    const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    }
  };

  const handleAddComment = async () => {
    await AddCommentFunction(data?._id, _addcomment);
    setAddComment("");
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.commentList,
        data: {
          propertyPostId: data?._id,
          page: 1,
          limit: 5,
        },
      });
      const commentsWithReplies = await Promise.all(
        res.result.docs.map(async (comment) => {
          const repliesRes = await PostApiFunction({
            endPoint: Apiconfigs?.commentList,
            data: {
              commentId: comment._id,
              page: 1,
              limit: 100,
            },
          });
          return {
            ...comment,
            replies: repliesRes.result.docs,
          };
        })
      );
      setComments(commentsWithReplies);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleLoadMore = async () => {
    try {
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching more comments:", error);
    }
  };

  return (
    <CityPropertyStyle>
      <Box className="mainBox">
        <Box maxWidth={280} position={"absolute"} right={-17} top={-13}>
          <img src="/images/Path 8257.svg" width={"100%"} />

          <Button
            style={{
              position: "absolute",
              right: 25,
              top: 25,
              zIndex: 2,
              padding: 0,
              minWidth: 0,
            }}
            onClick={handleOpen}
          >
            <DashboardIcon style={{ color: "black" }} />
          </Button>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              Modal Content
            </Box>
          </Modal>
        </Box>

        <Box>
          <Box className="ProfileBox">
            <React.Fragment>
              <Box display="flex" alignItems="center">
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
                <Box display="flex" alignItems="center" mt={1}>
                  <Box>
                    <Typography variant="h6">Property Size</Typography>
                    <Typography variant="h5">
                      {data?.superBuildupArea}
                    </Typography>
                  </Box>
                  &nbsp;&nbsp; &nbsp;&nbsp;
                  <Box>
                    <Typography variant="h6">Property Price</Typography>
                    <Typography variant="h5">{data?.Price}</Typography>
                  </Box>
                </Box>
              </Box>
            </React.Fragment>
          </Box>

          <SliderImage data={data} />

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
            </Box>
            <Box m={"15px 0"}>
              <Divider />
            </Box>
            <Box>
              <Box className="bottomBox">
                <Button
                  onClick={handleLike}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {liked ? (
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <ThumbUpIcon style={{ color: "blue" }} />
                      <Typography variant="h6" sx={{ marginLeft: 1 }}>
                        Liked
                      </Typography>
                    </Box>
                  ) : (
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <ThumbUpOffAltIcon />
                      <Typography variant="h6" sx={{ marginLeft: 1 }}>
                        Like
                      </Typography>
                    </Box>
                  )}
                </Button>
                <Button
                  onClick={showComment_function}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Box style={{ display: "flex", alignItems: "center" }}>
                    <BsChatDots />
                    <Typography variant="h6" sx={{ marginLeft: 1 }}>
                      Comment
                    </Typography>
                  </Box>
                </Button>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <RiShareForwardLine />
                  &nbsp;
                  <Typography variant="h6" sx={{ marginLeft: 1 }}>
                    SHARE
                  </Typography>
                </Box>
              </Box>
            </Box>

            {_showcomment && (
              <Box>
                <Box className="comment-section">
                  <Stack direction="row" spacing={2}>
                    <Avatar alt="Remy Sharp" src="/images/1567018939360.png" />
                  </Stack>
                  <Box sx={{ width: { xs: "60%", md: "70%" } }}>
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
                    onClick={handleAddComment}
                  >
                    <SendIcon />
                  </Button>
                </Box>
                <Box className="comment-details">
                  {comments &&
                    comments?.map((comment, index) => {
                      return (
                        <Box key={index}>
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
                            <Typography variant="h6">
                              {comment.comment}
                            </Typography>
                          </Stack>
                          {comment &&
                            comment?.replies?.map((reply, index) => (
                              <Box className="sub-comment-section" key={index}>
                                <Stack
                                  direction="row"
                                  spacing={2}
                                  className="comment-details-below"
                                >
                                  <Avatar
                                    sx={{ width: "15px", height: "15px" }}
                                    alt="Remy Sharp"
                                    src="/images/1567018939360.png"
                                  />
                                  <Typography sx={{ mt: "4px" }}>
                                    <span>{reply.reply}</span>
                                  </Typography>
                                </Stack>
                                <Box
                                  className="iconBox activity-icon-comments"
                                  sx={{
                                    fontSize: { xs: "12px", md: "13px" },
                                    mt: "3px",
                                    display: "flex",
                                    justifyContent: "space-center",
                                  }}
                                >
                                  <span>
                                    {getTimeDifference(reply.createdAt)}
                                  </span>
                                  <FavoriteBorderIcon />
                                  <Button onClick={handleEdit}>
                                    <EditIcon style={{ color: "black" }} />
                                  </Button>
                                  <Modal open={editModal} onClose={handleClose}>
                                    <Box
                                      sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: 400,
                                        bgcolor: "background.paper",
                                        padding: "15px",
                                        boxShadow: 24,
                                        borderRadius: "10px ",
                                      }}
                                    >
                                      <Typography
                                        variant="h6"
                                        sx={{ textAlign: "center" }}
                                      >
                                        <Box className="comment-section">
                                          <Stack direction="row" spacing={2}>
                                            <Avatar
                                              alt="Remy Sharp"
                                              src="/images/1567018939360.png"
                                            />
                                          </Stack>
                                          <Box
                                            sx={{
                                              width: { xs: "60%", md: "60%" },
                                            }}
                                          >
                                            <TextField
                                              fullWidth
                                              value={_addcomment}
                                              placeholder="Comments...."
                                              onChange={(e) =>
                                                setAddComment(e.target.value)
                                              }
                                            />
                                          </Box>
                                          <Button
                                            disabled={
                                              _addcomment?.length > 0
                                                ? false
                                                : true
                                            }
                                            className="sendButton"
                                            onClick={() => {
                                              AddCommentFunction(
                                                data?._id,
                                                _addcomment
                                              );
                                              setAddComment("");
                                            }}
                                          >
                                            <SendIcon />
                                          </Button>
                                        </Box>
                                      </Typography>
                                      <ButtonGroup
                                        sx={{
                                          display: "flex",
                                          justifyContent: "center",
                                          textAlign: "center",
                                          gap: "50px",
                                          padding: "2px",
                                          margin: "10px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          color="info"
                                        >
                                          Yes
                                        </Button>
                                        <Button
                                          variant="contained"
                                          color="error"
                                        >
                                          No
                                        </Button>
                                      </ButtonGroup>
                                    </Box>
                                  </Modal>

                                  <Button onClick={handleDelete}>
                                    <DeleteIcon style={{ color: "black" }} />
                                  </Button>
                                  <Modal
                                    open={deleteModal}
                                    onClose={handleClose}
                                  >
                                    <Box
                                      sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: 400,
                                        bgcolor: "background.paper",
                                        padding: "15px",
                                        boxShadow: 24,
                                        borderRadius: "10px ",
                                      }}
                                    >
                                      <Typography
                                        variant="h6"
                                        sx={{ textAlign: "center" }}
                                      >
                                        Are you sure you want to Delete?
                                      </Typography>
                                      <ButtonGroup
                                        sx={{
                                          display: "flex",
                                          justifyContent: "center",
                                          textAlign: "center",
                                          gap: "50px",
                                          padding: "2px",
                                          margin: "10px",
                                        }}
                                      >
                                        <Button
                                          variant="contained"
                                          color="info"
                                        >
                                          Yes
                                        </Button>
                                        <Button
                                          variant="contained"
                                          color="error"
                                        >
                                          No
                                        </Button>
                                      </ButtonGroup>
                                    </Box>
                                  </Modal>
                                </Box>
                              </Box>
                            ))}
                          <Box className="sub-comment-section">
                            <Button
                              sx={{ color: "black", fontSize: "12px" }}
                              onClick={() => handleReply(comment._id)}
                            >
                              Reply
                            </Button>

                            {replyingTo === comment._id && (
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                }}
                              >
                                <TextField
                                  fullWidth
                                  value={_addReply}
                                  placeholder="Add a reply..."
                                  onChange={(e) => setAddReply(e.target.value)}
                                />

                                <IconButton
                                  sx={{ height: "10px" }}
                                  onClick={() => handleAddReply(comment._id)}
                                >
                                  <SendIcon style={{ fontSize: "18px" }} />
                                </IconButton>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      );
                    })}
                </Box>
                <Button onClick={handleLoadMore}>Load More</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </CityPropertyStyle>
  );
};

export default PostCard;
