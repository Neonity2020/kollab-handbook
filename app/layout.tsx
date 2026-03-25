import { RootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: {
    template: '%s | Kollab Handbook',
    default: 'Kollab Handbook',
  },
  description: 'Kollab 使用手册 — AI 驱动的知识与协作平台完整指南',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
