import HomeLayout from "@/layout/HomeLayout";
import { Box } from "@mui/material";
import Banner from "./home/Banner";
import ChatBoat from "src/component/ChatBoat";
import SliderComponent from "../component/SliderComponent";
import CardComponent from "../component/CardComponent";
import ResidentialProjects from "../component/ResidentialProjects";
import CommercialProjects from "../component/CommercialProjects";
export default function ClientPage() {
  return (
    <Box mb={5}>
      <Banner />
      <SliderComponent />
      <CardComponent />
      <ResidentialProjects />
      <CommercialProjects />
      {/* <ChatBoat /> */}
    </Box>
  );
}

ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
