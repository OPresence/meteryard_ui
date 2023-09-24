import HomeLayout from "@/layout/HomeLayout";
import { Container, Typography, Box } from "@mui/material";
import Banner from "./home/Banner";
import ChatBoat from "../component/ChatBoat";

export default function ClientPage() {
  return (
    <Box>
      <ChatBoat />

      <Banner />
    </Box>
  );
}

ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
