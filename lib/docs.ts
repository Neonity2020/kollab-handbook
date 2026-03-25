export interface DocSection {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface DocPage {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  content: DocContent[];
}

export interface DocContent {
  type: "heading" | "paragraph" | "steps" | "tips" | "code" | "cards";
  level?: number;
  text?: string;
  items?: string[];
  cards?: { title: string; desc: string }[];
  code?: string;
  lang?: string;
}

export const docSections: DocSection[] = [
  {
    slug: "getting-started",
    title: "快速入门",
    description: "5 分钟内发出第一条有用的 AI 消息",
    icon: "⚡",
    category: "入门",
  },
  {
    slug: "ai-agent",
    title: "AI 智能体",
    description: "多智能体协作、自动化任务执行",
    icon: "🤖",
    category: "功能",
  },
  {
    slug: "knowledge-base",
    title: "知识库",
    description: "上传文档，让 AI 读懂你的私有数据",
    icon: "📚",
    category: "功能",
  },
  {
    slug: "workflow",
    title: "工作流",
    description: "定时任务、触发器、自动化流程",
    icon: "⚙️",
    category: "功能",
  },
  {
    slug: "skills",
    title: "技能生态",
    description: "一键扩展 AI 能力边界",
    icon: "🎯",
    category: "功能",
  },
  {
    slug: "tips",
    title: "高效技巧",
    description: "经过验证的提示词策略和使用习惯",
    icon: "💡",
    category: "进阶",
  },
  {
    slug: "use-cases",
    title: "用例指南",
    description: "开发、研究、内容创作场景的完整示例",
    icon: "🗂️",
    category: "进阶",
  },
];

export const docPages: DocPage[] = [
  {
    slug: "getting-started",
    title: "快速入门",
    description: "5 分钟内发出第一条有用的 AI 消息",
    icon: "⚡",
    category: "入门",
    content: [
      {
        type: "paragraph",
        text: "Kollab 是一个 AI 工作台。你不需要学习提示词工程，也不需要懂编程——只要知道你想要什么结果。",
      },
      {
        type: "heading",
        level: 2,
        text: "第一步：发出你的第一条消息",
      },
      {
        type: "steps",
        items: [
          "登录 Kollab，点击「新建对话」",
          "描述你的目标（可以是中文、英文，甚至是口语化的表达）",
          "AI 会回应并开始执行，或者向你确认细节",
          "根据结果迭代，直到满意为止",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "三个能立刻用上的场景",
      },
      {
        type: "cards",
        cards: [
          { title: "写一份报告", desc: "「帮我写一份 2000 字的行业分析报告，主题是 AI 在教育领域的应用，需要数据支撑。」" },
          { title: "处理文件", desc: "「上传 Excel 表格 → 帮我分析销售数据，找出增长最快的产品线」" },
          { title: "开发应用", desc: "「帮我构建一个待办事项 Web App，Next.js + TypeScript，部署到公网」" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "核心原则",
      },
      {
        type: "tips",
        items: [
          "越具体越好：「写一篇文章」不如「写一篇面向技术创业者的 AI 工具测评，1500 字，口吻偏犀利」",
          "先要大纲：复杂任务先让 AI 给计划，确认后再执行",
          "同一对话里迭代：AI 记得之前说的所有内容，不要频繁开新对话",
        ],
      },
    ],
  },
  {
    slug: "ai-agent",
    title: "AI 智能体",
    description: "多智能体协作、自动化任务执行",
    icon: "🤖",
    category: "功能",
    content: [
      {
        type: "paragraph",
        text: "Kollab 的 AI 智能体不只是聊天机器人——它能主动使用工具、搜索网络、读写文件、调用 API，独立完成复杂任务。",
      },
      {
        type: "heading",
        level: 2,
        text: "智能体能做什么",
      },
      {
        type: "cards",
        cards: [
          { title: "搜索与调研", desc: "自动搜索网络，交叉验证信息，生成带引用的研究报告" },
          { title: "代码执行", desc: "写 Python/Node.js 代码并直接运行，处理数据、生成文件" },
          { title: "文件操作", desc: "读取、转换、分析 PDF / Excel / Word 等格式" },
          { title: "API 集成", desc: "通过 MCP 连接 GitHub、Notion、Slack 等外部工具" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "多智能体模式",
      },
      {
        type: "paragraph",
        text: "对于复杂项目，Kollab 支持启动多个子智能体并发工作，再由主智能体汇总结果。这在需要同时完成多个独立子任务时效率极高。",
      },
      {
        type: "steps",
        items: [
          "在对话里说明任务，要求 AI 「拆分成子任务并并发执行」",
          "AI 自动派发子任务给多个 Agent",
          "各 Agent 独立完成任务，结果汇入主对话",
          "主 AI 整合输出最终结果",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "示例提示词",
      },
      {
        type: "code",
        lang: "text",
        code: `帮我做一份竞品分析报告：

研究对象：Notion AI、Cursor、Perplexity
分析维度：功能对比、定价策略、目标用户

请拆分成 3 个子任务并发调研，最后汇总成 Markdown 报告。`,
      },
    ],
  },
  {
    slug: "knowledge-base",
    title: "知识库",
    description: "上传文档，让 AI 读懂你的私有数据",
    icon: "📚",
    category: "功能",
    content: [
      {
        type: "paragraph",
        text: "知识库让 AI 能读懂你的私有文档——产品手册、技术规范、内部文件——而不依赖公开训练数据。",
      },
      {
        type: "heading",
        level: 2,
        text: "支持的文件格式",
      },
      {
        type: "tips",
        items: [
          "PDF — 报告、合同、手册、论文",
          "Word (.docx) — 提案、规划文档",
          "Excel (.xlsx) — 数据表格、统计报表",
          "Markdown / TXT — 技术文档、笔记",
          "代码文件 — .py / .ts / .js 等",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "上传与使用步骤",
      },
      {
        type: "steps",
        items: [
          "进入「知识库」模块，点击「上传文件」",
          "选择本地文件或粘贴 URL",
          "等待索引完成（通常几秒到几分钟）",
          "在对话里 @ 知识库，或直接提问",
          "AI 会基于文档内容回答，并标注来源",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "检索优化建议",
      },
      {
        type: "tips",
        items: [
          "文件命名要有意义，帮助 AI 快速定位来源",
          "大文档可以先拆分，按章节上传",
          "提问时加上「根据文档」或「依据知识库」以锁定来源",
          "定期更新文档，知识库会自动同步最新内容",
        ],
      },
    ],
  },
  {
    slug: "workflow",
    title: "工作流",
    description: "定时任务、触发器、自动化流程",
    icon: "⚙️",
    category: "功能",
    content: [
      {
        type: "paragraph",
        text: "工作流让你把重复性任务自动化：定时生成报告、监控某个话题的最新动态、在特定事件发生时触发 AI 执行操作。",
      },
      {
        type: "heading",
        level: 2,
        text: "工作流类型",
      },
      {
        type: "cards",
        cards: [
          { title: "定时触发", desc: "每天 8:00 生成当日新闻摘要，每周一汇总上周工作报告" },
          { title: "事件触发", desc: "收到新邮件时自动分类，GitHub 有新 PR 时通知你" },
          { title: "Webhook 触发", desc: "外部系统调用接口，触发 AI 处理数据" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "创建定时工作流",
      },
      {
        type: "steps",
        items: [
          "进入「工作流」模块，点击「新建」",
          "选择触发方式：定时 / 事件 / Webhook",
          "填写 Cron 表达式或选择预设时间（如「每天 9:00」）",
          "编写 AI 要执行的任务描述",
          "设置通知方式（企业微信 / 邮件 / Webhook 回调）",
          "启用并等待首次触发",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "实用示例",
      },
      {
        type: "code",
        lang: "text",
        code: `# 每日简报工作流
触发：每天 8:30（工作日）
任务：搜索过去 24 小时内关于「AI 编程工具」的最新资讯，
      整理成 5 条要点，发送到企业微信群。

# 周报自动生成
触发：每周五 17:00
任务：汇总本周 GitHub 提交记录和 Linear Issue，
      生成结构化周报并发送给团队。`,
      },
    ],
  },
  {
    slug: "skills",
    title: "技能生态",
    description: "一键扩展 AI 能力边界",
    icon: "🎯",
    category: "功能",
    content: [
      {
        type: "paragraph",
        text: "Skills 是可安装的专项能力包——让 AI 掌握特定领域的最佳实践、专用工具链和特殊操作流程。",
      },
      {
        type: "heading",
        level: 2,
        text: "已有 Skills 类别",
      },
      {
        type: "cards",
        cards: [
          { title: "文档生成", desc: "PDF 报告、Word 文档、PPT 演示文稿的专业生成流程" },
          { title: "代码开发", desc: "Next.js、Astro、Flask 等框架的最佳实践工作流" },
          { title: "图像生成", desc: "通过 Gemini 生成和编辑图片的专用技能" },
          { title: "深度研究", desc: "多轮搜索 + 交叉验证 + 结构化报告输出" },
          { title: "部署运维", desc: "Elastic Beanstalk、Netlify 一键部署流程" },
          { title: "数据处理", desc: "Excel、CSV 数据清洗和可视化" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "如何安装 Skill",
      },
      {
        type: "steps",
        items: [
          "进入「技能商店」浏览可用 Skills",
          "点击「安装」，Skill 自动加载到当前空间",
          "在对话里输入 /skill名称 即可触发",
          "也可以用自然语言描述需求，AI 会自动选择合适的 Skill",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "自定义 Skill",
      },
      {
        type: "paragraph",
        text: "你可以把任意工作流封装成 Skill，方便复用。在 /skill-creator 技能里描述你的工作流程，AI 会帮你生成可安装的 Skill 文件。",
      },
    ],
  },
  {
    slug: "tips",
    title: "高效技巧",
    description: "经过验证的提示词策略和使用习惯",
    icon: "💡",
    category: "进阶",
    content: [
      {
        type: "paragraph",
        text: "这些技巧来自高频用户的真实使用经验，每一条都能立竿见影地提升输出质量。",
      },
      {
        type: "heading",
        level: 2,
        text: "提示词技巧",
      },
      {
        type: "tips",
        items: [
          "上下文越多，结果越好：告诉 AI 你是谁、目标是什么、已经做了什么",
          "先要大纲，再要内容：复杂任务先让 AI 给方案，确认后再执行",
          "用文件代替粘贴：上传原始文件比复制粘贴内容更可靠",
          "明确输出格式：「输出 Markdown」「生成 PPTX」「返回 JSON」",
          "连续对话保持上下文：在同一个对话里迭代，不要频繁开新对话",
          "角色设定效果显著：「你是一个有 10 年经验的 CTO，帮我 review 这段代码」",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "对话管理技巧",
      },
      {
        type: "tips",
        items: [
          "任务失败先检查输入：80% 的差结果来自模糊的输入，不是 AI 能力",
          "用「继续」而不是重发：遇到截断，说「继续」而不是重新发整个 prompt",
          "分步比一次好：把大任务拆成 3-5 个步骤依次完成",
          "明确指出错误：「第 3 段太啰嗦，改简洁」比「重写」效果更好",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "高质量提示词模板",
      },
      {
        type: "code",
        lang: "text",
        code: `# 通用结构模板
背景：[你是谁 / 这个任务的上下文]
目标：[想要的结果]
要求：
- [具体要求1]
- [具体要求2]
格式：[输出格式]
注意：[特别要避免的事项]

# 示例
背景：我是一名独立开发者，在做一个 SaaS 工具。
目标：写一封面向潜在用户的冷邮件。
要求：
- 不超过 150 字
- 突出「省时间」这个核心价值
- 结尾有明确的 CTA
格式：纯文本，适合直接复制发送`,
      },
    ],
  },
  {
    slug: "use-cases",
    title: "用例指南",
    description: "开发、研究、内容创作场景的完整示例",
    icon: "🗂️",
    category: "进阶",
    content: [
      {
        type: "paragraph",
        text: "以下是最常见的使用场景，每个都附有实际可用的提示词模板。",
      },
      {
        type: "heading",
        level: 2,
        text: "开发场景",
      },
      {
        type: "code",
        lang: "text",
        code: `# 全栈项目开发
帮我构建一个全栈 Web 应用：

项目名称：[项目名]
核心功能：[功能描述]
技术栈：Next.js + TypeScript + Tailwind CSS
数据库：[PostgreSQL / MongoDB / SQLite]

要求：包含用户认证、响应式设计、部署到公网
请先给我项目结构概览，确认后开始写代码。`,
      },
      {
        type: "heading",
        level: 2,
        text: "研究场景",
      },
      {
        type: "code",
        lang: "text",
        code: `# 深度研究报告
请对以下主题进行深度研究：

主题：[研究主题]
关注角度：[技术趋势 / 市场分析 / 竞品对比]
输出要求：
- 3000 字以上
- 包含数据和引用来源
- 分章节组织
- 最后给出结论和建议

请先告诉我研究计划，确认后开始执行。`,
      },
      {
        type: "heading",
        level: 2,
        text: "内容创作场景",
      },
      {
        type: "code",
        lang: "text",
        code: `# PPT 自动生成
帮我生成一份 PPT：

主题：[主题名称]
幻灯片数量：10-12 张
目标受众：[内部汇报 / 客户展示]
风格：简约大厂风（深色背景 + 蓝色强调色）
内容重点：[核心要点1, 要点2, 要点3]

请先给我大纲，确认后开始生成 PPTX 文件。`,
      },
      {
        type: "heading",
        level: 2,
        text: "文件处理场景",
      },
      {
        type: "code",
        lang: "text",
        code: `# 文件分析处理
请处理我上传的文件：

文件类型：[PDF / Word / Excel / CSV]
任务：
- 提取关键信息，生成摘要
- 转换为 [目标格式]
- 分析数据并生成图表
- 按模板重新排版`,
      },
    ],
  },
];

export function getDocPage(slug: string): DocPage | undefined {
  return docPages.find((p) => p.slug === slug);
}
