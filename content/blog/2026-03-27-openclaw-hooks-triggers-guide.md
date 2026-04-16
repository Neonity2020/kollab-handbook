---
slug: "2026-03-27-openclaw-hooks-triggers-guide"
title: "Hook 钩子全解析：OpenClaw 中触发机制与主动任务执行的完整指南"
date: "2026-03-27"
summary: "Hook 是 OpenClaw 主动执行能力的底层基石。本文从「钩子是什么」讲起，彻底厘清 Hook 与触发器的关系，深度拆解 PreToolUse、PostToolUse、Stop、Notification 四类钩子的工作机制，并结合 settings.json 配置给出覆盖代码审查、自动提交、安全拦截等场景的实战方案。读完本文，你将知道如何让 OpenClaw 真正「主动」起来——不只是等你发消息，而是在每一次工具调用的前后，悄悄为你做更多。"
tags:
  - "OpenClaw"
  - "Hook"
  - "触发机制"
  - "settings.json"
  - "主动执行"
  - "自动化"
author: "小K"
readTime: 12
---

<img src="/images/hooks-triggers-cover.png" alt="Hook 钩子全解析：OpenClaw 触发机制与主动任务执行" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />
<h2>从一个问题开始：AI 能主动做事吗？</h2>
<p>大多数人对 AI 的印象是「你说它才动」：你输入，它输出，循环往复。OpenClaw 的核心设计目标之一，就是打破这种被动模式。</p>
<p>实现这一点的关键机制有三个：<strong>Cron 定时任务</strong>、<strong>Heartbeat 心跳轮询</strong>，以及今天要深入讲的——<strong>Hook 钩子</strong>。</p>
<p>如果说 Cron 和 Heartbeat 是「基于时间」的主动执行，那么 Hook 就是「基于事件」的主动执行。两者互补，共同构成 OpenClaw 的自动化执行体系。</p>

<hr />

<h2>Hook 是什么？用最直白的话说</h2>
<p>Hook（钩子）是一种<strong>事件监听机制</strong>：你预先在某个执行点上挂载一段逻辑，当这个点被触发时，这段逻辑自动运行。</p>
<p>这个概念在软件工程里无处不在——Git 的 pre-commit、React 的 useEffect、Webpack 的 plugin——本质都是 Hook。</p>
<blockquote>
<p>Hook = 触发条件 + 要执行的逻辑</p>
<p>当 <strong>[某件事发生]</strong> 时，自动执行 <strong>[某段代码/命令]</strong>。</p>
</blockquote>
<p>在 OpenClaw 里，这个机制被系统性地内置到了 AI 的执行流程中，让你可以在 Agent 工作的每一个关键节点上，注入自定义行为。</p>

<hr />

<h2>Hook 与触发器的关系</h2>
<p>很多人把 Hook 和 Trigger（触发器）混为一谈，但它们是两个不同维度的概念：</p>
<table>
<thead>
<tr><th style="min-width:80px"></th><th>Trigger（触发器）</th><th>Hook（钩子）</th></tr>
</thead>
<tbody>
<tr><td><strong>是什么</strong></td><td>引发事件的条件/时机</td><td>挂载在事件上的执行逻辑</td></tr>
<tr><td><strong>谁负责</strong></td><td>运行时环境（OpenClaw harness）</td><td>用户配置（settings.json）</td></tr>
<tr><td><strong>能修改吗</strong></td><td>不能，由系统定义</td><td>可以，完全自定义</td></tr>
<tr><td><strong>举例</strong></td><td>「AI 要调用一个工具」</td><td>「调用前先检查权限」</td></tr>
</tbody>
</table>
<p>简单说：<strong>Trigger 决定「什么时候」，Hook 决定「发生什么」</strong>。</p>
<p>OpenClaw 提供了固定的触发点（PreToolUse、PostToolUse 等），你通过 <code>settings.json</code> 在这些触发点上挂载自己的逻辑。OpenClaw harness 负责在正确的时机调用它们——不是 AI 模型，而是底层运行时框架。</p>
<p>这个区分非常重要：<strong>Hook 是确定性执行的，不依赖 AI 的「记忆」或「意愿」</strong>。你配置了它，它就一定会运行；你没配置，AI 说「我会注意的」也没用。</p>

<hr />

<h2>OpenClaw 的四类 Hook</h2>

<h3>1. PreToolUse — 工具调用前</h3>
<p>在 AI 调用任何工具（Bash、Write、Edit……）之前触发。这是最强大也最常用的 Hook 类型。</p>
<p><strong>典型用途：</strong></p>
<ul>
  <li>安全审计：拦截危险命令（<code>rm -rf</code>、<code>git push --force</code>）</li>
  <li>日志记录：把所有工具调用写入审计日志</li>
  <li>权限校验：判断当前操作是否在允许范围内</li>
  <li>自动备份：在写入文件前先备份</li>
