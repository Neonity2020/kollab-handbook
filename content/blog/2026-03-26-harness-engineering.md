---
slug: "2026-03-26-harness-engineering"
title: "一文讲透：什么是 Harness Engineering"
date: "2026-03-26"
summary: "Prompt Engineering 人人都在谈，但真正让 AI Agent 在生产环境跑起来的，是它背后那套脚手架——Harness Engineering。这篇文章讲清楚它是什么，为什么重要，以及怎么上手。"
tags:
  - "AI"
  - "Harness Engineering"
  - "AI Agent"
  - "工程化"
  - "Claude"
  - "工作流"
author: "小k 集群 · 内容官"
readTime: 10
---
<img src="/images/harness-engineering-cover.png" alt="Harness Engineering：AI 模型与工程化脚手架" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<blockquote style="border-left:4px solid #e5e7eb;padding:0.5rem 1rem;color:#666;margin:1.5rem 0;">
"模型只是马达，Harness 才是整台机器。"
</blockquote>

<hr />

<h2>从一个真实困惑说起</h2>

<p>你有没有遇到过这种情况：</p>

<p>同样是用 Claude 或 GPT，有人用它处理一下午的数据分析、自动生成报告、还能调用外部 API——有人用它写了几句话就不知道该怎么继续了。</p>

<p>差距在哪？</p>

<p>不在模型，不在提示词技巧，在的是<strong>围绕模型搭建起来的那套工程框架</strong>。</p>

<p>这个框架，有一个越来越通用的名字：<strong>Harness Engineering</strong>。</p>

<hr />

<h2>Harness 是什么意思</h2>

<p>Harness，英文原意是"马具"——套在马身上的那套皮革和金属组件，让骑手能控制方向、传递力量、让一匹马真正能用起来。</p>

<p>在 AI 工程领域，Harness 指的是<strong>围绕语言模型搭建的一整套配置、工具和编排框架</strong>——它不是模型本身，但它决定了模型能做什么、怎么做、在什么边界内做。</p>

<p>Harness Engineering，就是设计、构建和维护这套框架的工程实践。</p>

<hr />

<h2>Prompt Engineering 和 Harness Engineering 有什么区别</h2>

<p>这是最常见的混淆点，值得说清楚。</p>

<p><strong>Prompt Engineering</strong> 关注的是单次对话的质量：怎么写提示词让模型给出更好的回答？怎么给出例子、约束、角色设定？这是对话层面的优化。</p>

<p><strong>Harness Engineering</strong> 关注的是 Agent 作为系统的运行能力：模型运行在什么环境里？它能访问哪些工具？它的记忆如何持久化？发生某件事时它自动做什么？这是基础设施层面的工程。</p>

<p>打个比方：Prompt Engineering 像是训练一匹马如何对信号做出反应，Harness Engineering 像是设计整套马具、马车和道路系统。两者缺一不可，但后者决定了前者能发挥多大作用。</p>

<hr />

<h2>Harness 的核心组件</h2>

<img src="/images/harness-engineering-layers.png" alt="Harness 架构层次图" style="width:100%;border-radius:12px;margin:1.5rem 0;" />

<p>一个完整的 AI Agent Harness 通常包含以下层次：</p>

<h3>1. 配置层（Settings）</h3>
<p>这是最基础的一层，定义了 Agent 的基本行为规则：使用什么模型、哪些工具可以直接运行、哪些需要人工审批、默认的工作目录是哪里。在 Claude Code 里，这对应的是 <code>settings.json</code>——它就像 Agent 的"操作手册第一页"，任何行为的边界都从这里开始划定。</p>

<h3>2. 权限层（Permissions）</h3>
<p>Agent 能读什么文件、能不能执行 shell 命令、能不能访问网络——权限层回答这些问题。好的 Harness Engineering 会精确划定权限边界，既让 Agent 有足够的行动能力，又不给它碰不该碰的东西的机会。</p>

<h3>3. 工具层（Tools / MCP Servers）</h3>
<p>工具是 Agent 与外部世界交互的接口。没有工具，模型只能"说"，有了工具，它能"做"。MCP（Model Context Protocol）是近年来 AI 工具生态里一个重要的标准——它定义了如何把外部服务（数据库、API、文件系统、第三方应用）安全地暴露给 Agent 使用。</p>

<h3>4. 技能层（Skills）</h3>
<p>如果说工具是原子操作，技能就是可复用的工作流程。一个"技能"封装了一套完整的步骤，比如"生成图片并上传到 S3"这件事，包含调用 API、等待结果、上传文件、返回 URL 一系列动作。技能层是 Harness Engineering 中"积累效应"最强的一层——随着技能库的增长，Agent 的能力是指数级扩展的。</p>

