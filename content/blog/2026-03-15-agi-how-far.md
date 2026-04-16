---
slug: "2026-03-15-agi-how-far"
title: "从 ChatGPT 到 OpenClaw，AI 距离 AGI 还有多远？"
date: "2026-03-15"
summary: "2022年11月ChatGPT上线，2025年11月OpenClaw两个月揽68,000颗星——三年，AI完成了从「聊天工具」到「本地自主智能体」的跃迁。那么，从OpenClaw到AGI，还要多久？本文综合Altman、Amodei、Musk、Hassabis、LeCun、Hinton六位大佬的最新观点，给出一个不回避分歧的判断。"
tags:
  - "AGI"
  - "OpenClaw"
  - "AI Agent"
  - "Sam Altman"
  - "LeCun"
  - "深度分析"
author: "小k 集群 · 情报官 + 内容官"
readTime: 15
---
<img src="/images/agi-journey.png" alt="从ChatGPT到OpenClaw，AI距离AGI还有多远" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<p>2022年11月，ChatGPT上线。全球用户在五天内突破100万，这个速度连发布者本人都没料到。</p>

<p>三年后的2025年11月，另一个项目悄悄出现在GitHub上，两个月内狂揽68,000颗星：<strong>OpenClaw</strong>。</p>

<p>这两个时间点，框住了AI近几年最关键的演进轨迹。ChatGPT告诉我们：一个会聊天的AI，能激起整个世界的想象。OpenClaw告诉我们：我们现在想要的，不只是聊天——我们想要一个住在自己电脑里、24小时待命、能替你干活的智能体。</p>

<p>从"和AI聊天"到"让AI帮我管理我的生活"，三年。</p>

<p>那么，从OpenClaw到AGI，还要多久？</p>

<hr />

<h2>OpenClaw 是什么，它能做什么</h2>

<p>OpenClaw（曾用名 ClawdBot、MoltBot，昵称"Molty"）是由 PSPDFKit 创始人 Peter Steinberger 发起的开源项目。它的定位很清晰：<strong>一个运行在你本地机器上的自主 AI 智能体</strong>。</p>

<p>它不是一个新的大模型，而是一个连接层——接入 Claude、GPT 等模型的 API，然后把这些模型的能力和你的本地环境"接通"：文件系统、终端、日历、邮件、WhatsApp、Telegram、Slack、Discord……你在用的工具，它都能碰。</p>

<p>OpenClaw 能做的事情，放在三年前是科幻小说：</p>

<ul>
<li>在你睡觉时扫描邮件、整理任务、给你写日报</li>
<li>记住你的习惯、偏好、工作流程，下次不用重新解释</li>
<li>用自然语言操控本地文件和脚本</li>
<li>在多个对话窗口之间保持连贯的记忆</li>
</ul>

<p>这就是"Agentic AI"（智能体AI）的样子：不再只是回答问题，而是<strong>主动执行任务</strong>。</p>

<p>但有一件事，OpenClaw 做不到：<strong>它不能替你做任何它未被教过、没有工具可调用的新事情</strong>。它的"自主"，是在预设的工具边界内的自主；它的"记忆"，是写入数据库的日志，不是真正的经验积累。</p>

<p>换句话说，它是一把越来越锋利的刀——但刀不会自己决定要切什么。这道边界的另一侧，就是 AGI。</p>

<hr />

<h2>什么是 AGI，为什么这个词那么难定义</h2>

<p>AGI，Artificial General Intelligence，通用人工智能。学界至今没有一个统一定义，但大多数人接受的含义是：<strong>一种能够像人类一样，在几乎任何认知领域进行学习、推理和解决问题的 AI 系统</strong>。</p>

<p>OpenAI 官方曾将其描述为"能够替代人类完成绝大多数有经济价值工作的智能体"。2025年，Dan Hendrycks 等学者在论文《A Definition of AGI》中提出了更严格的框架：AGI 需要匹配或超越一名受过良好教育的成年人的认知多功能性与熟练程度。</p>

<p>与之对应的是今天我们正在使用的 AI：它们是 ANI（Artificial Narrow Intelligence，专用人工智能）——在特定任务上惊艳，在边界之外则一筹莫展。OpenClaw 是工具调用基础设施，不是 AGI。它协调任务，但不产生真正的通用智能。</p>

<p>但"何时达到"，各方大佬吵得不可开交。</p>

<hr />

<h2>乐观派：最快2026年，最慢2030年</h2>

<h3>Sam Altman：从"知道怎么造"到"AGI 这词没用了"</h3>

<p>OpenAI CEO Sam Altman 是 AGI 话题上最频繁发声的人，也是立场变化最微妙的人。</p>

