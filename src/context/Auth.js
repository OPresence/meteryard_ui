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
  const [statesHome, setStatesHome] = useState([]);
  const [_citylist, setCityList] = useState([]);
  const [_isFeaturedPost, setIsFeatured] = useState([]);
  const [_getCityValue, setGetCityValue] = useState("");
  const [_getProjectTypeId, setProjectTypeId] = useState("");
  const [_getproperyPostList, setproperyPostList] = useState([]);

  console.log("_getCityValue--->", _citylist);
  const StateApiFunction = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllState,
        data: {
          countryId: "65ba9a0fd02a1d3150e299bd",
        },
      });
      if (res) {
        console.log("niuiinii--->", res);
        if (res?.responseCode == 200) {
          setStatesHome(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setStatesHome([]);
          toast.error(res?.responseMessage);
          setStatesHome([]);
        } else if (res?.responseCode == 404) {
          setStatesHome([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setStatesHome([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setStatesHome([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      console.log("error");
      setPostList([]);
    }
  };
  const CityApiFunction = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllCity,
        data: {
          stateId: _getCityValue,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          console.log("niuiinii--->", res);
          setCityList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setCityList([]);
          toast.error(res?.responseMessage);
          setCityList([]);
        } else if (res?.responseCode == 404) {
          setCityList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setCityList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setCityList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      console.log("error");
      setPostList([]);
    }
  };
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
  const PostFunction = async ({ data }) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: data,
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
  const FeaturedAPI = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          page: "1",
          limit: "10",
          featuredProperty: "true",
        },
      });
      if (res?.responseCode == 200) {
        setIsFeatured(res?.result?.docs);
      }
    } catch (error) {
      setIsFeatured([]);

      console.log("eror", error);
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

  const PropertyPostAPI = async (property_id) => {
    console.log("8888888888888--->", property_id);
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          projectTypeId: property_id,
          page: "1",
          limit: "100",
        },
      });
      if (res) {
        console.log("fetching property post--->", res);
        if (res?.responseCode == 200) {
          setproperyPostList(res?.result?.docs);
        } else if (res?.responseCode == 400) {
          setproperyPostList([]);
          toast.error(res?.responseMessage);
          setproperyPostList([]);
        } else if (res?.responseCode == 404) {
          setproperyPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setproperyPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setproperyPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      console.log("error");
      setproperyPostList([]);
    }
  };
  useEffect(() => {
    if (_getproprty_type) {
      SubProjectType();
    }
  }, [_getproprty_type]);
  useEffect(() => {
    if (RouterName == "property-post") {
      ProjectType();
    }
  }, []);
  useEffect(() => {
    if (RouterName == "CityChat") {
      PostFunction({
        data: {
          page: 1,
          limit: 10,
        },
      });
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
    StateApiFunction();
    FeaturedAPI();
    ResidentialAPI();
    CommercialAPI();
    AgreecultureAPIAPI();
    ProjectType();
  }, []);
  useEffect(() => {
    CityApiFunction();
  }, [_getCityValue]);
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
    _isFeaturedPost,
    statesHome,
    _citylist,
    _getproperyPostList,

    PropertyPostAPI: (value) => PropertyPostAPI(value),
    ResidentialAPI: (value) => ResidentialAPI(value),
    CommercialAPI: (value) => CommercialAPI(value),
    AgreecultureAPIAPI: (value) => AgreecultureAPIAPI(value),
    setGetProfile: (value) => setGetProfile(value),
    setEndtime: (value) => setEndtime(value),
    PostFunction: () => PostFunction(),
    setAccessToken: (value) => setAccessToken(value),
    setGetPropetyType: (value) => setGetPropetyType(value),
    setGetProject_sub_Type: (value) => setGetProject_sub_Type(value),
    setGetCityValue: (value) => setGetCityValue(value),
    setProjectTypeId: (value) => setProjectTypeId(value),
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
