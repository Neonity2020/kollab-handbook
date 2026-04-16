import { tips } from "@/lib/data";
import { Lightbulb } from "lucide-react";

export default function Tips() {
  return (
    <section id="tips" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">高效使用技巧</h2>
          <p className="text-slate-400 max-w-xl mx-auto">这 6 条习惯决定你的 AI 工作效率天花板。</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tips.map((tip) => (
            <div key={tip.title} className="p-5 bg-[var(--bg)] border border-[var(--border)] rounded-xl card-hover">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">{tip.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="px-5 py-3 border-b border-[var(--border)]"><p className="text-xs font-medium text-slate-300">AI 辅助 vs 手动完成时间对比</p></div>
          <div className="divide-y divide-[#1f2d45]">
            {[
              { task: "调研报告（3000字）", manual: "8小时", ai: "15分钟", save: "97%" },
              { task: "PPT 制作（10张）", manual: "4小时", ai: "5分钟", save: "98%" },
              { task: "Web App 开发+部署", manual: "2天", ai: "30分钟", save: "94%" },
              { task: "数据分析+可视化", manual: "3小时", ai: "20分钟", save: "89%" },
              { task: "文档格式化转换", manual: "1小时", ai: "2分钟", save: "97%" },
            ].map((row) => (
              <div key={row.task} className="grid grid-cols-4 px-5 py-3 text-xs">
                <span className="text-slate-400 col-span-2">{row.task}</span>
                <span className="text-slate-500 line-through">{row.manual}</span>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400 font-medium">{row.ai}</span>
                  <span className="text-emerald-500/60 text-[10px]">节省{row.save}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