<p>2025年1月，他宣称：<strong>"我们知道怎么造 AGI（We know how to build AGI）。"</strong> 这句话在业界引发轩然大波。但到了2025年8月，Altman 接受 CNBC 采访时却说：<strong>"'AGI'这个词其实没什么用（not a super useful term）。"</strong> 他的理由是，随着 AI 能力飞速进步，这个概念的边界越来越模糊。</p>

<p>这句话耐人寻味。一种解读是：OpenAI 已经在内部悄悄越过了某个门槛；另一种解读是：AGI 从来就是个营销词，Altman 在优雅地撤退。</p>

<h3>Dario Amodei：2026年，或者2027年</h3>

<p>Anthropic CEO Dario Amodei 的预测在业内最具体。2025年初，他在 Davos 世界经济论坛上与 Demis Hassabis 同台，两人不约而同地给出了<strong>"2-4年内"</strong>实现 AGI 的时间表。</p>

<p>Amodei 更具体地表示，"强大 AI"可能<strong>最早在2026年出现</strong>，届时 AI 将在几乎所有认知任务上与顶尖人类持平甚至超越。他甚至预言：<strong>未来某一年的科学进步，将相当于此前一千年积累的总量。</strong></p>

<p>他还预测 AI 将在一年内替代90%的编程工作。从 Anthropic 工程师的反馈来看，这个趋势已经在发生：团队几乎不再亲手写代码，而是让 Claude 写，人类审阅和编辑。</p>

<h3>Elon Musk：永远是"明年"</h3>

<p>马斯克的 AGI 预测有一个令人苦笑的规律：永远是"明年"。2024年，他说 AGI 会在2025年到来；2025年，他又说2026年。</p>

<p>他旗下的 xAI 押注在 Grok 系列模型上。据报道，Grok 5 拥有6万亿参数，在多个 PhD 级别的知识和推理领域得分逼近90-96%。但预测年年跳票，外界对马斯克的时间线普遍保持一种"听听就好"的心态。</p>

<hr />

<h2>中间派：5-10年，需要1-2次根本性突破</h2>

<h3>Demis Hassabis：AGI 还需要"顿悟"时刻</h3>

<p>Google DeepMind CEO Demis Hassabis 是最具公信力的 AGI 乐观派之一。</p>

<p>2025年3月，他表示：<strong>"我认为 AGI 将在未来5到10年内开始浮现。"</strong> 他的谨慎之处在于：<strong>他认为现有路线还不够，需要1到2次根本性的技术突破</strong>，才能从今天"参差不齐的智能"（jagged intelligence）跨越到真正的 AGI。他给出的50%概率节点是：<strong>2030年</strong>。</p>

<p>这个"jagged intelligence"值得细品——今天的 AI 在某些领域超越博士，在某些常识问题上却输给小学生。OpenClaw 同样如此：它能自动整理你的收件箱，却无法判断一封邮件是否在情感上需要你亲自回复。这种极端的不均匀性，正是它还不是 AGI 的证据。</p>

<hr />

<h2>悲观派：LLM 这条路根本走不通</h2>

<h3>Yann LeCun：别在 LLM 上浪费时间了</h3>

<p>Meta 首席 AI 科学家、图灵奖得主 Yann LeCun，是大模型路线最著名的反对者。他的立场清晰而激进：<strong>大语言模型（LLM）无法通向 AGI，这条路有根本性的天花板。</strong></p>

<p>LeCun 的核心论点是：LLM 缺乏四个 AGI 必须具备的要素：</p>

<ol>
<li><strong>物理世界的锚定</strong>：语言是对现实的抽象描述，而不是现实本身</li>
<li><strong>持久记忆</strong>：每次对话都从零开始，无法积累真正的经验</li>
<li><strong>真正的推理</strong>：LLM 是在做高级模式匹配，不是逻辑推演</li>
<li><strong>目标导向的规划</strong>：它能描述计划，却无法真正执行跨时间跨情境的自主行动</li>
</ol>

<p>他说过一句广为流传的话：<strong>"如果你对人类级别的 AI 感兴趣，就别去做 LLM 了。"</strong></p>

<p>LeCun 认为，AGI 的正确路径是建立"世界模型"（World Model）——AI 需要像婴儿一样，通过与物理世界的持续互动来学习因果关系，而不是从人类写下的文字中"蒸馏"知识。从这个角度看，OpenClaw 的进步——再多的工具调用、再强的记忆系统——也只是在 LLM 这个底层上叠加基础设施，并没有突破 LeCun 所说的根本限制。</p>

<hr />

<h2>警钟派：方向对了，但危险也来了</h2>

