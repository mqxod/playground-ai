import React from "react";
import { Sparkles, Globe, ChevronDown } from "lucide-react";
import { FiInstagram, FiLinkedin, FiFacebook, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#030303] text-white overflow-hidden relative font-sans">
      <div className="max-w-[1300px] mx-auto px-8 pt-16 pb-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-20">

          {/* Column 1: Logo & Social */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex items-center">
              <Sparkles className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <p className="text-[#999] text-[13px] leading-[1.4] max-w-[150px]">
              AI Powered Image & <br /> Video Generator
            </p>
            <div className="flex items-center gap-2">
              {[FiInstagram, FiLinkedin, FiFacebook, FiYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-all">
                  <Icon className="w-[14px] h-[14px]" />
                </a>
              ))}
            </div>
            <button className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs mt-4 group">
              <Globe className="w-4 h-4" />
              <span className="flex items-center gap-1">English <ChevronDown className="w-3 h-3" /></span>
            </button>
          </div>

          {/* Column 2: Platforms */}
          <div className="lg:col-span-2">
            <h4 className="text-zinc-500 text-[13px] mb-5">Platforms</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[15px] font-semibold hover:text-zinc-300">iOS</a></li>
              <li><a href="#" className="text-[15px] font-semibold hover:text-zinc-300">Android</a></li>
            </ul>
          </div>

          {/* Column 3: AI Products */}
          <div className="lg:col-span-3">
            <h4 className="text-zinc-500 text-[13px] mb-5">AI Products</h4>
            <div className="space-y-5">
              <div>
                <a href="#" className="text-[15px] font-semibold block mb-0.5">Image Generator</a>
                <p className="text-zinc-500 text-[12px]">Generate images using AI models</p>
              </div>
              <div>
                <a href="#" className="text-[15px] font-semibold block mb-0.5">Video Generator</a>
                <p className="text-zinc-500 text-[12px]">Generate videos with AI</p>
              </div>
              <div>
                <a href="#" className="text-[15px] font-semibold block mb-0.5">Nano Banana Edits</a>
                <p className="text-zinc-500 text-[12px] leading-snug">Powerful image editing and<br />modification using AI</p>
              </div>
              <div>
                <a href="#" className="text-[15px] font-semibold block mb-0.5">Video Effects</a>
                <p className="text-zinc-500 text-[12px]">Trending & Viral AI video effects</p>
              </div>
              <div>
                <a href="#" className="text-[15px] font-semibold block mb-0.5">Image Upscale</a>
                <p className="text-zinc-500 text-[12px]">Enhance the quality of your images</p>
              </div>
            </div>
          </div>

          {/* Column 4: Discover */}
          <div className="lg:col-span-2">
            <h4 className="text-zinc-500 text-[13px] mb-5">Discover</h4>
            <ul className="space-y-3">
              {['Pricing', 'Community', 'Support', 'FAQs', 'Contact Us', 'Blogs'].map((item) => (
                <li key={item}><a href="#" className="text-[15px] font-semibold hover:text-zinc-300">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 5: Help */}
          <div className="lg:col-span-2">
            <h4 className="text-zinc-500 text-[13px] mb-5">Help</h4>
            <div className="space-y-5">
              <div>
                <p className="text-zinc-500 text-[12px] mb-1">For product support</p>
                <a href="#" className="text-[13px] font-medium border-b border-transparent hover:border-white">Support center</a>
              </div>
              <div>
                <p className="text-zinc-500 text-[12px] mb-1">For collaboration</p>
                <a href="mailto:collaborations@codeknitters.co" className="text-[13px] font-medium">collaborations@codeknitters.co</a>
              </div>
              <div>
                <p className="text-zinc-500 text-[12px] mb-1">For inquiries</p>
                <a href="mailto:inquiries@codeknitters.co" className="text-[13px] font-medium">inquiries@codeknitters.co</a>
              </div>
            </div>
          </div>
        </div>

        {/* Large Typography Layer */}
        <div className="relative h-[240px] px-4 md:h-[170px] w-full select-none pointer-events-none">
          <h2
            className="absolute left-0 bottom-10 text-transparent font-bold tracking-tighter leading-none"
            style={{
              fontSize: 'clamp(80px, 18vw, 320px)',
              WebkitTextStroke: '4px #7d89e0'
            }}
          >
            Playground
          </h2>
          <h2
            className="absolute right-0 h-full text-[#8ea0ff] font-bold tracking-tighter leading-none"
            style={{
              fontSize: 'clamp(100px, 22vw, 380px)',
            }}
          >
            Art
          </h2>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-zinc-900/50 mt-12">
        <div className="max-w-[1300px] mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-zinc-500 font-medium">
          <p>© 2026 Imagine AI. All rights reserved. <span className="hover:text-white cursor-pointer ml-1">Manage Cookie Preferences</span></p>
          <p className="flex items-center gap-1">
            Made with <span className="text-white mx-0.5 text-lg">♥</span> by Code Knitters AI
          </p>
        </div>
      </div>
    </footer>
  );
}