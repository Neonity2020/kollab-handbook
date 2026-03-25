import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <span className="font-bold text-[1.05rem]">
            📚 Kollab Handbook
          </span>
        ),
      }}
      sidebar={{
        banner: (
          <div className="rounded-xl p-3 text-sm leading-relaxed text-white"
            style={{ background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)' }}>
            <strong>Kollab</strong> — AI 驱动的知识与协作平台
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
