import axios from "axios";
import moment from "moment";
import { PiPlaceholder } from "react-icons/pi";
import * as Yup from "yup";

export const formFieldValue = {
  formId: "checkoutForm",
  formField: {
    listed_name: {
      name: "listed_name",
      label: "Listed name",
      Placeholder_name: "",

      requiredErrorMsg: `Listed name is required.`,
    },
    furnishing: {
      name: "furnishing",
      label: "Furnishing",
      Placeholder_name: "",

      requiredErrorMsg: `Furnishing is required.`,
    },
    bedrooms: {
      name: "bedrooms",
      label: "Bedrooms",
      Placeholder_name: "",

      requiredErrorMsg: `Bedrooms is required.`,
    },
    bathrooms: {
      name: "bathrooms",
      label: "Bathrooms",
      Placeholder_name: "",

      requiredErrorMsg: `Bathrooms is required.`,
    },
    super_building: {
      name: "super_building",
      label: "Super buildup area",
      Placeholder_name: "Enter super buildup area",

      requiredErrorMsg: `Super buildup area is required.`,
    },
    carpet_area: {
      name: "carpet_area",
      label: "Carpet area",
      Placeholder_name: "Enter carpet area",

      requiredErrorMsg: `Carpet area is required.`,
    },
    // screen 2
    total_floors: {
      name: "total_floors",
      label: "Total floors",
      Placeholder_name: "Enter total floors",

      requiredErrorMsg: `Total floors number is required.`,
    },
    floors_no: {
      name: "floors_no",
      label: "Floors no.",
      Placeholder_name: "Enter floors no.",

      requiredErrorMsg: `Floors number is required.`,
    },
    facing: {
      name: "facing",
      label: "Facing",
      Placeholder_name: "Enter facing.",

      requiredErrorMsg: `Facing is required.`,
    },
    project_name: {
      name: "project_name",
      label: "Project name",
      Placeholder_name: "Enter project name",

      requiredErrorMsg: `Project name is required.`,
    },
    add_title: {
      name: "add_title",
      label: "Add title",
      Placeholder_name: "Enter title",

      requiredErrorMsg: `Add title is required.`,
    },
    description: {
      name: "description",
      label: "Description",
      Placeholder_name: "Enter description",

      requiredErrorMsg: `Description is required.`,
    },
    price: {
      name: "price",
      label: "Price",
      Placeholder_name: "Enter price",

      requiredErrorMsg: `Price is required.`,
    },
    price_breakup: {
      name: "price_breakup",
      label: "Price breakup",
      Placeholder_name: "Enter price breakup",

      requiredErrorMsg: `price breakup is required.`,
    },
    location: {
      name: "location",
      label: "Address",
      Placeholder_name: "Enter Address",

      requiredErrorMsg: `Address is required.`,
    },
    landmark: {
      name: "landmark",
      label: "Landmark Area",
      Placeholder_name: "Enter landmark",
      requiredErrorMsg: `Landmark is required.`,
    },
    localArea: {
      name: "localArea",
      label: "Local Area",
      Placeholder_name: "Enter local area",
      requiredErrorMsg: `Local area is required.`,
    },

    stateId: {
      name: "stateId",
      label: "State",
      Placeholder_name: "",
      requiredErrorMsg: `Select is required.`,
    },
    cityId: {
      name: "cityId",
      label: "City",
      Placeholder_name: "",
      requiredErrorMsg: `City is required.`,
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
    price_breakup,
    typeProperty,
    localArea,
    stateId,
    cityId,
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
  [price?.name]: 0,
  [price_breakup?.name]: 0,
  [localArea?.name]: "",
  [location?.name]: "",
  [coverImage?.name]: "",
  [typeProperty?.name]: "",
  [landmark?.name]: "",
  [stateId?.name]: "",
  [cityId?.name]: "",
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
    [price_breakup.name]: Yup.string().required(
      `${price_breakup.requiredErrorMsg}`
    ),
    [landmark.name]: Yup.string().required(`${landmark.requiredErrorMsg}`),
    [location.name]: Yup.string().required(`${location.requiredErrorMsg}`),
    [localArea.name]: Yup.string().required(`${localArea.requiredErrorMsg}`),
    [stateId.name]: Yup.string().required(`${stateId.requiredErrorMsg}`),
    [cityId.name]: Yup.string().required(`${cityId.requiredErrorMsg}`),
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
export const convertDateTime = (val) => {
  var tempDate = new Date(val);
  const toDateFormat = moment(tempDate).format("DD-MMM-yyyy");
  // const toDateFormat = moment(tempDate).format("DD-MMM-yyyy hh:mm a");
  return toDateFormat;
};

const apiUrl = process.env.NEXT_PUBLIC_SITE_URL;

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
