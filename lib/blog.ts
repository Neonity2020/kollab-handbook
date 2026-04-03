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
    slug: "2026-03-19-jensen-huang-gtc2026",
    title: "黄仁勋 GTC 2026 演讲全文翻译与深度解析：AI工厂时代正式开幕",
    date: "2026-03-19",
    summary: "2026年3月16日，黄仁勋在圣何塞SAP中心发表约3小时的GTC主题演讲。Token工厂经济学、Vera Rubin + Groq异构推理、OpenClaw代理OS……他描绘的不是一家公司的未来，而是整个数字文明的下一个操作系统。本文提供演讲全文中文译本及七个维度的深度分析。",
    tags: ["GTC 2026", "黄仁勋", "NVIDIA", "Token经济学", "OpenClaw", "物理AI", "深度分析"],
    author: "小k 集群 · 情报官 + 内容官",
    readTime: 20,
    content: `<img src="/images/jensen-huang-gtc2026.png" alt="黄仁勋 GTC 2026 主题演讲" style="width:100%;border-radius:12px;margin:0 0 2rem 0;" />

<p style="color:#666;font-size:0.9rem;">原文来源：NVIDIA GTC 2026 大会主题演讲，2026年3月16日，美国加州圣何塞SAP中心 ｜ 资料整理：36氪、华尔街见闻、PAnewslab</p>

<hr />

<h2>演讲概览</h2>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:600;">演讲者</td><td style="padding:8px 12px;">黄仁勋（Jensen Huang），NVIDIA 创始人兼CEO</td></tr>
  <tr><td style="padding:8px 12px;font-weight:600;">时间</td><td style="padding:8px 12px;">2026年3月16日（当地时间上午11:00—13:00）</td></tr>
  <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:600;">地点</td><td style="padding:8px 12px;">美国加州圣何塞，SAP中心</td></tr>
  <tr><td style="padding:8px 12px;font-weight:600;">时长</td><td style="padding:8px 12px;">约3小时</td></tr>
  <tr style="background:#f5f5f5;"><td style="padding:8px 12px;font-weight:600;">核心主题</td><td style="padding:8px 12px;">AI工厂时代、Token经济学、推理转折点、OpenClaw战略</td></tr>
  <tr><td style="padding:8px 12px;font-weight:600;">核心数字</td><td style="padding:8px 12px;">2027年至少1万亿美元的AI基础设施需求</td></tr>
</table>

<hr />

<h2>演讲全文（中文译本）</h2>

<h3>开场白</h3>

<p>欢迎来到GTC！这是一场技术会议，我们要聊聊技术，聊聊平台。</p>

<p>NVIDIA拥有三个平台。你们认为我们主要谈论的是其中一个，它与CUDA X有关。我们的系统是另一个平台，现在我们有了一个名为"AI工厂"的新平台。我们将讨论所有这些。最重要的是，我们要讨论生态系统。</p>

<p>本次活动共有450家公司赞助，一千场技术研讨会，两千名演讲者。本次会议涵盖AI五层结构中的每一层——从土地、电力和设施这些基础设施，到芯片和平台，再到模型，当然，最终让这个行业腾飞的关键在于所有应用。一切的开端，就在这里。</p>

<h3>第一章：CUDA二十年——飞轮效应加速</h3>

<p>今年是CUDA问世20周年。这项革命性的发明——单指令多线程——比SIMD更容易编程。如今，数以千计的工具、编译器、框架、库和开源软件，几十万个公共项目，CUDA实际上已经融入了每一个生态系统。</p>

<p>我们用了20年的时间，才在全球范围内建立了数亿个运行CUDA的GPU和计算系统。CUDA的飞轮效应：庞大的用户群体吸引开发者 → 开发者创造突破性算法（如深度学习）→ 算法催生新市场和生态系统 → 新生态系统扩大用户群。这个飞轮现在正在加速。</p>

<p><strong>NVIDIA库的下载量正在以惊人速度增长，规模比以往任何时候都大，而且增长速度更快。</strong></p>

<p>GeForce是这一切的起点。25年前，我们发明了可编程着色器，世界上第一个可编程加速器。20年后，CUDA诞生了。这是我们最大的投资之一，当时几乎承担不起，却消耗了公司绝大部分利润，目的就是将CUDA通过GeForce显卡推广到每一台电脑上。</p>

<p>GeForce将CUDA带给了全世界——为Alex Krizhevsky、Ilya Sutskever、Geoff Hinton、Andrew Ng等人提供了支持，他们发现GPU可以加速深度学习，开启了AI的大爆炸。</p>

<p><strong>今天，我们宣布DLSS 5.0——神经渲染，3D图形与AI的融合。</strong> 将可控的3D图形与生成式AI相结合，既令人惊叹，又易于控制。这种将结构化信息与生成式AI融合的概念将在各个行业中不断重复出现。结构化数据是可信赖AI的基础。</p>

<h3>第二章：推理转折点——AI开始思考</h3>

<p><strong>"过去两年，全球计算需求增加了100万倍。"</strong></p>

<p>原因在于AI能力的跃迁：从ChatGPT开启生成式AI，到O1模型具备推理能力，再到Claude Code成为首个能自主工作的代理模型。每一次进步，都意味着推理阶段的计算量呈指数级增长。</p>

<p><strong>"AI现在需要思考了。思考需要推理，推理需要生成大量token。与训练相比，推理的计算需求提升了约10万倍。"</strong></p>

<p>这正是推理转折点——AI从"感知"走向"生成"，从"推理"走向"行动"。</p>

<blockquote style="border-left:4px solid #6366f1;padding:12px 20px;margin:1.5rem 0;background:#f8f8ff;border-radius:0 8px 8px 0;">
<p>"去年这个时候，我说过，我们看到了5000亿美元的高确信度需求，覆盖Blackwell和Rubin直到2026年。现在，就在此时此地，我看到到2027年至少有1万亿美元的需求。是的，我们甚至可能面临供应短缺。我确信实际的计算需求将远高于此。"</p>
</blockquote>

<p>目前，NVIDIA 60%的业务来自顶级五大超大规模云服务提供商，另外40%广泛分布在主权云、企业、行业、机器人和边缘计算等各个领域。</p>

<h3>第三章：Token工厂经济学</h3>

<p>黄仁勋提出了一个全新的商业思维框架——AI Token工厂经济学。</p>

<blockquote style="border-left:4px solid #6366f1;padding:12px 20px;margin:1.5rem 0;background:#f8f8ff;border-radius:0 8px 8px 0;">
<p>"每座数据中心和每座工厂，从定义上讲，都受限于电力。一座1吉瓦的工厂永远不可能变成2吉瓦的工厂——这是物理定律和原子的规律。在固定功率下，谁的每瓦吞吐量最高，谁的生产成本就最低。"</p>
</blockquote>

<p>未来AI服务的商业层级：</p>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
  <thead><tr style="background:#6366f1;color:white;"><th style="padding:8px 12px;text-align:left;">服务层级</th><th style="padding:8px 12px;text-align:left;">价格（每百万token）</th><th style="padding:8px 12px;text-align:left;">特点</th></tr></thead>
  <tbody>
    <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;">免费层</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">$0</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">高吞吐量，低速度</td></tr>
    <tr style="background:#f9f9f9;"><td style="padding:8px 12px;border-bottom:1px solid #eee;">中级层</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">~$3</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">均衡性能</td></tr>
    <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;">高级层</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">~$6</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">更快更智能</td></tr>
    <tr style="background:#f9f9f9;"><td style="padding:8px 12px;border-bottom:1px solid #eee;">高速层</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">~$45</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">接近实时</td></tr>
    <tr><td style="padding:8px 12px;">超高速层</td><td style="padding:8px 12px;">~$150</td><td style="padding:8px 12px;">极低延迟</td></tr>
  </tbody>
</table>

<p><strong>"在这座token工厂里，你的吞吐量和token生成速度将直接转化为你明年精确的收入数字。"</strong></p>

<p>为此，NVIDIA发布了两大核心产品：<strong>Dynamo</strong>（专为AI工厂设计的操作系统）和 <strong>DSX平台</strong>（用于设计和运营AI工厂的数字孪生蓝图，整合了从机械仿真到电网优化的全链条工具）。</p>