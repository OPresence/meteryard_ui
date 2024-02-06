import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Slide from "@mui/material/Slide";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { PostApiFunction } from "../../utils";
import { Form, Formik } from "formik";
import * as yep from "yup";
import CircularProgressCompoennt from "../../component/CircularProgressComponent";
import { toast } from "react-toastify";
import { styled } from "@mui/system";
import "react-toastify/dist/ReactToastify.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogStyle = styled("Box")(({ theme }) => ({
  "& button": {
    background: "#A2D117",
    padding: "8px 25px",
    borderRadius: "10px",

    "& span": {
      color: "#fff",
      fontSize: "14px",
    },
  },
  "& h4": {
    fontWeight: "500",
    textAlign: "center",
  },
  "& .CreateBox": {
    background: "#A2D117",
    padding: "8px 25px",
    borderRadius: "10px",

    "& span": {
      color: "#fff",
      fontSize: "14px",
    },
  },
}));
const modalClassStyles = {
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    borderTop: "13px solid #AED735",
    borderRadius: "20px",
    pointerEvents: "none",
    boxSizing: "border-box",
    width: "380px",
    height: "10px",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    borderLeft: "13px solid #AED735",
    borderRadius: "20px",
    pointerEvents: "none",
    boxSizing: "border-box",
    width: "0",
    height: "278px",
  },
};
const LoginStyle = styled("Box")(({ theme }) => ({
  "& .loginBox1": {
    "& button": {
      background: "#A2D117",
      color: "#fff",
      padding: "10px",
      borderRadius: "50px",
    },
    "& span": {
      color: "red",
      cursor: "pointer",
    },
  },
  "& .backgroundBox": {
    backgroundSize: "25%",
    backgroundPosition: "left",
    display: "flex",
    justifyContent: "start",
    backgroundRepeat: "no-repeat",
    backgroundImage: 'url("/images/Group 8505.svg")',
  },
  // "& .checkBox": {
  //   display: "flex",
  //   alignItems: "center",
  // },
  "& .loginBox": {
    padding: "0 35px",
    "& input": {
      padding: "10.5px 14px !important",
    },
    "& h2": {
      fontWeight: "600",
      color: "#6F6F6F",
    },
    "& h6": {
      color: "#6F6F6F",
      fontSize: "16px",
    },
    "& .buttonBox": {
      gap: "20px",
      display: "flex",
      marginTop: "20px",
      "& .singup": {
        background: "#0099FF",
        border: "1px solid #0099FF",
        color: "#fff",
        padding: "5px 20px",
      },
      "& .singin": {
        background: "#fff",
        border: "1px solid #0099FF",
        color: "#0099FF",
        padding: "0px 20px",
      },
    },
    "& .checkBox": {
      display: "flex",
      alignItems: "center",
      "& span": {
        color: "#0099FF",
      },
    },
    "& .socialIconBox": {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      "& .iconButton": {
        borderRadius: "0",
        border: "1px solid #0099FF",
        padding: "3px 20px",
        "& svg": {
          fontSize: "16px",
          color: "#0099FF",
        },
      },
    },
  },

  "& .TabButton": {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "0 0px 10px 0",
    "& button": {
      padding: "8px 40px",
      background: "#0099FF",
      color: "#fff",
    },
  },
}));

const AdminLogin = () => {
  const router = useRouter();

  const formInitialSchema = {
    email: "anupriyamishra8423@gmail.com",
    password: "admin1234",
  };

  const formValidationSchemaLogin = yep.object().shape({
    email: yep.string().required("Email is required."),

    password: yep.string().required("Password is required."),
  });
  const [isloading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const Login_Function = async (values) => {
    let data_Login = {
      email: values?.email,
      password: values?.password,
    };
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.login,
        data: data_Login,
      });
      if (res) {
        console.log("05444646454--->", res);
        handleClose();
        setIsLoading(false);
        router.push("/admin");
        toast.success(res?.responseMessage); // Display success notification
        window.sessionStorage.setItem("adminToken", res?.result?.token);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("SignUp failed. Please try again."); // Display error notification
      console.log("error", error);
    }
  };

  return (
    <Dialog
      maxWidth={"md"}
      fullWidth
      open={true}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <LoginStyle>
        <Box minHeight={500} className="">
          <Container maxWidth>
            <Box maxWidth={250} p={3}>
              <img src="/images/logo.png" width={"100%"} />
            </Box>
            <Box position={"relative"}>
              <Formik
                initialValues={formInitialSchema}
                enableReinitialize={true}
                initialStatus={{
                  success: false,
                  successMsg: "",
                }}
                validationSchema={formValidationSchemaLogin}
                onSubmit={(values) => {
                  Login_Function(values);
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  touched,
                  values,
                  setFieldValue,
                }) => (
                  <Form>
                    <Grid container spacing={3}>
                      <Grid
                        item
                        lg={7}
                        md={7}
                        sm={12}
                        xs={12}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <Box
                          style={{
                            maxWidth: "280px",
                            left: "-30px",
                            position: "absolute",
                            top: "80px",
                          }}
                        >
                          <img src="/images/Group 8505.svg" width={"100%"} />
                        </Box>
                        <Box
                          maxWidth={400}
                          style={{
                            position: "absolute",
                            left: "50px",
                            top: 60,
                          }}
                        >
                          <img src="/images/Group 8504.svg" width={"100%"} />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        lg={5}
                        md={5}
                        sm={12}
                        xs={12}
                        style={{
                          padding: "25px",
                        }}
                      >
                        <Box>
                          <Box className="loginBox">
                            <Typography variant="h2">
                              Login as a admin user
                            </Typography>

                            <Box mt={2}>
                              <Typography variant="h6">
                                User ID/Email
                              </Typography>
                              <TextField
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                fullWidth
                                variant="outlined"
                                placeholder="Examle11@gmail.com"
                              />
                              <FormHelperText
                                error
                                style={{ marginLeft: "0px !important" }}
                              >
                                {touched.email && errors.email}
                              </FormHelperText>
                            </Box>

                            <Box mt={2}>
                              <Typography variant="h6">Password</Typography>
                              <TextField
                                fullWidth
                                id="password"
                                variant="outlined"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="********"
                              />
                              <FormHelperText
                                error
                                style={{ marginLeft: "0px !important" }}
                              >
                                {touched.password && errors.password}
                              </FormHelperText>
                            </Box>

                            <Box mt={3} className="loginBox1">
                              <Button
                                className="singup"
                                fullWidth
                                type="submit"
                                disabled={isloading}
                              >
                                Sign In &nbsp;
                                {isloading && (
                                  <CircularProgressCompoennt
                                    colorValue={"#fff"}
                                  />
                                )}
                              </Button>

                              <Box mt={2} textAlign={"center"}>
                                <Typography variant="h6">
                                  Terms of use privacy policy
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Container>
        </Box>
      </LoginStyle>
    </Dialog>
  );
};

export default AdminLogin;
