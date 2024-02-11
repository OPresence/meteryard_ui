import React from "react";
import DepartmentList from "./DepartmentList";
import AdminLayout from "../../layout/AdminLayout";
const index = () => {
  return (
    <AdminLayout>
      <DepartmentList />
    </AdminLayout>
  );
};

export default index;
