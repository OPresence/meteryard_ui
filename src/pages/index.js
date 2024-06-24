"use-client";
import HomeLayout from "@/layout/HomeLayout";
import { Box } from "@mui/material";
import Banner from "../pages/home/Banner";
import SliderComponent from "../component/SliderComponent";
import ProjectComponent from "../component/ProjectComponent";
import MasterCardProduct from "../component/MasterCardProduct";
import FeatureProperty from "../component/FeatureProperty";
export default function ClientPage() {
  return (
    <Box>
      <Banner />
      <SliderComponent />
      <FeatureProperty />
      <MasterCardProduct />
      <ProjectComponent />
    </Box>
  );
}
ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
