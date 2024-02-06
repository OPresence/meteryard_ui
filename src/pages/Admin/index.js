import React, { useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import DashboardCard from "../Admin/component/DashboardCard";

const index = () => {
  return (
    <AdminLayout>
      <DashboardCard />
    </AdminLayout>
  );
};

export default index;
