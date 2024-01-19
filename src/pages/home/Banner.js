// import React, { useState } from "react";
// import { Container, Typography, Box, Button } from "@mui/material";
// import styled from "@emotion/styled";
// import ButtonSwitchComponent from "src/component/ButtonSwitchComponent";
// import RegisterSeller from "src/component/RegisterSeller";

// const MainComponent = styled("Box")(({ theme }) => ({
//   "& .mainBox": {
//     height: "100vh",
//     overflow: "hidden",
//     "& .backImage": {
//       maxWidth: "892px",
//       overflow: "hidden",
//       position: "relative",
//       marginTop: "18px",
//       left: "0",
//       "@media(max-width:900px)": {
//         maxWidth: "753px",
//         maxHeight: "575px",
//         overflow: "hidden",
//         position: "relative",
//         marginTop: "20px",
//       },
//     },
//   },
//   "& .bacBox": {
//     position: "relative",
//     left: "100px",
//     "@media(max-width:900px)": {
//       left: "0",
//     },
//   },
//   "& .handImage": {
//     left: "50px",
//     bottom: "120px",
//     position: "absolute",
//     maxWidth: "748px",
//   },
//   "& .contentBox": {
//     top: "35%",
//     zIndex: "1",
//     "& .find": {
//       color: "#444444",
//     },
//     "& .Make": {
//       color: "#A7D325",
//     },
//   },
//   "& .ButtonClass": {
//     borderBottomLeftRadius: "20px",
//     padding: 0,
//     clipPath: "polygon(0% 4%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
//     color: "#fff",
//     "& .buttonIconBox": {
//       background: "#fff",
//       borderTopRightRadius: "20px",
//       borderBottomLeftRadius: "20px",
//     },
//   },
//   "& .ButtonClass1": {
//     borderBottomLeftRadius: "20px",
//     padding: 0,
//     clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24% 0%)",
//     borderTopRightRadius: "20px",
//     borderBottomLeftRadius: "0px",
//     marginLeft: "-40px",
//     // background: "#A7D325",
//     color: "#fff",

//     "@media(max-width:433px)": {
//       marginTop: "20px",
//       marginLeft: "0px",
//     },
//     "& .buttonIconBox": {
//       background: "#fff",
//       borderTopRightRadius: "20px",
//       borderBottomLeftRadius: "20px",
//     },
//   },
// }));

// export default function Home() {
//   const [activeBtn, setActivebtn] = useState("SEARCH");
//   const [open, setOpen] = useState(false);
//   return (
//     <MainComponent>
//       <Box>
//         <Container maxWidth>
//           <Box position={"absolute"} className="contentBox">
//             <Box>
//               <Typography variant="h1">
//                 <span className="find">Find Your Place</span>
//                 <span className="Make">, Make It Home</span>
//               </Typography>
//               <Box mt={3.5}>
//                 <Typography variant="h4">
//                   Please Select Your Category
//                 </Typography>
//               </Box>
//               <Box mt={5} position={"relative"} zIndex={1}>
//                 <Button
//                   variant="button"
//                   className="ButtonClass"
//                   style={activeBtn == "Buyer" ? { background: "#A7D325" } : {}}
//                   onClick={() => setActivebtn("Buyer")}
//                 >
//                   <Box p={"10px"} className={"buttonIconBox"}>
//                     <Box maxWidth={25}>
//                       <img
//                         src="/images/meteryard/icons/advisory.png"
//                         width={"100%"}
//                       />
//                     </Box>
//                   </Box>
//                   <Box p={"0 90px 0 50px"}>
//                     <span>Buyer</span>
//                   </Box>
//                 </Button>
//                 &nbsp;
//                 <Button
//                   variant="button"
//                   className="ButtonClass1"
//                   style={activeBtn == "Seller" ? { background: "#A7D325" } : {}}
//                   onClick={() => {
//                     setActivebtn("Seller");
//                     // setOpen(true);
//                   }}
//                 >
//                   <Box p={"0px 50px 0 90px"}>
//                     <span>Seller</span>
//                   </Box>
//                   <Box p={"10px"} className={"buttonIconBox"}>
//                     <Box maxWidth={25}>
//                       <img
//                         src="/images/meteryard/icons/advisory.png"
//                         width={"100%"}
//                       />
//                     </Box>
//                   </Box>
//                 </Button>
//               </Box>
//               <ButtonSwitchComponent activeBtn={activeBtn} setOpen={setOpen} />
//             </Box>
//           </Box>
//         </Container>
//         <Box className="mainBox">
//           <Box display={"flex"} justifyContent={"end"} className="bacBox">
//             <Box>
//               <Box className="backImage">
//                 <img
//                   src="/images/meteryard/Graphics/Path 7886.png"
//                   alt=""
//                   height={"100%"}
//                   width={"100%"}
//                 />
//                 <Box>
//                   <Box className="handImage">
//                     <img
//                       src="/images/meteryard/Images/home-background-images.png"
//                       alt=""
//                       width={"100%"}
//                     />
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//       <RegisterSeller open={open} setOpen={setOpen} />
//     </MainComponent>
//   );
// }

