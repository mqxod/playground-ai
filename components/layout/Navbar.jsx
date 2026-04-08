"use client";

import Link from "next/link";
import { Globe, LogOut } from "lucide-react";
import { SignOutButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const { isLoaded, isSignedIn, user } = useUser();
  const avatarUrl = user?.profileImageUrl || user?.imageUrl || "/next.svg";

  return (
    <nav className="absolute top-0 right-0 p-6 flex justify-end items-center gap-4 z-40 w-full pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors">
          <Globe className="w-4 h-4" />
          <span>English</span>
        </button>

        {isLoaded && isSignedIn ? (
          <>
            <Link
              href="/dashboard/profile"
              title="profile"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-zinc-700 bg-white/5 transition hover:bg-white/10"
            >
              <img src={avatarUrl} alt={user?.fullName || "User avatar"} className="h-full w-full object-cover" />
            </Link>
            <SignOutButton>
              <button className="inline-flex h-10 items-center justify-center rounded-full bg-violet-500 px-5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </button>
            </SignOutButton>
          </>
        ) : (
          <>
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
