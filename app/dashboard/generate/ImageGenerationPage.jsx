"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Sparkles,
  RefreshCw,
  Upload,
  X,
  Minus,
  Plus,
  ChevronRight,
  Heart,
  Layers,
  MonitorSmartphone,
} from "lucide-react";

/* ── AI Model definitions ─────────────────────────────── */
const AI_MODELS = [
  { id: "ideogram-v3", name: "Ideogram V3", icon: "🎨", highlighted: true },
  { id: "seedream-v4", name: "Seedream V4", icon: "📊" },
  { id: "flux-pro-ultra", name: "FLUX.1 Pro Ultra", icon: "✦" },
  { id: "nano-banana", name: "Nano Banana Pro", icon: "✧" },
  { id: "google-imagen", name: "Google Imagen 4 Ultra", icon: "G" },
];

const ASPECT_RATIOS = ["1:1", "3:4", "4:3", "16:9"];
const RESOLUTIONS = ["1.5k", "2k"];

/* ── Hero showcase images ─────────────────────────────── */
const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80", alt: "Portrait 1", rotate: -12 },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80", alt: "Portrait 2", rotate: -4 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80", alt: "Portrait 3", rotate: 5 },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80", alt: "Portrait 4", rotate: 14 },
];

export default function ImageGenerationPage() {
  // ── State ──────────────────────────────────────────────
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("ideogram-v3");
  const [aspectRatio, setAspectRatio] = useState("3:4");
  const [resolution, setResolution] = useState("2k");
  const [imageCount, setImageCount] = useState(1);
  const [qualityOn, setQualityOn] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Popup state — only one popup at a time
  const [activePopup, setActivePopup] = useState(null); // "aspectRatio" | "resolution" | null

  const fileInputRef = useRef(null);
  const maxImages = 4;

  // ── Handlers ───────────────────────────────────────────
  const handleImageUpload = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedImage({ name: file.name, url });
  }, []);

  const removeUploadedImage = useCallback(() => {
    if (uploadedImage?.url) URL.revokeObjectURL(uploadedImage.url);
    setUploadedImage(null);
  }, [uploadedImage]);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim() && !uploadedImage) return;
    setIsGenerating(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsGenerating(false);
  }, [prompt, uploadedImage]);

  const togglePopup = useCallback((name) => {
    setActivePopup((prev) => (prev === name ? null : name));
  }, []);

  const currentModel = AI_MODELS.find((m) => m.id === selectedModel);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] w-full max-w-5xl mx-auto px-4 -mt-8">

      {/* ── Hero Image Cards ──────────────────────────────── */}
      <div className="flex items-end justify-center gap-3 mb-8 -mt-4">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative w-[100px] h-[130px] md:w-[120px] md:h-[155px] rounded-2xl overflow-hidden border-2 border-zinc-700/50 shadow-xl transition-transform hover:scale-105"
            style={{ transform: `rotate(${img.rotate}deg)`, zIndex: i }}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="120px" />
          </div>
        ))}
      </div>

      {/* ── Title ─────────────────────────────────────────── */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center tracking-tight mb-3">
        CREATE ANYTHING WITH{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
          {currentModel?.name || "IMAGINE AI"}
        </span>
      </h1>
      <p className="text-zinc-500 text-sm md:text-base text-center max-w-xl mb-8 leading-relaxed">
        Describe any scene, character, mood, or aesthetic — and watch
        <br className="hidden sm:block" /> it come to life instantly
      </p>

      {/* ── Prompt Box ────────────────────────────────────── */}
      <div className="w-full max-w-3xl relative">
        {/* Model Selector — shown above prompt on click */}
        {activePopup === "model" && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {AI_MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => { setSelectedModel(model.id); setActivePopup(null); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer
                  ${selectedModel === model.id
                    ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border border-transparent"
                  }`}
              >
                <span className="text-xs">{model.icon}</span>
                {model.name}
              </button>
            ))}
          </div>
        )}
        <div className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-2xl overflow-hidden transition-all focus-within:border-zinc-700">
          {/* Uploaded Image Tag */}
          {uploadedImage && (
            <div className="px-5 pt-4">
              <span className="inline-flex items-center gap-2 bg-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-300">
                <span className="w-5 h-5 rounded bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                  <Upload className="w-3 h-3 text-white" />
                </span>
                {uploadedImage.name}
                <button onClick={removeUploadedImage} className="text-zinc-500 hover:text-white transition-colors cursor-pointer">
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            </div>
          )}

          {/* Textarea */}
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Upload image as a Prompt or Describe the scene you Imagine..."
            className="w-full bg-transparent text-zinc-200 placeholder:text-zinc-600 resize-none outline-none text-sm px-5 py-4 min-h-[60px]"
            rows={2}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleGenerate();
              }
            }}
          />

          {/* Bottom Toolbar */}
          <div className="flex items-center justify-between px-4 pb-3 pt-1">
            <div className="flex items-center gap-1.5 flex-wrap">
              {/* Upload Button */}
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Upload Reference Image"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              {/* Model Badge */}
              <button
                onClick={() => togglePopup("model")}
                className="flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:from-violet-500 hover:to-indigo-500 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {currentModel?.name || "Nova AI"}
                <ChevronRight className="w-3 h-3" />
              </button>

              {/* Aspect Ratio — clickable with popup */}
              <div className="relative">
                <button
                  onClick={() => togglePopup("aspectRatio")}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer
                    ${activePopup === "aspectRatio"
                      ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                    }`}
                >
                  <MonitorSmartphone className="w-3.5 h-3.5" />
                  {aspectRatio}
                </button>
                {activePopup === "aspectRatio" && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center bg-zinc-900 rounded-full border border-zinc-800 p-0.5 shadow-xl shadow-black/50 z-50">
                    {ASPECT_RATIOS.map((ratio) => (
                      <button
                        key={ratio}
                        onClick={() => { setAspectRatio(ratio); setActivePopup(null); }}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap
                          ${aspectRatio === ratio
                            ? "bg-violet-500/20 text-violet-300"
                            : "text-zinc-500 hover:text-zinc-300"
                          }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Resolution — clickable with popup */}
              <div className="relative">
                <button
                  onClick={() => togglePopup("resolution")}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer
                    ${activePopup === "resolution"
                      ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                    }`}
                >
                  <Heart className="w-3.5 h-3.5" />
                  {resolution.toUpperCase()}
                </button>
                {activePopup === "resolution" && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center bg-zinc-900 rounded-full border border-zinc-800 p-0.5 shadow-xl shadow-black/50 z-50">
                    {RESOLUTIONS.map((res) => (
                      <button
                        key={res}
                        onClick={() => { setResolution(res); setActivePopup(null); }}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap
                          ${resolution === res
                            ? "bg-violet-500/20 text-violet-300"
                            : "text-zinc-500 hover:text-zinc-300"
                          }`}
                      >
                        {res}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quality Toggle */}
              <button
                onClick={() => setQualityOn(!qualityOn)}
                className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer
                  ${qualityOn ? "bg-zinc-800 text-zinc-300" : "bg-zinc-800/50 text-zinc-500"}`}
              >
                <Layers className="w-3.5 h-3.5" />
                {qualityOn ? "On" : "Off"}
              </button>

              {/* Image Count */}
              <div className="flex items-center gap-0.5 bg-zinc-800 rounded-lg px-1.5 py-0.5">
                <button
                  onClick={() => setImageCount(Math.max(1, imageCount - 1))}
                  className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-xs text-zinc-300 font-medium w-7 text-center">
                  {imageCount}/{maxImages}
                </span>
                <button
                  onClick={() => setImageCount(Math.min(maxImages, imageCount + 1))}
                  className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || (!prompt.trim() && !uploadedImage)}
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:hover:bg-zinc-800 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all cursor-pointer border border-zinc-700 hover:border-zinc-600"
            >
              <Sparkles className="w-4 h-4" />
              {isGenerating ? "Generating…" : "Generate"}
            </button>
          </div>
        </div>
      </div>

      {/* Click-away overlay to close popups */}
      {activePopup && (
        <div className="fixed inset-0 z-40" onClick={() => setActivePopup(null)} />
      )}
    </div>
  );
}
