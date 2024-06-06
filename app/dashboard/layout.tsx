import type { Metadata } from "next";

import React from "react";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import LeftSideBar from "@/components/shared/LeftSideBar";
import TopBar from "@/components/shared/TopBar";

export const metadata: Metadata = {
  title: "Vogal - Admin Dashboard",
  description: "Admin dashboard to manage Vogal's data",
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <ToasterProvider />
      <div className="flex text-gray-100 max-lg:flex-col">
        <LeftSideBar />
        <TopBar />
        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
