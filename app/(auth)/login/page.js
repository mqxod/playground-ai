export const metadata = {
  title: "Login | Playground AI",
  description: "Sign in to your account.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Welcome back</h1>
        {/* Replace with Server Action form */}
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white" />
          <input type="password" placeholder="Password" className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white" />
          <button type="button" className="px-4 py-2 bg-white text-black font-semibold rounded-lg mt-2 hover:bg-zinc-200 transition">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
