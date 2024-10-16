import DashboardSidebar from "@/components/layout/DashboardSideBar";
import React from "react";

function DashboardLayout({ children }) {
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
