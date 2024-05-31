import React, { useEffect, useState } from "react";
import TableList from "../../component/TableList";
import FilterComponent from "../../component/FilterComponent";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import {
  PostApiFunction,
  convertDateTime,
  PutApiFunction,
  DeleteApiFunction,
} from "../../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import BlockIcon from "@mui/icons-material/Block";
import ListPagination from "../../component/ListPagination";
import ViewDialog from "../../component/ViewDialog";
import SureModal from "../../component/SureModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LoaderComponent from "../../component/LoaderComponent";
const Root = styled(Box)(({ theme }) => ({
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
    "& .iconBox": {
      "& svg": {
        color: "#a2d117",
      },
    },
  },
}));

const DepartmentList = () => {
  const headerData = [
    {
      title: "Department role",
    },
    {
      title: "Created at",
    },
    {
      title: "Status",
    },
    {
      title: "Action",
    },
  ];

  const [_isloading, setIsLoading] = useState(false);
  const [_listdepartment, setListDepartment] = useState([]);
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [page, setPage] = useState(1);
  const [_count, setCount] = useState("");
  const [_viewData, setViewData] = useState("");
  const [_IconType, setIconType] = useState("");
  const [_confirm, setConfirm] = useState(false);
  const [_listloading, setListLoading] = useState(false);

  const confirmModalOpen = (data, type) => {
    setConfirm(true);
    setViewData(data);
    setIconType(type);
  };
  const confirmModalClose = () => {
    setConfirm(false);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleViewOpen = (data, type) => {
    setViewData(data);
    setOpenView(true);
    setIconType(type);
  };
  const handleViewClose = (data) => {
    setOpenView(false);
  };
  const GetDepartmentList = async () => {
    try {
      setListLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.listAllDepartment,
        data: {
          page: page,
          limit: "10",
        },
      });
      if (res) {
        setListLoading(false);
        if (res?.responseCode == 200) {
          setCount(res?.result?.pages);
          setListDepartment(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setListDepartment([]);
          toast.error(res?.responseMessage);
        } else {
          setListDepartment([]);
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setListLoading(false);

      console.log(error);
    }
  };

  const Create_Department = async (value, status) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.createDepartment,
        data: {
          departmentRole: value?.departmentName,
          status: value?.status,
        },
      });
      if (res) {
        GetDepartmentList();
        if (res?.responseCode == 200) {
          setIsLoading(false);
          handleClose();
          toast.success(res?.responseMessage);
        } else if (res?.responseCode == 404) {
          setIsLoading(false);
          handleClose();
          toast.error(res?.responseMessage);
        } else if (res?.responseCode == 501) {
          setIsLoading(false);
          handleClose();
          toast.error(res?.responseMessage);
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
  const Update_Department = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.editDeparment,
        data: {
          departmentRole: value?.departmentName,
          status: value?.status,
        },
        params: {
          departmentId: _viewData?._id,
        },
      });
      if (res) {
        GetDepartmentList();

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
  const AD_Department = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.activeDeactiveDepartment,

        params: {
          departmentId: _viewData?._id,
        },
      });
      if (res) {
        GetDepartmentList();
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
  const Delete_Department = async (value) => {
    try {
      setIsLoading(true);
      const res = await DeleteApiFunction({
        endPoint: Apiconfigs.deleteDeparment,

        params: {
          departmentId: _viewData?._id,
        },
      });
      if (res) {
        GetDepartmentList();
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
  useEffect(() => {
    if (page) {
      GetDepartmentList();
    }
  }, [page]);
  return (
    <Root>
      <Box className="mainPage">
        <Box mt={1}>
          <FilterComponent
            title="Department List"
            ButtonName="Create Department"
            HeadingDialog="Create Department"
            AddMoreList={Create_Department}
            _isloading={_isloading}
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
          />
        </Box>

        <Box mt={3}>
          {_listloading ? (
            <LoaderComponent />
          ) : (
            <TableList
              data={_listdepartment?.map((data, index) => ({
                "Department role": data?.departmentRole,
                "Created at": convertDateTime(data?.createdAt),
                Status: data?.status,
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
        {console.log("_countdfdf--->", _count)}
        {_count > 10 && (
          <Box mt={2} display={"flex"} justifyContent={"center"}>
            <ListPagination
              page={page}
              setPage={setPage}
              handleChange={handleChange}
              _count={_count}
            />
          </Box>
        )}

        <ViewDialog
          ButtonName={"Create Department"}
          HeadingDialog={
            _IconType == "VIEW" ? "View Department" : "Edit Department"
          }
          _viewData={_viewData}
          open={openView}
          handleClickOpen={handleViewOpen}
          handleClose={handleViewClose}
          AddMoreList={Update_Department}
          type={_IconType}
          _isloading={_isloading}
        />
        <SureModal
          _confirm={_confirm}
          confirmModalOpen={confirmModalOpen}
          confirmModalClose={confirmModalClose}
          AD_Banner={AD_Department}
          _isloading={_isloading}
          type={_IconType}
          screen="department"
          DeleteBanner={Delete_Department}
        />
      </Box>
    </Root>
  );
};

export default DepartmentList;
