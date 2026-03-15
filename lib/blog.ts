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
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
