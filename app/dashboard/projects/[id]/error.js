"use client";

import { useEffect } from "react";

export default function ProjectError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full p-8 border border-red-900/30 bg-red-950/10 rounded-2xl text-center">
      <h2 className="text-xl font-bold text-red-500 mb-2">Failed to load project</h2>
      <p className="text-red-400/80 mb-6">{error.message || "Could not find or verify project access."}</p>
      <button onClick={() => reset()} className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition">
        Reload Project
      </button>
    </div>
  );
}
