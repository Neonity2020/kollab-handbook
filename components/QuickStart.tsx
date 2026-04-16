"use client";
import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const steps = [
  { num: "01", title: "打开 Kollab 工作区", desc: "访问 kollab.im，登录你的账号，进入工作区界面。如果是企业微信集成，直接在对话框发消息即可。", tip: null },
  { num: "02", title: "连接外部服务", desc: "在工作区设置里安装 GitHub、Notion 等 MCP 集成。授权后 AI 就能直接操作这些平台，不需要手动复制粘贴。", tip: "GitHub 集成是最値得先装的一个，几乎所有开发类任务都会用到。" },
  { num: "03", title: "发送你的第一条任务", desc: "不需要特殊格式，直接描述你要做什么。越具体越好，把背景、要求、期望输出都写进去。", tip: null },
];

const examplePrompts = [
  { label: "全栈开发", prompt: "帮我构建一个任务管理 Web App，技术栈 Next.js + TypeScript，功能包括：添加/删除/标记完成任务，数据存 localStorage，深色主题设计。构建好后部署到 Elastic Beanstalk 并给我 URL。" },
  { label: "调研报告", prompt: "用 deep-research 深度调研\"2025年 AI Agent 开发框架\"，重点对比 LangChain、AutoGen、CrewAI、Claude Agent SDK，从性能、生态、易用性、适用场景四个维度分析，输出 3000字以上的结构化报告，附数据来源。" },
  { label: "PPT生成", prompt: "帮我生成一份 PPT，主题\"AI 如何改变软件开发流程\"，12张幻灯片，大厂简约深色风，目标受众是技术团队管理者。先给我大纲，确认后生成 PPTX 文件。" },
];

export default function QuickStart() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activePrompt, setActivePrompt] = useState(0);

  const copy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="quickstart" className="py-20 px-4 bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">三步快速入门</h2>
          <p className="text-slate-400 max-w-xl mx-auto">5 分钟内完成基础配置，开始你的第一个任务。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {i < steps.length - 1 && <div className="hidden md:block absolute top-6 left-full w-full h-px bg-[var(--surface)] -ml-4 z-0" />}
              <div className="relative bg-[var(--bg)] border border-[var(--border)] rounded-xl p-5 card-hover z-10">
                <div className="text-3xl font-bold text-blue-500/20 mb-3 font-mono">{step.num}</div>
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                {step.tip && <div className="mt-3 p-2.5 bg-blue-500/5 border border-blue-500/15 rounded-lg"><p className="text-xs text-blue-400">{step.tip}</p></div>}
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[var(--bg)] border border-[var(--border)] rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--border)] bg-[var(--bg)]/50">
            <Terminal className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-400 font-medium">示例提示词</span>
          </div>
          <div className="flex border-b border-[var(--border)]">
            {examplePrompts.map((p, i) => (
              <button key={p.label} onClick={() => setActivePrompt(i)} className={`px-4 py-2.5 text-xs font-medium transition-all ${activePrompt === i ? "text-blue-400 border-b-2 border-blue-500" : "text-slate-500 hover:text-slate-300"}`}>{p.label}</button>
            ))}
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between gap-4">
              <pre className="text-xs text-slate-400 whitespace-pre-wrap leading-relaxed flex-1">{examplePrompts[activePrompt].prompt}</pre>
              <button onClick={() => copy(examplePrompts[activePrompt].prompt, activePrompt)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-[var(--surface)] border border-[var(--border)] text-slate-400 hover:text-slate-700 dark:text-slate-200 rounded-lg transition-all flex-shrink-0">
                {copiedIdx === activePrompt ? (<><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">已复制</span></>) : (<><Copy className="w-3 h-3" />复制</>)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
