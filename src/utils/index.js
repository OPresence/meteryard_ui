import axios from "axios";
import moment from "moment";
export const cityName = [
  { name: "Delhi NCR" },
  { name: "Bengaluru" },
  { name: "Kolkata" },
  { name: "Hyderabad" },
  { name: "Bhubaneswar" },
  { name: "Varanasi" },
  { name: "Lucknow" },
  { name: "Panchkula" },
  { name: "Srinagar" },
  { name: "Udhampur" },
  { name: "Bhatinda" },
  { name: "Guwahati" },
];

export const cityObject = [
  //   {
  "Bengaluru",
  "Kolkata",
  "Hyderabad",
  "Bhubaneswar",
  "Varanasi",
  "Lucknow",
  "Panchkula",
];
export const convertDateTime = (val) => {
  var tempDate = new Date(val);
  const toDateFormat = moment(tempDate).format("DD-MMM-yyyy");
  // const toDateFormat = moment(tempDate).format("DD-MMM-yyyy hh:mm a");
  return toDateFormat;
};
export const getAPIdata = async ({ endPoint, data }) => {
  try {
    let res;
    res = await axios({
      url: endPoint,
      method: "GET",
      headers: {
        token: data,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    } else if (res?.data?.responseCode === 400) {
      return res?.data;
    } else if (res?.data?.responseCode === 401) {
      return res?.data;
    } else {
      return res?.data;
    }
  } catch (error) {
    if (error?.data?.responseCode === 500) {
      return false;
    }
    if (error?.data?.responseCode === 501) {
      return false;
    }
    if (error?.data?.responseCode === 505) {
      return false;
    }
  }
};
export const PostApiFunction = async ({ endPoint, data }) => {
  try {
    let res,
      token =
        sessionStorage.getItem("adminToken") || sessionStorage.getItem("token");

    console.log("gjgjgjhgjghjg5656", token);
    res = await axios({
      url: endPoint,
      method: "POST",
      data: data,
      headers: {
        token: token,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    } else if (res?.data?.responseCode === 400) {
      return res?.data;
    } else if (res?.data?.responseCode === 401) {
      return res?.data;
    } else {
      return res?.data;
    }
  } catch (error) {
    if (error?.data?.responseCode === 400) {
      return false;
    }
    if (error?.data?.responseCode === 401) {
      return false;
    }
    if (error?.data?.responseCode === 205) {
      return false;
    }
  }
};
export const PutApiFunction = async ({ endPoint, data, params }) => {
  try {
    let res,
      token = sessionStorage.getItem("adminToken");

    console.log("gjgjgjhgjghjg5656", token);
    res = await axios({
      url: endPoint,
      method: "PUT",
      data: data,
      params: params,
      headers: {
        token: token,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    } else if (res?.data?.responseCode === 400) {
      return res?.data;
    } else if (res?.data?.responseCode === 401) {
      return res?.data;
    } else {
      return res?.data;
    }
  } catch (error) {
    if (error?.data?.responseCode === 400) {
      return false;
    }
    if (error?.data?.responseCode === 401) {
      return false;
    }
    if (error?.data?.responseCode === 205) {
      return false;
    }
  }
};
export const DeleteApiFunction = async ({ endPoint, data, params }) => {
  console.log("ndkjjfhdkj-->", params, endPoint);

  try {
    let res,
      token = sessionStorage.getItem("adminToken");
    res = await axios({
      url: endPoint,
      method: "DELETE",
      data: data,
      params: params,
      headers: {
        token: token,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    } else if (res?.data?.responseCode === 400) {
      return res?.data;
    } else if (res?.data?.responseCode === 401) {
      return res?.data;
    } else {
      return res?.data;
    }
  } catch (error) {
    if (error?.data?.responseCode === 400) {
      return false;
    }
    if (error?.data?.responseCode === 401) {
      return false;
    }
    if (error?.data?.responseCode === 205) {
      return false;
    }
  }
};
