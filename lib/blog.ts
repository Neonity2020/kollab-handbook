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
