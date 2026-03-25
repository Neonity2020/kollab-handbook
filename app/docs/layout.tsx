"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { docSections } from "@/lib/docs";
import Navbar from "@/components/Navbar";
import { BookOpen, ChevronRight } from "lucide-react";

const categoryOrder = ["入门", "功能", "进阶"];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: docSections.filter((s) => s.category === cat),
  }));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#0f172a] pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-0">
          {/* Sidebar */}
          <aside className="hidden md:block w-56 shrink-0 pt-8 pr-6">
            <div className="sticky top-20">
              <Link
                href="/docs/"
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors mb-6 text-sm"
              >
                <BookOpen className="w-4 h-4" />
                文档首页
              </Link>
              {grouped.map(({ category, items }) => (
                <div key={category} className="mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 px-1">
                    {category}
                  </p>
                  <nav className="space-y-0.5">
                    {items.map((s) => {
                      const active = pathname === `/docs/${s.slug}/` || pathname === `/docs/${s.slug}`;
                      return (
                        <Link
                          key={s.slug}
                          href={`/docs/${s.slug}/`}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-sm transition-all ${
                            active
                              ? "bg-blue-500/15 text-blue-300 font-medium"
                              : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                          }`}
                        >
                          <span className="text-base leading-none">{s.icon}</span>
                          {s.title}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 py-8 pl-0 md:pl-8 border-l border-[#1e293b]">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
