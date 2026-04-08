"use client";

import Link from "next/link";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export default function DashboardHeader() {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) {
    return null;
  }

  const avatarUrl = user.profileImageUrl || user.imageUrl || "/next.svg";
  const name = user.fullName || user.firstName || "Creator";

  return (
    <div className="absolute right-8 top-8 z-50 flex items-center gap-3">
      <Link
        href="/dashboard/profile"
        title="profile"
        className="inline-flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-lg shadow-black/30 transition hover:bg-white/10"
        aria-label="profile"
      >
        <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
      </Link>

      <div className="flex items-center gap-3 rounded-full border border-zinc-700 bg-black/80 px-3 py-2 text-sm text-white shadow-lg shadow-black/30">
        <div className="hidden sm:block">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Signed in as</p>
          <p className="font-medium text-white">{name}</p>
        </div>
        <SignOutButton>
          <button className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
