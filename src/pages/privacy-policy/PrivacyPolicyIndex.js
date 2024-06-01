import React, { useEffect, useState, useSyncExternalStore } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import AdminLayout from "../../layout/AdminLayout";
import DialogComponent from "../../component/DialogComponent";

import { PostApiFunction, PutApiFunction } from "../../utils/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiconfigs from "../../ApiConfig/ApiConfig";

import { styled } from "@mui/system";
const Root = styled(Box)(({ theme }) => ({
  "& .mainAboutSection": {
    padding: "100px  0px",
  },
}));
const PrivacyPolicyIndex = () => {
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
      setISloading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllStaticContent,
        data: {
          search: "privacyPolicy",
          page: "1",
          limit: "10",
        },
      });
      if (res) {
        setISloading(false);
        setAbout(res?.result?.docs);
      }
    } catch (error) {
      setISloading(false);

      console.log("erorr", error);
    }
  };
  const AddAboutContent = async (values) => {
    try {
      setISloading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs?.editStaticContent,
        params: {
          staticId: _about[0]?._id,
        },
        data: {
          type: "privacyPolicy",
          title: values?.titleName,
          description: values?.description,
        },
      });
      if (res) {
        handleClose();

        setISloading(false);
        toast.success(res?.responseMessage);
        ListAboutUsContent();
      }
    } catch (error) {
      setISloading(false);
      handleClose();
      toast.success(res?.responseMessage);

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
          <Box className="mainAboutSection">
            <Box mt={2} display={"flex"} justifyContent={"space-between"}>
              <Typography variant="h2">{_about[0]?.title}</Typography>
              <DialogComponent
                title="Privacy Policy"
                ButtonName="Update Privacy Policy"
                HeadingDialog="Update Privacy Policy"
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

export default PrivacyPolicyIndex;
