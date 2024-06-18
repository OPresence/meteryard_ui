import { useEffect, useState } from "react";

const API_Production = process.env.NEXT_PUBLIC_API_URL;
const API_STAGING = process.env.NEXT_PUBLIC_SITE_URL;
var URL_ENDPOINT = "https://lms-api-backend.onrender.com/api/v1";
// var URL_ENDPOINT;
// if (process.env.NODE_ENV !== "production") {
//   URL_ENDPOINT = API_Production;
//   console.log("2222---->", URL_ENDPOINT);
// } else {
//   URL_ENDPOINT = API_STAGING;
//   console.log("API_STAGING---->", URL_ENDPOINT);
// }

const Apiconfigs = {
  userSignUp: `${URL_ENDPOINT}/user/userSignUp`,
  login: `${URL_ENDPOINT}/user/login`,
  otpVerify: `${URL_ENDPOINT}/user/otpVerify`,
  resendOtp: `${URL_ENDPOINT}/user/resendOtp`,
  uploadImage: `${URL_ENDPOINT}/user/uploadImage`,
  myProfile: `${URL_ENDPOINT}/user/myProfile`,
  forgotPassword: `${URL_ENDPOINT}/user/forgotPassword`,
  resetPassword: `${URL_ENDPOINT}/user/resetPassword`,
  logOut: `${URL_ENDPOINT}/user/logOut`,
  addSubscription: `${URL_ENDPOINT}/user/addSubscription`,

  listAllDepartment: `${URL_ENDPOINT}/admin/listAllDepartment`,
  createDepartment: `${URL_ENDPOINT}/admin/createDepartment`,
  deleteDeparment: `${URL_ENDPOINT}/admin/deleteDeparment`,
  editDeparment: `${URL_ENDPOINT}/admin/editDeparment`,
  activeDeactiveDepartment: `${URL_ENDPOINT}/admin/activeDeactiveDepartment`,
  createBanner: `${URL_ENDPOINT}/admin/createBanner`,
  editBanner: `${URL_ENDPOINT}/admin/editBanner`,

  listAllBanner: `${URL_ENDPOINT}/admin/listAllBanner`,
  deleteBanner: `${URL_ENDPOINT}/admin/deleteBanner`,
  listAllUsers: `${URL_ENDPOINT}/admin/listAllUsers`,
  activeDeactiveBanner: `${URL_ENDPOINT}/admin/activeDeactiveBanner`,

  createSubAdmin: `${URL_ENDPOINT}/admin/createSubAdmin`,
  viewUser: `${URL_ENDPOINT}/admin/viewUser`,
  deleteUser: `${URL_ENDPOINT}/admin/deleteUser`,
  activeBlockUser: `${URL_ENDPOINT}/admin/activeBlockUser`,
  editSubAdmin: `${URL_ENDPOINT}/admin/editSubAdmin`,

  createStaticContent: `${URL_ENDPOINT}/static/createStaticContent`,
  editStaticContent: `${URL_ENDPOINT}/static/editStaticContent`,
  listAllStaticContent: `${URL_ENDPOINT}/static/listAllStaticContent`,

  // MASTER COUNTRY MANAGEMENT
  listAllCountry: `${URL_ENDPOINT}/master/listAllCountry`,
  createCountry: `${URL_ENDPOINT}/master/createCountry`,
  editCountry: `${URL_ENDPOINT}/master/editCountry`,
  viewCountry: `${URL_ENDPOINT}/master/viewCountry`,
  deleteCountry: `${URL_ENDPOINT}/master/deleteCountry`,
  activeDeactiveCountry: `${URL_ENDPOINT}/master/activeDeactiveCountry`,
  subscribedUserList: `${URL_ENDPOINT}/master/subscribedUserList`,

  // MASTER STATE MANAGEMENT
  createState: `${URL_ENDPOINT}/master/createState`,
  editState: `${URL_ENDPOINT}/master/editState`,
  viewState: `${URL_ENDPOINT}/master/viewState`,
  deleteState: `${URL_ENDPOINT}/master/deleteState`,
  activeDeactiveState: `${URL_ENDPOINT}/master/activeDeactiveState`,
  listAllState: `${URL_ENDPOINT}/master/listAllState`,

  // MASTER CITY MANAGEMENT
  createCity: `${URL_ENDPOINT}/master/createCity`,
  editCity: `${URL_ENDPOINT}/master/editCity`,
  viewCity: `${URL_ENDPOINT}/master/viewCity`,
  listAllCity: `${URL_ENDPOINT}/master/listAllCity`,
  deleteCity: `${URL_ENDPOINT}/master/deleteCity`,
  activeDeactiveCity: `${URL_ENDPOINT}/master/activeDeactiveCity`,

  // MASTER PROJECT_TYPE MANAGEMENT
  listAllProjectType: `${URL_ENDPOINT}/master/listAllProjectType`,
  createProjectType: `${URL_ENDPOINT}/master/createProjectType`,
  editProjectType: `${URL_ENDPOINT}/master/editProjectType`,
  viewProjectType: `${URL_ENDPOINT}/master/viewProjectType`,
  deleteProjectType: `${URL_ENDPOINT}/master/deleteProjectType`,
  activeDeactiveProjectType: `${URL_ENDPOINT}/master/activeDeactiveProjectType`,

  // MASTER PROJECT_SUB_TYPE MANAGEMENT
  createProjectSubType: `${URL_ENDPOINT}/master/createProjectSubType`,
  editProjectSubType: `${URL_ENDPOINT}/master/editProjectSubType`,
  viewProjectSubType: `${URL_ENDPOINT}/master/viewProjectSubType`,
  listAllProjectSubType: `${URL_ENDPOINT}/master/listAllProjectSubType`,
  activeDeactiveProjectType: `${URL_ENDPOINT}/master/activeDeactiveProjectType`,
  deleteProjectSubType: `${URL_ENDPOINT}/master/deleteProjectSubType`,

  // MASTER PROJECT_FURNISHING MANAGEMENT
  createProjectFurnishing: `${URL_ENDPOINT}/master/createProjectFurnishing`,
  editProjectFurnishing: `${URL_ENDPOINT}/master/editProjectFurnishing`,
  viewProjectFurnishing: `${URL_ENDPOINT}/master/viewProjectFurnishing`,
  listAllProjectFurnishing: `${URL_ENDPOINT}/master/listAllProjectFurnishing`,
  deleteProjectFurnishing: `${URL_ENDPOINT}/master/deleteProjectFurnishing`,
  activeDeactiveProjectFurnishing: `${URL_ENDPOINT}/master/activeDeactiveProjectFurnishing`,

  // MASTER AMINITY MANAGEMENT
  createAminity: `${URL_ENDPOINT}/master/createAminity`,
  editAminity: `${URL_ENDPOINT}/master/editAminity`,
  viewAminity: `${URL_ENDPOINT}/master/viewAminity`,
  listAllAminity: `${URL_ENDPOINT}/master/listAllAminity`,
  deleteAminity: `${URL_ENDPOINT}/master/deleteAminity`,
  activeDeactiveAminity: `${URL_ENDPOINT}/master/activeDeactiveAminity`,

  // MASTER AREA_UNIT MANAGEMENT
  createAreaUnit: `${URL_ENDPOINT}/master/createAreaUnit`,
  editAreaUnit: `${URL_ENDPOINT}/master/editAreaUnit`,
  viewAreaUnit: `${URL_ENDPOINT}/master/viewAreaUnit`,
  listAllAreaUnit: `${URL_ENDPOINT}/master/listAllAreaUnit`,
  deleteAreaUnit: `${URL_ENDPOINT}/master/deleteAreaUnit`,
  activeDeactiveAreaUnit: `${URL_ENDPOINT}/master/activeDeactiveAreaUnit`,

  // MASTER PROPERTY_AVAILABILITY MANAGEMENT
  createPropertyAvailibility: `${URL_ENDPOINT}/master/createPropertyAvailibility`,
  editPropertyAvailibility: `${URL_ENDPOINT}/master/editPropertyAvailibility`,
  viewPropertyAvailibility: `${URL_ENDPOINT}/master/viewPropertyAvailibility`,
  listAllPropertyAvailibility: `${URL_ENDPOINT}/master/listAllPropertyAvailibility`,
  deletePropertyAvailibility: `${URL_ENDPOINT}/master/deletePropertyAvailibility`,
  activeDeactivePropertyAvailibility: `${URL_ENDPOINT}/master/activeDeactivePropertyAvailibility`,

  // MASTER WATER RESOURCE MANAGEMENT
  createWaterResource: `${URL_ENDPOINT}/master/createWaterResource`,
  editWaterResource: `${URL_ENDPOINT}/master/editWaterResource`,
  viewWaterResource: `${URL_ENDPOINT}/master/viewWaterResource`,
  listAllWaterResource: `${URL_ENDPOINT}/master/listAllWaterResource`,
  deleteWaterResource: `${URL_ENDPOINT}/master/deleteWaterResource`,
  activeDeactiveWaterResource: `${URL_ENDPOINT}/master/activeDeactiveWaterResource`,

  // MASTER WATER RESOURCE MANAGEMENT
  createOverlooking: `${URL_ENDPOINT}/master/createOverlooking`,
  editOverlooking: `${URL_ENDPOINT}/master/editOverlooking`,
  viewOverlooking: `${URL_ENDPOINT}/master/viewOverlooking`,
  listAllOverlooking: `${URL_ENDPOINT}/master/listAllOverlooking`,
  deleteOverlooking: `${URL_ENDPOINT}/master/deleteOverlooking`,
  activeDeactiveOverlooking: `${URL_ENDPOINT}/master/activeDeactiveOverlooking`,

  // MASTER PROPERTY OTHER FEATURE MANAGEMENT
  createOtherFeature: `${URL_ENDPOINT}/master/createOtherFeature`,
  editOtherFeature: `${URL_ENDPOINT}/master/editOtherFeature`,
  viewOtherFeature: `${URL_ENDPOINT}/master/viewOtherFeature`,
  listAllOtherFeature: `${URL_ENDPOINT}/master/listAllOtherFeature`,
  deleteOtherFeature: `${URL_ENDPOINT}/master/deleteOtherFeature`,
  activeDeactiveOtherFeature: `${URL_ENDPOINT}/master/activeDeactiveOtherFeature`,

  // MASTER PROPERTY FACING MANAGEMENT
  createPropFacing: `${URL_ENDPOINT}/master/createPropFacing`,
  editPropFacing: `${URL_ENDPOINT}/master/editPropFacing`,
  viewPropFacing: `${URL_ENDPOINT}/master/viewPropFacing`,
  listAllPropFacing: `${URL_ENDPOINT}/master/listAllPropFacing`,
  deletePropFacing: `${URL_ENDPOINT}/master/deletePropFacing`,
  activeDeactivePropFacing: `${URL_ENDPOINT}/master/activeDeactivePropFacing`,

  // MASTER BLOG MANAGEMENT
  createBlog: `${URL_ENDPOINT}/master/createBlog`,
  editBlog: `${URL_ENDPOINT}/master/editBlog`,
  viewBlog: `${URL_ENDPOINT}/master/viewBlog`,
  listAllBlog: `${URL_ENDPOINT}/master/listAllBlog`,
  deleteBlog: `${URL_ENDPOINT}/master/deleteBlog`,
  activeDeactiveBlog: `${URL_ENDPOINT}/master/activeDeactiveBlog`,

  // MASTER TESTIMONIAL MANAGEMENT
  createTestimonial: `${URL_ENDPOINT}/master/createTestimonial`,
  editTestimonial: `${URL_ENDPOINT}/master/editTestimonial`,
  viewTestimonial: `${URL_ENDPOINT}/master/viewTestimonial`,
  listAllTestimonial: `${URL_ENDPOINT}/master/listAllTestimonial`,
  activeDeactiveTestimonial: `${URL_ENDPOINT}/master/activeDeactiveTestimonial`,
  deleteTestimonial: `${URL_ENDPOINT}/master/deleteTestimonial`,

  // MASTER PROPERTY VIDEO MANAGEMENT
  createPropertyVideo: `${URL_ENDPOINT}/master/createPropertyVideo`,
  editPropertyVideo: `${URL_ENDPOINT}/master/editPropertyVideo`,
  viewPropertyVideo: `${URL_ENDPOINT}/master/viewPropertyVideo`,
  listAllPropertyVideo: `${URL_ENDPOINT}/master/listAllPropertyVideo`,
  deletePropertyVideo: `${URL_ENDPOINT}/master/deletePropertyVideo`,
  activeDeactivePropertyVideo: `${URL_ENDPOINT}/master/activeDeactivePropertyVideo`,

  // PROPERTY POST MANAGEMENT
  createPropertyPost: `${URL_ENDPOINT}/property/createPropertyPost`,
  editPropertyPost: `${URL_ENDPOINT}/property/editPropertyPost`,
  viewPropertyPost: `${URL_ENDPOINT}/property/viewPropertyPost`,
  listAllPropertyPost: `${URL_ENDPOINT}/property/listAllPropertyPost`,
  deletePropertyPost: `${URL_ENDPOINT}/property/deletePropertyPost`,
  globalSearch: `${URL_ENDPOINT}/property/globalSearch`,
  proTypeAccordingPropertyList: `${URL_ENDPOINT}/property/proTypeAccordingPropertyList`,

  // MASTER AREA_UNIT MANAGEMENT
  createAreaUnit: `${URL_ENDPOINT}/master/createAreaUnit`,
  editAreaUnit: `${URL_ENDPOINT}/master/editAreaUnit`,
  viewAreaUnit: `${URL_ENDPOINT}/master/viewAreaUnit`,
  listAllAreaUnit: `${URL_ENDPOINT}/master/listAllAreaUnit`,
  deleteAreaUnit: `${URL_ENDPOINT}/master/deleteAreaUnit`,
  activeDeactiveAreaUnit: `${URL_ENDPOINT}/master/activeDeactiveAreaUnit`,

  // MASTER LOCAL AREA MANAGEMENT
  createLocalArea: `${URL_ENDPOINT}/master/createLocalArea`,
  editLocalArea: `${URL_ENDPOINT}/master/editLocalArea`,
  viewLocalArea: `${URL_ENDPOINT}/master/viewLocalArea`,
  listAllLocalArea: `${URL_ENDPOINT}/master/listAllLocalArea`,
  deleteLocalArea: `${URL_ENDPOINT}/master/deleteLocalArea`,
  activeDeactiveLocalArea: `${URL_ENDPOINT}/master/activeDeactiveLocalArea`,
  proSubTypeListWithProType: `${URL_ENDPOINT}/master/proSubTypeListWithProType`,

  // ENQUIRY MANAGEMENT
  generateEnquiry: `${URL_ENDPOINT}/user/generateEnquiry`,
  editEnquiry: `${URL_ENDPOINT}/user/editEnquiry`,
  viewEnquiry: `${URL_ENDPOINT}/user/viewEnquiry`,
  listAllEnquiry: `${URL_ENDPOINT}/user/listAllEnquiry`,
  deleteEnquiry: `${URL_ENDPOINT}/user/deleteEnquiry`,
  changePassword: `${URL_ENDPOINT}/user/changePassword`,
  likeDislikeProperty: `${URL_ENDPOINT}/user/likeDislikeProperty`,
  addComment: `${URL_ENDPOINT}/user/addComment`,
  commentList: `${URL_ENDPOINT}/user/commentList`,
};

export default Apiconfigs;
