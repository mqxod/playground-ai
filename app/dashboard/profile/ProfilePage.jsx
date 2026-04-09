"use client";

import { useState, useRef, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import {
  Edit3,
  Sparkles,
  Camera,
  X,
} from "lucide-react";

export default function ProfilePage() {
  const { user, isLoaded } = useUser();

  // ── Profile state ──────────────────────────────────────
  const name = isLoaded && user ? user.fullName || user.firstName || "Creator" : "Creator";
  const email = isLoaded && user ? user.primaryEmailAddress?.emailAddress || "" : "";
  const avatarUrl = isLoaded && user ? user.profileImageUrl || user.imageUrl || "/next.svg" : "/next.svg";

  // ── Edit modal state ───────────────────────────────────
  const [showEdit, setShowEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [coverPreview, setCoverPreview] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [coverFile, setCoverFile] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const coverInputRef = useRef(null);
  const avatarInputRef = useRef(null);

  // Default cover
  const defaultCover = "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=1200&q=80";
  const [currentCover, setCurrentCover] = useState(defaultCover);

  // ── Open Edit Modal ────────────────────────────────────
  const openEdit = useCallback(() => {
    setEditName(name);
    setEditUsername(isLoaded && user?.username ? user.username : name.toLowerCase().replace(/\s+/g, ""));
    setCoverPreview(null);
    setAvatarPreview(null);
    setCoverFile(null);
    setAvatarFile(null);
    setShowEdit(true);
  }, [name, user, isLoaded]);

  // ── File handlers ──────────────────────────────────────
  const handleCoverChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  }, []);

  const handleAvatarChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));
  }, []);

  // ── Save changes ──────────────────────────────────────
  const handleSave = useCallback(async () => {
    if (!user) return;
    setIsSaving(true);
    try {
      // Update name via Clerk
      if (editName !== name) {
        const [firstName, ...rest] = editName.split(" ");
        await user.update({
          firstName: firstName || editName,
          lastName: rest.join(" ") || "",
        });
      }

      // Update profile image via Clerk
      if (avatarFile) {
        await user.setProfileImage({ file: avatarFile });
      }

      // Update cover locally (Clerk doesn't support cover images)
      if (coverPreview) {
        setCurrentCover(coverPreview);
      }

      setShowEdit(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
    } finally {
      setIsSaving(false);
    }
  }, [user, editName, name, avatarFile, coverPreview]);

  return (
    <main className="space-y-8">
      {/* ── Header area with cover and avatar ──────────── */}
      <section className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-[0_30px_120px_rgba(0,0,0,0.2)]">
        <div className="relative h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-2xl">
          <img
            src={currentCover}
            alt="Profile cover"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Avatar */}
          <div className="absolute left-8 -bottom-12 flex items-end">
            <div className="h-36 w-36 rounded-full ring-4 ring-black/80 overflow-hidden bg-zinc-900 shadow-xl">
              <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-8 md:px-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="text-3xl sm:text-4xl font-semibold text-white">{name}</h1>
                <button
                  onClick={openEdit}
                  className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-3 py-1 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10 cursor-pointer"
                >
                  <Edit3 className="h-4 w-4" />
                  Edit
                </button>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{email}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-t border-zinc-800 pt-6">
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium cursor-pointer">All</button>
              <button className="px-4 py-2 rounded-full bg-transparent border border-zinc-800 text-zinc-400 text-sm cursor-pointer hover:text-white hover:border-zinc-600 transition-colors">Image</button>
              <button className="px-4 py-2 rounded-full bg-transparent border border-zinc-800 text-zinc-400 text-sm cursor-pointer hover:text-white hover:border-zinc-600 transition-colors">Video</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content area — empty state ─────────────────── */}
      <section className="rounded-2xl border border-zinc-800 bg-zinc-950/95 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.2)]">
        <div className="max-w-3xl mx-auto text-center py-12">
          <div className="flex justify-center -space-x-4 mb-6">
            <div className="h-20 w-20 rounded-md bg-zinc-800 border border-zinc-700" />
            <div className="h-20 w-20 rounded-md bg-zinc-800 border border-zinc-700" />
            <div className="h-20 w-20 rounded-md bg-zinc-800 border border-zinc-700" />
          </div>
          <h2 className="text-xl font-semibold text-white">Create. Share. Inspire</h2>
          <p className="mt-3 text-sm text-zinc-400">Publish your generations and see how others bring their ideas to life.</p>
          <div className="mt-8">
            <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full shadow-md hover:bg-zinc-200 transition-colors cursor-pointer">
              <Sparkles className="h-4 w-4" />
              Publish
            </button>
          </div>
        </div>
      </section>

      {/* ── Edit Profile Modal ─────────────────────────── */}
      {showEdit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowEdit(false)} />

          {/* Modal */}
          <div className="relative w-full max-w-2xl mx-4 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-2">
              <h2 className="text-xl font-bold text-white">Edit profile</h2>
              <button
                onClick={() => setShowEdit(false)}
                className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-4 space-y-6">
              {/* ── Cover Image ──────────────────────────── */}
              <div className="relative rounded-xl overflow-hidden h-44 bg-zinc-800">
                <img
                  src={coverPreview || currentCover}
                  alt="Cover"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <input type="file" accept="image/*" ref={coverInputRef} onChange={handleCoverChange} className="hidden" />
                <button
                  onClick={() => coverInputRef.current?.click()}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-lg hover:bg-zinc-200 transition-colors cursor-pointer"
                >
                  Change Cover
                </button>

                {/* ── Profile Image (overlapping cover) ── */}
                <div className="absolute -bottom-10 left-6">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full ring-4 ring-zinc-900 overflow-hidden bg-zinc-800 shadow-xl">
                      <img
                        src={avatarPreview || avatarUrl}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <input type="file" accept="image/*" ref={avatarInputRef} onChange={handleAvatarChange} className="hidden" />
                    <button
                      onClick={() => avatarInputRef.current?.click()}
                      className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Spacer for overlapping avatar */}
              <div className="pt-6" />

              {/* ── Name Field ────────────────────────── */}
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Username*</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Your display name"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-sm outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
                />
              </div>

              {/* ── Username Field ────────────────────── */}
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Username*</label>
                <input
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditUsername(e.target.value)}
                  placeholder="Your username"
                  className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-zinc-200 text-sm outline-none focus:border-zinc-600 transition-colors placeholder:text-zinc-600"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-zinc-800 flex justify-end">
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors cursor-pointer disabled:opacity-50"
              >
                {isSaving ? "Saving…" : "Save changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