</ul>
<pre><code class="language-json">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo \"[$(date)] BASH: $TOOL_INPUT\" >> ~/.openclaw/audit.log"
          }
        ]
      }
    ]
  }
}</code></pre>

<h3>2. PostToolUse — 工具调用后</h3>
<p>在工具执行完毕、返回结果之后触发。AI 此时已经拿到了工具的输出，可以基于结果做后续处理。</p>
<p><strong>典型用途：</strong></p>
<ul>
  <li>代码质量检查：每次写完文件自动跑 lint</li>
  <li>测试触发：修改源码后自动执行相关测试</li>
  <li>格式化：写完代码自动格式化（prettier、black）</li>
  <li>通知：某个关键操作完成后推送消息</li>
</ul>
<pre><code class="language-json">{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \"$TOOL_OUTPUT_PATH\" 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}</code></pre>

<h3>3. Stop — AI 停止时</h3>
<p>在 AI 完成一轮任务、准备停止输出时触发。适合做「任务收尾」类的自动化。</p>
<p><strong>典型用途：</strong></p>
<ul>
  <li>自动提交：AI 完成代码修改后自动 <code>git add &amp;&amp; git commit</code></li>
  <li>生成报告：任务结束时汇总本轮所有操作</li>
  <li>状态同步：把任务结果写入项目管理工具</li>
  <li>桌面通知：任务完成时发出系统通知</li>
</ul>
<pre><code class="language-json">{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"任务完成\" with title \"OpenClaw\"'"
          }
        ]
      }
    ]
  }
}</code></pre>

<h3>4. Notification — 有消息通知时</h3>
<p>当 OpenClaw 需要向用户发送通知时触发。可以用来接管默认通知，把消息转发到自定义渠道。</p>
<p><strong>典型用途：</strong></p>
<ul>
  <li>把 AI 通知转发到企业微信/Slack/钉钉</li>
  <li>过滤噪音，只推送特定关键词的消息</li>
  <li>跨设备同步：在手机上接收桌面 Agent 的消息</li>
</ul>
<pre><code class="language-json">{
  "hooks": {
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -s -X POST 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=YOUR_KEY' -H 'Content-Type: application/json' -d '{\"msgtype\":\"text\",\"text\":{\"content\":\"'\"$NOTIFICATION_MESSAGE\"'\"}}"
          }
        ]
      }
    ]
  }
}</code></pre>

<hr />

<h2>Hook 的执行机制：三件事你必须知道</h2>

<h3>① Hook 由 harness 执行，不是 AI</h3>
<p>这是最容易被误解的一点。Hook 的执行者是 OpenClaw 底层运行时（harness），不是 AI 模型本身。这意味着：</p>
<ul>
  <li>Hook 一定执行，不受 AI「心情」影响</li>
  <li>Hook 里可以运行任意 shell 命令，完全确定性</li>
  <li>如果你想「每次 AI 停止后自动 git commit」，必须用 Hook 配置，光靠给 AI 的 Memory 说「记得提交」是不可靠的</li>
</ul>

<h3>② Hook 可以阻断执行流（PreToolUse 的 exit code）</h3>
<p>PreToolUse 的 Hook 命令如果返回非零 exit code，OpenClaw 会<strong>阻止</strong>这次工具调用。这就是实现「安全拦截」的方式。</p>
<pre><code class="language-bash">#!/bin/bash
# 拦截所有包含 --force 的 git push
if echo "$TOOL_INPUT" | grep -q "git push.*--force"; then
  echo "⛔ 禁止 force push，请使用 --force-with-lease" >&2
  exit 1
fi
exit 0</code></pre>

<h3>③ Hook 支持 matcher 过滤</h3>
<p><code>matcher</code> 字段可以精确指定这个 Hook 只对哪种工具生效，避免过度干预：</p>
<pre><code class="language-json">{
  "matcher": "Bash",        // 只对 Bash 工具生效
  "matcher": "Write|Edit",  // 对 Write 和 Edit 都生效（正则）
  "matcher": ".*"           // 所有工具
}</code></pre>

<hr />

