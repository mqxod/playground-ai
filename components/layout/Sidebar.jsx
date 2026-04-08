import React from "react";
import Link from "next/link";
import { Sparkles, Home, LayoutGrid, Image as ImageIcon, Video, User, Moon, CircleHelp, MoreHorizontal } from "lucide-react";

const NavItem = ({ icon: Icon, label, href }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-1.5 w-full py-4 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-900/50 transition-colors rounded-lg group">
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="text-[10px] font-medium leading-tight text-center px-1">{label}</span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="w-full">
        {content}
      </Link>
    );
  }

  return <button type="button">{content}</button>;
};

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[90px] border-r border-zinc-800/50 bg-black flex flex-col justify-between py-6 z-50">
      <div className="flex flex-col items-center w-full px-2 gap-4">
        {/* Logo */}
        <div className="mb-4 text-white">
          <Sparkles className="w-8 h-8" strokeWidth={1.5} />
        </div>

        {/* Top Nav */}
        <div className="flex flex-col w-full gap-1">
          <NavItem icon={Home} label="Home" href="/" />
          <NavItem icon={LayoutGrid} label="AI Tools" />
          <NavItem icon={ImageIcon} label="Image Generation" />
          <NavItem icon={Video} label="Video Generation" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full px-2 gap-1">
        {/* Bottom Nav */}
        <NavItem icon={Moon} label="Dark Mode" />
        <NavItem icon={CircleHelp} label="Support" />
        <NavItem icon={MoreHorizontal} label="More" />
      </div>
    </aside>
  );
}
