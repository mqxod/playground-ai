"use client";

import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSOCallback() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center animate-pulse">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-white/40 text-sm">Signing you in…</p>
      </div>
      <AuthenticateWithRedirectCallback afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard" />
    </main>
  );
}
