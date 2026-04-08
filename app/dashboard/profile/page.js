import { redirect } from "next/navigation";
import { Edit3, Sparkles, Image as ImageIcon, Video } from "lucide-react";

export const metadata = {
  title: "profile | Playground AI",
  description: "Your profile styled profile page.",
};

export default async function ProfilePage() {
  // Temporarily disabled authentication for testing
  // const user = await currentUser();
  // if (!user) {
  //   redirect("/login");
  // }

  // Mock user data for testing
  const name = "Demo Creator";
  const email = "demo@playground.ai";
  const avatarUrl = "/login-images/login-signup.png";

  return (
    <main className="space-y-8">
      {/* Header area with large cover and overlapping avatar */}
      <section className="overflow-hidden rounded-[16px] border border-zinc-800 bg-zinc-950/95 shadow-[0_30px_120px_rgba(0,0,0,0.2)]">
        <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-[16px]">
          <img
            src="/login-images/login-signup.png"
            alt="Profile header"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Avatar - overlaps bottom of header */}
          <div className="absolute left-8 -bottom-12 flex items-end">
            <div className="h-36 w-36 rounded-full ring-4 ring-black/80 overflow-hidden bg-zinc-900 shadow-xl">
              <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-8 md:px-10">
          <div className="flex items-center justify-between">
            <div className="ml-0 md:ml-0">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl sm:text-4xl font-semibold text-white">{name}</h1>
                <button className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10">
                  <Edit3 className="h-4 w-4" />
                  Edit
                </button>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{email}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-t border-zinc-800 pt-6">
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium">All</button>
              <button className="px-4 py-2 rounded-full bg-transparent border border-zinc-800 text-zinc-400 text-sm">Image</button>
              <button className="px-4 py-2 rounded-full bg-transparent border border-zinc-800 text-zinc-400 text-sm">Video</button>
            </div>
          </div>
        </div>
      </section>

      {/* Content area - empty state like screenshot */}
      <section className="rounded-[16px] border border-zinc-800 bg-zinc-950/95 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.2)]">
        <div className="max-w-3xl mx-auto text-center py-12">
          <div className="flex justify-center -space-x-4 mb-6">
            <img src="/login-images/login-signup.png" alt="t1" className="h-20 w-20 rounded-md object-cover border border-zinc-800" />
            <img src="/login-images/login-signup.png" alt="t2" className="h-20 w-20 rounded-md object-cover border border-zinc-800" />
            <img src="/login-images/login-signup.png" alt="t3" className="h-20 w-20 rounded-md object-cover border border-zinc-800" />
          </div>

          <h2 className="text-xl font-semibold text-white">Create. Share. Inspire</h2>
          <p className="mt-3 text-sm text-zinc-400">Publish your generations and see how others bring their ideas to life.</p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-md">
              <Sparkles className="h-4 w-4" />
              Publish
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
