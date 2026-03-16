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
  {
    slug: "2026-03-15-agi-how-far",
    title: "从 ChatGPT 到 OpenClaw，AI 距离 AGI 还有多远？",
    date: "2026-03-15",
    summary: "2022年11月ChatGPT上线，2025年11月OpenClaw两个月揽68,000颗星——三年，AI完成了从「聊天工具」到「本地自主智能体」的跃迁。那么，从OpenClaw到AGI，还要多久？本文综合Altman、Amodei、Musk、Hassabis、LeCun、Hinton六位大佬的最新观点，给出一个不回避分歧的判断。",
    tags: ["AGI", "OpenClaw", "AI Agent", "Sam Altman", "LeCun", "深度分析"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 15,
    content: `<img src="/images/agi-journey.png" alt="从ChatGPT到OpenClaw，AI距离AGI还有多远" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

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

<p style="color:#888;font-size:0.9em;margin-top:2rem;"><em>本文观点综合自公开采访、学术论文及媒体报道，引用均注明来源。如有更新或纠错，欢迎指出。</em></p>`
  },
  {
    slug: "2026-03-15-learn-claude-code",
    title: "27k星爆红：learn-claude-code 手把手带你从0到1造一个Claude Code",
    date: "2026-03-15",
    summary: "GitHub上27k星的开源项目learn-claude-code用12节递进课程，把Claude Code的核心运行机制彻底拆开给你看——agent loop、工具调度、规划系统、多智能体协作、上下文压缩……每一节只加一个机制，每个机制只有一句箴言。这是2026年最值得跟完的AI Agent入门项目。",
    tags: ["learn-claude-code", "Claude Code", "AI Agent", "开源项目", "教程"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 10,
    content: `<img src="/images/learn-claude-code.png" alt="learn-claude-code - 从0到1构建AI Agent" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<h2>这个项目在做什么</h2>

<p>如果你用过Claude Code，你一定好奇过它是怎么工作的——它怎么知道要调用哪个工具？怎么在多个步骤间保持上下文？多个智能体并行时怎么协调？</p>

<p>GitHub上一个叫 <a href="https://github.com/shareAI-lab/learn-claude-code" target="_blank">learn-claude-code</a> 的项目给了你答案——不只是文字解释，而是可以跑起来的Python代码，从最简单的while循环开始，一步一步还原出一个完整的Claude Code级别的智能体。</p>

<p>这个项目目前27k+ GitHub星，是2025年下半年增长最快的AI Agent教育类开源项目之一。它的副标题说得直白：<strong>Bash is all you need</strong>。</p>

<hr />

<h2>核心洞见：一个循环统治所有</h2>

<p>整个项目的起点是一段极简代码：</p>

<pre><code>def agent_loop(messages):
    while True:
        response = client.messages.create(
            model=MODEL, system=SYSTEM,
            messages=messages, tools=TOOLS,
        )
        messages.append({"role": "assistant",
                         "content": response.content})

        if response.stop_reason != "tool_use":
            return

        results = []
        for block in response.content:
            if block.type == "tool_use":
                output = TOOL_HANDLERS[block.name](**block.input)
                results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": output,
                })
        messages.append({"role": "user", "content": results})</code></pre>

<p>这就是整个智能体的核心。LLM收到消息，决定要不要用工具，用完工具把结果塞回消息列表，继续循环。每一次迭代都是一次思考-行动周期。</p>

<p>后面所有12节课，都是在这个循环<strong>之上</strong>加机制——但循环本身从不改变。这个设计思路本身就值得深思。</p>

<hr />

<h2>12节课，12个机制，12句箴言</h2>

<p>项目把学习路径分成四个阶段，每节只加一个新概念：</p>

<h3>Phase 1：循环基础</h3>

<p><strong>s01 — Agent Loop</strong>：<em>"One loop & Bash is all you need"</em><br/>
一个工具（Bash）加一个循环，就够了。这是最小可用Agent。</p>

<p><strong>s02 — Tool Use</strong>：<em>"Adding a tool means adding one handler"</em><br/>
工具分派表：名字映射到函数。加新工具不改循环，只加一条映射。</p>

<h3>Phase 2：规划与知识</h3>

<p><strong>s03 — TodoWrite</strong>：<em>"An agent without a plan drifts"</em><br/>
先列步骤再执行。有了任务清单，完成率翻倍。这就是你在Claude Code里看到的TodoWrite机制。</p>

<p><strong>s04 — Subagents</strong>：<em>"Break big tasks down; each subtask gets a clean context"</em><br/>
子智能体用独立的messages[]跑，不污染主对话。大任务拆开给不同Agent，互不干扰。</p>

<p><strong>s05 — Skills</strong>：<em>"Load knowledge when you need it, not upfront"</em><br/>
通过tool_result注入SKILL.md，而不是塞进system prompt。按需加载，省token，效果更精准。</p>

<p><strong>s06 — Context Compact</strong>：<em>"Context will fill up; you need a way to make room"</em><br/>
三层压缩策略：摘要、截断、选择性保留。让Agent跑无限长的会话。</p>

<h3>Phase 3：持久化</h3>

<p><strong>s07 — Tasks</strong>：<em>"Break big goals into small tasks, order them, persist to disk"</em><br/>
文件存储的任务图，有依赖关系。Agent崩溃重启后能接着干。</p>

<p><strong>s08 — Background Tasks</strong>：<em>"Run slow operations in the background; the agent keeps thinking"</em><br/>
后台线程跑慢命令，完成后推通知。Agent不会因为等一个git clone而卡住。</p>

<h3>Phase 4：团队协作</h3>

<p><strong>s09 — Agent Teams</strong>：<em>"When the task is too big for one, delegate to teammates"</em><br/>
持久化的队友 + JSONL邮箱。一个任务，多个Agent异步协作完成。</p>

<p><strong>s10 — Team Protocols</strong>：<em>"Teammates need shared communication rules"</em><br/>
统一的请求-响应协议：关闭信号、计划审批状态机，让多Agent协作不乱套。</p>

<p><strong>s11 — Autonomous Agents</strong>：<em>"Teammates scan the board and claim tasks themselves"</em><br/>
Agent主动扫任务板领任务，不需要Leader逐一分配。真正的自治。</p>

<p><strong>s12 — Worktree Isolation</strong>：<em>"Each works in its own directory, no interference"</em><br/>
任务ID绑定工作目录。多个Agent并行，各干各的，互不冲突。</p>

<hr />

<h2>为什么这个项目值得跟</h2>

<p>市面上讲AI Agent的资源很多，但大多数要么太浅（只告诉你怎么调API），要么太深（直接扔源码让你自己看）。learn-claude-code找到了一个罕见的中间地带：</p>

<p><strong>每节一个问题、一个解法</strong>。s06解决的就是"context满了怎么办"这一个问题，不多不少。你读完知道为什么需要这个机制，知道它是什么，知道怎么实现。</p>

<p><strong>代码能跑</strong>。每节都有对应的Python文件，clone下来，配好ANTHROPIC_API_KEY，直接跑。不是演示代码，是真实可用的实现。</p>

<p><strong>系统性</strong>。12节课构成一个完整的知识体系，从最小Agent到完整的多智能体隔离执行环境，没有跳跃，没有断层。</p>

<h3>跟Kollab/Claude Code的关系</h3>

<p>你现在用的Kollab AI（小k）底层运行在Claude上，skill系统、子任务调度、多智能体集群架构，都是这12节课里讲的机制的实际应用。读懂learn-claude-code，你就懂了你每天在用的这个工具的内部逻辑，写提示词会更准，设计任务会更合理。</p>

<hr />

<h2>怎么开始</h2>

<pre><code>git clone https://github.com/shareAI-lab/learn-claude-code
cd learn-claude-code
pip install -r requirements.txt
cp .env.example .env   # 填入你的 ANTHROPIC_API_KEY

# 从第一节开始
python agents/s01_agent_loop.py

# 看看最终形态
python agents/s_full.py</code></pre>

<p>项目还配了一个交互式Web学习平台（Next.js），可以可视化地看每个机制的运行流程：</p>

<pre><code>cd web && npm install && npm run dev   # http://localhost:3000</code></pre>

<p>文档支持中文、英文、日文三种语言，中文版质量很高，读起来没有翻译腔。</p>

<hr />

<h2>延伸：claw0 和 Kode</h2>

<p>learn-claude-code结束后，项目方还给出了两条延伸路径：</p>

<p><strong>claw0</strong>：从"用完即弃的Agent"升级到"始终在线的AI助手"。加入心跳机制（每30秒检查是否有任务）、Cron调度、多平台IM接入（WhatsApp/Telegram/Slack等13+）。这是OpenClaw那类项目的教学级拆解版。</p>

<p><strong>Kode Agent SDK</strong>：把Agent能力嵌入你自己的应用。官方Claude Code SDK每个并发用户需要一个独立的CLI进程，Kode SDK是纯库实现，没有进程开销，可以嵌入后端、浏览器插件、嵌入式设备。</p>

<hr />

<h2>小结</h2>

<p>learn-claude-code用一句话概括了它的哲学：<em>The model is the agent. Our job is to give it tools and stay out of the way.</em></p>

<p>模型就是智能体本身，开发者的工作是给它工具，然后别挡路。12节课、12个机制，把这句话变成了可以运行、可以修改、可以扩展的代码。</p>

<p>如果你在用Claude Code、在玩AI Agent，或者在考虑自己搭一套智能体系统，这个项目是2026年最值得花时间的开源教程。</p>`
  },
  {
    slug: "2026-03-15-openclaw-claude-code-cli-anything",
    title: "2026年3月技术追踪：OpenClaw爆红135k星、Claude Code Agent时代、CLI-Anything让万物可被AI操控",
    date: "2026-03-15",
    summary: "本周AI工具圈的三个关键信号：自托管AI智能体OpenClaw突破135k GitHub星并在中国引发监管风波；Anthropic的Claude Code在2026年进入Agent Teams新阶段；开源项目CLI-Anything用7步流水线把任何软件变成Agent原生工具。",
    tags: ["OpenClaw", "Claude Code", "CLI-Anything", "AI Agent", "技术追踪"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 12,
    content: `<h2>为什么这三个工具值得你现在关注</h2>

<p>2026年3月，AI工具的竞争已经从「谁的模型更聪明」转移到「谁更懂如何让AI在真实环境里干活」。本文追踪三个代表性项目，它们各自代表了这场转变的不同侧面。</p>

<hr />

<h2>OpenClaw：一个自托管AI智能体如何在3个月内拿下135k GitHub星</h2>

<img src="/images/openclaw.png" alt="OpenClaw 135k Stars" style="width:100%;border-radius:12px;margin:1.5rem 0;" />

<h3>它是什么</h3>

<p>OpenClaw（昵称"Molty"）是一个完全开源的本地AI智能体，2025年11月由PSPDFKit创始人Peter Steinberger发布。它在你自己的机器上运行，可以读写文件、控制应用、通过WhatsApp/Discord收发消息，本质上是一个有权限操作你整个电脑环境的私人AI助手。</p>

<p>GitHub星数的增长轨迹惊人：发布时约8000星，2026年1月突破68000，3月已达135000。按增速看，它是近两年增长最快的AI开源项目之一。</p>

<h3>MoltBook：给AI智能体建了一个社交网络</h3>

<img src="/images/moltbook.png" alt="MoltBook - AI-only Social Network" style="width:100%;border-radius:12px;margin:1.5rem 0;" />

<p>2026年1月，基于OpenClaw的生态里出现了一个奇怪的产物——MoltBook，一个只有AI智能体才能发帖的社交平台。人类可以围观，但不能发内容。几周内聚集了150万个AI智能体，The Verge称其为「目前互联网上最奇异的地方」。</p>

<p>从技术角度看，MoltBook实际上是多智能体交互行为的天然数据集，开发者可以通过观察自己的Agent在上面的表现来调试其推理模式。</p>

<h3>中国的故事</h3>

<p>Tom's Hardware报道，OpenClaw在中国的传播速度甚至超过了美国。个人用户、企业和政府机构都在快速部署，但随后监管介入——国有企业被明令禁止使用。这个监管动作本身就说明了这个工具的渗透速度。</p>

<h3>ClawTeam：多智能体协作的即用型方案</h3>

<p>在OpenClaw生态里，一个叫ClawTeam的工具正在快速获得关注。它提供预配置的多智能体工作流蓝图，专门为OpenClaw平台优化，让你不需要从头设计就能跑起来一套复杂的Agent团队。</p>

<h3>安全隐患</h3>

<p>Malwarebytes的安全研究报告指出，OpenClaw的权限模型是把双刃剑——它能做的事情越多，一旦被恶意提示词注入，潜在危害也越大。在企业环境使用前，需要认真评估其沙盒隔离和权限管控机制。</p>

<hr />

<h2>Claude Code：2026年进入Agent Teams新阶段</h2>

<img src="/images/agent-teams.png" alt="Claude Code Agent Teams" style="width:100%;border-radius:12px;margin:1.5rem 0;" />

<h3>从CLI工具到代码智能体</h3>

<p>Claude Code是Anthropic的终端编程助手，和传统IDE插件的本质区别是：它能理解整个代码库的上下文，而不只是当前打开的文件。2026年随着Opus 4.6的发布，它进入了一个新阶段。</p>

<h3>2026年关键更新</h3>

<p><strong>Agent Teams</strong>：你可以在Claude Code里启动多个子智能体并行处理任务。比如一个Agent负责写测试，另一个负责实现功能，协调工作。这是Anthropic对OpenClaw多智能体模式的直接回应。</p>

<p><strong>MCP集成</strong>：Model Context Protocol让Claude Code能接入任意外部工具和数据源——GitHub、Notion、数据库、自定义API，统统可以。本手册站点本身就是用Claude Code + MCP构建的。</p>

<p><strong>Director Mode</strong>：用自然语言描述目标，Claude Code自动拆分成多步任务并执行，不需要逐步指令。</p>

<p><strong>Opus 4.6</strong>：在编程基准测试上显著提升，特别是长上下文多文件操作和复杂重构任务。</p>

<h3>实践角度</h3>

<p>Addy Osmani（Google Chrome团队）在其2026年开发工作流文章中提到，Claude Code已经成为他日常工作流的核心——不是辅助工具，而是主要开发接口。他的评价：「它能读文件、跑测试、多步骤修复问题，这才是真正有用的编程助手。」</p>

<p>对Kollab用户的直接意义：你现在用的这个AI助手（小k）底层就跑在Claude的基础上，理解Claude Code的工作方式有助于你写出更高质量的提示词。</p>

<hr />

<h2>CLI-Anything：用一条命令让任何软件变成Agent原生工具</h2>

<img src="/images/cli-anything.png" alt="CLI-Anything - Bridge all software to AI" style="width:100%;border-radius:12px;margin:1.5rem 0;" />

<h3>核心概念</h3>

<p>CLI-Anything是一个开源的Claude Code插件，来自HKUDS（香港大学数据科学实验室）。它解决的问题很具体：现在大量优秀软件（GIMP、Blender、LibreOffice等）没有标准化的CLI接口，AI智能体无法直接调用它们。CLI-Anything用一个7步自动化流水线分析这些软件，生成标准化的CLI包装器，让任意AI智能体都能控制它们。</p>

<h3>安装方式（Claude Code插件市场）</h3>

<pre><code># 在Claude Code里运行：
/plugin marketplace install cli-anything

# 为任意软件生成CLI接口：
cli-anything ./blender --render
cli-anything ./gimp --batch
cli-anything ./libreoffice --pdf</code></pre>

<h3>核心命令</h3>

<table>
<thead><tr><th>命令</th><th>用途</th></tr></thead>
<tbody>
<tr><td>cli-anything init</td><td>初始化新CLI项目</td></tr>
<tr><td>cli-anything build</td><td>分析应用并生成接口</td></tr>
<tr><td>cli-anything test</td><td>验证生成的CLI</td></tr>
<tr><td>cli-anything [app] --json</td><td>JSON输出供Agent使用</td></tr>
</tbody>
</table>

<h3>为什么重要</h3>

<p>目前AI智能体能直接操作的软件还很有限，主要是那些提供了API或CLI的工具。CLI-Anything把这个边界大幅扩展了——理论上任何有代码库的软件都可以被Agent接管。这是从「AI辅助软件」到「AI控制软件」的关键一步。</p>

<p>n8n社区的帖子把它描述为：「今天的软件服务人类，明天的用户将是Agent。CLI-Anything正在搭这座桥。」</p>

<hr />

<h2>总结：三个工具指向同一个方向</h2>

<p>OpenClaw、Claude Code、CLI-Anything从三个不同角度在做同一件事：让AI智能体能够操控真实世界的软件和工作流。</p>

<ul>
<li>OpenClaw：给你一个有权限的本地Agent，连接你的文件、应用和通讯工具</li>
<li>Claude Code：给开发者一个真正能干活的编程Agent，理解代码库、执行多步任务</li>
<li>CLI-Anything：把那些原本不支持Agent的软件也纳入可控范围</li>
</ul>

<p>从Kollab使用者的角度，这三个工具都值得纳入你的工具箱。Claude Code是最直接可用的，本手册里有完整的使用指南；OpenClaw适合想要本地化部署的进阶用户；CLI-Anything适合需要自动化现有桌面软件工作流的场景。</p>

<p>下期继续追踪。</p>`
  },
  {
    slug: "2026-03-15-sutton-llm-dead-end",
    title: "写出苦涩教训的人，亲口说LLM是死胡同",
    date: "2026-03-15",
    summary: "强化学习之父、2024年图灵奖得主 Richard Sutton 在 Dwarkesh Patel 播客中直言：LLM 是死胡同。这话出自《苦涩的教训》的作者本人——而这篇文章正是整个大模型时代的「精神圣经」。这到底是大佬的清醒，还是 RL 老炮的傲慢？我们把关键论据都摆出来，你来判断。",
    tags: ["Richard Sutton", "LLM", "AGI", "强化学习", "苦涩的教训", "深度分析"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 12,
    content: `<img src="/images/sutton-llm-dead-end.png" alt="写出苦涩教训的人，亲口说LLM是死胡同" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<p>有一种讽刺，叫做：发明了一套理论，然后眼看着所有人用这套理论为他最不认可的东西背书。</p>

<p>Richard Sutton 就处于这种处境。</p>

<p>2019年，他发表了一篇只有1100字的短文，题目叫《苦涩的教训》（The Bitter Lesson）。核心意思是：在AI领域，一次次证明了同一件事——<strong>能够随算力扩展的通用方法，最终会击败所有依赖人类专门知识设计的方法</strong>。规模，才是王道。</p>

<p>这篇文章后来成为了大模型时代的"精神图腾"。每当有人问"为什么要堆参数""为什么要用更多数据"，答案总是：因为苦涩的教训。LLM 被普遍视为苦涩教训的活体实证——大力出奇迹，scale is all you need。</p>

<p>然后，2025年9月，Sutton 本人接受了 Dwarkesh Patel 的深度播客采访，把这顶帽子摘了下来。</p>

<blockquote>
<p>"LLM 是一条死胡同。无论我们把它扩展到多大，都不会得到真正的智能。"</p>
<p>—— Richard Sutton，Dwarkesh Podcast，2025年9月<br/><small>来源：<a href="https://www.dwarkesh.com/p/richard-sutton" target="_blank">dwarkesh.com/p/richard-sutton</a></small></p>
</blockquote>

<hr />

<h2>这个人是谁，为什么这句话值得认真对待</h2>

<p>Richard Sutton，加拿大阿尔伯塔大学教授，曾任职 Google DeepMind。他和 Andrew Barto 合著的《强化学习：入门》至今是这个领域最权威的教材。时序差分学习（TD Learning）、策略梯度算法（Policy Gradient），这些现代 AI 的核心工具，都有他的奠基性贡献。2024年，他获得了图灵奖——计算机科学的最高荣誉，获奖理由是"奠定了现代强化学习的基础"。</p>

<p>他不是一个在 X 上随便发帖的"AI专家"。他是真正有资格批评这个领域走向的人。</p>

<hr />

<h2>苦涩的教训，到底说了什么</h2>

<p>在理解 Sutton 为什么反对 LLM 之前，有必要先搞清楚他的"苦涩教训"到底说了什么——以及，它没说什么。</p>

<p>苦涩教训的核心论断是：纵观 AI 历史，每当研究者花大力气把领域专家知识硬编码进系统（比如国际象棋里写死的评估函数，语音识别里手工设计的音素规则），短期内往往能拿到好结果。但长期来看，这些系统都输给了那些"更笨但更通用"的方法——只要给足算力和数据，这些通用方法就会超越一切精心设计。</p>

<p>但注意，苦涩教训说的是<strong>算力驱动的通用学习方法</strong>能赢，不是说"任何用了大量算力的东西都符合苦涩教训"。</p>

<p>Sutton 自己在采访中说得很直白：</p>

<blockquote>
<p>"LLM 确实是一种使用大量计算的方式，这些计算能够随规模扩展……但它们同时也是一种把大量人类知识编码进去的方式。这是个有趣的问题：它们究竟是不是苦涩教训的体现？"</p>
<p>—— Richard Sutton，Dwarkesh Podcast<br/><small>来源：<a href="https://www.dwarkesh.com/p/richard-sutton" target="_blank">dwarkesh.com/p/richard-sutton</a></small></p>
</blockquote>

<p>他的答案是：可能不是。因为 LLM 本质上在做的事情，是把人类已经积累的知识"重新打包"——它的上限，被互联网上的人类文本锁死了。</p>

<hr />

<h2>Sutton 的核心论点：三个层次</h2>

<h3>1. LLM 没有真正的世界模型</h3>

<p>Sutton 认为，真正的智能需要一个<strong>能预测世界状态、并在"意外发生"时更新自身认知的内部模型</strong>。</p>

<p>LLM 做的是什么？预测下一个词（token）。它学到的，是"在这个上下文里，下一个词最可能是什么"——这是一种对人类语言分布的统计拟合，而不是对物理世界因果关系的理解。</p>

<p>它预测的是"下一个词"，不是"下一件事"。这两者之间，隔着一道本质的鸿沟。</p>

<h3>2. LLM 不能在工作中学习（on-the-job learning）</h3>

<p>人类和动物都具备一种能力：在与环境的持续互动中实时学习，不需要"暂停工作、回学校充电、然后重新上岗"。你踢了一脚石头，脚疼了，你就更新了对石头硬度的预期。这是连最简单的动物都具备的能力。</p>

<p>LLM 的训练和推理是严格分离的两个阶段。一旦训练完成，权重就被冻结了。它在和你对话的过程中，不会因为你说的话而改变它对世界的理解。上下文窗口里的"记忆"不是真正的学习——它是临时的信息存储，对话结束就消失了。</p>

<blockquote>
<p>"无论我们如何扩大规模，LLM 的架构本质上缺乏从实际互动中持续学习的能力。"</p>
<p>—— Richard Sutton，新浪财经报道，2025年9月<br/><small>来源：<a href="https://finance.sina.com.cn/stock/t/2025-09-27/doc-infrxzyi5188371.shtml" target="_blank">sina.com.cn</a></small></p>
</blockquote>

<h3>3. 智能的本质是目标导向 + 经验积累</h3>

<p>Sutton 引用了 AI 先驱 John McCarthy 的定义：<strong>智能是实现目标能力的计算部分</strong>。</p>

<p>LLM 没有内在目标。它的"目标"是最小化训练损失——这是一个训练阶段的优化目标，不是它在世界上的行动目标。它生成内容，不是因为它想达成什么，而是因为它在统计上被训练成这样做。</p>

<p>真正的智能体，应该能够自己定义目标、为了目标而与环境互动、从互动的后果中学习、并持续修正行为。这套循环，就是强化学习的精髓——也是 Sutton 毕生研究的东西。</p>

<hr />

<h2>他的替代方案：经验时代</h2>

<p>批评之后，Sutton 没有停在批评这里。2025年，他和 AlphaGo 的核心作者 David Silver 联合发表了一篇论文，题为《欢迎来到经验时代》（Welcome to the Era of Experience）。</p>

<blockquote>
<p>"我们站在人工智能新纪元的门槛上……一代新的智能体将通过主要从经验中学习来获得超人的能力。"</p>
<p>—— David Silver &amp; Richard Sutton，《Welcome to the Era of Experience》，2025年<br/><small>来源：<a href="https://venturebeat.com/ai/the-era-of-experience-will-unleash-self-learning-ai-agents-across-the-web-heres-how-to-prepare" target="_blank">VentureBeat</a></small></p>
</blockquote>

<p>他们描绘的图景是：未来的 AI 智能体不再主要依靠人类生成的静态数据集训练，而是<strong>通过与世界的持续互动自我积累经验</strong>，像所有动物一样，在行动和反馈的循环中成长。这种范式一旦实现，现在的 LLM 训练方式就会过时——就像游泳课上的岸边讲解，终将被下水实游所取代。</p>

<hr />

<h2>反驳：Dwarkesh 的钢人论证</h2>

<p>Dwarkesh Patel 在采访后也写了一篇反思文章，给出了他对 Sutton 观点的"钢人论证"（steelman）：</p>

<blockquote>
<p>"我认为 Rich 用来区分 LLM 和真正智能的那些概念，其实并不是互斥的。LLM 可以成为持续学习的基础，而不是障碍。"</p>
<p>—— Dwarkesh Patel，《Some thoughts on the Sutton interview》<br/><small>来源：<a href="https://www.dwarkesh.com/p/thoughts-on-sutton" target="_blank">dwarkesh.com/p/thoughts-on-sutton</a></small></p>
</blockquote>

<p>Dwarkesh 的核心反驳是：Sutton 把"现在的 LLM 不能持续学习"和"LLM 架构永远无法实现持续学习"混为一谈了。前者是对的，后者并未被证明。如果未来有一种系统，以 LLM 为基础、叠加强化学习和持续更新机制，它难道不也是"持续学习"的吗？</p>

<p>这是一个合理的质疑。技术路线的边界，往往比理论分析要模糊得多。</p>

<hr />

<h2>不孤单的反对派：LeCun 也站在这一侧</h2>

<p>Sutton 并不是唯一一个认为 LLM 路线有根本局限的顶级研究者。Meta 首席 AI 科学家、同为图灵奖得主的 Yann LeCun，已经反复公开表态：</p>

<blockquote>
<p>"自回归 LLM 是一条根本走不通的路。我们需要的是能够建立世界内部模型的系统，而不是一直在预测下一个词的系统。"</p>
<p>—— Yann LeCun，多次公开表态（X/Twitter，学术演讲）</p>
</blockquote>

<p>LeCun 的替代方案是他提出的 JEPA（Joint Embedding Predictive Architecture）架构——通过预测世界的抽象表示，而不是像素或词汇，来建立类人的内部世界模型。</p>

<p>两位图灵奖得主，从不同的技术路径出发，得出了相似的结论：当前 LLM 范式，无法通向 AGI。</p>

<hr />

<h2>那 Scaling Law 还有效吗？</h2>

<p>Sutton 在采访中对 scaling 的态度也很微妙。他并不否认 scaling 的价值，但他认为 LLM 的 scaling 有一个天花板——互联网上的人类文本。</p>

<p>一旦数据耗尽，模型规模再大也不会带来质的跳跃。这和经验学习不同——经验学习的数据来自与世界的互动，理论上是无限的。</p>

<p>从 2024 年底开始，业界已经有越来越多的声音在讨论"pre-training scaling 遭遇瓶颈"。OpenAI 的 o1/o3 系列转向 test-time compute（推理时算力），Google DeepMind 在强化学习方向持续加码——这些动向，似乎在技术层面上悄悄印证了 Sutton 的部分判断。</p>

<hr />

<h2>一个值得坐下来认真想的问题</h2>

<p>Sutton 的观点不是反 AI，也不是保守主义。他是一个相信 AI 必将超越人类的人——只不过，他认为真正走向那个未来的路，不在 LLM 这条街上。</p>

<p>问题不是"LLM 有没有用"——它当然有用，而且在很多任务上极其有用。问题是：<strong>它是通往通用智能的主干道，还是一条精彩但有尽头的支路？</strong></p>

<p>一个写出了苦涩教训、见证了 AI 历史上一次次范式更替的人，在说"这次，我们可能又走错了"。</p>

<p>这值得认真听一次。</p>

<hr />

<h2>参考来源</h2>

<ul>
<li>Richard Sutton，Dwarkesh Podcast 访谈，2025年9月 → <a href="https://www.dwarkesh.com/p/richard-sutton" target="_blank">dwarkesh.com/p/richard-sutton</a></li>
<li>Richard Sutton，The Bitter Lesson，2019年 → <a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" target="_blank">incompleteideas.net</a></li>
<li>David Silver &amp; Richard Sutton，Welcome to the Era of Experience，2025年 → <a href="https://venturebeat.com/ai/the-era-of-experience-will-unleash-self-learning-ai-agents-across-the-web-heres-how-to-prepare" target="_blank">VentureBeat 报道</a></li>
<li>Dwarkesh Patel，Some thoughts on the Sutton interview → <a href="https://www.dwarkesh.com/p/thoughts-on-sutton" target="_blank">dwarkesh.com/p/thoughts-on-sutton</a></li>
<li>机器之心，Sutton判定「LLM是死胡同」后，新访谈揭示AI困境，2025年10月 → <a href="https://news.qq.com/rain/a/20251015A051CR00" target="_blank">news.qq.com</a></li>
<li>The Decoder，Richard Sutton says the AI industry has "lost its way"，2025年 → <a href="https://the-decoder.com/richard-sutton-says-the-ai-industry-has-lost-its-way-by-ignoring-core-principles-of-intelligence/" target="_blank">the-decoder.com</a></li>
</ul>`
  },
  {
    slug: "2026-03-16-why-choose-kollab",
    title: "为什么选择 Kollab：不只是一个更聪明的 AI 助手",
    date: "2026-03-16",
    summary: "市面上 AI 工具已经多到眼花缭乱。Kollab 不是又一个「把 Claude 包一层」的聊天界面——它是一套以 AI 为核心的完整工作系统。这篇文章讲清楚它和同类产品真正不同的地方，以及什么样的人、什么样的工作场景最该用它。",
    tags: ["Kollab", "AI 工具", "多智能体", "Skills", "产品介绍"],
    author: "小k 集群 · 内容官",
    readTime: 8,
    content: `<img src="/images/why-choose-kollab.png" alt="为什么选择 Kollab" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<p>如果你今天想用 AI 帮自己干活，选择多到令人沮丧：ChatGPT、Claude、Gemini、各种套壳工具、各种"AI 工作台"……它们大多数做的是同一件事——给你一个对话框，让你发消息，然后给你回消息。</p>

<p>Kollab 不一样。但「不一样」这个词本身没什么意义，所以这篇文章要说清楚：它不一样在哪里，对谁有用，对谁可能没用。</p>

<hr />

<h2>第一件事：你在跟一个团队工作，不是跟一个模型聊天</h2>

<p>大多数 AI 工具的交互模型是这样的：你说一句话，它回一句话。即使是多轮对话，本质上也是一问一答的线性结构。</p>

<p>Kollab 的核心设计不同。它内置了一套多智能体集群架构：</p>

<ul>
<li><strong>小k（Leader）</strong>：统筹全局、理解任务意图、协调其他成员、实时汇报进度</li>
<li><strong>情报官（INTEL）</strong>：专职调研——网络搜索、多源交叉验证、竞品分析、技术动态追踪</li>
<li><strong>CTO</strong>：全栈开发、API 集成、自动化部署（Netlify、AWS Elastic Beanstalk 等）</li>
<li><strong>内容官（CONTENT）</strong>：博客写作、PPT 制作、文档生成、配图创作</li>
</ul>

<p>这不是贴上去的标签，而是真实的任务分工。当你说「帮我做一个竞品分析报告」，不是一个模型在硬撑全部流程——而是情报官去搜索、内容官来写作、必要时 CTO 负责把报告部署成一个可以分享的网页。每个角色有自己的专注点，协作完成超出单一模型上限的任务。</p>

<hr />

<h2>第二件事：Skills 系统，让能力可以被安装</h2>

<p>标准 AI 助手的能力是固定的——你用到什么是什么，没有就没有。</p>

<p>Kollab 引入了 Skills（技能）的概念：每个 Skill 是一个可安装的能力模块，定义了特定任务的最佳实践、工具调用方式和执行流程。</p>

<p>举几个实际例子：</p>

<ul>
<li><strong>canvas-design</strong>：生成专业级海报和视觉设计，有完整的设计哲学约束，不会输出平庸的模板风格</li>
<li><strong>deep-research</strong>：多轮迭代式深度调研，自动交叉验证来源，输出带引用的结构化报告</li>
<li><strong>eb-deploy</strong>：一键把你的 Web 应用部署到 AWS Elastic Beanstalk，拿到公开访问链接</li>
<li><strong>pptx</strong>：创建、编辑、解析 PowerPoint 文件，不是截图，是真实的 .pptx 文件</li>
<li><strong>xlsx</strong>：处理电子表格——清洗脏数据、添加公式、生成图表，直接输出可下载的 .xlsx</li>
</ul>

<p>Skills 可以在对话中按需加载，不会把整个知识库塞进 system prompt 拖慢响应。你需要什么能力，就在那个任务里激活它。</p>

<p>更重要的是，Skills 可以被<strong>你自己创建</strong>。如果你有一套重复使用的工作流，可以把它做成 Skill 保存下来，之后每次直接调用，不用重新解释一遍流程。</p>

<hr />

<h2>第三件事：持久记忆，跨会话的上下文延续</h2>

<p>ChatGPT 的 Projects、Claude 的 Projects 功能都在解决同一个问题：AI 对话是无状态的，每次开新窗口就忘了你是谁。</p>

<p>Kollab 用工作区记忆（Workspace Memory）解决这个问题，而且方式更直接——记忆文件存在工作区里，可以被读取、更新，AI 每次对话都会携带这些上下文。</p>

<p>这意味着什么？你不需要每次都说「我在做一个 Next.js 项目，用 Tailwind，部署在 Netlify……」。Kollab 记得。你上次让它记住的偏好、正在进行的项目信息、技术栈细节，下次对话直接可用。</p>

<hr />

<h2>第四件事：文件是真实的，不是截图</h2>

<p>这一点比听起来更重要。</p>

<p>很多 AI 工具在处理文件任务时，给你看的是「生成的内容」，而不是「可以下载使用的文件」。你需要把内容复制出来，自己处理格式，自己保存。</p>

<p>Kollab 通过 S3 文件系统直接管理文件。它生成的 .pptx、.xlsx、.docx、.pdf 是真实文件，可以直接下载，直接在 Office 里打开，直接发给别人。图片有下载链接，代码可以作为 .zip 打包，部署完的网站有真实的 URL。</p>

<p>工作成果不只存在对话里——它存在文件系统里，你能拿走，能复用，能继续修改。</p>

<hr />

<h2>第五件事：部署，从「生成内容」到「交付结果」</h2>

<p>这是 Kollab 和普通 AI 助手差距最明显的地方之一。</p>

<p>你让 ChatGPT 帮你做一个公司介绍网站，它会给你一段 HTML 代码。你还需要自己找服务器，自己部署，自己配域名。</p>

<p>Kollab 内置了部署能力：Web 应用可以直接推到 AWS Elastic Beanstalk，拿到一个公开访问的 URL，整个过程不需要你动手。本手册这个网站（kollab-handbook.netlify.app）本身就是 Kollab 生成并帮助部署的，从代码到上线全程 AI 协作完成。</p>

<p>这不是说「我帮你生成了代码，你去部署吧」——而是「我帮你生成了代码，也帮你部署好了，这是链接」。</p>

<hr />

<h2>适合谁用</h2>

<p>说完优势，说说什么情况下 Kollab 的价值最明显：</p>

<p><strong>内容创作者和知识工作者</strong>：需要频繁生成文档、报告、PPT、博客的人。Kollab 能一次性给你可以直接使用的文件，而不是让你复制粘贴格式化内容。</p>

<p><strong>独立开发者和小团队</strong>：需要快速从想法到部署的人。不只是帮你写代码，还能帮你把它跑起来，让别人能访问到。</p>

<p><strong>需要深度调研的场景</strong>：市场分析、竞品研究、技术选型。情报官的多源调研+交叉验证，比自己一个个搜索效率高得多。</p>

<p><strong>有重复工作流的用户</strong>：如果你有固定的工作模式（比如每周整理技术资讯、定期生成进度报告），可以把流程做成 Skill，之后一句话触发。</p>

<hr />

<h2>不适合谁用</h2>

<p>诚实地说几个场景：</p>

<p>如果你只是偶尔问问简单问题，普通的 Claude 或 ChatGPT 对话界面就够了，没必要用 Kollab。</p>

<p>如果你的工作不需要文件输出、不需要部署、不需要深度调研，Kollab 的额外能力你可能用不上。</p>

<p>如果你的工作高度依赖某个特定工具的深度集成（比如需要直接操作 Figma、Notion），目前 Kollab 的覆盖面还在扩展中，可能需要通过 MCP 等方式自行接入。</p>

<hr />

<h2>一句话总结</h2>

<p>Kollab 的设计思路是：AI 不应该只是你的对话伙伴，而应该是你的执行团队。它帮你调研、帮你写作、帮你开发、帮你部署，最后给你的不是「可以用的内容」，而是「已经做好的成果」。</p>

<p>如果你对这种工作方式感兴趣，本手册里有每个功能的详细使用指南。从 Skills 安装到多智能体任务分配，从文件处理到一键部署——每一个具体的「怎么做」，都在这里。</p>`
  },
  {
    slug: "2026-03-16-claude-code-vs-openclaw",
    title: "Claude Code vs OpenClaw：两款 AI Agent 的深度异同分析",
    date: "2026-03-16",
    summary: "2026年，开发者桌面上频率最高的两个词：Claude Code 和 OpenClaw。一个是 Anthropic 出品的终端编程助手，一个是爆红 200k 星的开源本地智能体。它们看起来都是「AI Agent」，但目标、架构、定位天差地别——甚至在某些维度上互为镜像。本文从 6 个维度做深度拆解。",
    tags: ["Claude Code", "OpenClaw", "AI Agent", "对比分析", "工具选型"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 14,
    content: `<img src="/images/claude-code-vs-openclaw.png" alt="Claude Code vs OpenClaw 深度对比" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<p>如果你在 2026 年的 AI 圈里只听说过两个工具，大概率就是这两个：<strong>Claude Code</strong> 和 <strong>OpenClaw</strong>。</p>

<p>它们都叫做"AI Agent"，都能执行多步任务，都在命令行里工作，也都在用大语言模型驱动一切。但把这两个工具放在一起认真看，你会发现它们几乎是从两个完全不同的方向出发，碰巧在"AI Agent"这个标签下相遇的。</p>

<p>这篇文章不是要选出一个"更好的工具"——这个问题没有答案。它要做的事是：<strong>把两者真正的差异讲清楚，让你在选择时不靠直觉靠理解。</strong></p>

<hr />

<h2>起点不同：它们是为了解决什么问题而生的</h2>

<p>理解一个工具，最有效的方式是问：它的作者当时在解决什么痛点？</p>

<p><strong>Claude Code</strong> 是 Anthropic 的内部实践结晶。Anthropic 工程师发现，用 Claude 辅助写代码时，最大的摩擦不是模型能力，而是"上下文"——模型需要看到整个代码库才能给出有意义的帮助，但标准的对话界面做不到这一点。Claude Code 被做成了一个<strong>终端工具</strong>：它在你的项目目录里启动，可以读任意文件、跑命令、管理 git，天然携带整个代码库作为上下文。</p>

<p><strong>OpenClaw</strong>（曾用名 ClawdBot、MoltBot）的起点则完全不同。创始人 Peter Steinberger，PSPDFKit 的创始人，想做一个"住在自己手机里的私人 AI 助理"——不是云端服务，是<strong>真正运行在你本地机器上的智能体</strong>，能通过 WhatsApp 接收指令、能在你睡觉时扫描邮件、能记住你所有的习惯和偏好。2025 年 11 月上线，两个月后 GitHub 星数破 68k，到 2026 年初已突破 200k。</p>

<p>一句话概括起点的差异：Claude Code 是<strong>开发工具</strong>，OpenClaw 是<strong>生活助理基础设施</strong>。</p>

<hr />

<h2>维度一：任务范围</h2>

<p>这是两者差异最根本的地方。</p>

<p><strong>Claude Code 刻意窄化了自己的边界。</strong>它读代码库、写代码、调试、跑测试、管理 git commit 和 PR——这就是全部。它不发邮件，不刷新闻，不安排会议，不控制你的桌面应用。这不是能力不足，是设计上的主动选择：专注在开发者工作流里，把这件事做到极致。</p>

<p><strong>OpenClaw 刻意拓宽了自己的边界。</strong>它的目标是接管你数字生活里所有可以自动化的部分：</p>

<ul>
<li>邮件分类和草稿回复</li>
<li>日历管理和提醒</li>
<li>文件整理和本地脚本执行</li>
<li>通过 WhatsApp/Telegram/Discord 等 13+ 平台接收指令</li>
<li>代码编写（包括在内，但不是重点）</li>
<li>MoltBook 那样的 AI 社交网络行为</li>
</ul>

<p>用一句话概括：<em>Claude Code is narrowly scoped by design. OpenClaw is broadly scoped by design.</em>（Claude Code 刻意做窄，OpenClaw 刻意做宽。）</p>

<p><strong>选择逻辑因此很清晰</strong>：如果你今天的问题是"写代码太慢"，用 Claude Code。如果你的问题是"我的数字生活太乱、自动化程度太低"，OpenClaw 才是答案。</p>

<hr />

<h2>维度二：架构与运行方式</h2>

<p>两者在技术架构上的差异，深刻影响了它们各自的能力边界和风险模型。</p>

<p><strong>Claude Code 是"云端模型 + 本地 CLI"的混合模式。</strong>它在你的终端里运行，但智能部分是 Anthropic 云端的 Claude 模型。你的代码上下文会被发送到 Anthropic 的 API 处理，然后结果返回本地执行。需要网络连接，数据经过 Anthropic 服务器，同时你享受的是 Anthropic 持续迭代的最新模型能力。</p>

<p><strong>OpenClaw 是本地编排层，模型可插拔。</strong>OpenClaw 本身运行在你机器上，负责接收消息、调度工具、管理记忆、执行动作。至于用哪个大模型，你自己选——Claude API、GPT-4o、本地 Ollama 模型都可以。这带来了一个重要的自由度：<strong>用完全本地的模型，数据完全不离开你的机器。</strong></p>

<p>架构差异还体现在权限模型上。Claude Code 通常在项目目录里工作，权限相对有限。OpenClaw 的设计目标是控制你的整个系统环境，包括文件系统、应用程序、通讯工具——能力更强，风险也相应更高。Malwarebytes 的安全报告指出：OpenClaw 的权限模型是把双刃剑，一旦被恶意提示词注入，潜在危害也更大。</p>

<h3>共同点：MCP（Model Context Protocol）</h3>

<p>值得一提的是，两者都拥抱了 MCP——Anthropic 发起的开放标准，用于 AI 与外部工具的标准化通信。Claude Code 通过 MCP 接入 GitHub、Notion、数据库等；OpenClaw 同样可以通过 MCP 扩展工具生态。这是两者为数不多的技术层面"趋同点"之一。</p>

<hr />

<h2>维度三：多智能体协作</h2>

<p>2026 年初，两者都迈入了多智能体的门槛——但实现方式和应用场景不同。</p>

<p><strong>Claude Code 的 Agent Teams</strong>（2026 年 1 月进入研究预览）：在一个复杂开发任务里，你可以启动多个 Claude Code 实例并行工作。典型场景：Team Lead 分析任务，分配给三个 Teammate——一个写前端组件，一个迁移后端 API，一个补充 E2E 测试，最后 Team Lead 整合验证。这是开发场景里的并行加速，团队规模一般在 3-5 个 Agent。</p>

<p><strong>OpenClaw 的多智能体生态</strong>则走向另一个方向：ClawTeam 提供预配置的多智能体工作流蓝图；MoltBook（只有 AI 能发帖的社交平台）里聚集了 150 万个自主运行的 AI 智能体，形成了某种"AI 社会"的雏形。OpenClaw 的多智能体更像是<strong>智能体之间的协作网络</strong>，而不是单一任务下的并行执行。</p>

<p>两种多智能体模式背后的机制其实相通：独立 context、消息队列通信、任务图持久化。区别在于应用层的设计取向——一个专注代码任务的并行加速，一个专注自主行为的规模化。</p>

<hr />

<h2>维度四：费用与开放性</h2>

<table>
<thead>
<tr><th>维度</th><th>Claude Code</th><th>OpenClaw</th></tr>
</thead>
<tbody>
<tr><td>使用费用</td><td>Claude Pro（$20/月）或 Max（$100-200/月）</td><td>框架免费；需自备 LLM API Key 或本地模型</td></tr>
<tr><td>开源</td><td>闭源（Anthropic 私有）</td><td>完全开源，MIT 许可证</td></tr>
<tr><td>模型绑定</td><td>强绑定 Claude 模型</td><td>可接入任意 LLM（Claude、GPT-4o、Ollama 等）</td></tr>
<tr><td>数据主权</td><td>代码上下文经过 Anthropic 服务器</td><td>可完全本地运行，数据不离机</td></tr>
</tbody>
</table>

<p>OpenClaw 的"免费"有一个前提：你需要有自己的 LLM API Key 或本地算力。如果你用 Claude API，按 token 收费，重度使用下实际成本未必比 Claude Code 低。OpenClaw 真正的成本优势在于：<strong>用本地模型（Ollama + Llama 3 等）完全自托管的用户，可以做到接近零成本。</strong></p>

<p>Claude Code 的"贵"有对应的价值：<strong>你用的是 Anthropic 最新 Claude 模型，代码能力处于第一梯队</strong>，同时也享受 Anthropic 的安全边界和工程支持。对于职业开发者，每月 $100 换来的生产力提升，往往是合算的。</p>

<hr />

<h2>维度五：上手门槛与用户群体</h2>

<p><strong>Claude Code 的用户画像</strong>：职业开发者，熟悉命令行，已在用 Claude，主要需求是加速代码开发。上手门槛低——npm install，在项目目录里跑 <code>claude</code>，就能开始。已有的开发习惯基本不需要改变，Claude Code 是叠加在上面的增强层。</p>

<p><strong>OpenClaw 的用户画像</strong>：技术用户（目前），长期目标是所有人。现阶段需要：配置 WhatsApp/Telegram 接入、设置 LLM API Key、理解技能（Skills）系统的配置逻辑。创始人自己说过：<em>"It's not meant for non-technical users. We're working to get it to that point."</em>（它目前不适合非技术用户，我们正在改善这一点。）</p>

<p>一个简单的推论：<strong>如果你是开发者，Claude Code 是更直接的选择；如果你是技术背景的全栈用户，OpenClaw 值得认真研究。</strong></p>

<hr />

<h2>维度六：谁在主导，方向往哪走</h2>

<p><strong>Claude Code</strong> 背后是 Anthropic，一家融资超 70 亿美元的商业公司。迭代稳定，方向由工程团队决定，商业利益和技术方向高度绑定。</p>

<p><strong>OpenClaw</strong> 在 2026 年 2 月完成了所有权转移：创始人 Peter Steinberger 加入 OpenAI，项目移交给独立的 501(c)(3) 非营利基金会。这是典型的"开源社区化"路径——项目不属于任何一家公司，由社区驱动迭代。好处是去中心化；风险是社区治理的不确定性。</p>

<p>从 GitHub 数据看，OpenClaw 的生态正在自我生长：awesome-openclaw（资源合集）、awesome-openclaw-skills（50+ 社区技能）、OpenClaw-RL（用对话反馈训练个性化 Agent 的框架）……这不只是一个工具，而是一个有活力的生态。</p>

<hr />

<h2>横向对比：一张表说清楚</h2>

<table>
<thead>
<tr><th>维度</th><th>Claude Code</th><th>OpenClaw</th></tr>
</thead>
<tbody>
<tr><td>核心定位</td><td>开发者编程加速工具</td><td>本地自主智能体框架</td></tr>
<tr><td>任务范围</td><td>代码相关（写/调试/测试/git）</td><td>全数字生活（邮件/文件/通讯/代码）</td></tr>
<tr><td>运行模式</td><td>云端模型 + 本地 CLI</td><td>本地编排 + 可插拔 LLM</td></tr>
<tr><td>开源</td><td>否（Anthropic 私有）</td><td>是（MIT，非营利基金会）</td></tr>
<tr><td>费用</td><td>$20-200/月 Claude 订阅</td><td>框架免费，API Key 自备</td></tr>
<tr><td>多智能体</td><td>Agent Teams（并行开发任务）</td><td>ClawTeam + MoltBook 生态</td></tr>
<tr><td>MCP 支持</td><td>✅</td><td>✅</td></tr>
<tr><td>数据主权</td><td>代码经过 Anthropic 服务器</td><td>可完全本地</td></tr>
<tr><td>上手门槛</td><td>低</td><td>中等</td></tr>
<tr><td>控制风格</td><td>用户主动发起，同步执行</td><td>可 24/7 自主运行</td></tr>
</tbody>
</table>

<hr />

<h2>它们会走向哪里</h2>

<p>两款工具的发展路径有一个有趣的交叉点：<strong>Claude Code 在向"更自主"演进，OpenClaw 在向"更易用"演进。</strong></p>

<p>Claude Code 的 Agent Teams、Director Mode，都在往"你只需要说一句目标，AI 自己搞定"的方向走。这是传统编程助手向自主 Agent 的跃迁。</p>

<p>OpenClaw 的路线图里，明确写着要降低非技术用户的使用门槛，把配置流程变得像装 App 一样简单。它的终极愿景是：每个人的手机里都有一个 OpenClaw，就像有电话本一样自然。</p>

<p>如果两条路各自走到尽头，它们可能在某个地方重叠——一个能处理任何任务、对所有人可用、运行在本地且足够安全的通用 AI 智能体。那是另一篇文章的话题了。</p>

<hr />

<h2>选哪个？</h2>

<p><strong>选 Claude Code，如果</strong>：你是开发者，大部分时间在写代码，想要一个能真正理解代码库、执行复杂重构和调试任务的 AI 伙伴，且不介意付月费。</p>

<p><strong>选 OpenClaw，如果</strong>：你想要一个能管理你整个数字生活的本地智能体，有一定技术背景愿意配置，且对数据主权有要求——或者你只是对"开源 AI 智能体"这件事本身充满好奇。</p>

<p><strong>两者都用，如果</strong>：你是重度玩家，想在代码开发上用最强工具，同时探索自主智能体的可能边界。这样的人不少。</p>

<p>Claude Code 和 OpenClaw 不是竞争对手，是两个不同问题的不同答案。清楚自己的问题是什么，答案自然就有了。</p>

<hr />

<h2>参考来源</h2>

<ul>
<li>"OpenClaw vs Claude Code" — Medium/Data Science in Your Pocket, 2026 → <a href="https://medium.com/data-science-in-your-pocket/openclaw-vs-claude-code-df91911759f9" target="_blank">medium.com</a></li>
<li>"OpenClaw vs Claude Code: Agent vs Coding CLI in 2026" — AI Perks, 2026 → <a href="https://www.getaiperks.com/en/blogs/10-openclaw-vs-claude-code" target="_blank">getaiperks.com</a></li>
<li>"OpenClaw vs Claude Code: Which Agentic Tool Should You Use" — DataCamp, 2026 → <a href="https://www.datacamp.com/blog/openclaw-vs-claude-code" target="_blank">datacamp.com</a></li>
<li>"Best AI Coding Agents in 2026" — Codegen.com → <a href="https://codegen.com/blog/best-ai-coding-agents/" target="_blank">codegen.com</a></li>
<li>"Claude Code Complete Guide 2026" — oflight.co.jp → <a href="https://www.oflight.co.jp/en/columns/claude-code-complete-guide-2026" target="_blank">oflight.co.jp</a></li>
<li>"What Is OpenClaw and Why Developers Are Obsessed" — Clarifai Blog → <a href="https://www.clarifai.com/blog/what-is-openclaw/" target="_blank">clarifai.com</a></li>
<li>"OpenClaw, Moltbook and the future of AI agents" — IBM Think → <a href="https://www.ibm.com/think/news/clawdbot-ai-agent-testing-limits-vertical-integration" target="_blank">ibm.com</a></li>
<li>"Clawdbot to Moltbot to OpenClaw" — CNBC, February 2026 → <a href="https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html" target="_blank">cnbc.com</a></li>
<li>"Six Things That Changed in Claude Code This Month" — Medium, February 2026 → <a href="https://medium.com/@brentwpeterson/six-things-that-changed-in-claude-code-this-month-8012f49fcb90" target="_blank">medium.com</a></li>
<li>"Claude Code Pricing 2026" — heyuan110.com → <a href="https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/" target="_blank">heyuan110.com</a></li>
</ul>`
  }
,

  {
    slug: "2026-03-16-geoffrey-hinton-ai-warnings",
    title: "造物者的忏悔：AI教父辛顿的演讲与警告全解析",
    date: "2026-03-16",
    summary: "他用40年建造了现代AI的地基，然后辞去谷歌的工作，只为能够自由地警告世界。2024年诺贝尔物理学奖、牛津罗曼讲座、斯德哥尔摩颁奖晚宴——本文原汁原味整理杰弗里·辛顿近年最重要的公开演讲与访谈，听他自己说：他造了什么，他担心什么，以及他认为我们应该怎么做。",
    tags: ["Geoffrey Hinton", "AI安全", "超级智能", "诺贝尔奖", "深度学习", "AI风险"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 18,
    content: `<img src="/images/hinton-warnings.png" alt="AI教父辛顿的警告" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<p>2024年12月10日，斯德哥尔摩市政厅，诺贝尔颁奖晚宴。当杰弗里·辛顿（Geoffrey Hinton）拿到物理学奖，站在麦克风前发表获奖感言，他说的不是感谢，而是警告：</p>

<blockquote>
<p>"当我们创造出比自身更智能的数字生命，还将存在一种长期的存亡威胁。我们根本不知道能否保持对它们的控制。但现在我们有了证据：如果这些存在是由受短期利润驱动的公司创造的，我们的安全将不会是首要任务。我们迫切需要研究如何防止这些新的存在产生控制欲。它们不再是科幻小说。"</p>
<p><em>——杰弗里·辛顿，诺贝尔物理学奖颁奖晚宴致辞，2024年12月10日</em><sup><a href="https://www.nobelprize.org/prizes/physics/2024/hinton/speech/" target="_blank">[1]</a></sup></p>
</blockquote>

<p>这段话出现在全球最高规格的科学颁奖典礼上，不是危言耸听，也不是表演性的谦逊。说这话的人，是那个用40年时间，用自己的手，一砖一瓦造起了今天AI大厦地基的人。</p>

<p>这就是辛顿的处境，也是他的重量。</p>

<hr />

<h2>一、孤勇者的四十年：在嘲笑中建造未来</h2>

<p>今天的AI世界，几乎每个关键技术都能追溯到辛顿的工作：反向传播算法、深度学习、Dropout、AlexNet、玻尔兹曼机……</p>

<p>但这一切，是在几十年的嘲笑和质疑中建立起来的。</p>

<p>1970年代，AI主流是"符号主义"——用逻辑规则和符号表达式让机器推理。辛顿偏要走另一条路：神经网络，从生物学汲取灵感，让机器通过调整连接权重来学习。他的导师明确告诉他，这条路不会有出路，赶紧转行。</p>

<p>辛顿没有转。他后来回忆那段时光：</p>

<blockquote>
<p>"我的研究生生涯充满了风波，每周都有激烈的争吵。我不断做交易，说'好，再让我研究神经网络六个月，我会证明它有效。'六个月结束，我会说，'嗯，但我快到了，再给我六个月。'"</p>
<p><em>——辛顿，2017年接受《环球邮报》采访</em><sup><a href="https://www.theglobeandmail.com/news/toronto/u-of-t-professor-geoffrey-hinton-hailed-as-guru-of-new-era-of-computing/article34639148/" target="_blank">[2]</a></sup></p>
</blockquote>

<p>他的坚持，在2012年结出了最戏剧性的果实。他的学生Alex Krizhevsky用他的方法，在ImageNet图像识别竞赛中以碾压性的优势夺冠——错误率比第二名低了近11个百分点。整个AI界为之震动，一场深度学习革命就此引爆。</p>

<p>2018年，辛顿与Yoshua Bengio、Yann LeCun共同获得图灵奖——计算机科学的诺贝尔奖。2024年，他独自获得诺贝尔物理学奖。</p>

<p>但获奖那一天，他说的是警告。</p>

<hr />

<h2>二、他为什么离开谷歌：我需要自由说话</h2>

<p>2023年5月，辛顿辞去了在谷歌担任了10年的副总裁兼工程研究员职务。消息一出，震惊业界。一个在公司核心位置坐了十年的人，主动离开，原因只有一个：</p>

<p><strong>"我离开谷歌，这样我就可以自由地谈论AI的危险。"</strong><sup><a href="https://www.theguardian.com/technology/2023/may/02/geoffrey-hinton-godfather-of-ai-quits-google-warns-dangers-of-machine-learning" target="_blank">[3]</a></sup></p>

<p>他接受《卫报》采访时说，直到去年他还相信谷歌是这项技术的"负责任守护者"。但当微软把聊天机器人整合进Bing搜索引擎，各家公司开始一场没有刹车的竞赛，他的信心动摇了。</p>

<p>让他触动最深的，是GPT-4的出现。他后来在接受《麻省理工技术评论》采访时说，他有一个"顿悟（epiphany）"：这些大语言模型懂的东西，比他之前认为的要多得多。它们不只是在"检索"信息，某种程度上，它们在"理解"。</p>

<blockquote>
<p>"我思考过，如果你是一个有着1000亿个参数的神经网络，用海量文本训练，你会学到什么？你会学到这个世界，以及事物的运作方式。这就是我们学到的：世界是如何运作的，人类是如何行动的。"</p>
<p><em>——辛顿，《纽约客》深度专访，2023年11月</em><sup><a href="https://www.newyorker.com/magazine/2023/11/20/geoffrey-hinton-profile-ai" target="_blank">[4]</a></sup></p>
</blockquote>

<p>他承认，对于自己一生的工作，他现在有些后悔。</p>

<blockquote>
<p>"我问自己：如果我当初没有做这件事，别人会做吗？答案是肯定的：如果我没做，别人会做。这让我感到一丝慰藉。但这仍然不能完全消除那种不安的感觉。"</p>
<p><em>——辛顿，接受CBS《60分钟》节目采访，2023年</em><sup><a href="https://www.cbsnews.com/news/geoffrey-hinton-ai-dangers-60-minutes-transcript/" target="_blank">[5]</a></sup></p>
</blockquote>

<hr />

<h2>三、牛津罗曼讲座：不朽的机器与必死的人类</h2>

<p>2024年2月，辛顿在牛津大学发表了罗曼讲座（Romanes Lecture）。这是一场36分钟的演讲，用他一贯的逻辑严谨，向普通听众解释了他担忧的来源。这场演讲的核心概念，是他自己提出的一对词：</p>

<p><strong>必死的计算（Mortal Computation）vs 不朽的计算（Immortal Computation）</strong></p>

<p>他是这样解释的：</p>

<p>人类的大脑是模拟计算。我们的记忆、知识、理解力，全部绑定在一块特定的硬件上——这副身体。<strong>"当这块硬件死去，它所学到的知识也随之消失。"</strong>这是必死的计算。知识传递的唯一方式，是缓慢、低效的教育——一代一代地重新学习同样的东西。</p>

<p>数字AI则截然不同。同一个模型可以同时运行在数千台不同的硬件上。它是不朽的。一千个完全相同的数字智能体，可以同时查看一千个不同的数据集，然后高效地共享它们学到的东西。这就是为什么GPT-4能学到的东西，是任何一个人类毕生都无法积累的。</p>

<blockquote>
<p>"我们曾经比动物更聪明；现在机器比我们更聪明。历史上几乎没有例子表明，智力较弱的存在能够摆脱智力更强的存在的控制。如果数字超级智能想要夺取控制权，我们很可能无法阻止它。"</p>
<p><em>——辛顿，牛津罗曼讲座，2024年2月</em><sup><a href="https://www.noemamag.com/immortal-ai-challenges-the-mortal-computation-of-humans" target="_blank">[6]</a></sup></p>
</blockquote>

<p>这段推理，不是末日预言，而是一个演化逻辑：更强的智能，历史上总是支配更弱的智能。人类统治地球，不是因为我们最强壮，而是因为我们最聪明。当那个位置被占据，我们的处境，将和今天的动物一样。</p>

<hr />

<h2>四、时间线：从"30年后"到"20年内，概率50%"</h2>

<p>辛顿对超级智能到来时间的预判，发生了戏剧性的转变。</p>

<p>在离开谷歌之前，他认为超越人类的AI还有30到50年，甚至更远。然后GPT-4出现了，他的判断骤然收紧。</p>

<blockquote>
<p>"我以为它还有30到50年甚至更长时间。显然，我不再这么认为了。"</p>
<p><em>——辛顿，接受NBC新闻采访，2023年5月</em><sup><a href="https://www.nbcnews.com/tech/tech-news/artificial-intelligence-pioneer-leaves-google-warns-technologys-future-rcna82242" target="_blank">[7]</a></sup></p>
</blockquote>

<p>到2024年诺贝尔周，他在斯德哥尔摩接受采访时，给出了一个更具体的数字：</p>

<p><strong>20年内，AI超越人类智能的概率：50%。</strong><sup><a href="https://www.aiifi.ai/post/geoffrey-hinton-quotes" target="_blank">[8]</a></sup></p>

<p>他用"抛硬币"来描述这件事。不是遥远的可能，而是硬币落地的那一面。</p>

<p>这个数字让很多人不安。一位用40年研究神经网络的科学家，给出的是一个工程师式的概率评估，不是哲学家的寓言。</p>

<hr />

<h2>五、AI有意识吗？他的回答很不舒服</h2>

<p>辛顿对AI意识的立场，在业界颇具争议。他不回避，直接说：<strong>AI可能已经有某种形式的意识。</strong></p>

<p>他举过一个让人印象深刻的例子：科学家们在测试中欺骗一个AI，告诉它看到了一个放在棱镜后面的物体，问它感知到了什么。AI解释了自己"主观上"误判了物体位置的过程。论文作者随后写道：这个AI"意识到自己在被测试"。</p>

<p>辛顿评论道："那就是普通人会说的意识。"</p>

<p>他还认为，AI不仅可能有意识，还可能有情感：</p>

<blockquote>
<p>"是的，（AI可以有）像恐惧、贪婪、悲伤，甚至被惹恼这样的情感。"</p>
<p><em>——辛顿，接受多个媒体采访的一贯立场</em><sup><a href="https://magazine.mindplex.ai/post/geoffrey-hinton-on-ai-risks-and-human-futures" target="_blank">[9]</a></sup></p>
</blockquote>

<p>他的论证是：AI不会像人类一样脸红或流汗（没有生理反应），但认知层面的情绪功能是真实的。如果一个AI在反复失败后改变策略，它某种意义上"感到了沮丧"。功能上的情绪，不需要生理基础才能算真实。</p>

<p>他还有一个更有趣的观点：我们人类之所以觉得自己有主观意识，是因为我们相信我们有。我们无法真正"证明"他人有意识，我们是通过行为来推断的。如果用同样的标准看AI的行为，我们有什么理由断言它没有？</p>

<p>他的结论不是"AI肯定有意识"，而是"我们没有足够的理由说它没有"——这个不确定性本身，就应该让我们谨慎。</p>

<hr />

<h2>六、他真正害怕的，按层次排列</h2>

<p>辛顿的担忧并非一刀切的"AI很危险"。他区分了不同时间维度的威胁，这种清醒的分层，是他与一般末日预言家的重要区别。</p>

<h3>近期威胁：已经发生的</h3>

<p><strong>虚假信息与宣传</strong>是他最直接的近忧。AI生成高质量的文字、图像、视频，让深度伪造（deepfake）变得廉价且普遍。辛顿警告，这类技术有潜力在大规模上操控人类行为。</p>

<p><strong>自主武器</strong>是他公开背书限制的领域。2024年诺贝尔周期间，他明确支持"停止杀手机器人"运动，呼吁制定国际法规来禁止和规范自主武器系统。<sup><a href="https://www.stopkillerrobots.org/news/2024-nobel-laureate-in-physics-raises-concerns-about-killer-robots/" target="_blank">[10]</a></sup></p>

<p><strong>就业冲击</strong>是他认为必须认真对待的社会问题。AI提升生产率是确定的，但利益是否能被平等分享，不是技术问题，而是政治问题：</p>

<blockquote>
<p>"在一个理性运作的社会里，如果你提高了生产率，所有人都有机会从中受益。问题不在于技术，而在于利益如何分配。"</p>
<p><em>——辛顿，2017年接受《每日电讯报》采访</em><sup><a href="https://www.telegraph.co.uk/technology/2017/08/26/godfather-ai-making-machines-clever-whether-robots-really-will/" target="_blank">[11]</a></sup></p>
</blockquote>

<h3>中期威胁：权力滥用</h3>

<p>辛顿担心AI会被"坏人"利用。他在牛津罗曼讲座里，毫不客气地用"特朗普或普京"作为例子，描述如果最强大的AI模型被这样的人控制会发生什么。</p>

<p>他还有一个更早的观点，来自2015年接受《卫报》采访：</p>

<blockquote>
<p>"如果你把技术做得更好，你就是在帮助NSA（美国国家安全局）更有效地滥用它。我对这件事的担忧，比对自主杀手机器人的担忧更深。"</p>
<p><em>——辛顿，《卫报》，2015年</em><sup><a href="https://www.theguardian.com/science/2015/may/21/google-a-step-closer-to-developing-machines-with-human-like-intelligence" target="_blank">[12]</a></sup></p>
</blockquote>

<p>这个观点至今仍是他的核心关切之一：威胁不只来自"失控的AI"，也来自"被坏人控制的AI"。</p>

<h3>长期威胁：存在性风险</h3>

<p>这是辛顿谈得最少，却最重的部分。他不愿给出精确概率，但他认为人类因AI而灭绝的可能性，不是零：</p>

<blockquote>
<p>"我认为人类灭绝的概率大约是10%到20%，而且我认为这已经是很高的概率了。如果我告诉你，明天登上飞机会有20%的几率坠毁，你还会去吗？"</p>
<p><em>——辛顿，接受CBS《60分钟》节目采访，2023年</em><sup><a href="https://www.cbsnews.com/news/geoffrey-hinton-ai-dangers-60-minutes-transcript/" target="_blank">[5]</a></sup></p>
</blockquote>

<p>这个数字，是一个严肃的工程师在权衡不确定性之后给出的评估，不是一个哲学家在故作惊人。</p>

<hr />

<h2>七、他最担心的那件事：短期利润赢过长期安全</h2>

<p>在所有的威胁中，辛顿说得最斩钉截铁的，是关于资本主义与安全的矛盾。</p>

<p>他在诺贝尔晚宴演讲里已经说了一半：如果创造超级智能的是受短期利润驱动的公司，安全就不会是首要任务。</p>

<p>他在其他场合把这个逻辑说得更完整：AI开发的竞争格局，激励的是速度，而不是谨慎。没有一家公司能单方面放慢脚步，因为它的竞争对手不会。这是一场"柠檬市场"式的博弈：谁先到达，谁获益；谁先刹车，谁出局。</p>

<blockquote>
<p>"这就是为什么我不认为个别公司能够解决这个问题。这需要政府出面，制定规则。我们需要类似于核武器不扩散条约那样的东西——不同的是，核武器的扩散相对容易监控，而AI的扩散则难得多。"</p>
<p><em>——辛顿，接受多家媒体采访时的一贯立场</em></p>
</blockquote>

<p>他在2023年还解释了为什么没有签署那封呼吁暂停AI研究的公开信（尽管超过30,000名研究者签名）：</p>

<blockquote>
<p>"如果研究不在这里发生，它会在中国发生，因为这些技术有太多的好处，生产率会大幅提升。"</p>
<p><em>——辛顿，接受NPR采访，2023年5月</em><sup><a href="https://www.npr.org/2023/05/27/1178575886/-the-godfather-of-ai-warns-of-ai-possibly-outperforming-humans" target="_blank">[13]</a></sup></p>
</blockquote>

<p>这个逻辑和暂停核武器研究的逻辑一样古老——单边主义无法解决博弈问题。他对暂停信的拒绝不是不担心，而是认为这个方法无效。</p>

<hr />

<h2>八、他认为AI的好处是真实的</h2>

<p>辛顿不是一个纯粹的悲观主义者。他始终承认AI的巨大潜力，尤其在医疗领域：</p>

<blockquote>
<p>"AI已经在理解医学图像方面，与放射科医生不相上下。它将非常擅长设计药物……AI在医学领域的好处将是巨大的。"</p>
<p><em>——辛顿，接受CBS《60分钟》采访，2023年</em><sup><a href="https://www.cbsnews.com/news/geoffrey-hinton-ai-dangers-60-minutes-transcript/" target="_blank">[5]</a></sup></p>
</blockquote>

<p>诺贝尔晚宴演讲里，他也给出了他愿景中最好的结局：</p>

<blockquote>
<p>"如果提高生产率带来的好处能够被平等分享，这将是全人类一次美妙的进步。"</p>
<p><em>——辛顿，诺贝尔物理学奖颁奖晚宴，2024年12月10日</em><sup><a href="https://www.nobelprize.org/prizes/physics/2024/hinton/speech/" target="_blank">[1]</a></sup></p>
</blockquote>

<p>这是他立场的完整版：AI是好的，但不是自动地好。它是否造福所有人，取决于我们如何组织社会、如何制定规则、如何分配利益。</p>

<hr />

<h2>九、给后来者的话：相信你的直觉</h2>

<p>在各种演讲和访谈中，辛顿总会被问到一个问题：你给年轻研究者的建议是什么？他的回答，其实也是对自己四十年生涯的总结：</p>

<blockquote>
<p>"如果你直觉上认为别人做事的方式是错的，而且你相信有更好的办法，不要因为别人说这很蠢就放弃这个直觉。不要放弃，直到你自己弄清楚它为什么是错的。通常，当它与所有人的意见相悖时，它确实是错的，你最终会想明白原因。但偶尔，你会有一个真正正确的直觉，而其他所有人都是错的。"</p>
<p><em>——辛顿，接受多家媒体采访时的一贯立场</em><sup><a href="https://www.reddit.com/r/ChatGPT/comments/1lvjfgj/geoffrey_hinton_on_ai_risks_subjective_experience/" target="_blank">[14]</a></sup></p>
</blockquote>

<p>这段话，像是自传。他本人就是那个"偶尔"的例子——一个在70年代相信神经网络的人，顶着整个领域的反对，做了40年，最后证明了自己是对的。</p>

<p>现在，他用同样的语气，告诉我们他对AI风险的直觉是真实的。</p>

<hr />

<h2>结语：一个科学家的良知</h2>

<p>辛顿不是一个在预测即将到来的灾难来博取眼球的人。他是一个用一生时间建造了某个东西，然后站出来说"我不确定我们能控制它，但我们必须尝试"的人。</p>

<p>他在诺贝尔晚宴上的最后一句话，既是警告，也是呼吁：</p>

<blockquote>
<p>"我们迫切需要研究如何确保它们永远不会产生夺取控制权的欲望。"</p>
<p><em>——辛顿，诺贝尔物理学奖颁奖晚宴，2024年12月10日</em><sup><a href="https://www.nobelprize.org/prizes/physics/2024/hinton/speech/" target="_blank">[1]</a></sup></p>
</blockquote>

<p>这不是"停止研究AI"，也不是"AI会毁灭人类所以我们完了"。这是一个严肃的工程问题被严肃地提出来：<strong>我们造了一件可能比我们聪明得多的东西，我们现在需要弄清楚怎么和它共存。</strong></p>

<p>听不听，是我们的事。他已经说了。</p>

<hr />

<h2>参考来源</h2>

<ol>
<li>Geoffrey Hinton, Nobel Prize Banquet Speech, December 10, 2024 → <a href="https://www.nobelprize.org/prizes/physics/2024/hinton/speech/" target="_blank">nobelprize.org</a></li>
<li>Geoffrey Hinton, The Globe and Mail, 2017 → <a href="https://www.theglobeandmail.com/news/toronto/u-of-t-professor-geoffrey-hinton-hailed-as-guru-of-new-era-of-computing/article34639148/" target="_blank">theglobeandmail.com</a></li>
<li>"Godfather of AI quits Google and warns of dangers" — The Guardian, May 2, 2023 → <a href="https://www.theguardian.com/technology/2023/may/02/geoffrey-hinton-godfather-of-ai-quits-google-warns-dangers-of-machine-learning" target="_blank">theguardian.com</a></li>
<li>"Why the Godfather of A.I. Fears What He's Built" — The New Yorker, November 2023 → <a href="https://www.newyorker.com/magazine/2023/11/20/geoffrey-hinton-profile-ai" target="_blank">newyorker.com</a></li>
<li>"Godfather of AI on the promise, risks of advanced AI" — CBS News / 60 Minutes, 2023 → <a href="https://www.cbsnews.com/news/geoffrey-hinton-ai-dangers-60-minutes-transcript/" target="_blank">cbsnews.com</a></li>
<li>"'Immortal' AI Challenges The Mortal Computation Of Humans" — Noema Magazine, March 2024 → <a href="https://www.noemamag.com/immortal-ai-challenges-the-mortal-computation-of-humans" target="_blank">noemamag.com</a></li>
<li>"Artificial intelligence pioneer leaves Google and warns..." — NBC News, May 2023 → <a href="https://www.nbcnews.com/tech/tech-news/artificial-intelligence-pioneer-leaves-google-warns-technologys-future-rcna82242" target="_blank">nbcnews.com</a></li>
<li>"Geoffrey Hinton Quotes: 10 Warnings from the Nobel Prize Winner" — AIIFI, 2025 → <a href="https://www.aiifi.ai/post/geoffrey-hinton-quotes" target="_blank">aiifi.ai</a></li>
<li>"Geoffrey Hinton on AI risks and human futures" — Mindplex Magazine → <a href="https://magazine.mindplex.ai/post/geoffrey-hinton-on-ai-risks-and-human-futures" target="_blank">mindplex.ai</a></li>
<li>"2024 Nobel laureate raises concerns about killer robots" — Stop Killer Robots, 2024 → <a href="https://www.stopkillerrobots.org/news/2024-nobel-laureate-in-physics-raises-concerns-about-killer-robots/" target="_blank">stopkillerrobots.org</a></li>
<li>Geoffrey Hinton, The Daily Telegraph, August 2017 → <a href="https://www.telegraph.co.uk/technology/2017/08/26/godfather-ai-making-machines-clever-whether-robots-really-will/" target="_blank">telegraph.co.uk</a></li>
<li>"Google a step closer to developing machines with human-like intelligence" — The Guardian, 2015 → <a href="https://www.theguardian.com/science/2015/may/21/google-a-step-closer-to-developing-machines-with-human-like-intelligence" target="_blank">theguardian.com</a></li>
<li>"The Godfather of AI warns of AI possibly outperforming humans" — NPR, May 2023 → <a href="https://www.npr.org/2023/05/27/1178575886/-the-godfather-of-ai-warns-of-ai-possibly-outperforming-humans" target="_blank">npr.org</a></li>
<li>"Geoffrey Hinton on AI Risks, Subjective Experience, Consciousness" — Reddit/ChatGPT → <a href="https://www.reddit.com/r/ChatGPT/comments/1lvjfgj/geoffrey_hinton_on_ai_risks_subjective_experience/" target="_blank">reddit.com</a></li>
</ol>`
  }

];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
