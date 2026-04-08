"use client"; // Error boundaries must be client components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log full error details to a tracker like Sentry here
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[400px] flex flex-col items-center justify-center p-6 border border-zinc-800 bg-zinc-900/50 rounded-2xl text-center">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong!</h2>
      <p className="text-zinc-400 max-w-md mx-auto mb-6 break-words">
        {error.message || "An unexpected error occurred while loading this specific segment."}
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg transition"
      >
        Try Again
      </button>
    </div>
  );
}
