"use client";

import { SignIn } from "@clerk/nextjs";

const AUTH_IMAGE = "/login-images/login-signup.png";

export default function LoginScreen() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">
        <div className="grid w-full gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[32px] border border-zinc-800 bg-zinc-950/95 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <div className="max-w-xl">
              <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-white shadow-lg shadow-white/5">
                <span className="text-2xl">✨</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white">Welcome to Playground Art</h1>
              <p className="mt-4 max-w-xl text-base text-zinc-400">
                Sign in with Google or email to open your creative AI workspace.
              </p>
            </div>

            <div className="mt-10 rounded-[28px] border border-zinc-800 bg-black/80 p-6 shadow-inner shadow-white/5">
              <SignIn
                path="/login"
                routing="path"
                signUpUrl="/register"
                afterSignInUrl="/dashboard/profile"
              />
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
              By proceeding you agree to our <span className="text-white underline">Terms of use</span>. Read our <span className="text-white underline">Privacy Policy</span>.
            </div>
          </section>

          <aside className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950/90">
            <img src={AUTH_IMAGE} alt="AI art preview" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/10 bg-black/70 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Login / SignUp</p>
              <p className="mt-4 text-white text-lg font-semibold">
                “Removed backgrounds from 200+ product shots in under 10 minutes. This tool is insane.”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-black">
                  JK
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Jake K.</p>
                  <p className="text-xs text-zinc-500">Content Creator</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
