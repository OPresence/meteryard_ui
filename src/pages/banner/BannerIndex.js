import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Box, IconButton, Divider } from "@mui/material";
import { styled } from "@mui/system";
import LoaderComponent from "../../component/LoaderComponent";
import {
  PostApiFunction,
  PutApiFunction,
  DeleteApiFunction,
  convertDateTime,
} from "../../utils";
import Apiconfigs from "../../ApiConfig/ApiConfig";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import BlockIcon from "@mui/icons-material/Block";
import ListPagination from "../../component/ListPagination";
import ViewDialog from "../admin/component/ViewDialog";
import SureModal from "../../component/SureModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TableList from "../admin/component/TableList";
import FilterComponent from "../admin/component/FilterComponent";
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
    "& .headingBox": {
      padding: "15px 0",
      "& h1": {
        fontSize: "16px",
        fontWeigth: "600",
      },
    },
  },
}));
const BannerIndex = () => {
  const headerData = [
    {
      title: "Title",
    },
    {
      title: "Image",
    },
    {
      title: "CreatedAt",
    },
    {
      title: "Status",
    },
    {
      title: "Action",
    },
  ];
  const [_viewData, setViewData] = useState("");
  const [page, setPage] = useState(1);
  const [_count, setCount] = useState("");
  const [_confirm, setConfirm] = useState(false);
  const [_bannerlist, setBannerList] = useState([]);
  const [_addbanner, setBannerAdd] = useState("");
  const [open, setOpen] = useState(false);
  const [_IconType, setIconType] = useState("");
  const [_isloading, setIsLoading] = useState(false);
  const [_listloading, setListLoading] = useState(false);

  const [_imageurl, setImageURL] = useState("");
  const [openView, setOpenView] = useState(false);
  console.log("_viewData--->", _viewData);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleClose = () => {
    setOpen(false);
    setIsLoading(false);
  };
  const handleOpen = () => {
    setOpen(true);
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

  const ImageUpload = async (imageValue) => {
    try {
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });
      if (res) {
        console.log("res000990---->", res);
        setImageURL(res?.result[0]?.mediaUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const GetBannerLIst = async () => {
    try {
      setListLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.listAllBanner,
        data: {
          page: page,
          limit: "10",
        },
      });
      if (res) {
        setListLoading(false);

        if (res?.responseCode == 200) {
          setIsLoading(false);
          setCount(res?.result?.pages);
          setBannerList(res?.result?.docs);
        } else if (res?.responseCode == 404) {
          setBannerList([]);
          toast.error(res?.responseMessage);
        } else {
          setBannerList([]);
          toast.error(res?.responseMessage);
        }
      }
    } catch (error) {
      setListLoading(false);

      console.log(error);
    }
  };
  const Update_Department = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.editBanner,
        data: {
          title: value?.title,
          image: _imageurl?.image,
        },
        params: {
          bannerId: _viewData?._id,
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
  const Add_Banner = async (value) => {
    if (_imageurl != "") {
      try {
        setIsLoading(true);
        const res = await PostApiFunction({
          endPoint: Apiconfigs.createBanner,
          data: {
            title: value?.title,
            image: _imageurl,
          },
        });
        if (res) {
          if (res?.responseCode == 200) {
            toast.success(res?.responseMessage);
            GetBannerLIst();
            setIsLoading(false);
            handleClose();
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
    } else {
      toast.error("Please upload the image");
    }
  };
  const AD_Banner = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.activeDeactiveBanner,
        params: {
          bannerId: _viewData?._id,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          GetBannerLIst();
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
  const DeleteBanner = async (value) => {
    try {
      setIsLoading(true);
      const res = await DeleteApiFunction({
        endPoint: Apiconfigs.deleteBanner,
        params: {
          bannerId: _viewData?._id,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          GetBannerLIst();
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
  useEffect(() => {
    if (page) {
      GetBannerLIst();
    }
  }, [page]);

  return (
    <AdminLayout>
      <Root>
        <Box className="mainPage">
          <Box mt={1} mb={1}>
            <FilterComponent
              title="Banner List"
              ButtonName="Add Banner"
              HeadingDialog="Add Banner"
              open={open}
              handleChange={handleChange}
              handleClose={handleClose}
              handleClickOpen={handleOpen}
              ImageUpload={ImageUpload}
              AddMoreList={Add_Banner}
              _isloading={_isloading}
            />
          </Box>
          <Divider />
          <Box mt={3}>
            {_listloading ? (
              <LoaderComponent />
            ) : (
              <TableList
                data={_bannerlist?.map((data, index) => ({
                  Title: data?.title,
                  Image: data?.image,
                  CreatedAt: convertDateTime(data?.updatedAt),
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

          {openView && (
            <ViewDialog
              ButtonName={"Add Banner"}
              HeadingDialog={"View Banner"}
              _viewData={_viewData}
              setViewData={setViewData}
              open={openView}
              handleClickOpen={handleViewOpen}
              handleClose={handleViewClose}
              AddMoreList={Update_Department}
              type={_IconType}
              _isloading={_isloading}
            />
          )}

          <SureModal
            _confirm={_confirm}
            confirmModalOpen={confirmModalOpen}
            confirmModalClose={confirmModalClose}
            AD_Banner={AD_Banner}
            _isloading={_isloading}
            type={_IconType}
            screen="banner"
            DeleteBanner={DeleteBanner}
          />
        </Box>
      </Root>
    </AdminLayout>
  );
};

export default BannerIndex;
