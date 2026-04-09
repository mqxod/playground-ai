"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAuthRoute = pathname?.startsWith("/login") || pathname?.startsWith("/register") || pathname?.startsWith("/sso-callback");

  if (isAuthRoute) {
    return <div className="min-h-screen bg-black text-white">{children}</div>;
  }

  return (
    <div className="min-h-screen flex bg-black text-white overflow-x-hidden">
      <Sidebar />
      <div className="flex-1 ml-[90px] min-h-screen relative overflow-x-hidden">{children}</div>
    </div>
  );
}
