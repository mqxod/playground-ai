export default function ProjectLoading() {
  return (
    <div className="w-full animate-pulse flex flex-col gap-8">
      {/* Skeleton for Header */}
      <div className="h-10 w-1/3 bg-zinc-800 rounded-lg"></div>
      
      {/* Skeleton for Canvas */}
      <div className="h-[400px] w-full bg-zinc-800 rounded-2xl"></div>
    </div>
  );
}
