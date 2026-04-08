export async function generateMetadata({ params }) {
  // Await the params resolution for Next.js 14+ async semantics if enabled 
  // const resolvedParams = await params;
  return {
    title: `Project ${params.id} | Playground AI`,
  };
}

export default async function ProjectDetailPage({ params }) {
  // Await the params to resolve before using the ID values
  // const resolvedParams = await params;
  const id = params.id;
  
  // Here we would await a DB call, e.g. await getProjectById(id)

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-4">Project Workspace: {id}</h1>
      <p className="text-zinc-400">Loading resources and configuration for this specific project...</p>
      
      {/* Editor or viewing layout components would be placed here */}
      <div className="h-[400px] w-full border border-dashed border-zinc-700 bg-zinc-900/40 rounded-2xl flex items-center justify-center mt-8">
         <span className="text-zinc-600 font-medium">Project Canvas Area</span>
      </div>
    </div>
  );
}
