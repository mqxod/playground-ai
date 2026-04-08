export default async function DashboardPage() {
  // Use React Server Components to fetch initial generic stats or lists directly here.
  
  return (
    <main className="w-full max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Your Dashboard</h1>
      <p className="text-zinc-400">View your most recent generations and active projects.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Placeholder metrics */}
         <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-zinc-400 text-sm font-medium mb-2">Total Generations</h3>
            <p className="text-4xl font-bold text-white">1,204</p>
         </div>
      </div>
    </main>
  );
}
