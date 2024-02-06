// export const baseurl = "http://192.168.1.30:8000"; //local
// export const baseurl = "http://192.168.1.18:8000"; //local
export const baseurlUser = "https://lms-api-backend.onrender.com/api/v1/user"; //local
export const baseurlAdmin = "https://lms-api-backend.onrender.com/api/v1/admin"; //local
export const masterURL = "https://lms-api-backend.onrender.com/api/v1/master"; //local
export const staticContent =
  "https://lms-api-backend.onrender.com/api/v1/static"; //local

let user = `${baseurlUser}`;
let admin = `${baseurlAdmin}`;
let staticURL = `${staticContent}`;
let masterLink = `${masterURL}`;
const Apiconfigs = {
  userSignUp: `${user}/userSignUp`,
  login: `${user}/login`,
  otpVerify: `${user}/otpVerify`,
  resendOtp: `${user}/resendOtp`,
  uploadImage: `${user}/uploadImage`,
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
  createProjectType: `${masterLink}/createProjectType`,
  editProjectType: `${masterLink}/editProjectType`,
  viewProjectType: `${masterLink}/viewProjectType`,
  listAllProjectType: `${masterLink}/listAllProjectType`,
  deleteProjectType: `${masterLink}/deleteProjectType`,
  activeDeactiveProjectType: `${masterLink}/activeDeactiveProjectType`,
};

export default Apiconfigs;
