import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "研究": "bg-violet-500/10 border-violet-500/20 text-violet-400",
  "内容": "bg-amber-500/10 border-amber-500/20 text-amber-400",
  "创意": "bg-pink-500/10 border-pink-500/20 text-pink-400",
  "开发": "bg-blue-500/10 border-blue-500/20 text-blue-400",
  "工具": "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">技能生态</h2>
          <p className="text-slate-400 max-w-xl mx-auto">这些技能预装在你的工作区，对话中直接激活。</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-start gap-3 p-4 bg-[#111827] border border-[#1f2d45] rounded-xl card-hover">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-xs font-mono text-blue-300 bg-blue-500/10 px-1.5 py-0.5 rounded">{skill.name}</code>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${categoryColors[skill.category]}`}>{skill.category}</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-5 bg-[#111827] border border-[#1f2d45] rounded-xl text-center">
          <p className="text-sm text-slate-400">大多数技能无需手动调用。描述你的任务，AI 自动识别并激活合适的技能。</p>
          <p className="text-xs text-slate-500 mt-1">想强制使用某技能？在提示词里提到技能名即可，例如“用 deep-research 调研...”</p>
        </div>
      </div>
    </section>
  );
}
