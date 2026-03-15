"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-4 bg-[#0d1424]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">常见问题</h2>
          <p className="text-slate-400">快速解答你最可能遇到的疑问。</p>
        </div>
        <div className="space-y-2">
          {faq.map((item, i) => (
            <div key={i} className="bg-[#111827] border border-[#1f2d45] rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors">
                <span className="text-sm font-medium text-slate-200">{item.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform flex-shrink-0 ml-4 ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-4"><p className="text-sm text-slate-400 leading-relaxed">{item.a}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
