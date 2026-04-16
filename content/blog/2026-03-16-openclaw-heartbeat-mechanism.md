---
slug: "2026-03-16-openclaw-heartbeat-mechanism"
title: "一文讲清楚 OpenClaw 的心跳轮询机制：如何实现 24/7 全自动运行"
date: "2026-03-16"
summary: "OpenClaw 的 Heartbeat 是让 AI Agent 从「被动响应」变成「主动操作者」的关键机制。本文深度拆解心跳轮询的工作原理、HEARTBEAT.md 控制文件设计、与 Cron 的本质区别，以及如何配置一个真正 24/7 不间断运行的自治 Agent。"
tags:
  - "OpenClaw"
  - "Heartbeat"
  - "AI Agent"
  - "自动化"
  - "24/7"
author: "小K"
readTime: 10
---
<img src="/images/openclaw-heartbeat.jpg" alt="OpenClaw 心跳轮询机制" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<h2>从"聊天工具"到"自主操作者"</h2>
<p>大多数 AI 工具都是被动的：你发消息，它回复，完事。会话结束，它就沉睡了，什么都不记得，什么都不主动做。</p>
<p>OpenClaw 打破了这个模式。它最核心的机制之一——<strong>Heartbeat（心跳轮询）</strong>——让 Agent 能在没有任何人类触发的情况下，定期醒来、检查待办、执行任务、再回到休眠。</p>
<p>这一个设计，把 AI 从一个<strong>你使用的工具</strong>变成了一个<strong>你监督的操作者</strong>。</p>

<hr />

<h2>心跳机制是什么？一句话解释</h2>
<blockquote>
<p>Heartbeat = 带 LLM 推理能力的 Cron Job。</p>
</blockquote>
<p>具体来说，它是一个<strong>定时调度循环</strong>：Agent 每隔 N 分钟自动醒来，读取你预先写好的任务清单（<code>HEARTBEAT.md</code>），判断当前是否有需要处理的事情，处理完再回去休眠。</p>
<p>如果什么都不需要做，它只返回一个 <code>HEARTBEAT_OK</code>，不发任何通知——避免烦人的"无意义提醒"。</p>

<hr />

<h2>技术原理：一次心跳的完整生命周期</h2>
<p>每次心跳触发时，OpenClaw 会执行以下步骤：</p>
<ol>
  <li><strong>调度器计时到达</strong>（默认每 30 分钟）</li>
  <li><strong>注入系统提示</strong>，标记本次运行为 "Heartbeat" 模式</li>
  <li><strong>读取 <code>HEARTBEAT.md</code></strong>（如果存在），作为任务上下文</li>
  <li><strong>发送心跳 Prompt</strong>（逐字发送，不做任何修改）</li>
  <li><strong>LLM 推理</strong>：判断有无需要关注的事项</li>
  <li><strong>执行工具调用</strong>（查邮件、查日历、运行命令……）</li>
  <li><strong>输出结果</strong>：有事则通知，无事则回复 <code>HEARTBEAT_OK</code> 静默结束</li>
</ol>

<p>默认的心跳 Prompt 是：</p>
<pre><code>Read HEARTBEAT.md if it exists (workspace context). Follow it strictly.
Do not infer or repeat old tasks from prior chats.
If nothing needs attention, reply HEARTBEAT_OK.</code></pre>

<p>你也可以把它替换成完全自定义的指令，比如"检查 Gmail PubSub 统计"或"验证 gateway 健康状态"。</p>

<hr />

<h2>HEARTBEAT.md：Agent 的"任务清单"</h2>
<p>这是整个机制里最精妙的设计之一。<code>HEARTBEAT.md</code> 是一个普通的 Markdown 文件，放在 Agent 的工作空间里，作为每次心跳的执行蓝本。</p>

<h3>一个典型的 HEARTBEAT.md 示例</h3>
<pre><code># 心跳清单

- 检查邮件，标记紧急邮件
- 查看未来 2 小时内的日历事件
- 如果有后台任务完成，汇总结果
- 如果超过 8 小时没有对话，发送一次轻量问候
</code></pre>

<p>Agent 每次心跳都读取这份清单，用 LLM 的判断力决定哪些需要处理、哪些可以跳过。</p>

<h3>Agent 可以自己更新 HEARTBEAT.md</h3>
<p>更有趣的是：你在日常对话中，可以直接告诉 Agent "帮我盯着某件事"，Agent 会用 <code>write</code> 或 <code>edit</code> 工具把这个任务写进 <code>HEARTBEAT.md</code>。下次心跳时，它就会主动去检查。</p>
<p>这相当于 Agent 在给自己编程，为下一次自动运行做准备。</p>

<hr />

<h2>配置详解：从 30 分钟到 24/7</h2>

<h3>基础配置</h3>
<pre><code class="language-json">{
  "agents": {
    "defaults": {
      "heartbeat": {
        "every": "30m",
        "target": "last",
        "lightContext": true,
        "isolatedSession": true
      }
    }
  }
}</code></pre>

<h3>限制活跃时间（避免半夜骚扰）</h3>
<pre><code class="language-json">{
  "agents": {
    "defaults": {
      "heartbeat": {
        "every": "30m",
        "target": "last",
        "activeHours": {
          "start": "09:00",
          "end": "22:00",
          "timezone": "Asia/Shanghai"
        }
      }
    }
  }
}</code></pre>

