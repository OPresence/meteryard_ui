// export const baseurl = "http://192.168.1.30:8000"; //local
// export const baseurl = "http://192.168.1.18:8000"; //local
export const baseurlUser = "https://lms-api-backend.onrender.com/api/v1/user"; //local
export const baseurlAdmin = "https://lms-api-backend.onrender.com/api/v1/admin"; //local
export const masterURL = "https://lms-api-backend.onrender.com/api/v1/master"; //local
export const propertyURL =
  "https://lms-api-backend.onrender.com/api/v1/property"; //local
export const staticContent =
  "https://lms-api-backend.onrender.com/api/v1/static"; //local

let user = `${baseurlUser}`;
let admin = `${baseurlAdmin}`;
let staticURL = `${staticContent}`;
let masterLink = `${masterURL}`;
let propertyLink = `${propertyURL}`;
const Apiconfigs = {
  userSignUp: `${user}/userSignUp`,
  login: `${user}/login`,
  otpVerify: `${user}/otpVerify`,
  resendOtp: `${user}/resendOtp`,
  uploadImage: `${user}/uploadImage`,
  myProfile: `${user}/myProfile`,

  listAllDepartment: `${admin}/listAllDepartment`,
  createDepartment: `${admin}/createDepartment`,
  deleteDeparment: `${admin}/deleteDeparment`,
  editDeparment: `${admin}/editDeparment`,
  activeDeactiveDepartment: `${admin}/activeDeactiveDepartment`,
  createBanner: `${admin}/createBanner`,
  editBanner: `${admin}/editBanner`,

  listAllBanner: `${admin}/listAllBanner`,
  deleteBanner: `${admin}/deleteBanner`,
  listAllUsers: `${admin}/listAllUsers`,
  activeDeactiveBanner: `${admin}/activeDeactiveBanner`,

  createSubAdmin: `${admin}/createSubAdmin`,
  viewUser: `${admin}/viewUser`,
  deleteUser: `${admin}/deleteUser`,
  activeBlockUser: `${admin}/activeBlockUser`,
  editSubAdmin: `${admin}/editSubAdmin`,

  createStaticContent: `${staticURL}/createStaticContent`,
  editStaticContent: `${staticURL}/editStaticContent`,
  listAllStaticContent: `${staticURL}/listAllStaticContent`,

  // MASTER COUNTRY MANAGEMENT
  listAllCountry: `${masterLink}/listAllCountry`,
  createCountry: `${masterLink}/createCountry`,
  editCountry: `${masterLink}/editCountry`,
  viewCountry: `${masterLink}/viewCountry`,
  deleteCountry: `${masterLink}/deleteCountry`,
  activeDeactiveCountry: `${masterLink}/activeDeactiveCountry`,

  // MASTER STATE MANAGEMENT
  createState: `${masterLink}/createState`,
  editState: `${masterLink}/editState`,
  viewState: `${masterLink}/viewState`,
  deleteState: `${masterLink}/deleteState`,
  activeDeactiveState: `${masterLink}/activeDeactiveState`,
  listAllState: `${masterLink}/listAllState`,

  // MASTER CITY MANAGEMENT
  createCity: `${masterLink}/createCity`,
  editCity: `${masterLink}/editCity`,
  viewCity: `${masterLink}/viewCity`,
  listAllCity: `${masterLink}/listAllCity`,
  deleteCity: `${masterLink}/deleteCity`,
  activeDeactiveCity: `${masterLink}/activeDeactiveCity`,

  // MASTER PROJECT_TYPE MANAGEMENT
  listAllProjectType: `${masterLink}/listAllProjectType`,
  createProjectType: `${masterLink}/createProjectType`,
  editProjectType: `${masterLink}/editProjectType`,
  viewProjectType: `${masterLink}/viewProjectType`,
  deleteProjectType: `${masterLink}/deleteProjectType`,
  activeDeactiveProjectType: `${masterLink}/activeDeactiveProjectType`,

  // MASTER PROJECT_SUB_TYPE MANAGEMENT
  createProjectSubType: `${masterLink}/createProjectSubType`,
  editProjectSubType: `${masterLink}/editProjectSubType`,
  viewProjectSubType: `${masterLink}/viewProjectSubType`,
  listAllProjectSubType: `${masterLink}/listAllProjectSubType`,
  activeDeactiveProjectType: `${masterLink}/activeDeactiveProjectType`,
  deleteProjectSubType: `${masterLink}/deleteProjectSubType`,

  // MASTER PROJECT_FURNISHING MANAGEMENT
  createProjectFurnishing: `${masterLink}/createProjectFurnishing`,
  editProjectFurnishing: `${masterLink}/editProjectFurnishing`,
  viewProjectFurnishing: `${masterLink}/viewProjectFurnishing`,
  listAllProjectFurnishing: `${masterLink}/listAllProjectFurnishing`,
  deleteProjectFurnishing: `${masterLink}/deleteProjectFurnishing`,
  activeDeactiveProjectFurnishing: `${masterLink}/activeDeactiveProjectFurnishing`,

  // MASTER AMINITY MANAGEMENT
  createAminity: `${masterLink}/createAminity`,
  editAminity: `${masterLink}/editAminity`,
  viewAminity: `${masterLink}/viewAminity`,
  listAllAminity: `${masterLink}/listAllAminity`,
  deleteAminity: `${masterLink}/deleteAminity`,
  activeDeactiveAminity: `${masterLink}/activeDeactiveAminity`,

  // MASTER AREA_UNIT MANAGEMENT
  createAreaUnit: `${masterLink}/createAreaUnit`,
  editAreaUnit: `${masterLink}/editAreaUnit`,
  viewAreaUnit: `${masterLink}/viewAreaUnit`,
  listAllAreaUnit: `${masterLink}/listAllAreaUnit`,
  deleteAreaUnit: `${masterLink}/deleteAreaUnit`,
  activeDeactiveAreaUnit: `${masterLink}/activeDeactiveAreaUnit`,

  // MASTER PROPERTY_AVAILABILITY MANAGEMENT
  createPropertyAvailibility: `${masterLink}/createPropertyAvailibility`,
  editPropertyAvailibility: `${masterLink}/editPropertyAvailibility`,
  viewPropertyAvailibility: `${masterLink}/viewPropertyAvailibility`,
  listAllPropertyAvailibility: `${masterLink}/listAllPropertyAvailibility`,
  deletePropertyAvailibility: `${masterLink}/deletePropertyAvailibility`,
  activeDeactivePropertyAvailibility: `${masterLink}/activeDeactivePropertyAvailibility`,

  // MASTER WATER RESOURCE MANAGEMENT
  createWaterResource: `${masterLink}/createWaterResource`,
  editWaterResource: `${masterLink}/editWaterResource`,
  viewWaterResource: `${masterLink}/viewWaterResource`,
  listAllWaterResource: `${masterLink}/listAllWaterResource`,
  deleteWaterResource: `${masterLink}/deleteWaterResource`,
  activeDeactiveWaterResource: `${masterLink}/activeDeactiveWaterResource`,

  // MASTER WATER RESOURCE MANAGEMENT
  createOverlooking: `${masterLink}/createOverlooking`,
  editOverlooking: `${masterLink}/editOverlooking`,
  viewOverlooking: `${masterLink}/viewOverlooking`,
  listAllOverlooking: `${masterLink}/listAllOverlooking`,
  deleteOverlooking: `${masterLink}/deleteOverlooking`,
  activeDeactiveOverlooking: `${masterLink}/activeDeactiveOverlooking`,

  // MASTER PROPERTY OTHER FEATURE MANAGEMENT
  createOtherFeature: `${masterLink}/createOtherFeature`,
  editOtherFeature: `${masterLink}/editOtherFeature`,
  viewOtherFeature: `${masterLink}/viewOtherFeature`,
  listAllOtherFeature: `${masterLink}/listAllOtherFeature`,
  deleteOtherFeature: `${masterLink}/deleteOtherFeature`,
  activeDeactiveOtherFeature: `${masterLink}/activeDeactiveOtherFeature`,

  // MASTER PROPERTY FACING MANAGEMENT
  createPropFacing: `${masterLink}/createPropFacing`,
  editPropFacing: `${masterLink}/editPropFacing`,
  viewPropFacing: `${masterLink}/viewPropFacing`,
  listAllPropFacing: `${masterLink}/listAllPropFacing`,
  deletePropFacing: `${masterLink}/deletePropFacing`,
  activeDeactivePropFacing: `${masterLink}/activeDeactivePropFacing`,

  // MASTER BLOG MANAGEMENT
  createBlog: `${masterLink}/createBlog`,
  editBlog: `${masterLink}/editBlog`,
  viewBlog: `${masterLink}/viewBlog`,
  listAllBlog: `${masterLink}/listAllBlog`,
  deleteBlog: `${masterLink}/deleteBlog`,
  activeDeactiveBlog: `${masterLink}/activeDeactiveBlog`,

  // MASTER TESTIMONIAL MANAGEMENT
  createTestimonial: `${masterLink}/createTestimonial`,
  editTestimonial: `${masterLink}/editTestimonial`,
  viewTestimonial: `${masterLink}/viewTestimonial`,
  listAllTestimonial: `${masterLink}/listAllTestimonial`,
  activeDeactiveTestimonial: `${masterLink}/activeDeactiveTestimonial`,
  deleteTestimonial: `${masterLink}/deleteTestimonial`,

  // MASTER PROPERTY VIDEO MANAGEMENT
  createPropertyVideo: `${masterLink}/createPropertyVideo`,
  editPropertyVideo: `${masterLink}/editPropertyVideo`,
  viewPropertyVideo: `${masterLink}/viewPropertyVideo`,
  listAllPropertyVideo: `${masterLink}/listAllPropertyVideo`,
  deletePropertyVideo: `${masterLink}/deletePropertyVideo`,
  activeDeactivePropertyVideo: `${masterLink}/activeDeactivePropertyVideo`,

  // PROPERTY POST MANAGEMENT
  createPropertyPost: `${propertyLink}/createPropertyPost`,
  editPropertyPost: `${propertyLink}/editPropertyPost`,
  viewPropertyPost: `${propertyLink}/viewPropertyPost`,
  listAllPropertyPost: `${propertyLink}/listAllPropertyPost`,
  deletePropertyPost: `${propertyLink}/deletePropertyPost`,
};

export default Apiconfigs;