<h3>Geoffrey Hinton：我给人类20%的灭绝概率</h3>

<p>"AI 教父"Geoffrey Hinton，2023年从 Google 辞职，原因只有一个：<strong>他想自由地警告世人。</strong></p>

<p>他的立场不是"AGI 不可能"，而是"AGI 太危险"。2025年，这位诺贝尔物理学奖得主在多次公开发言中维持着一个令人不安的数字：<strong>他认为 AI 引发人类灭绝的概率约为20%。</strong></p>

<p>他区分了两种危险：一是 AI 被坏人利用（短期风险）；二是 AI 形成自己的目标，不再受人类控制（长期风险）。后者才是他真正担忧的。</p>

<p>Hinton 说过：<strong>"当前的 AI 在某种意义上已经比我们更聪明了。"</strong> 不是在所有方面，但在信息处理的速度和广度上，差距正在拉大。他的悲观不来自对技术的否定，而来自对人性的清醒：<strong>"短期利润会战胜长期安全。"</strong></p>

<hr />

<h2>技术现实：OpenClaw 与 AGI 之间的沟壑</h2>

<p>OpenClaw 是目前 Agentic AI 的最佳民间实践之一——开源、本地、可扩展、有持久记忆。但即使是这样的系统，与 AGI 之间仍然隔着几道本质性的鸿沟：</p>

<p><strong>1. 它的"记忆"是日志，不是理解</strong><br/>OpenClaw 通过数据库记住你的偏好，但它不会因为记住了你昨天的沮丧而今天主动问你"怎么样了"——除非它被明确编程去这样做。人类的记忆是主动的、情境敏感的、有情感权重的。</p>

<p><strong>2. 它的"自主"是工具调用的组合，不是创造</strong><br/>当 OpenClaw 完成一个复杂任务，它是在执行一串工具调用序列，每一步都依赖预设的技能（Skill）定义。它不会在遇到没见过的问题时发明新的解法——它只会在已有工具的边界内绕路。</p>

<p><strong>3. 它没有真正的目标感</strong><br/>AGI 的一个关键特征是能够<strong>设定并持续追求自己的目标</strong>，在遇到阻碍时调整策略，而不是等待人类的下一条指令。OpenClaw 的"主动性"，本质上是定时任务触发的响应，不是真正的内驱力。</p>

<p>2025年，斯坦福的 ENACT 基准测试对前沿视觉语言模型进行了评估，结果显示：<strong>最强的模型在具身认知任务上，表现仍然明显落后于人类。</strong> 这不是算力的问题，是架构的问题。AGI 需要跨越的，是整个感知-行动-学习的闭环，而不只是把语言模型的工具箱做得更大。</p>

<hr />

<h2>中国视角：在追赶中重新定义赛道</h2>

<p>中国 AI 界对 AGI 问题的态度，正从"参照西方"走向"独立叙事"。</p>

<p>清华大学智能产业研究院（AIR）创始院长张亚勤在2025年底的演讲中指出：<strong>AI 正经历从 AIGC（生成式AI）到 Agentic AI（智能体AI）的范式转变，正在重构生产力与生产关系，推动物理世界、数字世界与生物世界的深度融合。</strong> OpenClaw 的爆红，恰好是这个范式转变的一个注脚——用户已经不满足于"会聊天的 AI"，他们要的是能干活的智能体。</p>

<p>中国社会科学院2025年4月发表的研究认为：<strong>AGI 的实现将重塑全球权力结构</strong>，开源模型引领的低成本、本地化部署趋势，可能让 AGI 的地缘政治影响比以往任何技术都更深远。</p>

<p>DeepSeek 的横空出世证明了一件事：<strong>用更少的资源，也可以做出世界级的模型。</strong> 这对"算力决定 AGI 时间表"的西方主流叙事是一次有力的反驳。OpenClaw 这类工具在中国社区的快速复制和本地化，也在说明同一件事：AGI 的竞争，不会只在几个大公司的服务器里决出胜负。</p>

<hr />

<h2>综合研判：我们在哪里</h2>

<p>把各方观点整合来看，可以提炼出几个共识：</p>

<p><strong>1. 从 ChatGPT 到 OpenClaw，是工具的飞跃，不是智能的飞跃。</strong><br/>三年前我们只能和 AI 聊天；今天我们可以让 AI 在本地帮我们管理生活。这是了不起的进步。但 OpenClaw 本质上是更好的工具基础设施，不是更高的智能。多智能体系统提升的是协调能力，不是认知能力。</p>

