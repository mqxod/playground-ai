import React from "react";
import ImageCard from "../ui/ImageCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = [
  "Raven Transition", "Air Bending", "Effect Category", "Effect Category", 
  "Effect Category", "Effect Category", "Effect Category", "Effect Category"
];

const EFFECTS_IMAGES = [
  { id: 11, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 12, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 13, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 14, src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[4/3] col-span-2 row-span-1" },
  { id: 15, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  // Second row elements
  { id: 16, src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 17, src: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
  { id: 18, src: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[16/9] col-span-2" },
  { id: 19, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4]" },
];

export default function VisualEffects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800/50 mt-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">VISUAL EFFECTS</h2>
        <p className="text-zinc-400 text-sm md:text-base">
          Big-budget visual effects, from explosions to surreal transformations.
        </p>
      </div>

      {/* Categories scroller */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex-1 flex overflow-x-auto gap-3 hide-scrollbar pb-2">
          {CATEGORIES.map((cat, i) => (
            <button
              key={i}
              className={`whitespace-nowrap px-4 py-2 rounded-lg border text-sm font-medium transition-colors
                ${i === 0 
                  ? "border-zinc-500 bg-zinc-800 text-white" 
                  : "border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-zinc-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <div className="flex items-center gap-2 pl-2">
          <button className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dynamic Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-auto">
        {EFFECTS_IMAGES.map((img) => (
          <div key={img.id} className={img.aspect}>
            <ImageCard src={img.src} alt="Effect preview" className="w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
