export async function generateMetadata({ params }) {
  return {
    title: `Generation ${params.generationId} | Playground AI`,
  };
}

export default async function GenerationViewPage({ params }) {
  // Destructure dynamic segment parameter
  const { generationId } = params;
  
  // Typically, we would fetch the specific high-res generated asset here.

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="w-full relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 aspect-video flex flex-col items-center justify-center">
          <p className="text-zinc-600 mb-2 font-medium break-all text-center px-4">
             Asset ID: {generationId}
          </p>
          <span className="text-zinc-700 text-sm italic">Render placeholder</span>
      </div>

      <div className="w-full p-6 mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
         <h3 className="text-white font-bold mb-2">Prompt Details</h3>
         <p className="text-zinc-400">Specific prompting metadata associated with {generationId} will be listed here.</p>
      </div>
    </div>
  );
}
