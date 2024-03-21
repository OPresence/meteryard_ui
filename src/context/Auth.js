"use client";
import React, { createContext, useState, useEffect } from "react";
import Apiconfigs from "@/ApiConfig/ApiConfig";
import { PostApiFunction, getAPIdata } from "../utils";
import { useRouter } from "next/router";

export const AuthContext = createContext();
export default function Auth(props) {
  const router = useRouter();

  // console.log("bjdf--->", router?.pathname.split("/")[1]);
  const RouterName = router?.pathname.split("/")[1];
  const [_getprofile, setGetProfile] = useState("");
  const [_accesstoken, setAccessToken] = useState("");
  const [_postlist, setPostList] = useState([]);
  const [_userType, setUSerType] = useState("");
  const GetProfileFunction = async () => {
    try {
      const res = await getAPIdata({
        endPoint: Apiconfigs?.myProfile,
        data: window.sessionStorage.getItem("token"),
      });
      if (res) {
        console.log("ndfbdkj--->", res);
        setGetProfile(res?.result);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const PostFunction = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
      });
      if (res) {
        console.log("niuiinii--->", res);
        if (res?.responseCode == 200) {
          setPostList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setPostList([]);
          toast.error(res?.responseMessage);
          setPostList([]);
        } else if (res?.responseCode == 404) {
          setPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      console.log("error");
      setPostList([]);
    }
  };
  useEffect(() => {
    if (RouterName == "CityChat") {
      PostFunction();
    }
  }, []);
  let data = {
    _accesstoken,
    _getprofile,
    _postlist,
    setGetProfile: (value) => setGetProfile(value),
    setAccessToken: (value) => setAccessToken(value),
  };
  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);
  useEffect(() => {
    if (window.sessionStorage.getItem("token")) {
      GetProfileFunction();
    }
  }, [window.sessionStorage.getItem("token")]);
  return (
    <div>
      <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
    </div>
  );
}