import React, { useState, useContext } from "react";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";
import ButtonSwitchComponent from "../../component/ButtonSwitchComponent";
import RegisterSeller from "src/component/RegisterSeller";
import SearchIcon from "@mui/icons-material/Search";
const MainComponent = styled("Box")(({ theme }) => ({
  "& .mainBox": {
    height: "100vh",
    overflow: "hidden",
    "& .backImage": {
      maxWidth: "892px",
      overflow: "hidden",
      position: "relative",
      marginTop: "18px",
      left: "0",
      "@media(max-width:900px)": {
        maxWidth: "753px",
        maxHeight: "575px",
        overflow: "hidden",
        position: "relative",
        marginTop: "20px",
      },
    },
  },
  "& .bacBox": {
    position: "relative",
    left: "100px",
    "@media(max-width:900px)": {
      left: "0",
    },
  },
  "& .handImage": {
    left: "50px",
    bottom: "120px",
    position: "absolute",
    maxWidth: "748px",
  },
  "& .contentBox": {
    top: "35%",
    zIndex: "1",
    "& .Banner_inputField": {
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      // boxShadow: "0px 3px 27px #68686829",
      borderRadius: "11px",
      // height: "65px",
      // padding: "5px 0px",
      "& ::placeholder": {
        textAlign: "left",
        font: "normal normal medium 23px/30px Samsung Sharp Sans",
        letterSpacing: "0.23px",
        fontSize: "18px",
        fontWeight: 400,
        color: "#949494",
        opacity: 1,
      },
    },

    "& .searchbox": {
      background: "#A9D910 0% 0% no-repeat padding-box;",
      position: "absolute",
      right: "0px",
      top: "0px",
      width: "65px",
      // height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // padding: "10px",
      borderRadius: "20px 0px 0px 20px;",
    },
    "& .Banner_textFild": {
      position: "relative",
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: "0px 3px 27px #68686829",
      borderRadius: "11px",
      opacity: "1",
      width: "10%",
      transition: "0.8s",
      // padding: "0 0 0 20px",
      marginLeft: "20px",

      "&:hover": {
        transition: "0.8s",
        width: "80%",
      },
    },
    "& .find": {
      color: "#444444",
    },
    "& .Make": {
      color: "#A7D325",
    },
  },
  "& .buttonBox": {
    "& .ButtonClass": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 4%, 100% 0%, 70% 123%, 0% 100%, 0 0%)",
      color: "#fff",
      background: "rgb(172 172 172)",

      "& .buttonText": {
        color: "#0000",
      },
      "& .buttonIconBox": {
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
      },

      "&:hover": {
        background: "#A7D325",
        "& .hoverBox": {
          display: "block",
        },
      },
    },

    "& .hoverBox": {
      display: "none",
      position: "absolute",
    },
    "&:hover": {
      "& .hoverBox": {
        display: "block",
      },
    },
  },
  "& .buttonBoxSecond": {
    "& .ButtonClass1": {
      borderBottomLeftRadius: "20px",
      padding: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 24% 0%)",
      borderTopRightRadius: "20px",
      borderBottomLeftRadius: "0px",
      marginLeft: "-40px",
      background: "rgb(172 172 172)",
      color: "#fff",
      "&:hover": {
        background: "#A7D325",
      },
      "@media(max-width:433px)": {
        marginTop: "20px",
        marginLeft: "0px",
      },
      "& .buttonIconBox": {
        background: "#fff",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
      },
    },
    "& .hoverBox1": {
      display: "none",
      position: "absolute",
    },
    "&:hover": {
      "& .hoverBox1": {
        display: "block",
      },
    },
  },
}));

