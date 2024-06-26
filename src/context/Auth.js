// "use client";
import React, { createContext, useState, useEffect } from "react";
import Apiconfigs from "../ApiConfig/ApiConfig";
import { PostApiFunction, getAPIdata } from "../utils";
import { useRouter } from "next/router";
// import { useRouter } from "next/router";
import { calculateTimeLeft } from "../utils";
import axios from "axios";
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
  const [_getCityValue, setGetCityValue] = useState("0");
  const [_getProjectTypeId, setProjectTypeId] = useState("");
  const [_getproperyPostList, setproperyPostList] = useState([]);
  const [_getproperFilteryPostList, setproperyFilterPostList] = useState([]);
  const [_pro_with_subpro, setPro_With_Subpro] = useState([]);
  const [_getallProduct, setGetAllProduct] = useState([]);
  const [_loadingAllProduct, setLoadingAllProduct] = useState(false);
  const [_featured_property, setFeatyredProperty] = useState([]);

  // filter state
  const [_isloadingProp, setIsloadingProp] = useState(false);
  const [_priceRange, setPriceRangeState] = useState("");
  const [_propertyType, setPropertyType] = useState("");
  const [_propertySubType, setPropertySubType] = useState("");
  const [_cityselect, setCitySelect] = useState("0");
  const [_searchproperty, setSearchProperty] = useState("");
  const getFeaturedProperty = (feature_data) => {};
  const StateApiFunction = async () => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllState,
        data: {
          countryCode: "IN",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setGetCityValue(res?.result[0]?.stateCode);
          setStatesHome(res?.result);
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
          stateCode: _getCityValue,
          countryCode: "IN",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setCityList(res?.result);
        } else if (res?.responseCode == 400) {
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
        setGetProfile(res?.result);
      }
    } catch (error) {}
  };
  const AllCategoryProduct = async () => {
    try {
      setLoadingAllProduct(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.proTypeAccordingPropertyList,
      });
      if (res) {
        setLoadingAllProduct(false);

        if (res?.responseCode == 200) {
          setGetAllProduct(res?.result?.docs);
          getFeaturedProperty(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setGetAllProduct([]);
          toast.error(res?.responseMessage);
          setGetAllProduct([]);
        } else if (res?.responseCode == 404) {
          setGetAllProduct([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setGetAllProduct([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setGetAllProduct([]);
        }
      }
    } catch (error) {
      setLoadingAllProduct(false);

      console.log("error", error);
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
  const SubTypeListWithProType_Function = async () => {
    try {
      const res = await getAPIdata({
        endPoint: Apiconfigs?.proSubTypeListWithProType,
      });
      if (res) {
        if (res?.responseCode == 200) {
          setPro_With_Subpro(res?.result?.docs);
        } else if (res?.responseCode == 400) {
          setPro_With_Subpro([]);
          toast.error(res?.responseMessage);
          setPro_With_Subpro([]);
        } else if (res?.responseCode == 404) {
          setPro_With_Subpro([]);

          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setPro_With_Subpro([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setPro_With_Subpro([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      setPro_With_Subpro([]);

      toast.error(error?.responseMessage); // Display error notification
    }
  };
  const PropertyPostAPI = async (property_id) => {
    try {
      setIsloadingProp(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyPost,
        data: {
          projectTypeIds: _propertyType != "" ? _propertyType : "",
          projectSubTypeIds: _propertySubType != "" ? _propertySubType : "",
          stateIds: _getCityValue != "0" ? [_getCityValue] : [],
          cityIds: _cityselect != "0" ? [_cityselect] : [],
          minPrice: _priceRange[0],
          maxPrice: _priceRange[1],
          page: "1",
          limit: "20",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setIsloadingProp(false);

          setproperyPostList(res?.result?.docs);
        } else if (res?.responseCode == 400) {
          setIsloadingProp(false);

          setproperyPostList([]);
          toast.error(res?.responseMessage);
          setproperyPostList([]);
        } else if (res?.responseCode == 404) {
          setIsloadingProp(false);

          setproperyPostList([]);
          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setIsloadingProp(false);

          setproperyPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setIsloadingProp(false);

          setproperyPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      setIsloadingProp(false);

      console.log("error");
      setproperyPostList([]);
    }
  };
  const PropertySearchPostAPI = async (property_id) => {
    try {
      setIsloadingProp(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.globalSearch,
        data: {
          search: _searchproperty,
          projectTypeIds: _propertyType != "" ? _propertyType : "",
          projectSubTypeIds: _propertySubType != "" ? _propertySubType : "",
          stateIds: _getCityValue != "0" ? [_getCityValue] : [],
          cityIds: _cityselect != "0" ? [_cityselect] : [],
          minPrice: _priceRange[0],
          maxPrice: _priceRange[1],
          page: "1",
          limit: "20",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setIsloadingProp(false);

          setproperyFilterPostList(res?.result?.property);
        } else if (res?.responseCode == 400) {
          setIsloadingProp(false);

          setproperyFilterPostList([]);
          toast.error(res?.responseMessage);
          setproperyFilterPostList([]);
        } else if (res?.responseCode == 404) {
          setIsloadingProp(false);

          setproperyFilterPostList([]);
          toast.error(res?.responseMessage); // Display error notification
        } else if (res?.responseCode == 500) {
          setIsloadingProp(false);

          setproperyFilterPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        } else {
          setIsloadingProp(false);

          setproperyFilterPostList([]);

          toast.error(res?.responseMessage); // Display error notification
        }
      }
    } catch (error) {
      setIsloadingProp(false);

      console.log("error");
      setproperyFilterPostList([]);
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
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime * 1000));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });
  useEffect(() => {
    StateApiFunction();
    ProjectType();
    AllCategoryProduct();
  }, []);
  useEffect(() => {
    if (_getCityValue != "0") {
      CityApiFunction();
    }
  }, [_getCityValue]);

  useEffect(() => {
    if (
      (_propertySubType != "" ||
        _getCityValue != 0 ||
        _cityselect != 0 ||
        _priceRange != "") &&
      RouterName == "search-property"
    ) {
      PropertyPostAPI();
    }
  }, [_propertySubType, _getCityValue, _cityselect, _priceRange]);
  useEffect(() => {
    if (
      (_propertySubType != "" ||
        _getCityValue != 0 ||
        _cityselect != 0 ||
        _priceRange != "") &&
      RouterName == "search-property"
    ) {
      PropertySearchPostAPI();
    }
  }, [_propertySubType, _getCityValue, _cityselect, _priceRange]);

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
    _getproperFilteryPostList,
    _pro_with_subpro,
    _isloadingProp,
    _getCityValue,
    _cityselect,
    _getallProduct,
    _loadingAllProduct,
    PropertyPostAPI: (value) => PropertyPostAPI(value),
    PropertySearchPostAPI: (value) => PropertySearchPostAPI(value),

    AllCategoryProduct: (value) => AllCategoryProduct(value),

    setGetProfile: (value) => setGetProfile(value),
    setEndtime: (value) => setEndtime(value),
    setAccessToken: (value) => setAccessToken(value),
    setGetPropetyType: (value) => setGetPropetyType(value),
    setGetProject_sub_Type: (value) => setGetProject_sub_Type(value),
    setGetCityValue: (value) => setGetCityValue(value),
    setPropertyType: (value) => setPropertyType(value),
    setPriceRangeState: (value) => setPriceRangeState(value),
    setProjectTypeId: (value) => setProjectTypeId(value),
    SubTypeListWithProType_Function: (value) =>
      SubTypeListWithProType_Function(value),
    setPropertySubType: (value) => setPropertySubType(value),
    setCitySelect: (value) => setCitySelect(value),
    setSearchProperty: (value) => setSearchProperty(value),
    PropertySearchPostAPI: (value) => PropertySearchPostAPI(value),
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
