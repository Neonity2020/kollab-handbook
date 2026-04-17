import Link from "next/link";
import { docSections } from "@/lib/docs";
import { ArrowRight } from "lucide-react";

const categoryOrder = ["入门", "功能", "进阶"];

export const metadata = {
  title: "文档 · Kollab 实用手册",
  description: "Kollab AI 平台完整使用文档，覆盖快速入门、智能体、知识库、工作流等核心功能。",
};

export default function DocsIndex() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: docSections.filter((s) => s.category === cat),
  }));

  return (
    <div className="max-w-2xl">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Kollab 使用文档
        </div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
          Kollab 实用手册
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
          从快速入门到进阶技巧，覆盖 Kollab AI 平台的所有核心功能。
          无需编程基础，5 分钟内上手。
        </p>
      </div>

      {grouped.map(({ category, items }) => (
        <div key={category} className="mb-10">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4 px-1">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((s) => (
              <Link
                key={s.slug}
                href={`/docs/${s.slug}/`}
                className="group block bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4 hover:border-blue-500/40 hover:bg-[var(--surface2)] transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none mt-0.5">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {s.title}
                      </h3>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all group-hover:translate-x-0.5" />
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-4 pt-8 border-t border-[var(--border)]">
        <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
          还有问题？{" "}
          <Link href="/#faq" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
            查看 FAQ
          </Link>{" "}
          或{" "}
          <a href="https://kollab.im" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
            联系支持
          </a>
        </p>
      </div>
    </div>
  );
}
