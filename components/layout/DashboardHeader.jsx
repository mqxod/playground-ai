"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Crown, Globe } from "lucide-react";

export default function DashboardHeader() {
  const { user, isLoaded } = useUser();

  const avatarUrl =
    isLoaded && user
      ? user.profileImageUrl || user.imageUrl || "/next.svg"
      : "/next.svg";
  const name =
    isLoaded && user ? user.fullName || user.firstName || "Creator" : "User";

  return (
    <div className="absolute right-8 top-6 z-50 flex items-center gap-4">
      {/* Upgrade Button */}
      <Link
        href="/dashboard/pricing"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-violet-500/40 bg-violet-500/10 text-violet-300 text-sm font-medium hover:bg-violet-500/20 transition-all"
      >
        <Crown className="w-4 h-4" />
        Upgrade
      </Link>

      {/* Language Selector */}
      <button className="flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-200 transition-colors cursor-pointer">
        <Globe className="w-4 h-4" />
        English
      </button>

      {/* Avatar */}
      <Link
        href="/dashboard/profile"
        title="Profile"
        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-zinc-800 transition hover:border-zinc-600"
        aria-label="Profile"
      >
        <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
      </Link>
    </div>
  );
}