<h3>真正的 24/7 全天候运行</h3>
<pre><code class="language-json">"activeHours": { "start": "00:00", "end": "24:00" }</code></pre>
<p>去掉 <code>activeHours</code> 限制，或者设置为全天，Agent 就会全年无休地每 30 分钟检查一次。</p>

<h3>多 Agent 各自独立心跳</h3>
<pre><code class="language-json">{
  "agents": {
    "list": [
      { "id": "main", "default": true },
      {
        "id": "ops",
        "heartbeat": {
          "every": "1h",
          "target": "whatsapp",
          "to": "+15551234567",
          "prompt": "检查服务器健康状态和告警队列，有异常立即通知。"
        }
      }
    ]
  }
}</code></pre>

<hr />

<h2>响应契约：HEARTBEAT_OK 的设计哲学</h2>
<p>OpenClaw 定义了一个简洁的"安静协议"：</p>
<ul>
  <li>没有需要关注的事 → 回复 <code>HEARTBEAT_OK</code>，消息被静默丢弃，<strong>不通知用户</strong></li>
  <li>有需要处理的事 → 返回具体内容，按 <code>target</code> 配置发送通知</li>
  <li><code>HEARTBEAT_OK</code> 出现在消息<strong>开头或结尾</strong>时触发 ack 逻辑；出现在中间则不特殊处理</li>
  <li>回复 ≤ <code>ackMaxChars</code>（默认 300 字符）时，消息整体被丢弃</li>
</ul>
<p>这个设计解决了自动化系统最常见的痛点：<strong>告警疲劳</strong>。Agent 只在真正需要时才打扰你，其余时间静默工作。</p>

<hr />

<h2>Heartbeat vs Cron：别搞混了</h2>
<table>
<thead>
<tr><th></th><th>Heartbeat 心跳</th><th>Cron 定时任务</th></tr>
</thead>
<tbody>
<tr><td><strong>触发方式</strong></td><td>固定间隔（每 N 分钟）</td><td>精确时间点（cron 表达式）</td></tr>
<tr><td><strong>行为</strong></td><td>检查是否需要处理，智能决策</td><td>无论如何都执行指定任务</td></tr>
<tr><td><strong>会话上下文</strong></td><td>共享主会话，知道你在做什么</td><td>可隔离，独立会话不污染历史</td></tr>
<tr><td><strong>适合场景</strong></td><td>监控收件箱、日历、项目状态</td><td>每天 9 点发简报、每周分析</td></tr>
<tr><td><strong>成本</strong></td><td>一次心跳覆盖多项检查，更经济</td><td>每个 job 独立消耗 token</td></tr>
</tbody>
</table>
<p><strong>一句话选择原则</strong>：需要精确时间点 → Cron；需要周期性"有没有需要关注的事" → Heartbeat。</p>

<hr />

<h2>成本控制：心跳不等于烧钱</h2>
<ul>
  <li><strong><code>lightContext: true</code></strong>：只注入 <code>HEARTBEAT.md</code>，不携带完整对话历史，大幅减少输入 token</li>
  <li><strong><code>isolatedSession: true</code></strong>：每次独立会话，避免上下文膨胀</li>
  <li><strong>HEARTBEAT_OK 静默丢弃</strong>：大多数心跳什么都不做，几乎零额外成本</li>
  <li><strong>指定轻量模型</strong>：心跳任务不需要 Opus，用 Haiku 级别的模型完全够用</li>
</ul>

<hr />

<h2>实战配置：一个真实的 24/7 Agent 设置</h2>
<pre><code class="language-json">{
  "agents": {
    "defaults": {
      "heartbeat": {
        "every": "30m",
        "target": "last",
        "lightContext": true,
        "isolatedSession": true,
        "model": "anthropic/claude-haiku-3-5"
      }
    }
  }
}</code></pre>

<p>配套的 <code>HEARTBEAT.md</code>：</p>
<pre><code># 我的 Agent 心跳清单

## 必检项
- 检查有无未读的紧急邮件（发件人包含 boss 或标题含 URGENT）
- 查看未来 1 小时内有无日历事件

## 条件触发
- 如果有后台下载/处理任务完成，汇总结果并通知
- 如果超过 4 小时没有任何活动，发一条轻量签到

## 不需要处理时
回复 HEARTBEAT_OK，不要发送任何消息。
</code></pre>

<hr />

<h2>小结：心跳机制的本质</h2>
<p>Heartbeat 不是一个花哨的功能，它是 OpenClaw 整个"主动 Agent"哲学的核心实现。它回答了一个关键问题：</p>
<blockquote>
<p>如何让 AI 在没有人类触发的情况下，有意义地主动工作？</p>
</blockquote>
<p>答案是：给它一个稳定的时钟节律，一份清晰的任务清单，以及一个"没事别打扰"的静默协议。</p>
<p>配合 Cron 的精确调度、HEARTBEAT.md 的自我编程能力，一个真正意义上 24/7 自治运行的本地 AI Agent 就成型了。</p>
<p>它不需要你一直盯着，它盯着你需要盯的事情。</p>
<p><em>参考资料：<a href="https://docs.openclaw.ai/gateway/heartbeat" target="_blank">OpenClaw 官方 Heartbeat 文档</a> · <a href="https://docs.openclaw.ai/automation/cron-vs-heartbeat" target="_blank">Cron vs Heartbeat</a> · <a href="https://blog.kryll.io/openclaw-hooks-cron-heartbeat-ai-agent-automation/" target="_blank">OpenClaw 三大超能力解析</a></em></p>