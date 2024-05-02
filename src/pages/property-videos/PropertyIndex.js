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
import ViewDialog from "../../component/ViewDialog";
import SureModal from "../../component/SureModal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TableList from "../../component/TableList";
import FilterComponent from "../../component/FilterComponent";
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
const PropertyIndex = () => {
  const headerData = [
    {
      title: "Video Link",
    },
    {
      title: "Display Order",
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
  const [open, setOpen] = useState(false);
  const [_IconType, setIconType] = useState("");
  const [_isloading, setIsLoading] = useState(false);
  const [_listloading, setListLoading] = useState(false);
  const [_image_upload, setImageUpload] = useState(false);
  const [_imageurl, setImageURL] = useState("");
  const [_imageurl1, setImageURL1] = useState("");
  const [openView, setOpenView] = useState(false);
  const [_getcountrylist, setCountryList] = useState([]);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");

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
    setImageURL("");
  };
  const confirmModalOpen = (data, type) => {
    setIconType(type);
    setConfirm(true);
    setViewData(data);
  };
  const confirmModalClose = () => {
    setConfirm(false);
    setIsLoading(false);
    setImageURL("");
  };
  const ImageUpload = async (imageValue, type) => {
    try {
      setImageUpload(true);
      const formdata = new FormData();
      formdata.append("uploaded_file", imageValue);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.uploadImage,
        data: formdata,
      });
      if (res) {
        setImageUpload(false);
        setImageURL(res?.result[0]?.mediaUrl);
      }
    } catch (error) {
      setImageUpload(false);

      console.log(error);
    }
  };
  const GetCityList = async () => {
    try {
      setListLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs?.listAllPropertyVideo,
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

  const Add_Country = async (value) => {
    try {
      setIsLoading(true);
      const res = await PostApiFunction({
        endPoint: Apiconfigs.createPropertyVideo,
        data: {
          videoLink: value?.video_URL,
          displayOrder: value?.video_order,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          GetCityList();
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
  };
  const Update_Country = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.editPropertyVideo,
        data: {
          videoLink: value?.video_URL,
          displayOrder: value?.video_order,
        },
        params: {
          propVideoId: _viewData?._id,
        },
      });
      if (res) {
        GetCityList();
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
  const AD_country = async (value) => {
    try {
      setIsLoading(true);
      const res = await PutApiFunction({
        endPoint: Apiconfigs.activeDeactivePropertyVideo,
        params: {
          propVideoId: _viewData?._id,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          GetCityList();
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
        endPoint: Apiconfigs.deletePropertyVideo,
        params: {
          propVideoId: _viewData?._id,
        },
      });
      if (res) {
        if (res?.responseCode == 200) {
          toast.success(res?.responseMessage);
          GetCityList();
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
      GetCityList();
    }
  }, [page]);
  return (
    <AdminLayout>
      <Root>
        <Box className="mainPage">
          <Box mt={1} mb={1}>
            <FilterComponent
              title="Create Youtube Video Link"
              ButtonName="Create Video"
              HeadingDialog="Create Property Video"
              open={open}
              handleChange={handleChange}
              handleClose={handleClose}
              handleClickOpen={handleOpen}
              AddMoreList={Add_Country}
              _isloading={_isloading}
              _image_upload={_image_upload}
              _getcountrylist={_getcountrylist}
              ImageUpload={ImageUpload}
              rating={rating}
              handleRating={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
              _imageurl={_imageurl}
            />
          </Box>
          <Divider />
          <Box mt={3}>
            {_listloading ? (
              <LoaderComponent />
            ) : (
              <TableList
                data={_bannerlist?.map((data, index) => ({
                  "Video Link": data?.videoLink,
                  "Display Order": data?.displayOrder,
                  CreatedAt: convertDateTime(data?.createdAt),
                  Status: data?.status,
                  Action: (
                    <Box className="iconBox" key={index}>
                      {/* <IconButton onClick={() => handleViewOpen(data, "VIEW")}>
                        <RemoveRedEyeIcon color="#A2D117" />
                      </IconButton> */}
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
              title="Property Video List"
              ButtonName="Update Video"
              HeadingDialog={
                _IconType == "VIEW"
                  ? "View Youtube Video Link"
                  : "Update Youtube Video Link"
              }
              _viewData={_viewData}
              setViewData={setViewData}
              open={openView}
              handleClickOpen={handleViewOpen}
              handleClose={handleViewClose}
              AddMoreList={Update_Country}
              type={_IconType}
              _isloading={_isloading}
              ImageUpload={ImageUpload}
              _image_upload={_image_upload}
              _getcountrylist={_getcountrylist}
              _imageurl={_imageurl}
              rating={rating}
              handleRating={handleRating}
              onPointerEnter={onPointerEnter}
              onPointerLeave={onPointerLeave}
            />
          )}

          <SureModal
            _confirm={_confirm}
            confirmModalOpen={confirmModalOpen}
            confirmModalClose={confirmModalClose}
            AD_Banner={AD_country}
            _isloading={_isloading}
            type={_IconType}
            screen="property video"
            DeleteBanner={DeleteBanner}
          />
        </Box>
      </Root>
    </AdminLayout>
  );
};

export default PropertyIndex;
