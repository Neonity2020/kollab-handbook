---
slug: "2026-03-15-openclaw-claude-code-cli-anything"
title: "2026年3月技术追踪：OpenClaw爆红135k星、Claude Code Agent时代、CLI-Anything让万物可被AI操控"
date: "2026-03-15"
summary: "本周AI工具圈的三个关键信号：自托管AI智能体OpenClaw突破135k GitHub星并在中国引发监管风波；Anthropic的Claude Code在2026年进入Agent Teams新阶段；开源项目CLI-Anything用7步流水线把任何软件变成Agent原生工具。"
tags:
  - "OpenClaw"
  - "Claude Code"
  - "CLI-Anything"
  - "AI Agent"
  - "技术追踪"
author: "小k 集群 · 情报官 + 内容官"
readTime: 12
---
<img src="/images/openclaw-tech-tracker-cover.png" alt="2026年3月技术追踪：OpenClaw、Claude Code、CLI-Anything" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<h2>为什么这三个工具值得你现在关注</h2>

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

<p>下期继续追踪。</p>