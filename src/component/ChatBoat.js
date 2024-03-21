import React, { useState } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import "../Scss/scroll.css";
import SendIcon from "@mui/icons-material/Send";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MinimizeIcon from "@mui/icons-material/Minimize";
import SearchIcon from "@mui/icons-material/Search";
import CancelIcon from "@mui/icons-material/Cancel";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Divider from "@mui/material/Divider";

const ChatBoat = () => {
  const [_view_chat_screen, setView_chat_Screen] = useState(false);
  const [_view_search_screen, setSearch_screen] = useState(false);
  const chatJson = [
    {
      type: "text",
      text: "Hello Steve",
      from: "jid_1109",
      sender_name: "Michel Slatter",
      to: "jid_1111",
    },
    {
      type: "text",
      text: "Hi Michael",
      from: "jid_1111",
      sender_name: "Steve Jobs",
      to: "jid_1109",
    },
    {
      type: "text",
      text: "Check this",
      from: "jid_1109",
      sender_name: "Michel Slatter",
      to: "jid_1111",
    },
    {
      type: "text",
      text: "Hello Steve",
      from: "jid_1109",
      sender_name: "Michel Slatter",
      to: "jid_1111",
    },
    {
      type: "text",
      text: "Hi Michael",
      from: "jid_1111",
      sender_name: "Steve Jobs",
      to: "jid_1109",
    },
    {
      type: "text",
      text: "Check this below destination",
      from: "jid_1109",
      sender_name: "Michel Slatter",
      to: "jid_1111",
    },
    // {
    //   type: "text",
    //   text: "Can  you send few more",
    //   from: "jid_1111",
    //   sender_name: "Steve Jobs",
    //   to: "jid_1109",
    // },
    // {
    //   type: "text",
    //   text: "Here are few more travel destinations around europe, united states of america, japan, southern america, south africa, congo, sri lanka, west indies, green land and australia",
    //   from: "jid_1109",
    //   sender_name: "Michel Slatter",
    //   to: "jid_1111",
    // },
  ];
  const toggleChatScreen = () => {
    setView_chat_Screen((prevState) => !prevState);
  };
  const toggleSearchScreen = () => {
    setSearch_screen((prevState) => !prevState);
  };
  return (
    <div>
      <Box>
        {_view_chat_screen && (
          <Box
            style={{
              position: "fixed",
              background: "#fff",
              top: "115px",
              right: "22px",
              zIndex: 1,
              borderRadius: "0 10px 10px 10px",
              maxWidth: 500,
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            }}
          >
            <Box
              style={
                _view_search_screen
                  ? {
                      background: "#3B3B3B",
                      position: "absolute",
                      width: "200px",
                      height: "300px",
                      left: "-200px",
                      borderRadius: "10px 0 0 10px",
                    }
                  : {
                      background: "transparent",
                      position: "absolute",
                      //   width: "200px",
                      //   height: "300px",
                      left: "-200px",
                      borderRadius: "10px 0 0 10px",
                    }
              }
            >
              <Box display={"flex"} m={"10px 0 0 10px"}>
                <Box
                  style={
                    _view_search_screen
                      ? { border: "1px solid grey", borderRadius: "10px" }
                      : {}
                  }
                >
                  <IconButton
                    onClick={() => {
                      if (!_view_search_screen) {
                        toggleSearchScreen();
                      }
                    }}
                    style={
                      _view_search_screen
                        ? {
                            position: "absolute",
                            // background: "#a7d325",

                            right: "35px",
                            borderRadius: "10px 0 0 10px",
                          }
                        : {
                            right: "-190px",
                            background: "#a7d325",
                            borderRadius: 0,
                            top: 0,
                            position: "absolute",
                          }
                    }
                  >
                    <SearchIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <Box
                    style={
                      _view_search_screen
                        ? { borderRadius: "10px 0 0 10px" }
                        : {
                            display: "none",
                          }
                    }
                  >
                    <input
                      placeholder="search seller..."
                      style={{
                        borderRadius: "10px 0 0 10px",
                        height: "40px",
                        padding: "0 10px",
                        border: "none",
                        outline: "none",
                        width: "88%",
                        background: "transparent",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  style={
                    _view_search_screen
                      ? { borderRadius: "10px 0 0 10px" }
                      : {
                          display: "none",
                        }
                  }
                >
                  <IconButton onClick={toggleSearchScreen}>
                    <CancelIcon style={{ color: "#fff" }} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                class={_view_search_screen ? "scrollbar" : ""}
                id="style-3"
                style={{ background: "transparent" }}
              >
                <Box class="force-overflow">
                  <Box
                    style={
                      _view_search_screen
                        ? { display: "block" }
                        : {
                            display: "none",
                          }
                    }
                  >
                    <Box p={"20px 10px"} style={{ cursor: "pointer" }}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "red",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Online
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"} style={{ cursor: "pointer" }}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "green",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Busy
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    {/* <Box p={"5px 10px 0 10px"} style={{ cursor: "pointer" }}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "grey",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Offline
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "red",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Online
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "green",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Busy
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "grey",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Offline
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "red",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Online
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "green",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Busy
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "grey",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Offline
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box>
                    <Box p={"5px 10px 0 10px"}>
                      <Box display={"flex"}>
                        <Box position={"relative"}>
                          <Avatar
                            alt="Remy Sharp"
                            src="/images/meteryard/Images/chat-user.webp"
                            sx={{ width: 40, height: 40 }}
                          />{" "}
                          <FiberManualRecordIcon
                            style={{
                              color: "red",
                              position: "absolute",
                              bottom: "0",
                              right: "-3px",
                              fontSize: "16px",
                            }}
                          />
                        </Box>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Box>
                          <Typography
                            variant="body1"
                            style={{ fontWeight: "500", color: "#fff" }}
                          >
                            Anuj Sharma
                          </Typography>
                          <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                          >
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Seller
                            </Typography>{" "}
                            <Typography
                              variant="overline"
                              style={{ fontWeight: "500" }}
                            >
                              Online
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={1}>
                        <Divider color={"#fff"} />
                      </Box>
                    </Box> */}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                style={{
                  background:
                    "transparent linear-gradient(270deg, #EA6F6F 0%, #565656 100%) 0% 0%",
                  padding: "10px",
                  borderRadius: "0 10px 0 0",
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  //   alignItems={"center"}
                >
                  <Box>
                    <Box
                      height={50}
                      width={50}
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      style={{
                        background: "#fff",
                        borderRadius: "50px",
                      }}
                    >
                      <img
                        src="/images/meteryard/Images/profile.png"
                        width={"100%"}
                      />
                    </Box>

                    <Typography
                      variant="body1"
                      style={{
                        fontWeight: "600",
                        color: "#fff",
                        marginTop: "5px",
                        marginBottom: "-5px",
                      }}
                    >
                      Hi There !
                    </Typography>
                    <Typography
                      variant="overline"
                      style={{
                        fontWeight: "500",
                        color: "#fff",
                      }}
                    >
                      Welcome To City Chat
                    </Typography>
                  </Box>
                  <MinimizeIcon
                    onClick={() => {
                      toggleChatScreen();
                      setSearch_screen(false);
                    }}
                    style={{
                      color: "#fff",
                      marginTop: "-20px",
                      fontSize: "35px",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </Box>
              <Box class="scrollbar" id="style-3">
                <Box class="force-overflow">
                  <Box>
                    <Box p={"20px"}>
                      {chatJson.map((data, index) => {
                        return (
                          <Box key={index}>
                            <Box display={"flex"} alignItems={"center"} mt={1}>
                              <Box maxWidth={50} maxHeight={50} style={{}}>
                                <Avatar
                                  alt="Remy Sharp"
                                  src="/images/meteryard/Images/chat-user.webp"
                                  sx={{ width: 30, height: 30 }}
                                />
                              </Box>
                              &nbsp; &nbsp;
                              <Box
                                style={{
                                  padding: "3px 20px",
                                  background: "#FFD99F",
                                  borderRadius: "50px 50px 50px 0",
                                  maxWidth: 155,
                                }}
                              >
                                <Typography
                                  variant="overline"
                                  style={{
                                    fontWeight: "600",
                                    marginTop: "5px",
                                    marginBottom: "-5px",
                                    color: "#000",
                                  }}
                                >
                                  {data?.text}
                                </Typography>
                              </Box>
                              &nbsp; &nbsp;
                              <Box>
                                <Typography
                                  variant="overline"
                                  style={{ color: "#000" }}
                                >
                                  4:45 PM
                                </Typography>
                              </Box>
                            </Box>
                            <Box display={"flex"} justifyContent={"end"} mt={1}>
                              <Box display={"flex"} alignItems={"center"}>
                                <Box>
                                  <Typography
                                    variant="overline"
                                    style={{ color: "#000" }}
                                  >
                                    4:45 PM
                                  </Typography>
                                </Box>
                                &nbsp; &nbsp;
                                <Box
                                  style={{
                                    padding: "3px 20px",
                                    background: "#F0F0F0",
                                    borderRadius: "50px 50px 50px 0",
                                    maxWidth: 155,
                                  }}
                                >
                                  <Typography
                                    variant="overline"
                                    style={{
                                      fontWeight: "600",
                                      marginTop: "5px",
                                      marginBottom: "-5px",
                                      color: "#000",
                                    }}
                                  >
                                    {data?.text}
                                  </Typography>
                                </Box>
                                &nbsp; &nbsp;
                                <Box maxWidth={50} maxHeight={50} style={{}}>
                                  <Avatar
                                    alt="Remy Sharp"
                                    src="/images/meteryard/Images/chat-user.webp"
                                    sx={{ width: 30, height: 30 }}
                                  />
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box p={"10px"}>
              <Box
                style={{
                  borderRadius: "10px",
                  border: "0.5px solid #000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 10px 0 10px",
                }}
              >
                <CameraAltIcon
                  style={{ color: "#000", fontSize: "30px", cursor: "pointer" }}
                />

                <input
                  placeholder="something here....."
                  style={{
                    borderRadius: "10px",
                    height: "40px",
                    padding: "0 10px",
                    border: "none",
                    outline: "none",
                  }}
                />
                <SendIcon
                  style={{ color: "#000", fontSize: "30px", cursor: "pointer" }}
                />
              </Box>
            </Box>
          </Box>
        )}

        <Box
          style={{
            position: "fixed",
            bottom: "0",
            right: "22px",
            zIndex: 1,
          }}
        >
          <Box maxWidth={100}>
            <img
              onClick={() => {
                toggleChatScreen();
                setSearch_screen(false);
              }}
              src="/images/meteryard/Images/chat-boat-icon.gif"
              width={"100%"}
              style={{
                borderRadius: "50px",
                cursor: "pointer",
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ChatBoat;
