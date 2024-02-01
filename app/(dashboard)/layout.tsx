import Sidebar from "@/app/(dashboard)/_components/sidebar";
import React from "react";

import { dashBoardRoutes } from "@/lib/data";
import Navbar from "./_components/navbar";

interface DashboardLayoutChildren {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutChildren) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="md:pl-60 pt-[70px] bg-[#F8FAFB]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
