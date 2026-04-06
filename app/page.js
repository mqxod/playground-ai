import Navbar from "@/components/Navbar";
import PromptBox from "@/components/PromptBox";
import ImageGrid from "@/components/ImageGrid";
import VisualEffects from "@/components/VisualEffects";
import TopAITools from "@/components/TopAITools";
import Gallery from "@/components/Gallery";
import AIImageGeneration from "@/components/AIImageGeneration";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-8 bg-[#0a0a0b]">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-16 pb-8 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-[56px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-red-50/80 to-[#BBA0F3] mb-4 tracking-tight">
          Start Imagining
        </h1>
        <p className="text-[#a1a1aa] text-base md:text-lg max-w-2xl mx-auto">
          From AI Images to AI Videos & Video Effects, it is up to you!
        </p>
      </div>

      {/* Main Content Area */}
      <div className="w-full flex justify-center">
        <div className="px-6 w-full relative z-10 flex flex-col items-center">
          <div className="w-full max-w-3xl px-6">
            <PromptBox />

            {/* Subtle separator */}
            <div className="flex items-center justify-center w-full my-6 opacity-30">
              <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#2D73FF] to-transparent border-dashed"></div>
            </div>
          </div>

          <ImageGrid />

          {/* New Page Sections */}
          <div className="w-full mt-24">
            <VisualEffects />
            <TopAITools />
            <AIImageGeneration />
            <Gallery />
            <Testimonials />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
