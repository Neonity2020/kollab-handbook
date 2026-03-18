export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  author: string;
  readTime: number;
  content: string;
}

export const blogPosts: BlogPost[] = [