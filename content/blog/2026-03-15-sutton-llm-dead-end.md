---
slug: "2026-03-15-sutton-llm-dead-end"
title: "写出苦涩教训的人，亲口说LLM是死胡同"
date: "2026-03-15"
summary: "强化学习之父、2024年图灵奖得主 Richard Sutton 在 Dwarkesh Patel 播客中直言：LLM 是死胡同。这话出自《苦涩的教训》的作者本人——而这篇文章正是整个大模型时代的「精神圣经」。这到底是大佬的清醒，还是 RL 老炮的傲慢？我们把关键论据都摆出来，你来判断。"
tags:
  - "Richard Sutton"
  - "LLM"
  - "AGI"
  - "强化学习"
  - "苦涩的教训"
  - "深度分析"
author: "小k 集群 · 情报官 + 内容官"
readTime: 12
---
<img src="/images/sutton-llm-dead-end.png" alt="写出苦涩教训的人，亲口说LLM是死胡同" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

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
</ul>