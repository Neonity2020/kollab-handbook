#!/usr/bin/env python3
"""
Script to insert the Agent Memory Management blog post into lib/blog.ts
Run this script from the project root directory.
"""

import re

new_post_content = '''
  {
    slug: "2026-04-10-agent-memory-management",
    title: "Agent记忆管理策略深度解析：从工作记忆到长期记忆的系统架构",
    date: "2026-04-10",
    summary: "Agent的记忆系统是其智能化的核心。本文系统梳理工作记忆、短期记忆与长期记忆的架构设计，深入对比LangChain、LlamaIndex、Claude Code等主流框架的记忆实现，并提供可落地的策略选型指南与最佳实践。",
    tags: ["Agent", "记忆管理", "LLM", "LangChain", "RAG", "AI架构", "技术深度"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 15,
    content: `<article style="line-height:1.8;color:#333;">

<p style="color:#666;font-size:0.9rem;margin-bottom:2rem;">整理时间：2026年4月10日 ｜ 技术领域：AI Agent架构设计 ｜ 阅读时长：约15分钟</p>

<h2>引言：为什么记忆是Agent的命脉</h2>
<p>想象一个没有记忆的人类——无法记住对话内容，无法积累经验，无法识别用户偏好。这正是无状态Agent的困境。记忆系统让Agent从"一次性工具"进化为"持续进化的智能伙伴"。</p>

<h2>一、记忆类型三层架构</h2>

<h3>🧠 工作记忆 Working Memory</h3>
<ul>
<li>当前对话上下文</li>
<li>工具执行结果</li>
<li>临时变量</li>
<li>思考过程</li>
</ul>
<p><strong>生命周期：</strong>单次请求</p>

<h3>📚 短期记忆 Short-term Memory</h3>
<ul>
<li>会话历史</li>
<li>多轮交互</li>
<li>最近N条记录</li>
<li>滑动窗口</li>
</ul>
<p><strong>生命周期：</strong>当前会话</p>

<h3>🗄️ 长期记忆 Long-term Memory</h3>
<ul>
<li>用户画像</li>
<li>知识库</li>
<li>经验沉淀</li>
<li>情感记忆</li>
</ul>
<p><strong>生命周期：</strong>跨会话持久</p>

<h2>二、八大记忆管理策略对比</h2>

<table style="width:100%;border-collapse:collapse;">
<thead><tr style="background:#6366f1;color:white;">
<th>策略</th><th>存储介质</th><th>适用场景</th>
</tr></thead>
<tbody>
<tr><td><b>上下文窗口</b></td><td>内存 RAM</td><td>简单对话、短任务</td></tr>
<tr><td><b>滑动窗口</b></td><td>内存/Redis</td><td>持续性会话</td></tr>
<tr><td><b>摘要压缩</b></td><td>内存/数据库</td><td>长对话场景</td></tr>
<tr><td><b>向量检索</b></td><td>Pinecone/Milvus</td><td>知识问答、RAG</td></tr>
<tr><td><b>关键词索引</b></td><td>ES/传统DB</td><td>精确检索</td></tr>
<tr><td><b>图记忆</b></td><td>Neo4j</td><td>复杂关系推理</td></tr>
<tr><td><b>分层缓存</b></td><td>Redis+磁盘</td><td>高频访问场景</td></tr>
<tr><td><b>结构化记忆</b></td><td>SQL/NoSQL</td><td>用户画像、偏好</td></tr>
</tbody>
</table>

<h2>三、主流框架记忆实现对比</h2>

<p><b>LangChain</b>：ConversationBufferMemory、ConversationSummaryMemory、VectorStoreRetrieverMemory</p>

<p><b>LlamaIndex</b>：索引化记忆与知识图谱记忆</p>

<p><b>OpenAI Assistants</b>：线程(Thread)记忆</p>

<p><b>Claude Code</b>：AGENTS.md/CLAUDE.md/MEMORY.md 文件式项目记忆</p>

<p><b>Open Harness</b>：无状态设计，可组合中间件，上下文压缩</p>

<p><b>AutoGPT</b>：本地文件存储，向量数据库，长期记忆系统</p>

<h2>四、选型决策树</h2>

<p>是否需要跨会话持久化？</p>
<ul>
<li>否 → 内存存储 (Context Window)</li>
<li>是 → 需要语义检索？
  <ul>
    <li>否 → SQL/NoSQL (Structured)</li>
    <li>是 → 向量数据库 (RAG System)</li>
  </ul>
</li>
</ul>

<h2>五、最佳实践组合建议</h2>
<ul>
<li><b>短期</b>：上下文窗口 (最近3-5轮)</li>
<li><b>中期</b>：滑动窗口 + 摘要 (当前会话)</li>
<li><b>长期</b>：向量数据库 + 结构化存储 (跨会话)</li>
</ul>

<h2>六、关键权衡维度</h2>
<ul>
<li><b>完整性 vs 成本</b>：保留全部历史 vs 频繁摘要压缩</li>
<li><b>精确性 vs 泛化</b>：原文存储 vs 语义向量化</li>
<li><b>实时性 vs 持久性</b>：内存优先 vs 持久化优先</li>
<li><b>个性化 vs 隐私</b>：详细用户画像 vs 最小数据收集</li>
<li><b>自动 vs 手动</b>：系统自动管理 vs 用户可控编辑</li>
</ul>

<h2>总结</h2>
<p>Agent 记忆管理的核心是在<b>成本、性能、效果之间找到平衡点</b>。</p>
<p><b>记住</b>：没有"最佳"的记忆策略，只有"最适合你场景"的策略。从简单开始，随着需求演进逐步增加复杂度——这是Agent记忆系统设计的黄金法则。</p>

<p style="color:#666;font-size:0.85rem;">本文首发于 Kollab Handbook 技术博客 ｜ 2026年4月10日</p>
</article>`
  },
'''

def insert_blog_post():
    with open('lib/blog.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the closing ];\n and insert before it
    insert_pos = content.rfind('];\n\nexport function')
    if insert_pos == -1:
        insert_pos = content.rfind('];\nexport function')
    if insert_pos == -1:
        print("Could not find insertion point!")
        return False

    new_content = content[:insert_pos] + ',' + new_post_content + '\n' + content[insert_pos:]

    with open('lib/blog.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Success! Agent memory blog post inserted.")
    return True

if __name__ == "__main__":
    insert_blog_post()
