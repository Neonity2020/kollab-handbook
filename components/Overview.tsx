import { Bot, Globe, Cpu, Shield } from "lucide-react";

const features = [
  { icon: Bot, title: "Claude Opus 4.5", desc: "底层模型，处理代码、写作、分析、推理，能力全面且强悟。" },
  { icon: Globe, title: "MCP 外部集成", desc: "直连 GitHub、Notion 等平台，AI 可以直接操作你的数据，无需复制粘贴。" },
  { icon: Cpu, title: "专业技能系统", desc: "12+ 个专用技能：pptx、deep-research、nano-banana-2……每个都是针对特定任务优化的工具。" },
  { icon: Shield, title: "云端工作区", desc: "8GB 内存、持久化存储、AWS EB 部署能力，比你的笔记本还能干。" },
];

export default function Overview() {
  return (
    <section id="overview" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">Kollab 是什么？</h2>
          <p className="text-slate-400 max-w-xl mx-auto">不只是对话框。一个带工具、带集成、能干活的 AI 工作台。</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div key={f.title} className="p-5 bg-[#111827] border border-[#1f2d45] rounded-xl card-hover">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <f.icon className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-slate-200 mb-2">{f.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 p-6 bg-[#111827] border border-[#1f2d45] rounded-xl">
          <p className="text-xs text-slate-500 mb-4 text-center">工作原理</p>
          <div className="flex items-center justify-center gap-3 flex-wrap text-xs">
            {["你的消息", "→", "Claude 理解", "→", "调用技能/工具", "→", "执行任务", "→", "返回结果"].map((item, i) => (
              <span key={i} className={item === "→" ? "text-slate-600" : "px-3 py-1.5 bg-[#1a2236] border border-[#1f2d45] rounded-md text-slate-400"}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