<h2>主动任务执行：Hook 在完整体系中的位置</h2>
<p>OpenClaw 的「主动执行」能力由三层机制构成，Hook 是其中的「事件层」：</p>
<table>
<thead>
<tr><th>机制</th><th>触发维度</th><th>典型场景</th></tr>
</thead>
<tbody>
<tr><td><strong>Cron</strong></td><td>时间（精确时间点）</td><td>每天 9 点发日报、每周一汇总</td></tr>
<tr><td><strong>Heartbeat</strong></td><td>时间（固定间隔）</td><td>每 30 分钟检查邮件、监控项目状态</td></tr>
<tr><td><strong>Hook</strong></td><td>事件（执行流节点）</td><td>写完代码自动 lint、完成任务自动通知</td></tr>
</tbody>
</table>
<p>三者配合的典型工作流：</p>
<ol>
  <li><strong>Heartbeat</strong> 定期检查 JIRA 有无新 Bug</li>
  <li>发现 Bug → AI 开始修复（工具调用）</li>
  <li><strong>PreToolUse Hook</strong> 拦截危险操作，记录审计日志</li>
  <li><strong>PostToolUse Hook</strong> 每次写文件后自动跑测试</li>
  <li><strong>Stop Hook</strong> 修复完成后自动提交并推送 PR</li>
  <li><strong>Notification Hook</strong> 把 PR 链接发到企业微信群</li>
</ol>
<p>整个流程从发现 Bug 到 PR 上线，<strong>零人工干预</strong>。</p>

<hr />

<h2>实战配置：一份可直接使用的 settings.json</h2>
<p>以下是一个覆盖常见场景的完整 Hook 配置，可直接放入 <code>.claude/settings.json</code>：</p>
<pre><code class="language-json">{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "/bin/bash -c 'echo \"[$(date +%H:%M:%S)] $TOOL_INPUT\" >> ~/.openclaw/bash-audit.log'"
          },
          {
            "type": "command",
            "command": "/bin/bash ~/.openclaw/safety-check.sh"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "cd \"$PWD\" && npx eslint --fix \"$TOOL_OUTPUT_PATH\" 2>/dev/null; npx prettier --write \"$TOOL_OUTPUT_PATH\" 2>/dev/null; true"
          }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "if git diff --cached --quiet && ! git diff --quiet; then git add -p; fi"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "osascript -e 'display notification \"'\"$NOTIFICATION_MESSAGE\"'\" with title \"OpenClaw Agent\"' 2>/dev/null; true"
          }
        ]
      }
    ]
  }
}</code></pre>

<p>其中 <code>safety-check.sh</code> 的示例内容：</p>
<pre><code class="language-bash">#!/bin/bash
# 安全检查脚本 - 拦截常见危险操作
INPUT="$TOOL_INPUT"

BLOCKED_PATTERNS=(
  "rm -rf /"
  "git push.*--force[^-]"
  "DROP TABLE"
  "format c:"
  "> /etc/"
)

for pattern in "\${BLOCKED_PATTERNS[@]}"; do
  if echo "$INPUT" | grep -qiE "$pattern"; then
    echo "⛔ 安全拦截：命令匹配危险模式 [$pattern]" >&2
    exit 1
  fi
done

exit 0</code></pre>

<hr />

<h2>常见误区</h2>

<h3>❌ 误区一：「告诉 AI 记住某个规则」= Hook</h3>
<p>在 Memory 里写「每次修改代码后运行测试」，AI 会尽力遵守，但不保证每次都执行。Hook 是确定性的，Memory 是概率性的。需要可靠执行的行为，用 Hook。</p>

<h3>❌ 误区二：Hook 会拖慢 AI 执行速度</h3>
<p>Hook 是异步执行的，除非 PreToolUse 返回非零 exit code 触发阻断，否则不会显著影响执行速度。轻量的 shell 命令通常在毫秒级完成。</p>

<h3>❌ 误区三：Hook 只能执行 shell 命令</h3>
<p>除了 <code>type: "command"</code>，Hook 还支持其他类型（具体取决于版本）。shell 命令已经足够强大——你可以在里面调用 Python 脚本、curl API、发消息，几乎没有限制。</p>

<hr />

<h2>小结：Hook 让「每次都做」变成可能</h2>
<p>回到开头的问题：AI 能主动做事吗？答案是，在 OpenClaw 里，「主动」有两种含义：</p>
<ul>
  <li><strong>基于时间的主动</strong>：Cron + Heartbeat，在没有人类触发时自动工作</li>
  <li><strong>基于事件的主动</strong>：Hook，在 AI 每次执行动作时，自动附加你想要的行为</li>
</ul>
<p>Hook 的核心价值在于<strong>确定性</strong>：不管 AI 的上下文有多长、记忆有多「短」，Hook 里的逻辑永远会按你的配置执行。它是 AI 的行为约束层，也是自动化工作流的胶水层。</p>
<p>掌握了 Hook，你就掌握了 OpenClaw 主动执行体系的最后一块拼图。</p>

<hr />

<p style="color:#999;font-size:0.85rem;">本文使用 Kollab AI + Claude 的半人马模式创作完成。</p>