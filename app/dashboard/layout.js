import React from "react";
import Sidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Dashboard | Playground AI",
  description: "Workspace dashboard for active operations",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-black text-white">
       {/* Use Global Sidebar */}
       <Sidebar />
       
       {/* Main active work area utilizing streaming */}
       <div className="flex-1 ml-[90px] w-full min-h-screen relative p-8">
          {children}
       </div>
    </div>
  );
}
