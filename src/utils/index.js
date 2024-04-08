import axios from "axios";
import moment from "moment";
import * as Yup from "yup";

export const formFieldValue = {
  formId: "checkoutForm",
  formField: {
    listed_name: {
      name: "listed_name",
      label: "listed name",
      requiredErrorMsg: `listed name is required.`,
    },
    furnishing: {
      name: "furnishing",
      label: "furnishing",
      requiredErrorMsg: `furnishing is required.`,
    },
    bedrooms: {
      name: "bedrooms",
      label: "bedrooms",
      requiredErrorMsg: `bedrooms is required.`,
    },
    bathrooms: {
      name: "bathrooms",
      label: "bathrooms",
      requiredErrorMsg: `bathrooms is required.`,
    },
    super_building: {
      name: "super_building",
      label: "super building",
      requiredErrorMsg: `super building is required.`,
    },
    carpet_area: {
      name: "carpet_area",
      label: "carpet area",
      requiredErrorMsg: `carpet area is required.`,
    },
    // screen 2
    total_floors: {
      name: "total_floors",
      label: "total floors",
      requiredErrorMsg: `floors number is required.`,
    },
    floors_no: {
      name: "floors_no",
      label: "floors no",
      requiredErrorMsg: `floors number is required.`,
    },
    facing: {
      name: "facing",
      label: "facing",
      requiredErrorMsg: `facing is required.`,
    },
    project_name: {
      name: "project_name",
      label: "project name",
      requiredErrorMsg: `project name is required.`,
    },
    add_title: {
      name: "add_title",
      label: "add title",
      requiredErrorMsg: `title is required.`,
    },
    description: {
      name: "description",
      label: "description",
      requiredErrorMsg: `description is required.`,
    },
    price: {
      name: "price",
      label: "price",
      requiredErrorMsg: `price is required.`,
    },
    location: {
      name: "location",
      label: "location",
      requiredErrorMsg: `location is required.`,
    },
    landmark: {
      name: "landmark",
      label: "landmark",
      requiredErrorMsg: `landmark is required.`,
    },
  },
};
const {
  formField: {
    listed_name,
    furnishing,
    bedrooms,
    bathrooms,
    super_building,
    carpet_area,
    total_floors,
    floors_no,
    facing,
    project_name,
    add_title,
    description,
    price,
    landmark,
    location,
    coverImage,
    typeProperty,
  },
} = formFieldValue;
export const initialValue = {
  [listed_name?.name]: "",
  [furnishing?.name]: "",
  [bedrooms?.name]: "",
  [bathrooms?.name]: "",
  [super_building?.name]: "",
  [carpet_area?.name]: "",
  [total_floors?.name]: "",
  [floors_no?.name]: "",
  [facing?.name]: "",
  [project_name?.name]: "",
  [add_title?.name]: "",
  [description?.name]: "",
  [price?.name]: "",
  [location?.name]: "",
  [coverImage?.name]: "",
  [typeProperty?.name]: "",
  [landmark?.name]: "",
};

export const ValidationValue = [
  Yup.object().shape({
    [listed_name.name]: Yup.string().required(
      `${listed_name.requiredErrorMsg}`
    ),
    [furnishing.name]: Yup.string().required(`${furnishing.requiredErrorMsg}`),
    [bedrooms.name]: Yup.string().required(`${bedrooms.requiredErrorMsg}`),
    [bathrooms.name]: Yup.string().required(`${bathrooms.requiredErrorMsg}`),
    [super_building.name]: Yup.string().required(
      `${super_building.requiredErrorMsg}`
    ),
    [carpet_area.name]: Yup.string().required(
      `${carpet_area.requiredErrorMsg}`
    ),
  }),

  Yup.object().shape({
    [total_floors.name]: Yup.string().required(
      `${total_floors.requiredErrorMsg}`
    ),
    [floors_no.name]: Yup.string().required(`${floors_no.requiredErrorMsg}`),
    [facing.name]: Yup.string().required(`${facing.requiredErrorMsg}`),
    [project_name.name]: Yup.string().required(
      `${project_name.requiredErrorMsg}`
    ),
    [add_title.name]: Yup.string().required(`${add_title.requiredErrorMsg}`),
    [description.name]: Yup.string().required(
      `${description.requiredErrorMsg}`
    ),
  }),
  Yup.object().shape({
    [price.name]: Yup.string().required(`${price.requiredErrorMsg}`),
    [landmark.name]: Yup.string().required(`${landmark.requiredErrorMsg}`),
  }),
];
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
export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / ((1000 / 60) * 60 * 24)),
        hours: Math.floor((difference / ((1000 / 60) * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};