export default function Home() {
  const [activeBtn, setActivebtn] = useState("SEARCH");
  const [open, setOpen] = useState(false);
  const handleMouseEnter = (value) => {
    setActivebtn(value);
  };

  const handleMouseLeave = (value) => {
    setActivebtn(value);
  };
  return (
    <MainComponent>
      <Box>
        <Container maxWidth>
          <Box position={"absolute"} className="contentBox">
            <Box>
              <Typography variant="h1">
                <span className="find">Find Your Place</span>
                <span className="Make">, Make It Home</span>
              </Typography>
              <Box mt={3.5}>
                <Typography variant="h4">
                  Please Select Your Category
                </Typography>
              </Box>
              <Box display={"flex"}>
                <Box
                  mt={5}
                  position={"relative"}
                  zIndex={1}
                  className={"buttonBox"}
                >
                  <Button
                    variant="button"
                    className="ButtonClass"
                    onMouseEnter={() => handleMouseEnter("Buyer")}
                    // onMouseLeave={() => handleMouseEnter("SEARCH")}
                  >
                    <Box p={"10px"} className={"buttonIconBox"}>
                      <Box maxWidth={25}>
                        <img
                          src="/images/meteryard/icons/advisory.png"
                          width={"100%"}
                        />
                      </Box>
                    </Box>
                    <Box p={"0 90px 0 50px"}>
                      <span style={{ color: "#eeeeee" }} className="buttonText">
                        Buyer
                      </span>
                    </Box>
                  </Button>
                  &nbsp;
                  <Box className={"hoverBox"}>
                    <ButtonSwitchComponent
                      Type="Buyer"
                      activeBtn={activeBtn}
                      setOpen={setOpen}
                    />
                  </Box>
                </Box>
                <Box
                  mt={5}
                  position={"relative"}
                  zIndex={1}
                  className={"buttonBoxSecond"}
                >
                  <Button
                    variant="button"
                    className="ButtonClass1"
                    onMouseEnter={() => handleMouseEnter("Seller")}
                    // onMouseLeave={() => handleMouseEnter("SEARCH")}
                  >
                    <Box p={"0px 50px 0 90px"}>
                      <span>Seller</span>
                    </Box>
                    <Box p={"10px"} className={"buttonIconBox"}>
                      <Box maxWidth={25}>
                        <img
                          src="/images/meteryard/icons/advisory.png"
                          width={"100%"}
                        />
                      </Box>
                    </Box>
                  </Button>
                  <Box className={"hoverBox1"}>
                    <ButtonSwitchComponent
                      Type="Seller"
                      activeBtn={activeBtn}
                      setOpen={setOpen}
                    />
                  </Box>
                </Box>
              </Box>
              <Box mt={3} className={"Banner_textFild"}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  sx={{
                    "& fieldset": { border: "none", height: "10px" },
                  }}
                  variant="outlined"
                  placeholder="Search your property..."
                  className={"Banner_inputField"}
                />
                <Button className="searchbox">
                  <SearchIcon style={{ fontSize: "43px", color: "#FFFF" }} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <Box className="mainBox">
          <Box display={"flex"} justifyContent={"end"} className="bacBox">
            <Box>
              <Box className="backImage">
                <img
                  src="/images/meteryard/Graphics/Path 7886.png"
                  alt=""
                  height={"100%"}
                  width={"100%"}
                />
                <Box>
                  <Box className="handImage">
                    <img
                      src="/images/meteryard/Images/home-background-images.png"
                      alt=""
                      width={"100%"}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <RegisterSeller open={open} setOpen={setOpen} />
    </MainComponent>
  );
}
