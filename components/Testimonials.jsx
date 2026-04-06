import React from "react";
import Image from "next/image";
import { ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 pb-32 border-t border-zinc-800/50 flex flex-col items-center relative">
      {/* Centered Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Real Results, Real People</h2>
        <p className="text-zinc-400 text-sm md:text-lg">
          Thousands of professionals trust our AI to deliver studio-quality results every time.
        </p>
      </div>

      {/* Featured Testimonial */}
      <div className="w-full max-w-4xl bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 mb-8 text-center relative">
        <Quote className="w-8 h-8 text-purple-400 absolute top-8 left-8 hidden md:block opacity-50" />
        <p className="text-lg md:text-xl text-zinc-300 italic mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
          &quot;This tool has completely transformed my video production workflow. I can now create professional-looking videos in minutes instead of hours. The AI background removal is incredibly accurate!&quot;
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" fill alt="John Doe" className="object-cover" />
          </div>
          <div className="text-left flex flex-col">
            <span className="text-white font-bold text-sm">John Doe</span>
            <span className="text-zinc-500 text-xs">Brooklyn, NYC</span>
          </div>
          <div className="flex items-center gap-1 ml-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-500 text-lg">★</span>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-[#121214] border border-zinc-800 rounded-2xl p-6 relative group">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-yellow-500 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm text-zinc-400 italic mb-6 leading-relaxed">
              &quot;This tool has completely transformed my video production workflow. I can now create professional-looking videos in minutes instead of hours. The AI background removal is incredibly accurate!&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" fill alt="John Doe" className="object-cover" />
              </div>
              <div className="text-left flex flex-col">
                <span className="text-white font-bold text-xs">John Doe</span>
                <span className="text-zinc-500 text-[10px]">Brooklyn, NYC</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrow */}
      <button className="absolute right-0 top-[70%] -translate-y-1/2 w-12 h-12 rounded-full border border-zinc-700 bg-[#0a0a0b] flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-10 hidden md:flex">
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
}
