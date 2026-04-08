import React from "react";
import { redirect } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

export const metadata = {
  title: "Dashboard | Playground AI",
  description: "Workspace dashboard for active operations",
};

export default function DashboardLayout({ children }) {
  // Temporarily disabled authentication for testing
  // const { userId } = auth();
  // if (!userId) {
  //   redirect("/login");
  // }

  return (
    <div className="min-h-screen flex bg-black text-white">
       {/* Use Global Sidebar */}
       <Sidebar />
       
       {/* Main active work area utilizing streaming */}
       <div className="flex-1 ml-[90px] w-full min-h-screen relative p-8">
          <DashboardHeader />
          {children}
       </div>
    </div>
  );
}
