import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const TOOLS = [
  {
    id: 1,
    title: "AI Background Studio",
    desc: "Replace any background with cinematic AI-generated scenes",
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80",
    isPro: true
  },
  {
    id: 2,
    title: "Motion Tracking AI",
    desc: "Precise frame-by-frame subject tracking with zero blur",
    src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
    isPro: false
  },
  {
    id: 3,
    title: "Skin & Face Enhancer",
    desc: "Natural retouching with AI-powered skin refinement",
    src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    isPro: false
  }
];

export default function TopAITools() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800/50">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-[2px] h-4 bg-purple-500"></div>
            <span className="text-xs font-semibold text-zinc-400 tracking-wider">CREATOR TOOLKIT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">OUR TOP AI TOOLS</h2>
          <p className="text-zinc-400 text-sm md:text-base">
            Handpicked AI tools loved by 50,000+ creators
          </p>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 transition-colors w-max">
          View all Tools
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Cards */}
      <div className="flex gap-4 overflow-x-auto pb-6 hide-scrollbar snap-x">
        {TOOLS.map((tool) => (
          <div 
            key={tool.id} 
            className="group relative flex-none w-[320px] md:w-[480px] aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer snap-start border border-zinc-800/50"
          >
            <Image
              src={tool.src}
              alt={tool.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Pro Badge */}
            {tool.isPro && (
              <div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-2 py-0.5 rounded shadow-sm">
                PRO
              </div>
            )}
            
            {/* Bottom Content */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">{tool.title}</h3>
              <p className="text-sm text-zinc-300 drop-shadow line-clamp-1">{tool.desc}</p>
            </div>
            
            {/* Right Arrow on hover */}
            <div className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
