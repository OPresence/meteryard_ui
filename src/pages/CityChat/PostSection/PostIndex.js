import React, { useContext, useState } from "react";
import PostCard from "./PostCard";
import { AuthContext } from "../../../context/Auth";
import { Box } from "@mui/material";
import { PostApiFunction } from "../../../utils";
import Apiconfigs from "../../../ApiConfig/ApiConfig";
const PostIndex = () => {
  const auth = useContext(AuthContext);
  const mapData = auth?._postlist?.reverse();

  const handleLike = async (postId) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.likeDislikeProperty,
        data: {
          propertyPostId: postId,
        },
      });
      if (res) {
        auth?.PostFunction();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const AddCommentFunction = async (postId, usercomment) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.addComment,
        data: {
          postType: "POST",
          propertyPostId: postId,
          comment: usercomment,
        },
      });
      if (res) {
        console.log("00000000000000000000000000000000000000");
        console.log("resddfd---->", res);
        auth?.PostFunction();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <Box>
      {mapData &&
        mapData?.map((data, _id) => {
          return (
            <Box key={_id}>
              <PostCard
                data={data}
                onLike={handleLike}
                AddCommentFunction={AddCommentFunction}
              />
            </Box>
          );
        })}
    </Box>
  );
};

export default PostIndex;
