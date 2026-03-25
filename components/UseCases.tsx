"use client";
import { useState } from "react";
import { Code2, GitBranch, Search, Presentation, FileText, Image, BarChart3, Zap, Copy, Check, ChevronDown, ChevronUp, Clock } from "lucide-react";
import { useCases } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, GitBranch, Search, Presentation, FileText, Image, BarChart3, Zap,
};

const categoryLabels: Record<string, string> = {
  all: "全部", development: "开发", research: "研究", content: "内容",
};

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useCases.filter((uc) => activeCategory === "all" || uc.category === activeCategory);

  const copyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="use-cases" className="py-20 px-4 bg-[#0d1424]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">核心用例</h2>
          <p className="text-slate-400 max-w-xl mx-auto">8 个真实场景，每个都附有可直接使用的提示词模板。</p>
        </div>
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button key={key} onClick={() => setActiveCategory(key)} className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === key ? "bg-blue-600 text-white" : "bg-[#111827] border border-[#1f2d45] text-slate-400 hover:border-blue-500/40 hover:text-slate-300"}`}>{label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((uc) => {
            const Icon = iconMap[uc.icon];
            const isExpanded = expandedId === uc.id;
            return (
              <div key={uc.id} className="bg-[#111827] border border-[#1f2d45] rounded-xl overflow-hidden card-hover">
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-200">{uc.title}</h3>
                        <p className="text-xs text-slate-500">{uc.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{uc.efficiency}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{uc.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {uc.tags.map((tag) => <span key={tag} className="px-2 py-0.5 bg-[#1a2236] border border-[#1f2d45] rounded text-xs text-slate-500">{tag}</span>)}
                  </div>
                  <button onClick={() => setExpandedId(isExpanded ? null : uc.id)} className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    {isExpanded ? <><ChevronUp className="w-3.5 h-3.5" />收起</> : <><ChevronDown className="w-3.5 h-3.5" />查看操作步骤 + 提示词模板</>}
                  </button>
                </div>
                {isExpanded && (
                  <div className="border-t border-[#1f2d45] p-5 space-y-4">
                    <div>
                      <p className="text-xs font-medium text-slate-300 mb-2">操作步骤</p>
                      <ol className="space-y-1.5">
                        {uc.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5">{i + 1}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs font-medium text-slate-300">提示词模板</p>
                        <button onClick={() => copyPrompt(uc.id, uc.promptTemplate)} className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                          {copiedId === uc.id ? <><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">已复制</span></> : <><Copy className="w-3 h-3" />复制</>}
                        </button>
                      </div>
                      <pre className="bg-[#0d1424] border border-[#1f2d45] rounded-lg p-3 text-xs text-slate-400 whitespace-pre-wrap leading-relaxed overflow-x-auto">{uc.promptTemplate}</pre>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
