import React from "react";
import { Globe } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 right-0 p-6 flex justify-end items-center gap-4 z-40 w-full pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-4">
        <button className="flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white transition-colors">
          <Globe className="w-4 h-4" />
          <span>English</span>
        </button>
        <button className="h-10 px-5 rounded-full border border-zinc-700 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">
          Log in
        </button>
        <button className="h-10 px-5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">
          Sign up
        </button>
      </div>
    </nav>
  );
}
