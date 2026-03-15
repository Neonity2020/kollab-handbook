"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { href: "#overview", label: "平台概览", highlight: false },
  { href: "#use-cases", label: "核心用例", highlight: false },
  { href: "#skills", label: "技能生态", highlight: false },
  { href: "#quickstart", label: "快速入门", highlight: false },
  { href: "#tips", label: "高效技巧", highlight: false },
  { href: "#learning-path", label: "学习路径", highlight: false },
  { href: "#faq", label: "FAQ", highlight: false },
  { href: "/blog/", label: "技术博客", highlight: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-[#1f2d45]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
              <Zap className="w-4 h-4 text-blue-400" />
            </div>
            <span className="font-semibold text-sm text-slate-200">Kollab 手册</span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-xs rounded-md transition-all ${
                  link.highlight
                    ? "text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 flex items-center gap-1.5"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {link.highlight && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse flex-shrink-0" />
                )}
                {link.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden p-2 text-slate-400 hover:text-slate-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#111827] border-b border-[#1f2d45] px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`block py-2.5 text-sm border-b border-[#1f2d45] last:border-0 ${
                link.highlight ? "text-blue-400" : "text-slate-400 hover:text-slate-200"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
