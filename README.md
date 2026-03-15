# Kollab 实用手册

> 真正的魔法，是科学中的科学

Kollab AI 平台的完整用户指南。涵盖核心用例、技能介绍、7 天学习路径、高效使用技巧和提示词模板。

## 预览

![Kollab 实用手册](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)

## 功能

- **8 个核心用例** — 全栈开发、深度研究、PPT 生成、文件处理、图片创作等，每个用例附带步骤说明和可直接使用的提示词模板
- **12+ 专业技能** — Kollab 内置技能卡片一览
- **7 天学习路径** — 交互式进度追踪，进度持久化到 localStorage
- **高效使用技巧** — 6 条核心习惯 + AI vs 手动效率对比表
- **常见问题 FAQ** — 折叠式问答
- **阅读进度条** — 页面顶部实时显示阅读进度

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 16.1.6 (App Router) |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS v4 |
| 图标 | lucide-react |
| 动画 | framer-motion |
| 部署 | AWS Elastic Beanstalk |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:3000

## 构建

```bash
npm run build
npm start
```

## 项目结构

```
kollab-handbook/
├── app/
│   ├── layout.tsx        # 根布局，SEO metadata
│   ├── page.tsx          # 首页，组合所有 section
│   └── globals.css       # 全局样式，Tailwind v4 指令
├── components/
│   ├── Navbar.tsx         # 导航栏（响应式，滚动变色）
│   ├── Hero.tsx           # 首屏（动态 tagline 轮播）
│   ├── Overview.tsx       # 功能概览
│   ├── UseCases.tsx       # 核心用例（分类筛选 + 展开卡片）
│   ├── Skills.tsx         # 技能列表
│   ├── QuickStart.tsx     # 快速上手（标签页示例）
│   ├── Tips.tsx           # 高效技巧
│   ├── LearningPath.tsx   # 7天学习路径（可勾选进度）
│   ├── FAQ.tsx            # 常见问题
│   ├── ProgressBar.tsx    # 阅读进度条
│   └── Footer.tsx         # 页脚
└── lib/
    └── data.ts            # 所有内容数据（用例、技能、FAQ 等）
```

## 内容更新

所有内容集中在 `lib/data.ts`，直接修改对应的数组即可：

- `useCases` — 用例卡片
- `skills` — 技能列表
- `learningPath` — 学习路径任务
- `tips` — 使用技巧
- `faq` — 常见问题

---

Built with Next.js + Tailwind CSS · Powered by Claude Opus 5.1
