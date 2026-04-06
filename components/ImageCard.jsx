import React from "react";
import Image from "next/image";

export default function ImageCard({ src, alt, aspectRatio = "square", className = "" }) {
  return (
    <div className={`relative overflow-hidden group rounded-2xl cursor-pointer ${className}`}>
      {/* For consistent layout, assuming parent dictates the grid structure, 
          we use aspect-ratio padding trick or regular aspect-ratio utility */}
      <div className="relative w-full h-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/50">
        <Image
          src={src}
          alt={alt || "Generated Output"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
    </div>
  );
}
