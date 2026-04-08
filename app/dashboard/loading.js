export default function Loading() {
  // Utilizing Next.js built-in streaming UI loader boundary
  return (
    <div className="w-full flex items-center justify-center min-h-[50vh]">
      <div className="flex flex-col items-center gap-4">
        {/* Simple spinning CSS pulse */}
        <div className="w-8 h-8 rounded-full border-t-2 border-r-2 border-purple-500 animate-spin"></div>
        <p className="text-zinc-500 font-medium">Loading data...</p>
      </div>
    </div>
  );
}
