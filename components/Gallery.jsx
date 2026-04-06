import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const GALLERY_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[4/3]", name: "Cinematic Light" },
  { id: 2, src: "https://images.unsplash.com/photo-1516053896590-b18751508b98?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[16/9]", name: "Neon Glow" },
  { id: 3, src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[3/4] row-span-2", name: "Cyberpunk City" },
  { id: 4, src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[4/3]", name: "Surreal Pop" },
  { id: 5, src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80", aspect: "aspect-[16/9]", name: "Abstract" },
];

export default function Gallery() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800/50 flex flex-col items-center">
      {/* Centered Header */}
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-[1.5px] h-4 bg-purple-500"></div>
          <span className="text-xs font-semibold text-zinc-400 tracking-wider">GALLERY</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">IMAGINATION IN EVERY PIXEL</h2>
        <p className="text-zinc-400 text-sm md:text-lg">
          Real creations from real prompts — nothing artificial, just AI at work.
        </p>
      </div>

      {/* Grid Layout taking similar bento/masonry shapes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full auto-rows-auto mb-16">
        {GALLERY_IMAGES.map((img) => (
          <div key={img.id} className={`group relative rounded-2xl overflow-hidden border border-zinc-800/50 ${img.aspect}`}>
            <Image
              src={img.src}
              alt={img.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Hover visual effect */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            
            {/* Top Right Effect Pill */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full shadow-sm">
              {img.name || "Effect Name"}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <button className="flex items-center gap-2 text-lg font-medium text-white hover:text-zinc-300 transition-colors">
        Start Generating
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
}
