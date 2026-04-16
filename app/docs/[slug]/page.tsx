import { notFound } from "next/navigation";
import Link from "next/link";
import { getDocPage, docSections } from "@/lib/docs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return docSections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} · Kollab 实用手册`,
    description: page.description,
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) notFound();

  const idx = docSections.findIndex((s) => s.slug === slug);
  const prev = idx > 0 ? docSections[idx - 1] : null;
  const next = idx < docSections.length - 1 ? docSections[idx + 1] : null;

  return (
    <div className="max-w-2xl">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
        <Link href="/docs/" className="hover:text-slate-300 transition-colors">
          文档
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-slate-400">{page.title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{page.icon}</span>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500">{page.category}</p>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-tight">{page.title}</h1>
          </div>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{page.description}</p>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {page.content.map((block, i) => {
          if (block.type === "heading") {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag
                key={i}
                className={`font-bold text-slate-900 dark:text-slate-900 dark:text-white tracking-tight ${
                  block.level === 2 ? "text-lg mt-8 mb-3" : "text-base mt-6 mb-2"
                }`}
              >
                {block.text}
              </Tag>
            );
          }

          if (block.type === "paragraph") {
            return (
              <p key={i} className="text-slate-300 text-sm leading-relaxed">
                {block.text}
              </p>
            );
          }

          if (block.type === "steps") {
            return (
              <ol key={i} className="space-y-3">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs flex items-center justify-center font-medium mt-0.5">
                      {j + 1}
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ol>
            );
          }

          if (block.type === "tips") {
            return (
              <ul key={i} className="space-y-2">
                {block.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            );
          }

          if (block.type === "code") {
            return (
              <div key={i} className="rounded-xl overflow-hidden border border-[var(--border)]">
                <div className="bg-[var(--surface)] px-3 py-1.5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide">
                    {block.lang || "text"}
                  </span>
                </div>
                <pre className="bg-[#0f172a] p-4 text-xs text-slate-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {block.code}
                </pre>
              </div>
            );
          }

          if (block.type === "cards") {
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {block.cards?.map((card, j) => (
                  <div
                    key={j}
                    className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-4"
                  >
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1.5">{card.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Prev / Next navigation */}
      <div className="mt-12 pt-6 border-t border-[var(--border)] flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/docs/${prev.slug}/`}
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 dark:text-slate-200 transition-colors min-w-0"
          >
            <ChevronLeft className="w-4 h-4 shrink-0 group-hover:-translate-x-0.5 transition-transform" />
            <span className="truncate">{prev.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug}/`}
            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-slate-700 dark:text-slate-200 transition-colors min-w-0 text-right"
          >
            <span className="truncate">{next.title}</span>
            <ChevronRight className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
