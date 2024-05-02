import React, { useEffect, useState } from "react";
import { Box, Divider, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import AdminLayout from "../../layout/AdminLayout";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import BlockIcon from "@mui/icons-material/Block";
import ListPagination from "../../component/ListPagination";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {
  PostApiFunction,
  convertDateTime,
  PutApiFunction,
  DeleteApiFunction,
} from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableList from "../../component/TableList";
import FilterComponent from "../../component/FilterComponent";
import ViewDialog from "../admin/component/ViewDialog";
import SureModal from "../../component/SureModal";
import LoaderComponent from "../../component/LoaderComponent";

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
  },
}));
const AdminIndex = () => {
  const headerData = [
    {
      title: "Name",
    },
    {
      title: "Email",
    },
    {
      title: "Department Name",
    },
    {
      title: "CreatedAt",
    },
    {
      title: "Action",
    },
  ];
  const [open, setOpen] = useState(false);
  const [_adminlist, setAdminList] = useState([]);
  const [_isloading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [_count, setCount] = useState("");
  const [openView, setOpenView] = useState(false);
  const [_viewData, setViewData] = useState("");
  const [_IconType, setIconType] = useState("");
  const [_confirm, setConfirm] = useState(false);
  const [_listloading, setListLoading] = useState(false);
  const [_departmentlist, setDepartmentList] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleViewOpen = (data, type) => {
    setOpenView(true);
    setViewData(data);
    setIconType(type);
  };
  const handleViewClose = (data) => {
    setOpenView(false);
    setIsLoading(false);
  };
  const confirmModalOpen = (data, type) => {
    setIconType(type);
    setConfirm(true);
    setViewData(data);
  };
  const confirmModalClose = () => {
    setConfirm(false);
    setIsLoading(false);
  };

  // List Sub-Admin
  const GetAdminLIst = async () => {
    try {
      setListLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.listAllUsers,
        data: {
          search: "ADMIN",
          page: page,
          limit: "10",
        },
      });
      if (res) {
        setListLoading(false);

        if (res?.responseCode == 200) {
          setAdminList(res?.result?.docs);
          setIsLoading(false);
          setCount(res?.result?.pages);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage);
          setAdminList([]);
        } else {
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setAdminList([]);

      setListLoading(false);
      console.log(error);
    }
  };
  // Add Sub Admin
  const Add_Sub_Admin = async (value, code) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.createSubAdmin,
        data: {
          name: value?.Name,
          email: value?.email,
          password: value?.password,
          countryCode: value?.code,
          phoneNumber: value?.phoneNo,
          departmentId: value?.department,
          status: "ACTIVE",
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          GetAdminLIst();
          toast.success(res?.responseMessage);
          setIsLoading(false);
          handleClose();
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
          handleClose();
        } else if (res?.responseCode == 501) {
          toast.error(res?.responseMessage);
          setIsLoading(false);
          handleClose();
        } else if (res?.responseCode == 409) {
          console.log("sjdjsjdsjhd---->", typeof res?.responseCode);
          toast.error(res?.responseMessage);
          setIsLoading(false);
          handleClose();
        } else {
          setIsLoading(false);
          handleClose();
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setIsLoading(false);
      handleClose();
      console.log("error", error);
    }
  };
  // updat admin
  const Update_Admin = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.editSubAdmin,
        data: {
          name: value?.Name,
          email: value?.email,
          password: value?.password,
          countryCode: value?.code,
          phoneNumber: value?.phoneNo,
          departmentId: value?.department,
          status: value?.status,
        },
        params: {
          admintId: _viewData?._id,
        },
      });
      if (res) {
        GetAdminLIst();

        if (res?.responseCode == 200) {
          setIsLoading(false);
          handleViewClose();
          toast.success(res?.responseMessage);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);
          handleViewClose();
          toast.error(res?.responseMessage);
        } else if (res?.responseCode == 501) {
          setIsLoading(false);
          handleViewClose();
          toast.error(res?.responseMessage);
        } else {
          setIsLoading(false);
          handleViewClose();
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setIsLoading(false);
      handleViewClose();
      console.log("error", error);
    }
  };
  const AD_Admin = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.activeBlockUser,

        params: {
          userId: _viewData?._id,
        },
      });
      if (res) {
        GetAdminLIst();
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          setIsLoading(false);
          confirmModalClose();
        } else if (res?.responseCode == 404) {
          setIsLoading(false);
          confirmModalClose();
          toast.error(res?.responseMessage);
        } else if (res?.responseCode == 501) {
          setIsLoading(false);
          confirmModalClose();
          toast.error(res?.responseMessage);
        } else {
          setIsLoading(false);
          confirmModalClose();
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setIsLoading(false);
      confirmModalClose();
      console.log("error", error);
    }
  };
  const Delete_Admin = async (value) => {
    try {
      setIsLoading(true);
      const res = await DeleteApiFunction({
        endPoint: Apiconfigs.deleteUser,

        params: {
          admintId: _viewData?._id,
        },
      });
      if (res) {
        GetAdminLIst();
        if (res?.responseCode == 200) {
          setIsLoading(false);
          confirmModalClose();
          toast.success(res?.responseMessage);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);
          confirmModalClose();
          toast.error(res?.responseMessage);
        } else if (res?.responseCode == 501) {
          setIsLoading(false);
          confirmModalClose();
          toast.error(res?.responseMessage);
        } else {
          setIsLoading(false);
          confirmModalClose();
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setIsLoading(false);
      confirmModalClose();
      console.log("error", error);
    }
  };
  const DepartList = async (value, code) => {
    try {
      const res = await PostApiFunction({
        endPoint: Apiconfigs.listAllDepartment,
      });
      if (res) {
        if (res?.responseCode == 200) {
          setDepartmentList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          toast.error(res?.responseMessage);
        } else if (res?.responseCode == 501) {
          toast.error(res?.responseMessage);
        } else {
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    DepartList();
    GetAdminLIst();
  }, []);
  return (
    <AdminLayout>
      <Root>
        <Box className="mainPage">
          <Box mt={1}>
            <FilterComponent
              open={open}
              AddMoreList={Add_Sub_Admin}
              _isloading={_isloading}
              handleClickOpen={handleClickOpen}
              handleClose={handleClose}
              title="Admin List"
              ButtonName="Create Admin"
              HeadingDialog="Create Admin"
              _departmentlist={_departmentlist}
            />
          </Box>
          <Box mt={2} mb={1}>
            <Divider />
          </Box>
          <Box mt={3}>
            {_listloading ? (
              <LoaderComponent />
            ) : (
              <TableList
                data={_adminlist?.map((data, index) => ({
                  Name: data?.name,
                  Email: data?.email,
                  "Department Name": data?.departmentId?.departmentRole,
                  CreatedAt: convertDateTime(data?.createdAt),

                  Action: (
                    <Box className="iconBox" key={index}>
                      <IconButton onClick={() => handleViewOpen(data, "VIEW")}>
                        <RemoveRedEyeIcon color="#A2D117" />
                      </IconButton>
                      &nbsp;&nbsp;&nbsp;
                      <IconButton onClick={() => handleViewOpen(data, "EDIT")}>
                        <CreateIcon />
                      </IconButton>
                      &nbsp;&nbsp;&nbsp;
                      <IconButton
                        onClick={() => {
                          confirmModalOpen(data, "BLOCKED");
                        }}
                      >
                        <BlockIcon
                          style={
                            data?.status == "BLOCKED" ? { color: "red" } : {}
                          }
                        />
                      </IconButton>
                      &nbsp;&nbsp;&nbsp;
                      <IconButton
                        onClick={() => {
                          confirmModalOpen(data, "DELETE");
                        }}
                      >
                        <DeleteForeverIcon style={{ color: "red" }} />
                      </IconButton>
                    </Box>
                  ),
                }))}
                headerData={headerData}
              />
            )}
          </Box>
          {_count > 10 && (
            <Box mt={2} display={"flex"} justifyContent={"center"}>
              <ListPagination
                page={page}
                handleChange={handleChange}
                _count={_count}
              />
            </Box>
          )}
          {_viewData && (
            <ViewDialog
              ButtonName="Create Admin"
              HeadingDialog={"View Admin"}
              _viewData={_viewData}
              open={openView}
              handleClickOpen={handleViewOpen}
              handleClose={handleViewClose}
              AddMoreList={Update_Admin}
              type={_IconType}
              _departmentlist={_departmentlist}
              _isloading={_isloading}
            />
          )}
          {_confirm && (
            <SureModal
              _confirm={_confirm}
              confirmModalOpen={confirmModalOpen}
              confirmModalClose={confirmModalClose}
              AD_Banner={AD_Admin}
              _isloading={_isloading}
              type={_IconType}
              screen="Admin"
              DeleteBanner={Delete_Admin}
            />
          )}
        </Box>
      </Root>
    </AdminLayout>
  );
};

export default AdminIndex;
