import { blogPostsData } from "./blog-data";

export interface BlogPost {
  slug:     string;
  title:    string;
  date:     string;
  summary:  string;
  tags:     string[];
  author:   string;
  readTime: number;
  content:  string;
}

export const blogPosts: BlogPost[] = blogPostsData;

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
