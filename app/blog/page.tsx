import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

export default function BlogIndex() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main className="min-h-screen bg-[#111827] pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              每日更新
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">技术前沿追踪</h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              深度解析 Claude Code、OpenClaw、CLI-Anything 等 AI 编程工具的最新进展，
              为 Kollab 视频教程系列提供技术支撑。
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group block bg-[#263448] border border-[#334155] rounded-xl p-6 hover:border-blue-500/40 hover:bg-[#1e293b] transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <time className="text-xs text-slate-400">{post.date}</time>
                  <span className="text-slate-500">·</span>
                  <span className="text-xs text-slate-400">约 {post.readTime} 分钟阅读</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-xs text-slate-400">{post.author}</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-100 group-hover:text-blue-300 transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {post.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#334155] text-center">
            <p className="text-xs text-slate-500">
              文章每日更新 · 追踪 AI Agent 领域最新动态
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
