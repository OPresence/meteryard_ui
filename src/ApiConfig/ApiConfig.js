// export const baseurl = "http://192.168.1.30:8000"; //local
// export const baseurl = "http://192.168.1.18:8000"; //local
export const baseurl = "https://lms-api-backend.onrender.com/api/v1/user"; //local

let admin = `${baseurl}`;
const Apiconfigs = {
  userSignUp: `${admin}/userSignUp`,
  login: `${admin}/login`,
  otpVerify: `${admin}/otpVerify`,
  resendOtp: `${admin}/resendOtp`,
};

export default Apiconfigs;
