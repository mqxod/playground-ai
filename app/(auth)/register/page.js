export const metadata = {
  title: "Register | Playground AI",
  description: "Create a new account.",
};

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-sm p-8 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-6">Create an account</h1>
        {/* Replace with Server Action form */}
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white" />
          <input type="email" placeholder="Email" className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white" />
          <input type="password" placeholder="Password" className="px-4 py-2 bg-black border border-zinc-700 rounded-lg text-white" />
          <button type="button" className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg mt-2 hover:bg-purple-500 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
