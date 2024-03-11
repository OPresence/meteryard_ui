"use client";
import Apiconfigs from "@/ApiConfig/ApiConfig";
import { PostApiFunction, getAPIdata } from "@/utils";
import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export default function Auth(props) {
  const [_getprofile, setGetProfile] = useState("");
  const [_accesstoken, setAccessToken] = useState("");
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
  let data = {
    _accesstoken,
    _getprofile,
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
