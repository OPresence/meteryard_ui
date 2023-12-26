import React, { useState } from "react";
import {
  Typography,
  Box,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import styled from "@emotion/styled";
import OtpInput from "react18-input-otp";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPStyle = styled("Box")(({ theme }) => ({
  "& .mapbox": {
    "& .otpSendBox": {
      "& h6": {
        fontSize: "14px",
        fontWeight: "400",
        marginTop: "10px",
        "& span": {
          color: "#a2d117",
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
    "& .otpFormControl1": {
      marginTop: "30px",
      "& span": {
        fontWeight: "600",
        fontSize: "14px",
        fontFamily: "system-ui",
        color: "#0099FF",
      },
    },
    "& .singup": {
      marginTop: "30px",
      background: "#a2d117",
      color: "#fff",
      padding: "10px",
    },
    "& .DontRotp": {
      marginTop: "30px",
      "& h6": {
        fontSize: "14px",
        fontWeight: "400",
        "& span": {
          fontWeight: "600",
          fontSize: "14px",
          fontFamily: "system-ui",
          cursor: "pointer",
        },
      },
    },
  },
  "& .otpBox": {
    margin: "10px 5px",
    "& input": {
      width: "50px !important",
      padding: "10px !important",
    },
  },
}));
const VerifyOTP = ({ _signcomplete, setSelectScreen, setSignUpComplete }) => {
  const [_OTP, setOTP] = useState("");
  const [getOtpValidate, setOtpValidate] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isloading_otp, setIsLoadingOTP] = useState(false);
  const handleOtpChange = async (enteredOtp) => {
    if (_OTP.length < 4) {
      setOtpValidate(true);
    } else {
      setOtpValidate(false);
    }
  };

  const handleFormSubmit = async () => {
    if (_OTP.length < 4) {
      handleOtpChange();
    } else {
      OTP_Verify_Function();
    }
  };
  const OTP_Verify_Function = async (values) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.otpVerify,
        data: {
          email: _signcomplete?.email,
          otp: _OTP,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setIsLoading(false);

          toast.success(res?.responseMessage); // Display success notification
          setSignUpComplete(false);
          setSelectScreen("Login");
        } else if (res?.responseCode == 400) {
          toast.error(res?.responseMessage); // Display success notification
          setIsLoading(false);
        } else {
          toast.error(res?.responseMessage); // Display success notification
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Please try again."); // Display error notification
      console.log("error", error);
    }
  };
  const OTP_Resend_Function = async (values) => {
    try {
      setIsLoadingOTP(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.resendOtp,
        data: {
          email: _signcomplete?.email,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setIsLoadingOTP(false);

          toast.success(res?.responseMessage); // Display success notification
        } else if (res?.responseCode == 400) {
          setIsLoadingOTP(false);

          toast.error(res?.responseMessage); // Display success notification
        } else {
          setIsLoadingOTP(false);

          toast.error(res?.responseMessage); // Display success notification
        }
      }
    } catch (error) {
      setIsLoadingOTP(false);

      toast.error("Please try again."); // Display error notification
      console.log("error", error);
    }
  };
  return (
    <OTPStyle>
      <Box className="mapbox">
        <Typography variant="h5">Verify OTP</Typography>
        <Box className="otpSendBox">
          <Typography variant="h6">
            OTP has been sent to <span>{_signcomplete?.email}</span>
          </Typography>
        </Box>
        <FormControl fullWidth className={"otpFormControl1"}>
          <span>Please Enter OTP and Verify.</span>
          <OtpInput
            value={_OTP}
            inputVariant="standard"
            autoComplete="off"
            autoFocus
            OTPLength={4}
            otpType="number"
            onChange={setOTP}
            separateAfter={false}
            className="otpBox"
          />
          <sapn
            style={{ color: "red", fontSize: "14px", paddingBottom: "20px" }}
          >
            {getOtpValidate && "Please enter valid OTP."}
          </sapn>
          <Typography variant="h6">
            OTP will expire in &nbsp; <span style={{}}>2m:10s</span>
          </Typography>
        </FormControl>
        <Button className="singup" fullWidth onClick={handleFormSubmit}>
          Verify OTP &nbsp;
          {isloading && <CircularProgressCompoennt colorValue={"#fff"} />}
        </Button>

        <Box className={"DontRotp"} display={"flex"}>
          <Typography variant="h6">
            If you don't receive any OTP? &nbsp;{" "}
            <span onClick={OTP_Resend_Function}>Resend OTP &nbsp;</span>
          </Typography>
          {isloading_otp && (
            <CircularProgressCompoennt colorValue={"#0099FF"} />
          )}
        </Box>
      </Box>
    </OTPStyle>
  );
};

export default VerifyOTP;