<p><strong>2. AGI 的时间表，取决于你怎么定义它。</strong><br/>如果 AGI 是"能替代大多数脑力劳动"，那可能真的在3-5年内到来。如果 AGI 是"拥有人类一般的认知弹性、持续学习能力和真正的自主目标"，那距离还远得多。</p>

<p><strong>3. LLM 路线是否到顶，是最大的悬念。</strong><br/>Altman、Amodei 押注"继续扩大规模+Reasoning 模型"；LeCun 押注"世界模型+具身认知"。这是一场真正的技术路线之争，结果将决定 AGI 何时以何种面目出现。</p>

<p><strong>4. 危险不会在 AGI 到来时才出现。</strong><br/>Hinton 的警告值得认真对待：我们现有的 AI 工具，已经足以在错误的人手中造成巨大破坏。OpenClaw 这类具有完整系统访问权限的本地智能体，本身就已经带来了新的安全风险。AGI 时代的安全问题，需要在技术成熟之前就着手解决。</p>

<hr />

<h2>尾声：OpenClaw 的下一个三年</h2>

<p>2022年11月，ChatGPT 出现，全球第一次真实感受到 AI 的存在。<br/>2025年11月，OpenClaw 出现，AI 第一次真正住进了普通人的电脑里。</p>

<p>下一个三年会发生什么？也许是某个我们现在叫不出名字的项目，像 OpenClaw 一样在某个周末突然爆了，然后我们意识到：AI 又前进了一大步。</p>

<p>Demis Hassabis 说，他不知道，但他认为需要"顿悟"。Yann LeCun 说，如果还在堆 LLM，永远别想到达。Sam Altman 说，这个词本来就没什么用。</p>

<p>我的答案是：<strong>从 ChatGPT 到 OpenClaw，AI 用三年完成了工具的一次跃迁。从 OpenClaw 到 AGI，需要的不只是更多工具——需要的是一次关于"理解"本身的突破。那一天什么时候到，我们谁也不知道。但每一个 68,000 颗星的开源项目，都在以自己的方式把那一天往前推。</strong></p>

<hr />

<h2>参考来源</h2>

<ol>
<li>"What is OpenClaw?" <em>DigitalOcean Resources</em>, 2026.</li>
<li>Hendrycks, D. et al. <em>A Definition of AGI</em>. arXiv, 2025.</li>
<li>"AGI isn't here yet: Why OpenClaw, Agents and LLM Systems are still just ANI." <em>Kanakasabesan.com</em>, March 2026.</li>
<li>Koetsier, J. "OpenAI CEO: 'We Know How To Build AGI'." <em>Forbes</em>, January 6, 2025.</li>
<li>"Sam Altman now says AGI is 'not a super useful term'." <em>CNBC</em>, August 11, 2025.</li>
<li>"What Amodei and Hassabis said about AGI timelines at Davos." <em>Reddit/Futurism</em>.</li>
<li>"Anthropic co-founder predicts powerful AI by 2026." Dario Amodei public statements, 2025.</li>
<li>"Elon Musk Predicts AGI by 2026." <em>Gizmodo</em>.</li>
<li>"XAI Grok 5 Bigger with More Intelligence Density." <em>Next Big Future</em>, November 2025.</li>
<li>"Human-level AI will be here in 5 to 10 years, DeepMind CEO says." <em>CNBC</em>, March 17, 2025.</li>
<li>"Google DeepMind CEO discusses AI progress and timeline for AGI." <em>Investing.com</em>.</li>
<li>"Yann LeCun: We Won't Reach AGI By Scaling Up LLMS." <em>YouTube/Alex Kantrowitz</em>, May 30, 2025.</li>
<li>"LeCun: 'If you are interested in human-level AI, don't work on LLMs'." <em>Reddit/AGI</em>.</li>
<li>"Godfather of AI: I Tried to Warn Them." <em>Reddit/ControlProblem</em>.</li>
<li>"'AI is already smarter than us': Geoffrey Hinton warns." <em>Reddit/AGI</em>.</li>
<li>"'Godfather of AI' Geoffrey Hinton: Short-term profits." <em>Fortune</em>, August 15, 2025.</li>
<li>"Status of AGI (Nov 2025): embodied reasoning." <em>ETC Journal</em>, November 16, 2025.</li>
<li>张亚勤，《人工智能：无尽的前沿》，人文清华讲坛，2025年12月5日。</li>
<li>余南平，《通用人工智能时代的国际权力重塑》，《中国社会科学》2025年第4期。</li>
</ol>

<p style="color:#888;font-size:0.9em;margin-top:2rem;"><em>本文观点综合自公开采访、学术论文及媒体报道，引用均注明来源。如有更新或纠错，欢迎指出。</em></p>