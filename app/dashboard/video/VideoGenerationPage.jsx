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
  MonitorSmartphone,
  Clock,
  Layers,
  Search,
  Film,
} from "lucide-react";

/* ── Video AI Model definitions ───────────────────────── */
const VIDEO_MODELS = [
  { id: "sora-2-pro", name: "Sora 2 Pro", icon: "🎬", highlighted: true },
  { id: "veo-3-fast", name: "Veo 3 Fast", icon: "G" },
  { id: "kling-2.5-pro", name: "Kling 2.5 Pro", icon: "✧" },
  { id: "wan-2.5", name: "Wan 2.5", icon: "🎥" },
  { id: "hailuo-02", name: "Hailuo O2", icon: "◉" },
  { id: "seedance-pro", name: "Seedance Pro Fast", icon: "📊" },
  { id: "pixverse-v5", name: "Pixverse V5", icon: "▶" },
];

const VIDEO_STYLES = ["Cinematic", "Anime", "Realistic", "3D Render"];
const ASPECT_RATIOS = ["1:1", "3:4", "4:3", "16:9"];
const DURATIONS = ["5s", "10s", "15s"];

/* ── Effects categories & presets ─────────────────────── */
const EFFECT_CATEGORIES = [
  "All", "Camera Control", "Camera Control", "Camera Control",
  "Camera Control", "Camera Control", "Camera Control", "Camera Control",
];

const EFFECT_PRESETS = [
  { id: 1, name: "Reveal", category: "Camera Control" },
  { id: 2, name: "Viral Transition", category: "Camera Control" },
  { id: 3, name: "Add Hook", category: "Camera Control" },
  { id: 4, name: "Viral Transition", category: "Camera Control" },
  { id: 5, name: "Reveal", category: "Camera Control" },
  { id: 6, name: "Reveal", category: "Camera Control" },
  { id: 7, name: "Zoom Burst", category: "Camera Control" },
];

/* ── 3-step workflow cards ────────────────────────────── */
const WORKFLOW_STEPS = [
  {
    title: "Add Image",
    desc: "Upload or generate an image to start your animation",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Choose Preset",
    desc: "Pick a preset to control your image movement",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    multi: true,
  },
  {
    title: "Get Video",
    desc: "Click generate to create your final animated video!",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    badge: "5s",
  },
];

