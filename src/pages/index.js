import HomeLayout from "@/layout/HomeLayout";
import { Container, Typography, Box } from "@mui/material";
import Banner from "./home/Banner";
export default function ClientPage() {
  return (
    <Box>
      <Banner />
    </Box>
  );
}

ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
