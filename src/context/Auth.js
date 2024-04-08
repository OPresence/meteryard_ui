"use client";
import React, { createContext, useState, useEffect } from "react";
import Apiconfigs from "@/ApiConfig/ApiConfig";
import { PostApiFunction, getAPIdata } from "../utils";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { calculateTimeLeft } from "../utils";
export const AuthContext = createContext();
export default function Auth(props) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState();
  const [endTime, setEndtime] = useState();
  const RouterName = router?.pathname.split("/")[1];
  const [_getprofile, setGetProfile] = useState("");
  const [_accesstoken, setAccessToken] = useState("");
  const [_postlist, setPostList] = useState([]);
  const [_getlist, setGetList] = useState([]);
  const [_getlist_commercial, setGetListCommercial] = useState([]);
  const [_getlistAgreeculture, setGetListAgreeculture] = useState([]);
  const [_likepost, setLikePOst] = useState("");
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
  const ResidentialAPI = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          projectTypeId: "65dc4b9cda234100342352b1",
          page: "1",
          limit: "10",
        },
      });
      if (res?.responseCode == 200) {
        console.log("cnkjvnknvknkcnkvn", res?.result?.docs);
        // setIsLoading(false);

        setGetList(res?.result?.docs);
      }
    } catch (error) {
      // setIsLoading(false);

      console.log("eror", error);
    }
  };
  const CommercialAPI = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          projectTypeId: "65dc4c11da234100342352f4",
          page: "1",
          limit: "10",
        },
      });
      if (res?.responseCode == 200) {
        console.log("sdfdsfjdsfdsbfs--->", res?.result?.docs);
        setGetListCommercial(res?.result?.docs);
      }
    } catch (error) {
      console.log("eror", error);
    }
  };
  const AgreecultureAPIAPI = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          projectTypeId: "65dc4c1eda234100342352fc",
          page: "1",
          limit: "10",
        },
      });
      if (res?.responseCode == 200) {
        setGetListAgreeculture(res?.result?.docs);
      }
    } catch (error) {
      console.log("eror", error);
    }
  };
  useEffect(() => {
    if (RouterName == "CityChat") {
      PostFunction();
    }
  }, []);
  useEffect(() => {
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime * 1000));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    ResidentialAPI();
    CommercialAPI();
    AgreecultureAPIAPI();
  }, []);

  let data = {
    _accesstoken,
    _getprofile,
    timeLeft,
    _postlist,
    _getlist,
    _getlist_commercial,
    _getlistAgreeculture,
    setGetProfile: (value) => setGetProfile(value),
    setEndtime: (value) => setEndtime(value),
    PostFunction: () => PostFunction(),
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
