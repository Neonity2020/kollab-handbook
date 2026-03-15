import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <ProgressBar />
      <Navbar />
      <main className="min-h-screen bg-[#060d1a] pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回博客列表
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <time>{post.date}</time>
              <span>·</span>
              <span>约 {post.readTime} 分钟阅读</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          {/* Summary */}
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 mb-10">
            <p className="text-sm text-slate-300 leading-relaxed">{post.summary}</p>
          </div>

          {/* Content */}
          <article
            className="prose prose-invert prose-sm max-w-none
              prose-headings:text-slate-100
              prose-h2:text-xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-base prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-blue-300
              prose-p:text-slate-400 prose-p:leading-relaxed
              prose-strong:text-slate-200
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
              prose-code:text-blue-300 prose-code:bg-[#0d1626] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
              prose-pre:bg-[#0d1626] prose-pre:border prose-pre:border-[#1f2d45] prose-pre:rounded-xl
              prose-ul:text-slate-400 prose-li:my-1
              prose-hr:border-[#1f2d45] prose-hr:my-8
              prose-table:text-sm
              prose-th:text-slate-300 prose-th:border prose-th:border-[#1f2d45] prose-th:px-3 prose-th:py-2
              prose-td:text-slate-400 prose-td:border prose-td:border-[#1f2d45] prose-td:px-3 prose-td:py-2
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer nav */}
          <div className="mt-16 pt-8 border-t border-[#1f2d45]">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              查看更多文章
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
