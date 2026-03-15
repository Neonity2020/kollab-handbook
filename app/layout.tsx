import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kollab 实用手册 | AI 魔法工具箱",
  description: "学会用 Kollab AI 做任何事：全栈开发、深度研究、PPT生成、文件处理、图片创作",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
