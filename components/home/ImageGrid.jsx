import React from "react";
import ImageCard from "../ui/ImageCard";
import { ChevronRight } from "lucide-react";

const SAMPLE_IMAGES = [
  { id: 1, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" },
  { id: 2, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80" },
  { id: 3, src: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&w=800&q=80" },
  { id: 4, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80" },
  { id: 5, src: "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?auto=format&fit=crop&w=800&q=80" },
  { id: 6, src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=800&q=80" },
  { id: 7, src: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?auto=format&fit=crop&w=800&q=80" },
  { id: 8, src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80" }
];

export default function ImageGrid() {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto mt-16 px-6">
      {/* Grid Container */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SAMPLE_IMAGES.map((img) => (
          <ImageCard key={img.id} src={img.src} alt={`Generated image ${img.id}`} />
        ))}
      </div>
      
      {/* Navigation Arrow */}
      <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-zinc-100 transition-colors z-10 hidden md:flex">
        <ChevronRight className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}
