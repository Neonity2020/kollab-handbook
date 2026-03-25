import Link from 'next/link';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f3ff 0%, #faf8ff 50%, #f0f9ff 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <div style={{ maxWidth: '640px', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(109, 40, 217, 0.08)',
            border: '1px solid rgba(109, 40, 217, 0.2)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#6D28D9',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          📚 使用手册 · v1.0
        </div>

        <h1
          style={{
            fontSize: 'clamp(40px, 7vw, 64px)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: '#0F0F0F',
            marginBottom: '24px',
          }}
        >
          Kollab
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Handbook
          </span>
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#6B6B6B',
            lineHeight: '1.7',
            marginBottom: '40px',
            maxWidth: '480px',
            margin: '0 auto 40px',
          }}
        >
          Kollab 平台完整使用指南。从入门到进阶，掌握 AI 智能体、知识库、工作流自动化的每一项功能。
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/docs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#6D28D9',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '24px',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'all 0.2s',
            }}
          >
            开始阅读 →
          </Link>
          <Link
            href="/docs/getting-started"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'white',
              color: '#0F0F0F',
              padding: '14px 32px',
              borderRadius: '24px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              border: '1.5px solid #E0E0E0',
            }}
          >
            快速入门
          </Link>
        </div>

        <div
          style={{
            marginTop: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            textAlign: 'left',
          }}
        >
          {[
            { icon: '🤖', title: 'AI 智能体', desc: '配置与使用多模态智能体' },
            { icon: '📂', title: '知识库', desc: '建立和管理团队知识资产' },
            { icon: '⚡', title: '工作流', desc: '自动化你的协作流程' },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: 'white',
                border: '1px solid rgba(109, 40, 217, 0.1)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 12px rgba(109, 40, 217, 0.06)',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontWeight: 700, fontSize: '14px', color: '#0F0F0F', marginBottom: '4px' }}>
                {item.title}
              </div>
              <div style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: '1.5' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
