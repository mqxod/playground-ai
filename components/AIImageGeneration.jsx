import React from "react";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon, Video, Wand2, ArrowUp } from "lucide-react";

export default function AIImageGeneration() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left Content Area */}
      <div className="flex-1 max-w-md">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-400 mb-6 tracking-tight leading-tight">
          AI Image <br/> Generation
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl mb-8 leading-relaxed">
          Describe your idea and let AI generate unique and stunning visuals in seconds.
        </p>
        <button className="flex items-center gap-2 text-black bg-white rounded-full px-8 py-4 font-semibold text-lg hover:bg-zinc-200 transition-colors w-max">
          Try Now 
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Right Image Collage Display */}
      <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-black border border-zinc-800">
        <div className="absolute inset-0 p-4">
           {/* Collage pattern (simulated via standard grid for maintainability) */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-full pb-8">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden row-span-2 col-span-1">
                 <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" fill className="object-cover" alt="Portrait"/>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden col-span-1">
                 <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80" fill className="object-cover" alt="Portrait"/>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden col-span-1 hidden md:block">
                 <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" fill className="object-cover" alt="Portrait"/>
              </div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden col-span-1 md:col-span-2">
                 <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" fill className="object-cover object-top" alt="Portrait"/>
              </div>
           </div>
        </div>

        {/* Floating Prompt Box Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] z-20">
            <div className="bg-[#121214]/90 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-zinc-800 shadow-2xl flex flex-col gap-4">
              <p className="text-zinc-200 text-sm md:text-base font-medium">
                Serene woman portrait with daisies in hair, floral face makeup.
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 bg-black p-1 rounded-full border border-zinc-800">
                  <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2a2a2d] text-xs text-white font-medium">
                    <ImageIcon className="w-3.5 h-3.5" />
                    Image
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-zinc-400 font-medium">
                    <Video className="w-3.5 h-3.5" />
                    Video
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-zinc-400 font-medium">
                    <Wand2 className="w-3.5 h-3.5" />
                    Effects
                  </button>
                </div>
                
                <button className="w-8 h-8 rounded-full bg-[#2a2a2d] flex items-center justify-center text-zinc-400">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
        </div>
        
        {/* Restart Watermark Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-zinc-900/80 backdrop-blur px-3 py-1.5 rounded-full text-xs text-zinc-400 flex items-center gap-1.5 border border-zinc-800">
           <span>🔄</span> Restart
        </div>
      </div>
    </section>
  );
}
