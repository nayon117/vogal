import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import React from "react";
import ToasterProvider from "@/lib/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vogal - Admin Dashboard",
  description: "Admin dashboard to manage Vogal's data",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          <div className="flex text-gray-100 max-lg:flex-col">
            {/* <LeftSideBar /> */}
            <div className="flex-1">{children}</div>
          </div>
        </body>
      </html>
  );
}
