"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";

const AVATARS = [
  { initials: "MK", from: "from-violet-500", to: "to-cyan-400" },
  { initials: "AJ", from: "from-pink-500", to: "to-orange-400" },
  { initials: "RS", from: "from-green-400", to: "to-cyan-500" },
];

export default function RegisterScreen() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="w-full max-w-[960px] grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.6)] border border-white/[0.07]">

        {/* ── LEFT PANEL ─────────────────────────────────────── */}
        <div className="bg-[#111111] flex flex-col justify-between p-10 min-h-[600px]">
          <div>
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-8">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>

            <h1 className="text-[26px] font-semibold text-white leading-tight tracking-tight mb-8">
              Create an account
            </h1>

            {/* Clerk SignUp with Dark Theme */}
            <SignUp
              path="/register"
              routing="path"
              signInUrl="/login"
              afterSignUpUrl="/dashboard"
              appearance={{
                baseTheme: dark,
                elements: {
                  rootBox: "w-full",
                  cardBox: "w-full !shadow-none !bg-transparent",
                  card: "w-full !bg-transparent !shadow-none !p-0",
                  headerTitle: "hidden",
                  headerSubtitle: "hidden",
                  socialButtonsBlockButton:
                    "!h-[46px] !rounded-xl !border !border-white/15 !bg-transparent !text-white !text-sm !font-medium hover:!bg-white/[0.06] !transition-all",
                  socialButtonsBlockButtonText: "!text-white",
                  dividerLine: "!bg-white/10",
                  dividerText: "!text-white/30",
                  formFieldLabel: "!text-white/60",
                  formFieldInput:
                    "!h-[46px] !rounded-xl !border !border-white/15 !bg-white/[0.04] !text-white placeholder:!text-white/30 focus:!border-white/40 focus:!bg-white/[0.07]",
                  formButtonPrimary:
                    "!h-[46px] !rounded-xl !bg-white/10 !border !border-white/15 !text-white !text-sm !font-semibold hover:!bg-white/20 !shadow-none",
                  footerActionLink: "!text-white !underline !underline-offset-2",
                  footerActionText: "!text-white/40",
                  identityPreviewEditButton: "!text-white/50",
                  formFieldAction: "!text-white/50 hover:!text-white/70",
                  footer: "!bg-transparent !border-t !border-white/10",
                  footerAction: "!bg-transparent",
                  footerActionButton: "!text-white/40",
                  internal: "!bg-transparent",
                  button: "!text-white/60",
                  badge: "!bg-transparent !text-white/30",
                  alternativeMethodsBlockButton: "!bg-transparent !border !border-white/15 !text-white hover:!bg-white/[0.06]",
                },
                layout: {
                  socialButtonsPlacement: "top",
                  socialButtonsVariant: "blockButton",
                },
              }}
            />
          </div>

          {/* Footer */}
          <p className="text-[11px] text-white/20 mt-10 leading-relaxed">
            By proceeding you agree to our{" "}
            <span className="text-white/40 underline cursor-pointer">Terms of use</span>. Read our{" "}
            <span className="text-white/40 underline cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {/* ── RIGHT PANEL ────────────────────────────────────── */}
        <div className="relative hidden lg:block overflow-hidden min-h-[600px]">
          <Image
            src="/login-images/login-signup.png"
            alt="Neon AI artwork"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex -space-x-2">
                {AVATARS.map((a) => (
                  <div
                    key={a.initials}
                    className={`w-7 h-7 rounded-full bg-gradient-to-br ${a.from} ${a.to} border-2 border-black flex items-center justify-center text-[9px] font-bold text-black`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <span className="text-white/50 text-xs">200+ creators joined this month</span>
            </div>

            <p className="text-white text-sm font-medium leading-snug">
              &ldquo;The onboarding felt effortless and the Google auth flow was instant. Perfect for designers.&rdquo;
            </p>

            <div className="mt-3 flex items-center justify-between">
              <div>
                <p className="text-white text-xs font-semibold">Ava M.</p>
                <p className="text-white/40 text-[11px]">Visual Designer</p>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#facc15">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
