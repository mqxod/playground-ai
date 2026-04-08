import React from "react";
import { Image as ImageIcon, Video, Wand2, ArrowUp } from "lucide-react";

export default function PromptBox() {
  return (
    <div className="w-full max-w-4xl mx-auto relative mt-8">
      {/* Outer container */}
      <div className="bg-[#1e1e20]/80 backdrop-blur-xl border border-zinc-700/50 rounded-[2rem] p-4 pb-3 flex flex-col justify-between min-h-[160px] shadow-2xl transition-all">
        {/* Input Area */}
        <textarea
          placeholder="Let it out, turn literally anything into reality..."
          className="w-full bg-transparent text-zinc-200 placeholder:text-zinc-500 resize-none outline-none text-lg px-2 pt-2"
          rows={3}
        />
        
        {/* Bottom Bar Options */}
        <div className="flex items-center justify-between mt-4">
          {/* Toggles */}
          <div className="flex items-center gap-1 bg-[#121214] p-1 rounded-full border border-zinc-800">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2a2a2d] text-sm text-zinc-100 font-medium shadow-sm transition-colors">
              <ImageIcon className="w-4 h-4 text-zinc-300" />
              Image
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-zinc-400 hover:text-zinc-200 hover:bg-[#2a2a2d]/50 font-medium transition-colors">
              <Video className="w-4 h-4" />
              Video
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm text-zinc-400 hover:text-zinc-200 hover:bg-[#2a2a2d]/50 font-medium transition-colors">
              <Wand2 className="w-4 h-4" />
              Effects
            </button>
          </div>

          {/* Submit Button */}
          <button className="w-10 h-10 rounded-full bg-[#2a2a2d] hover:bg-[#3f3f44] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
