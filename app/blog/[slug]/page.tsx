import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <>
      <ProgressBar />
      <Navbar />
      <main className="min-h-screen bg-[var(--bg)] pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors mb-10"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回博客列表
          </Link>

          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {post!.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4">
              {post!.title}
            </h1>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <time>{post!.date}</time>
              <span>·</span>
              <span>约 {post!.readTime} 分钟阅读</span>
              <span>·</span>
              <span>{post!.author}</span>
            </div>
          </header>

          <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5 mb-10">
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{post!.summary}</p>
          </div>

          <article
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post!.content }}
          />

          <div className="mt-16 pt-8 border-t border-[var(--border)]">
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
