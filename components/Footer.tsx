export default function Footer() {
  return (
    <footer className="py-10 px-4 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>Kollab 实用手册 · 真正的魔法，是科学中的科学</p>
        <p>Built with Next.js + Tailwind CSS · Powered by Claude Opus 4.5</p>
      </div>
    </footer>
  );
}
