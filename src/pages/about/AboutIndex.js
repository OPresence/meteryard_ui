import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import AdminLayout from "../../layout/AdminLayout";
import DialogComponent from "../../component/DialogComponent";
import { PostApiFunction, PutApiFunction } from "../../utils/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { styled } from "@mui/system";
const Root = styled("Box")(({ theme }) => ({
  "& .mainPage": {
    position: "relative", // Add position relative to enable positioning of ::before pseudo-element
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    height: "100%",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderTop: "9px solid #444444", // Customize the border as needed
      borderRadius: "20px", // Use the same border radius as the main container
      pointerEvents: "none", // Ensure the pseudo-element doesn't interfere with interactions
      boxSizing: "border-box", // Include border in the total width/height
    },
    "& .addAbout": {
      background: "#a2d117",
      border: "1px solid #a2d117",
      color: "#fff",
      padding: "8px 25px",
      borderRadius: "10px",
    },
    "& .headingBox": {
      padding: "15px 0",
      "& h1": {
        fontSize: "16px",
        fontWeigth: "600",
      },
    },
  },
}));
const AboutIndex = () => {
  const [_change_about, setChange_About] = useState("");
  const [_about, setAbout] = useState("");
  const [_isloading, setISloading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const ListAboutUsContent = async (values) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllStaticContent,
        data: {
          search: "About US",
          page: "1",
          limit: "10",
        },
      });
      if (res) {
        setAbout(res?.result?.docs);
      }
    } catch (error) {
      console.log(error);

      console.log("erorr", error);
    }
  };
  const AddAboutContent = async (values) => {
    try {
      setISloading(true);
      const res = await PutApiFunction({
        params: {
          staticId: _about[0]?._id,
        },
        endPoint: Apiconfigs?.editStaticContent,
        data: {
          type: "About US",
          title: values?.titleName,
          description: values?.description,
        },
      });
      if (res) {
        ListAboutUsContent();
        handleClose();
        setISloading(false);
        toast.success(res?.responseMessage);
      }
    } catch (error) {
      handleClose();

      setISloading(false);
      console.log("erorr", error);
    }
  };
  useEffect(() => {
    ListAboutUsContent();
  }, []);
  return (
    <Box>
      <AdminLayout>
        <Root>
          <Box className="mainPage">
            <Box mt={2} display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h2">{_about[0]?.title}</Typography>
              <DialogComponent
                title="About Content"
                ButtonName="Update About US"
                HeadingDialog="Update About Content"
                AddMoreList={AddAboutContent}
                _isloading={_isloading}
                open={open}
                setOpen={setOpen}
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                _initial_state={_change_about}
                set_Content_State={setChange_About}
                _about={_about}
              />
            </Box>
            <Box mt={2}>
              <Divider />
            </Box>
            <Box mt={2}>
              <Typography variant="h2"></Typography>

              <div
                dangerouslySetInnerHTML={{ __html: _about[0]?.description }}
              ></div>
            </Box>
          </Box>
        </Root>
      </AdminLayout>
    </Box>
  );
};

export default AboutIndex;
