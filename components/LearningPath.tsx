"use client";
import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { learningPath } from "@/lib/data";

export default function LearningPath() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem("kollab-lp-checked");
    if (saved) setChecked(new Set(JSON.parse(saved)));
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem("kollab-lp-checked", JSON.stringify([...next]));
      return next;
    });
  };

  const total = learningPath.flatMap((p) => p.tasks).length;
  const done = checked.size;
  const percent = Math.round((done / total) * 100);

  return (
    <section id="learning-path" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">7天学习路径</h2>
          <p className="text-slate-400 max-w-xl mx-auto">按这个顺序来，7 天内从新手到高效用户。</p>
        </div>
        <div className="mb-8 p-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400">学习进度</span>
            <span className="text-xs text-blue-400 font-medium">{done}/{total} 已完成</span>
          </div>
          <div className="h-1.5 bg-[var(--surface)] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transition-all duration-500" style={{ width: `${percent}%` }} />
          </div>
          {done === total && <p className="text-xs text-emerald-400 mt-2 text-center">全部完成！你已掌握 Kollab 核心用法</p>}
        </div>
        <div className="space-y-4">
          {learningPath.map((phase) => {
            const phaseDone = phase.tasks.filter((t) => checked.has(t.id)).length;
            return (
              <div key={phase.day} className="bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)] bg-[var(--bg)]/40">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-400 font-medium">{phase.day}</span>
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{phase.phase}</span>
                  </div>
                  <span className="text-xs text-slate-500">{phaseDone}/{phase.tasks.length}</span>
                </div>
                <div className="divide-y divide-[#1f2d45]">
                  {phase.tasks.map((task) => (
                    <button key={task.id} onClick={() => toggle(task.id)} className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-white/[0.02] transition-colors group">
                      {checked.has(task.id) ? <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> : <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-500 flex-shrink-0 transition-colors" />}
                      <span className={`text-sm transition-colors ${checked.has(task.id) ? "text-slate-500 line-through" : "text-slate-400 group-hover:text-slate-300"}`}>{task.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 p-6 bg-blue-600/10 border border-blue-500/20 rounded-xl text-center">
          <h3 className="text-base font-semibold text-slate-700 dark:text-slate-200 mb-2">准备好开始了？</h3>
          <p className="text-sm text-slate-400 mb-4">打开 Kollab，发送你的第一条任务。第一步比看完所有文档更重要。</p>
          <a href="https://kollab.im" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-slate-900 dark:text-slate-900 dark:text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">打开 Kollab</a>
        </div>
      </div>
    </section>
  );
}