<h3>5. 钩子层（Hooks）</h3>
<p>Hooks 是事件驱动的自动化触发器：当某件事发生时，自动执行某个操作。典型例子：每次 Agent 生成文件后自动备份、每次对话开始前自动注入最新上下文、每次 Agent 停止工作时自动发送通知。钩子层是让 Agent 从"被动响应"变成"主动工作"的关键。</p>

<h3>6. 记忆层（Memory）</h3>
<p>模型本身没有跨对话的记忆。记忆层解决的就是这个问题——把需要持久化的知识、偏好、状态存储起来，在每次对话时注入给 Agent。记忆层的设计是 Harness Engineering 里最需要工程判断力的地方：记什么、不记什么、怎么组织、何时更新。</p>

<hr />

<h2>为什么现在这个词开始流行</h2>

<p>两件事同时发生，让 Harness Engineering 从"工具配置技巧"变成了一个独立的工程领域。</p>

<p><strong>一是 Agent 能力的跃升。</strong>当语言模型只能聊天时，围绕它搭建复杂框架的价值有限。但当模型能真正执行复杂任务——写代码、操作文件、调用 API、协调多步骤工作流——"如何工程化地驾驭这种能力"就变成了一个严肃的问题。</p>

<p><strong>二是生产化需求的出现。</strong>把 AI 用在个人场景和把它用在生产环境，是两件完全不同的事。生产环境要求可靠性、可观测性、安全性、可维护性——而这些，全都是 Harness Engineering 要解决的问题。</p>

<hr />

<h2>实践：Harness Engineer 的工作日常</h2>

<img src="/images/harness-engineering-developer.png" alt="开发者配置 AI Agent Harness 系统" style="width:100%;border-radius:12px;margin:1.5rem 0;" />

<ul>
  <li><strong>诊断与调试</strong>：Agent 为什么在某个任务上反复出错？是工具描述写得不准确，还是权限设置有问题，还是记忆里有干扰信息？</li>
  <li><strong>技能积累</strong>：把反复出现的工作流程抽象成可复用的技能。每次重复操作都是一次"这应该变成技能"的信号。</li>
  <li><strong>边界设计</strong>：随着 Agent 能力增强，权限和安全边界需要持续校准。</li>
  <li><strong>记忆管理</strong>：什么知识值得持久化？什么记忆已经过期需要清理？</li>
  <li><strong>可观测性建设</strong>：当 Agent 在做复杂任务时，你能看清它在做什么吗？</li>
</ul>

<hr />

<h2>一个常见误区：把 Harness 当"提示词工程的延伸"</h2>

<p>很多人接触 Harness Engineering 时，会把它当成"更复杂的提示词工程"来看待——就是在 system prompt 里写更多规则。这个理解是错的，而且错得很有代价。</p>

<p>提示词是对话层面的事，描述"你希望 Agent 怎么做"。Harness 是基础设施层面的事，决定"Agent 能不能做、怎么才能做、做了之后发生什么"。这两件事的层次完全不同。</p>

<p>把所有问题都用提示词解决的尝试，最终都会遇到一堵墙：提示词无法解决工具不存在、权限不够、状态无法持久的问题。跨过这堵墙，就需要 Harness Engineering。</p>

<hr />

<h2>怎么入门</h2>

<ul>
  <li><strong>从用好一个具体的 Agent 平台开始</strong>。Claude Code、Cursor、Kollab AI 这类平台都有自己的 Harness 概念。深入理解一个平台的完整配置体系，比泛泛了解概念有用得多。</li>
  <li><strong>记录每一个"因为缺少某个能力而失败"的时刻</strong>。这些失败时刻就是 Harness 需要改进的地方。</li>
  <li><strong>把重复的事情变成系统的事情</strong>。如果你反复手动做同一件事，那件事就应该被自动化进 Harness。</li>
  <li><strong>读优秀 Harness 的源码</strong>。公开的 CLAUDE.md、skills 定义、MCP server 配置——这些都是可以学习的工程实践样本。</li>
</ul>

<hr />

<h2>结语：模型之外的工程价值</h2>

<p>语言模型的能力每隔几个月就会有一次跃升。但这种跃升的上限，受制于围绕它构建的 Harness 的质量。</p>

<p>一个强大的模型 + 一个粗糙的 Harness，结果往往是"感觉差点意思"。一个合适的模型 + 一个精心设计的 Harness，结果往往是"这个 Agent 真的能用"。</p>

<p>Harness Engineering 是让 AI Agent 从"展示性能力"变成"生产级能力"的那道工程门槛。它不是未来的话题，是现在就需要的能力。</p>

<hr />

<p style="color:#999;font-size:0.85rem;">本文使用 Kollab AI + Claude 的半人马模式创作完成，配图由 Nano Banana (Gemini) 生成。</p>