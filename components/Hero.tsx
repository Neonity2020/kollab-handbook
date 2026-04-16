"use client";
import { useEffect, useState } from "react";
import { ArrowDown, Zap } from "lucide-react";

const taglines = [
  "全栈项目，从需求到部署",
  "深度研究报告，10分钟完成",
  "PPT生成，大厂级设计",
  "GitHub仓库，直接管理",
  "图片创作，文字变视觉",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % taglines.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Grid pattern — subtle in both modes */}
      <div
        className="absolute inset-0 dark:opacity-[0.03] opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-500 dark:text-blue-400 mb-8">
          <Zap className="w-3 h-3" />
          <span>AI 魔法工具箱 · Powered by Claude Opus 4.5</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4 leading-tight">
          Kollab 实用手册
        </h1>

        <div className="h-10 flex items-center justify-center mb-6">
          <p
            className={`text-lg sm:text-xl text-blue-500 dark:text-blue-400 font-medium transition-all duration-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {taglines[current]}
          </p>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          学会用 Kollab AI 做任何事。8 个核心用例，12 个专业技能，带你从"试一试"到"每天离不开"。
        </p>

        <div className="flex items-center justify-center gap-8 mb-12 text-sm">
          {[
            { num: "8",   label: "核心用例"   },
            { num: "12+", label: "专业技能"   },
            { num: "90%", label: "平均效率提升" },
            { num: "7天", label: "掌握周期"   },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-blue-500 dark:text-blue-400">{stat.num}</div>
              <div className="text-slate-500 dark:text-slate-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#use-cases"
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            浏览用例
          </a>
          <a
            href="#quickstart"
            className="px-6 py-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg transition-all"
          >
            快速入门
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 animate-bounce">
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