export default function VideoGenerationPage() {
  // ── State ──────────────────────────────────────────────
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("sora-2-pro");
  const [videoStyle, setVideoStyle] = useState("Cinematic");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [duration, setDuration] = useState("5s");
  const [videoCount, setVideoCount] = useState(1);
  const [effectsOn, setEffectsOn] = useState(false);
  const [showEffectsModal, setShowEffectsModal] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState(null);
  const [effectSearch, setEffectSearch] = useState("");
  const [effectCategory, setEffectCategory] = useState("All");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Popup state — only one popup at a time
  const [activePopup, setActivePopup] = useState(null); // "style" | "aspectRatio" | "duration" | null

  const fileInputRef = useRef(null);
  const maxVideos = 4;
  const currentModel = VIDEO_MODELS.find((m) => m.id === selectedModel);

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
    await new Promise((r) => setTimeout(r, 3000));
    setIsGenerating(false);
  }, [prompt, uploadedImage]);

  const togglePopup = useCallback((name) => {
    setActivePopup((prev) => (prev === name ? null : name));
    if (name !== "effects") setShowEffectsModal(false);
  }, []);

  const toggleEffectsModal = useCallback(() => {
    setShowEffectsModal((prev) => !prev);
    setActivePopup(null);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] w-full max-w-5xl mx-auto px-4 -mt-4">

      {/* ── 3-Step Workflow Cards ──────────────────────────── */}
      <div className="flex items-start justify-center gap-6 mb-10">
        {WORKFLOW_STEPS.map((step, i) => (
          <div key={i} className="flex flex-col items-center w-[180px] group">
            <div className="relative w-full h-[130px] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 mb-3 transition-transform group-hover:scale-[1.02]">
              {step.multi ? (
                <div className="grid grid-cols-3 gap-0.5 h-full">
                  {[step.img, step.img, step.img].map((src, j) => (
                    <div key={j} className="relative h-full overflow-hidden">
                      <Image src={src} alt={`Preset ${j + 1}`} fill className="object-cover" sizes="60px"
                        style={{ filter: j === 1 ? "none" : "brightness(0.7)" }} />
                    </div>
                  ))}
                </div>
              ) : (
                <Image src={step.img} alt={step.title} fill className="object-cover" sizes="180px" />
              )}
              {step.badge && (
                <span className="absolute top-2 right-2 bg-black/70 backdrop-blur text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                  {step.badge}
                </span>
              )}
            </div>
            <h3 className="text-violet-400 text-sm font-semibold mb-1">{step.title}</h3>
            <p className="text-zinc-500 text-[11px] text-center leading-snug">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* ── Title ─────────────────────────────────────────── */}
      <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-center tracking-tight mb-3 leading-tight">
        BRING IDEAS TO LIFE WITH{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
          IMAGINE AI
        </span>
      </h1>
      <p className="text-zinc-500 text-sm md:text-base text-center max-w-xl mb-6 leading-relaxed">
        Type a prompt or upload a reference image — and watch your vision become a stunning AI-generated video.
      </p>

      {/* ── Prompt Box ────────────────────────────────────── */}
      <div className="w-full max-w-3xl relative">
        {/* Model Selector — shown above prompt on click */}
        {activePopup === "model" && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            {VIDEO_MODELS.map((model) => (
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
            placeholder="Describe the video you want to generate — scene, motion, mood, style..."
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
              {/* Upload */}
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

              {/* Aspect Ratio — popup */}
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
                          ${aspectRatio === ratio ? "bg-violet-500/20 text-violet-300" : "text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration — popup */}
              <div className="relative">
                <button
                  onClick={() => togglePopup("duration")}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer
                    ${activePopup === "duration"
                      ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                    }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  {duration}
                </button>
                {activePopup === "duration" && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center bg-zinc-900 rounded-full border border-zinc-800 p-0.5 shadow-xl shadow-black/50 z-50">
                    {DURATIONS.map((d) => (
                      <button
                        key={d}
                        onClick={() => { setDuration(d); setActivePopup(null); }}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap
                          ${duration === d ? "bg-violet-500/20 text-violet-300" : "text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Style — popup */}
              <div className="relative">
                <button
                  onClick={() => togglePopup("style")}
                  className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer
                    ${activePopup === "style"
                      ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                    }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  {videoStyle}
                </button>
                {activePopup === "style" && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 flex items-center bg-zinc-900 rounded-full border border-zinc-800 p-0.5 shadow-xl shadow-black/50 z-50">
                    {VIDEO_STYLES.map((s) => (
                      <button
                        key={s}
                        onClick={() => { setVideoStyle(s); setActivePopup(null); }}
                        className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap
                          ${videoStyle === s ? "bg-violet-500/20 text-violet-300" : "text-zinc-500 hover:text-zinc-300"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Effects Button */}
              <button
                onClick={toggleEffectsModal}
                className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer
                  ${effectsOn || showEffectsModal
                    ? "bg-violet-500/20 text-violet-300 border border-violet-500/40"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                  }`}
              >
                <Layers className="w-3.5 h-3.5" />
                Effects
              </button>

              {/* Video Count */}
              <div className="flex items-center gap-0.5 bg-zinc-800 rounded-lg px-1.5 py-0.5">
                <button
                  onClick={() => setVideoCount(Math.max(1, videoCount - 1))}
                  className="w-6 h-6 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-xs text-zinc-300 font-medium w-7 text-center">
                  {videoCount}/{maxVideos}
                </span>
                <button
                  onClick={() => setVideoCount(Math.min(maxVideos, videoCount + 1))}
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

        {/* ── Video Effects Modal ──────────────────────────── */}
        {showEffectsModal && (
          <div className="absolute bottom-full mb-3 left-0 right-0 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-50">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <h3 className="text-white text-base font-semibold">Video Effects</h3>
              <button
                onClick={toggleEffectsModal}
                className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search */}
            <div className="px-5 mb-3">
              <div className="flex items-center gap-2 bg-zinc-800 rounded-xl px-3 py-2.5 border border-zinc-700 focus-within:border-zinc-600">
                <Search className="w-4 h-4 text-zinc-500" />
                <input
                  type="text"
                  value={effectSearch}
                  onChange={(e) => setEffectSearch(e.target.value)}
                  placeholder="Search"
                  className="bg-transparent text-zinc-200 text-sm outline-none flex-1 placeholder:text-zinc-500"
                />
              </div>
            </div>

            {/* Category Tags */}
            <div className="px-5 mb-4 flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
              {EFFECT_CATEGORIES.map((cat, i) => (
                <button
                  key={`${cat}-${i}`}
                  onClick={() => setEffectCategory(cat)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border
                    ${(effectCategory === cat && (i === 0 || effectCategory !== "All"))
                      ? "bg-violet-500/20 text-violet-300 border-violet-500/40"
                      : "text-zinc-400 border-zinc-700 hover:border-zinc-600 hover:text-zinc-300"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Preset Grid */}
            <div className="px-5 pb-5">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                {EFFECT_PRESETS.filter((e) =>
                  effectSearch ? e.name.toLowerCase().includes(effectSearch.toLowerCase()) : true
                ).map((effect) => (
                  <button
                    key={effect.id}
                    onClick={() => {
                      setSelectedEffect(effect);
                      setEffectsOn(true);
                      setShowEffectsModal(false);
                    }}
                    className="flex-shrink-0 w-[110px] group cursor-pointer"
                  >
                    <div
                      className={`w-full h-[70px] rounded-xl border mb-2 transition-all flex items-center justify-center
                        ${selectedEffect?.id === effect.id
                          ? "border-violet-500 bg-violet-500/10"
                          : "border-zinc-700 bg-zinc-800/50 hover:border-zinc-600 hover:bg-zinc-800"
                        }`}
                    >
                      <Film className="w-5 h-5 text-zinc-600" />
                    </div>
                    <p className="text-zinc-400 text-[11px] text-center font-medium group-hover:text-zinc-300 transition-colors">
                      {effect.name}
                    </p>
                  </button>
                ))}
                <button className="flex-shrink-0 w-8 h-[70px] rounded-xl border border-zinc-700 bg-zinc-800/50 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click-away overlay to close popups */}
      {(activePopup || showEffectsModal) && (
        <div className="fixed inset-0 z-40" onClick={() => { setActivePopup(null); setShowEffectsModal(false); }} />
      )}
    </div>
  );
}
