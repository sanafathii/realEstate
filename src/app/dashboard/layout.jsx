import DashboardSidebar from "@/layout/DashboardSideBar";

import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOption);
  if (!session) {
    redirect("/signin");
    return null;
  }
  return <DashboardSidebar>{children}</DashboardSidebar>;
}

export default DashboardLayout;
