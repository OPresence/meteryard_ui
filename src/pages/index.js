import HomeLayout from "@/layout/HomeLayout";
import { Box } from "@mui/material";
import Banner from "../pages/home/Banner";
import SliderComponent from "../component/SliderComponent";
import CardComponent from "../component/CardComponent";
import ResidentialProjects from "../component/ResidentialProjects";
import CommercialProjects from "../component/CommercialProjects";
import BannerCompont from "../component/BannerCompont";
import ProjectComponent from "../component/ProjectComponent";
import MobileAppComponent from "../component/MobileAppComponent";
import TestimonialComponent from "../component/TestimonialComponent";
import AgreecultureComponent from "../component/AgreecultureComponent";
import TestingComponent from "../component/TestingComponent";
export default function ClientPage() {
  return (
    <Box>
      <Banner />
      <SliderComponent />
      <CardComponent />
      <BannerCompont />
      <ResidentialProjects />
      <CommercialProjects />
      <AgreecultureComponent />
      {/* <YoutubeComponent /> */}
      <ProjectComponent />
      <MobileAppComponent />
      <TestimonialComponent />
      {/* <TestingComponent /> */}
    </Box>
  );
}
ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
