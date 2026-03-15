"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogSection() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              每日更新 · 技术前沿追踪
            </div>
            <h2 className="text-2xl font-bold text-white">深度博客</h2>
            <p className="text-sm text-slate-400 mt-1">
              Claude Code、OpenClaw、CLI-Anything 等前沿技术深度解析
            </p>
          </div>
          <Link
            href="/blog/"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            查看全部文章
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid gap-4">
          {latest.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/blog/${post.slug}/`}
                className="group block bg-[#0d1626] border border-[#1f2d45] rounded-xl p-5 sm:p-6 hover:border-blue-500/40 hover:bg-[#111d30] transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <time className="text-xs text-slate-500">{post.date}</time>
                      <span className="text-slate-600 text-xs">·</span>
                      <span className="text-xs text-slate-500">{post.readTime} min read</span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-100 group-hover:text-blue-300 transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {post.summary}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex flex-wrap sm:flex-col gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            查看全部文章
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
