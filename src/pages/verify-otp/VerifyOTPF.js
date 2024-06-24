import React, { useState, useContext } from "react";
import {
  Typography,
  Box,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import moment from "moment";
import styled from "@emotion/styled";
import OtpInput from "react18-input-otp";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/Auth";
const OTPStyle = styled(Box)(({ theme }) => ({
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
      width: "35%",
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
const DisabledSpan = styled("span")({
  color: "#999", // Change color to gray
  pointerEvents: "none", // Disable mouse events
});
const VerifyOTP = ({
  _saveForgot,
  handleOpenReset,
  handleCloseOTP,
  handleOpenOTP,
  handleOpenForgot,
}) => {
  const auth = useContext(AuthContext);
  const [_OTP, setOTP] = useState("");
  const [getOtpValidate, setOtpValidate] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [isloading_otp, setIsLoadingOTP] = useState(false);
  const handleNameKeyDown = (otpValue) => {
    const numericRegex = /^[0-9]*$/;
    if (!numericRegex.test(otpValue)) {
      console.log("Please enter only numbers.");
      return;
    }
    setOTP(otpValue);
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
          email: _saveForgot?.email,
          otp: _OTP,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setIsLoading(false);
          toast.success(res?.responseMessage);
          handleOpenReset();
          handleCloseOTP();
        } else if (res?.responseCode == 409) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        } else if (res?.responseCode == 500) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        } else {
          toast.error(res?.responseMessage);
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.responseMessage);
      console.log("error", error);
    }
  };
  const OTP_Resend_Function = async (values) => {
    try {
      setIsLoadingOTP(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.resendOtp,
        data: {
          email: _saveForgot?.email,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          setIsLoadingOTP(false);
          auth.setEndtime(moment().add(1, "m").unix());

          toast.success(res?.responseMessage);
        } else if (res?.responseCode == 409) {
          toast.error(res?.responseMessage);
          setSignUpComplete(false);
          setIsLoading(false);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage);
          setSignUpComplete(false);
          setIsLoading(false);
        } else if (res?.responseCode == 500) {
          toast.error(res?.responseMessage);
          setSignUpComplete(false);
          setIsLoading(false);
        } else {
          toast.error(res?.responseMessage);
          setSignUpComplete(false);
          setIsLoading(false);
        }
      }
    } catch (error) {
      setIsLoadingOTP(false);
      toast.error(res?.responseMessage);
      console.log("error", error);
    }
  };
  return (
    <OTPStyle>
      <Box className="mapbox">
        <Typography variant="h5">Verify OTP</Typography>
        <Box className="otpSendBox">
          <Typography variant="h6">
            OTP has been sent to <span>{_saveForgot?.email}</span>
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
            numInputs={4}
            onChange={handleNameKeyDown}
            separateAfter={false}
            otpType="number"
            className="otpBox"
            onKeyDown={handleNameKeyDown}
          />
          <sapn
            style={{
              color: "red",
              fontFamily: "system-ui",
              fontWeight: "400",
              fontSize: "0.75rem",
              lineHeight: "1.66",
              paddingBottom: "20px",
            }}
          >
            {getOtpValidate && "Please enter valid OTP."}
          </sapn>
          <Typography variant="h6">
            {auth?.timeLeft &&
            auth?.timeLeft?.minutes != undefined &&
            auth?.timeLeft?.seconds != undefined ? (
              <span style={{}}>
                OTP will expire in &nbsp; {auth?.timeLeft?.minutes} M :{" "}
                {auth?.timeLeft?.seconds} S
              </span>
            ) : (
              ""
            )}
          </Typography>
        </FormControl>
        <Box mt={0} className="loginBox1" display={"flex"} gap={5}>
          <Button
            className="singup"
            fullWidth
            onClick={() => {
              handleOpenForgot();
              handleCloseOTP();
            }}
          >
            BACK &nbsp;
          </Button>
          <Button
            className="singup"
            onClick={handleFormSubmit}
            disabled={isloading}
          >
            Verify OTP &nbsp;
            {isloading && <CircularProgressCompoennt colorValue={"#fff"} />}
          </Button>
        </Box>

        <Box className={"DontRotp"} display={"flex"} alignItems={"center"}>
          <Typography variant="h6">
            If you don&apos;t receive any OTP? &nbsp;{" "}
          </Typography>
          <Button
            disabled={auth?.timeLeft?.seconds == undefined ? false : true}
            style={{ padding: "0" }}
            onClick={OTP_Resend_Function}
          >
            Resend OTP
          </Button>
          {isloading_otp && (
            <>
              &nbsp;
              <CircularProgressCompoennt colorValue={"#0099FF"} />
            </>
          )}
        </Box>
      </Box>
    </OTPStyle>
  );
};

export default VerifyOTP;
