"use client";

import Link from "next/link";
import { Crown, Globe } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const avatarUrl = user?.profileImageUrl || user?.imageUrl || "/next.svg";

  return (
    <nav className="absolute top-0 right-0 p-6 flex justify-end items-center gap-4 z-40 w-full pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4">
        {isLoaded && isSignedIn ? (
          <>
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
              <img src={avatarUrl} alt={user?.fullName || "User"} className="h-full w-full object-cover" />
            </Link>
          </>
        ) : (
          <>
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-200 transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
              English
            </button>

            <Link
              href="/login"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-700 px-5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
