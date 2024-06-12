import HomeLayout from "@/layout/HomeLayout";
import { Box } from "@mui/material";
import Banner from "../pages/home/Banner";
import SliderComponent from "../component/SliderComponent";
import CardComponent from "../component/CardComponent";
import ResidentialProjects from "../component/ResidentialProjects";
import CommercialProjects from "../component/CommercialProjects";
import ProjectComponent from "../component/ProjectComponent";
import AgreecultureComponent from "../component/AgreecultureComponent";
import YoutubeComponent from "../component/YoutubeComponent";
import TESTIMONIAL from "../component/TestimonialComponent";
import MasterCardProduct from "../component/MasterCardProduct";

export default function ClientPage() {
  return (
    <Box>
      <Banner />
      <SliderComponent />
      <MasterCardProduct />
      {/* <YoutubeComponent /> */}
      <ProjectComponent />
      <TESTIMONIAL />
    </Box>
  );
}
ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
