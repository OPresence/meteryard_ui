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
  const [_propertyList, setPropertyList] = React.useState([]);
  const [_subytypelist, setSubTypeList] = useState([]);
  const [_isloading, setIsLoading] = useState(false);
  const [_getproject_sub_type, setGetProject_sub_Type] = useState("");
  const [_getproprty_type, setGetPropetyType] = useState("");

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
  const ProjectType = async () => {
    try {
      setIsLoading(true);

      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllProjectType,
      });
      if (res) {
        setGetPropetyType(res?.result?.docs[0]?._id);
        if (res?.responseCode == 200) {
          setIsLoading(false);

          setPropertyList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);

          setPropertyList([]);
          toast.error(res?.responseMessage);
          setPropertyList([]);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);

          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setIsLoading(false);

          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setIsLoading(false);

          setPropertyList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      setIsLoading(false);

      console.log("error");
      setPropertyList([]);
    }
  };
  const SubProjectType = async (id) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllProjectSubType,
        data: {
          projectTypeId: _getproprty_type,
          page: "1",
          limit: "10",
        },
      });
      if (res?.responseCode == 200) {
        setGetProject_sub_Type(res?.result?.docs[0]?._id);
        setSubTypeList(res?.result?.docs);
      } else if (res?.responseCode == 404) {
        setSubTypeList([]);
        toast.error(res?.responseMessage);
        setSubTypeList([]);
      } else if (res?.responseCode == 404) {
        setSubTypeList([]);
        toast.error(res?.responseMessage); // Display error notification
      } else if (res?.responseCode == 500) {
        setSubTypeList([]);

        toast.error(res?.responseMessage); // Display error notification
      } else {
        setSubTypeList([]);

        toast.error(res?.responseMessage); // Display error notification
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    if (_getproprty_type) {
      SubProjectType();
    }
  }, [_getproprty_type]);
  useEffect(() => {
    if (RouterName == "property-post") {
      console.log("bsjdbsajbjsba---->");
      ProjectType();
    }
  }, []);

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
    _propertyList,
    _subytypelist,
    _isloading,
    _getproprty_type,
    _getproject_sub_type,
    ResidentialAPI: (value) => ResidentialAPI(value),
    CommercialAPI: (value) => CommercialAPI(value),
    AgreecultureAPIAPI: (value) => AgreecultureAPIAPI(value),
    setGetProfile: (value) => setGetProfile(value),
    setEndtime: (value) => setEndtime(value),
    PostFunction: () => PostFunction(),
    setAccessToken: (value) => setAccessToken(value),
    setGetPropetyType: (value) => setGetPropetyType(value),
    setGetProject_sub_Type: (value) => setGetProject_sub_Type(value),
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
