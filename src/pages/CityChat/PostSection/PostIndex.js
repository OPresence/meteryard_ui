import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import PostCard from "./PostCard";
import { AuthContext } from "../../../context/Auth";
import { Box, Divider, Skeleton } from "@mui/material";
import { PostApiFunction } from "../../../utils";
import Apiconfigs from "../../../ApiConfig/ApiConfig";

const PostIndex = () => {
  const auth = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState([]);
  const observer = useRef(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          page: currentPage,
          limit: 10,
        },
      });
      if (res?.responseCode === 200) {
        const newPosts = res?.result?.docs;
        if (newPosts.length === 0) {
          setHasMore(false);
        } else {
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
          setCurrentPage((prevPage) => prevPage + 1);
        }
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
    setLoading(false);
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observerCallback = (entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loading && hasMore) {
        fetchPosts();
      }
    };

    observer.current = new IntersectionObserver(observerCallback, options);

    const targetElement = document.getElementById("last-post-card");
    if (targetElement && observer.current) {
      observer.current.observe(targetElement);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, hasMore]);

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
      if (res?.responseCode === 200) {
      } else {
        console.error("Error adding comment:", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const AddReplyFunction = async (commentId, userreply) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.addComment,
        data: {
          commentId: commentId,
          reply: userreply,
        },
      });
      if (res?.responseCode === 200) {
        fetchPosts();
      } else {
        console.error("Error adding comment:", res);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Box>
      {posts.map((data, index) => (
        <Box key={index}>
          <PostCard
            data={data}
            onLike={handleLike}
            AddCommentFunction={AddCommentFunction}
            AddReplyFunction={AddReplyFunction}
          />
        </Box>
      ))}
      {loading && (
        <div>
          {Array.from({ length: 3 }).map((_, index) => (
            <React.Fragment key={index}>
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
                sx={{ marginTop: "4rem" }}
              />
              <Box display="flex" alignItems="center">
                <Skeleton animation="wave" width={100} height={40} />
              </Box>
              <Box mt={1} className="contentBox">
                <Skeleton
                  animation="wave"
                  height={40}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={40} width="80%" />
                <Box display="flex" alignItems="center" mt={1}>
                  <Box>
                    <Skeleton animation="wave" height={120} width={900} />
                  </Box>
                  &nbsp;&nbsp; &nbsp;&nbsp;
                  <Box>
                    <Skeleton animation="wave" height={40} width={100} />
                  </Box>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "2rem" }} />
            </React.Fragment>
          ))}
        </div>
      )}
      {!loading && !hasMore && <div>No more posts</div>}
      <div id="last-post-card" style={{ height: "10px" }} />
    </Box>
  );
};

export default PostIndex;
