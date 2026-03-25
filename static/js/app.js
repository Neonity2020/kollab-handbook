// ===== AUTO-INJECT COPY BUTTONS ON CODE/EXAMPLE BLOCKS =====
(function injectCopyButtons() {
  function addCopyBtn(container, getText) {
    container.style.position = 'relative';
    const btn = document.createElement('button');
    btn.className = 'inline-copy-btn';
    btn.textContent = '复制';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const text = getText();
      navigator.clipboard.writeText(text).catch(() => {});
      btn.textContent = '已复制!';
      setTimeout(() => btn.textContent = '复制', 1800);
    });
    container.appendChild(btn);
  }
  // Step examples
  document.querySelectorAll('.step-example').forEach(el => {
    const textEl = el.querySelector('.example-text');
    if (textEl) addCopyBtn(el, () => textEl.textContent.trim());
  });
  // Use case prompt blocks
  document.querySelectorAll('.uc-prompt').forEach(el => {
    const codeEl = el.querySelector('.prompt-text');
    if (codeEl) addCopyBtn(el, () => codeEl.textContent.trim());
  });
  // Prompt templates
  document.querySelectorAll('.template-item').forEach(el => {
    const textEl = el.querySelector('.template-content');
    if (textEl) addCopyBtn(el, () => textEl.textContent.trim());
  });
})();

// ===== READING PROGRESS BAR =====
(function initReadingProgress() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;
  function update() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = Math.min(100, pct) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ===== HERO TERMINAL ANIMATION =====
const TERMINAL_SCENES = [
  {
    user: '帮我构建一个全栈项目并部署',
    steps: ['创建项目结构... ✓', '编写后端 API... ✓', '构建前端界面... ✓'],
    success: '部署成功！访问 → https://your-app.eb.amazonaws.com'
  },
  {
    user: '深度研究 AI Agent 最新进展',
    steps: ['搜索最新文献... ✓', '交叉验证数据... ✓', '整理结构化报告... ✓'],
    success: '研究报告生成！共 12 页，18 条引用来源 ✓'
  },
  {
    user: '帮我把这份 PDF 合同翻译成中文',
    steps: ['读取 PDF 内容... ✓', '翻译 47 页文档... ✓', '保留原始格式... ✓'],
    success: '译文 .docx 已生成！点击下载 ↓'
  },
  {
    user: '生成一份融资路演 PPT，科技风格',
    steps: ['生成内容大纲... ✓', '应用设计模板... ✓', '生成 18 张幻灯片... ✓'],
    success: 'presentation.pptx 已就绪，下载链接 ✓'
  }
];

let terminalSceneIdx = 0;
function runTerminalScene(idx) {
  const scene = TERMINAL_SCENES[idx % TERMINAL_SCENES.length];
  const userMsg = document.getElementById('termUserMsg');
  const typingText = document.getElementById('typingText');
  const step1 = document.getElementById('tStep1');
  const step2 = document.getElementById('tStep2');
  const step3 = document.getElementById('tStep3');
  const successText = document.getElementById('tSuccessText');
  const tSuccess = document.getElementById('tSuccess');
  if (!userMsg || !typingText) return;

  // Fade out
  const body = document.getElementById('terminalBody');
  if (body) { body.style.opacity = '0'; body.style.transition = 'opacity 0.4s'; }

  setTimeout(() => {
    userMsg.textContent = scene.user;
    typingText.textContent = '正在处理...';
    if (step1) step1.querySelector('.t-response').textContent = scene.steps[0] || '';
    if (step2) step2.querySelector('.t-response').textContent = scene.steps[1] || '';
    if (step3) step3.querySelector('.t-response').textContent = scene.steps[2] || '';
    if (successText) successText.textContent = scene.success;
    if (body) { body.style.opacity = '1'; }
  }, 400);
}

// Cycle terminal scenes every 4.5 seconds
if (document.getElementById('terminalBody')) {
  setInterval(() => {
    terminalSceneIdx++;
    runTerminalScene(terminalSceneIdx);
  }, 4500);
}

// ===== THEME =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');

function setTheme(dark) {
  if (dark) {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
}

// Init theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme !== 'light');

themeToggle?.addEventListener('click', () => {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  setTheme(isLight);
});

// ===== MOBILE NAV =====
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
mobileToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});
navLinks?.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
}, { passive: true });

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinkItems = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navLinkItems.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1500;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ===== INTERSECTION OBSERVER =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger counters
      entry.target.querySelectorAll('[data-count]').forEach(el => animateCounter(el));
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

// Observe sections for fade-in
document.querySelectorAll('.capability-card, .usecase-card, .skill-card, .step-card, .tip-card, .faq-item, .template-item').forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});

// Observe hero stats
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => animateCounter(el));
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statsObserver.observe(heroStats);
}

// ===== FILTER BUTTONS =====
const filterBtns = document.querySelectorAll('.filter-btn');
const usecaseCards = document.querySelectorAll('.usecase-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    usecaseCards.forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !show);
      if (show) {
        card.style.animation = 'none';
        requestAnimationFrame(() => {
          card.style.animation = 'fadein 0.4s ease';
        });
      }
    });
  });
});

// ===== FAQ TOGGLE =====
function toggleFaq(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}
window.toggleFaq = toggleFaq;

// ===== COPY TEMPLATE =====
function copyTemplate(el) {
  const text = el.querySelector('.template-content').textContent;
  navigator.clipboard.writeText(text).then(() => {
    el.classList.add('copied');
    const copyEl = el.querySelector('.template-copy');
    if (copyEl) copyEl.textContent = '已复制!';
    setTimeout(() => {
      el.classList.remove('copied');
      if (copyEl) copyEl.textContent = '点击复制';
    }, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    el.classList.add('copied');
    const copyEl = el.querySelector('.template-copy');
    if (copyEl) copyEl.textContent = '已复制!';
    setTimeout(() => {
      el.classList.remove('copied');
      if (copyEl) copyEl.textContent = '点击复制';
    }, 2000);
  });
}
window.copyTemplate = copyTemplate;

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ===== TYPING ANIMATION =====
const typingTexts = [
  '好的，从现在开始持续构建...',
  '正在分析需求并规划架构...',
  '创建项目文件结构... ✓',
  '配置 Flask 后端... ✓',
  '构建 React 前端... ✓',
  '部署到 AWS EB... ✓',
  '访问你的应用: https://app.eb.amazonaws.com',
];

let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingText');

function typeWriter() {
  if (!typingEl) return;
  const current = typingTexts[typingIndex];
  if (!isDeleting) {
    typingEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      setTimeout(() => { isDeleting = true; }, 2500);
      setTimeout(typeWriter, 2600);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingTexts.length;
    }
  }
  setTimeout(typeWriter, isDeleting ? 30 : 50);
}
setTimeout(typeWriter, 1000);

// ===== READING PROGRESS BAR =====
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.prepend(progressBar);

window.addEventListener('scroll', () => {
  const winHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = winHeight > 0 ? (window.scrollY / winHeight) * 100 : 0;
  progressBar.style.width = progress + '%';
}, { passive: true });

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    navLinks?.classList.remove('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  }
});

// ===== CARD TILT EFFECT (subtle) =====
document.querySelectorAll('.usecase-card, .capability-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-4px) perspective(600px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== SECTION ENTER STAGGER =====
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.fade-up');
      cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('visible'), i * 80);
      });
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.section').forEach(s => sectionObserver.observe(s));

// ===== LEARNING PATH CHECKBOXES =====
document.querySelectorAll('.lp-task').forEach(task => {
  const key = 'lp_' + task.textContent.trim().slice(0, 20);
  if (localStorage.getItem(key) === '1') task.classList.add('done');
  task.addEventListener('click', () => {
    task.classList.toggle('done');
    localStorage.setItem(key, task.classList.contains('done') ? '1' : '0');
    const check = task.querySelector('.lp-check');
    if (check) check.textContent = task.classList.contains('done') ? '✓' : '□';
  });
});

// ===== PROMPT PLAYGROUND =====
const SCENARIOS = {
  dev: {
    prompt: '帮我构建一个 [项目名]，功能包括：\n1. [功能1]\n2. [功能2]\n3. [功能3]\n\n技术栈：[前端框架] + Python Flask 后端\n风格参考：[参考网站]\n\n完成后部署到线上，给我源码下载链接和访问 URL。\n从现在开始持续构建，直到我说暂停。',
    tips: ['明确项目名', '列出核心功能', '指定技术栈', '要求持续构建'],
    preview: 'AI 将：分析需求 → 搭建项目架构 → 编写前后端代码 → 配置部署 → 输出源码 ZIP + 线上 URL'
  },
  file: {
    prompt: '（上传文件后）这份文件是 [文件描述/背景]。\n\n请帮我：\n1. 提取 [关键信息类型]\n2. 分析 [分析重点]\n3. 识别 [需要发现的规律/问题]\n\n最终输出 [格式：Excel / Word / PDF / HTML 报告]，\n并给出 [3条具体可行的建议]。',
    tips: ['说明文件背景', '指定提取内容', '要求具体格式', '请求行动建议'],
    preview: 'AI 将：读取文件 → 提取关键信息 → 结构化分析 → 生成报告文件 → 提供下载链接'
  },
  research: {
    prompt: '帮我深度研究「[研究主题]」。\n\n研究重点：\n- [方面1：例如市场规模]\n- [方面2：例如主要玩家]\n- [方面3：例如技术趋势]\n\n要求：\n✓ 多来源交叉验证，数据注明来源\n✓ 覆盖时间范围：近 [N] 年\n✓ 输出结构：执行摘要 / 详细分析 / 结论建议\n✓ 格式：Markdown 报告',
    tips: ['明确研究主题', '列出具体方面', '要求数据来源', '指定输出结构'],
    preview: 'AI 将：分解研究维度 → 多轮网络搜索 → 交叉验证数据 → 撰写结构化报告 → 输出 Markdown 文档'
  },
  ppt: {
    prompt: '生成一份关于「[主题]」的演示文稿。\n\n受众：[受众描述，如"投资人/团队内部/客户"]\n页数：[N] 页\n风格：[大厂简约 / 商务蓝 / 科技暗色]\n配色主题：[颜色偏好]\n\n必须包含：\n- 封面页（含副标题和日期）\n- 目录页\n- [核心内容页，如"市场分析/产品介绍/数据展示"]\n- 总结 & 下一步行动页',
    tips: ['说明受众', '指定风格', '列出必需页面', '描述配色偏好'],
    preview: 'AI 将：规划幻灯片结构 → 填充内容 → 应用设计风格 → 生成 .pptx 文件 → 提供下载链接'
  },
  image: {
    prompt: '用 nano banana 生成图片：\n\n画面内容：[详细描述，包括主体、场景、细节]\n风格：[赛博朋克 / 写实摄影 / 水彩插画 / 3D渲染]\n光线：[自然光 / 霓虹灯 / 逆光 / 工作室灯光]\n视角：[正面 / 俯视 / 广角 / 特写]\n画幅：[横向 16:9 / 竖向 9:16 / 正方形 1:1]\n色调：[冷色调 / 暖色调 / 高对比度]',
    tips: ['详细描述主体', '指定艺术风格', '说明光线视角', '确定画幅比例'],
    preview: 'AI 将：解析视觉描述 → 调用 Gemini 模型 → 生成高清图片 → 返回 7 天有效的图片链接'
  }
};

function openPlayground() {
  document.getElementById('playgroundModal').classList.add('open');
  setScenario(document.querySelector('.scenario-btn.active'), 'dev');
}
function closePlayground() {
  document.getElementById('playgroundModal').classList.remove('open');
}
window.openPlayground = openPlayground;
window.closePlayground = closePlayground;

function setScenario(btn, key) {
  document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const s = SCENARIOS[key];
  if (!s) return;
  document.getElementById('playgroundInput').value = s.prompt;
  document.getElementById('previewBox').textContent = s.preview;
  const tipsRow = document.getElementById('playgroundTips');
  tipsRow.innerHTML = s.tips.map(t => `<span class="pg-tip-tag" onclick="insertTip('${t}')">${t}</span>`).join('');
}
window.setScenario = setScenario;

function insertTip(tip) {
  const ta = document.getElementById('playgroundInput');
  ta.focus();
  ta.value = ta.value + (ta.value.endsWith('\n') ? '' : '\n') + '// 提示：' + tip;
}
window.insertTip = insertTip;

function copyPlaygroundPrompt() {
  const text = document.getElementById('playgroundInput').value;
  navigator.clipboard.writeText(text).catch(() => {});
  const btn = document.querySelector('.modal-actions .btn-primary');
  if (btn) {
    btn.textContent = '已复制!';
    setTimeout(() => btn.textContent = '复制此提示词', 2000);
  }
}
window.copyPlaygroundPrompt = copyPlaygroundPrompt;

// Close modal on overlay click
document.getElementById('playgroundModal')?.addEventListener('click', e => {
  if (e.target.id === 'playgroundModal') closePlayground();
});

// Escape key to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePlayground();
});

// ===== GLOBAL SEARCH =====
const SEARCH_INDEX = [
  { icon: '⚡', title: '全栈项目构建', snippet: '从需求描述到完整项目，AI 自动部署上线', tag: '开发', target: '#usecases' },
  { icon: '🐙', title: 'GitHub 仓库管理', snippet: '读取代码、创建 Issue、自动 Code Review', tag: '开发', target: '#usecases' },
  { icon: '🔬', title: '深度研究报告', snippet: '多轮搜索+交叉验证，生成带引用的报告', tag: '研究', target: '#usecases' },
  { icon: '📊', title: '演示文稿生成', snippet: '输入主题自动生成专业 PPTX', tag: '内容', target: '#usecases' },
  { icon: '📁', title: '多格式文件处理', snippet: 'PDF、Word、Excel、PPT 转换分析', tag: '文件', target: '#usecases' },
  { icon: '🎨', title: 'AI 图片生成', snippet: '通过 Gemini 生成高质量图片', tag: '内容', target: '#usecases' },
  { icon: '📈', title: '数据分析与可视化', snippet: '上传 CSV/Excel，AI 生成图表报告', tag: '研究', target: '#usecases' },
  { icon: '⏰', title: '定时自动化任务', snippet: '设置定时器，AI 自动执行并推送通知', tag: '自动化', target: '#usecases' },
  { icon: '📄', title: 'PDF 处理技能', snippet: '提取、合并、OCR、水印、表单填写', tag: '技能', target: '#skills' },
  { icon: '🌐', title: '网络搜索技能', snippet: '实时搜索、URL 内容获取', tag: '技能', target: '#skills' },
  { icon: '🚀', title: '网页部署技能', snippet: '自动部署到 AWS EB，获得公网 URL', tag: '技能', target: '#skills' },
  { icon: '🔬', title: '深度研究技能', snippet: '触发词：深度研究、调研', tag: '技能', target: '#skills' },
  { icon: '🤖', title: 'Claude API 开发', snippet: '基于 Claude 构建 AI 应用', tag: '技能', target: '#skills' },
  { icon: '🎯', title: '给出明确完成标准', snippet: '"持续构建直到网页可以公开访问"', tag: '技巧', target: '#tips' },
  { icon: '💾', title: '让 AI 记住偏好', snippet: '"记住，以后代码都用 TypeScript"', tag: '技巧', target: '#tips' },
  { icon: '🔄', title: '分步确认避免返工', snippet: '先输出方案，确认后再生成完整内容', tag: '技巧', target: '#tips' },
  { icon: '⚡', title: '批量处理技巧', snippet: '一次上传多文件，一条指令批量处理', tag: '技巧', target: '#tips' },
  { icon: '💬', title: '企业微信 Bot', snippet: '随手在企微中发起 AI 对话', tag: '多端', target: '#bot' },
  { icon: '🌐', title: '网页工作台', snippet: '完整功能，支持文件上传和代码执行', tag: '多端', target: '#bot' },
  { icon: '🔌', title: 'API 集成', snippet: 'RESTful API 将 AI 嵌入自己产品', tag: '多端', target: '#bot' },
  { icon: '🐙', title: 'GitHub MCP 连接器', snippet: '读仓库、Issue、PR、Code Review，授权后直接操作', tag: '集成', target: '#integrations' },
  { icon: '📋', title: 'FlowUs / Notion 集成', snippet: '读写知识库，研究报告自动整理入库', tag: '集成', target: '#integrations' },
  { icon: '💬', title: '企业微信 Bot 配置', snippet: '随手发起 AI 对话，定时推送，群聊协作', tag: '集成', target: '#integrations' },
  { icon: '🔌', title: 'Kollab API 开发接入', snippet: '生成 API Key，流式输出，Webhook 通知', tag: '集成', target: '#integrations' },
  { icon: '📖', title: '快速入门 3 步骤', snippet: '描述需求 → 观察执行 → 获取结果', tag: '入门', target: '#quickstart' },
  { icon: '🗺️', title: '7 天学习路径', snippet: '从新手到高手的完整学习计划', tag: '学习', target: '#learning' },
  // FAQ entries
  { icon: '❓', title: 'FAQ：Kollab 和 ChatGPT 区别', snippet: '工具集成、持久记忆、可交付产物三大差异', tag: 'FAQ', target: '#faq' },
  { icon: '❓', title: 'FAQ：AI 生成质量', snippet: '代码/文件质量怎样，什么时候需要人工 review', tag: 'FAQ', target: '#faq' },
  { icon: '❓', title: 'FAQ：文件大小限制', snippet: '单文件最大 20MB，上下文 200K tokens', tag: 'FAQ', target: '#faq' },
  { icon: '❓', title: 'FAQ：部署有效期', snippet: 'EB 环境 24 小时，如何导出源码', tag: 'FAQ', target: '#faq' },
  { icon: '❓', title: 'FAQ：持久化记忆', snippet: '如何让 AI 记住偏好和项目背景', tag: 'FAQ', target: '#faq' },
  // New skills
  { icon: '🐙', title: 'GitHub 集成技能', snippet: '读仓库、Issue、PR、Code Review', tag: '技能', target: '#skills' },
  { icon: '📋', title: 'Notion 集成技能', snippet: '读写 Notion 页面和数据库', tag: '技能', target: '#skills' },
  { icon: '📦', title: 'S3 文件管理技能', snippet: '管理文件，生成持久下载链接', tag: '技能', target: '#skills' },
  // Shortcuts
  { icon: '⌨️', title: '键盘快捷键', snippet: '/ 搜索，T 换主题，P 试炼场，G+U 导航', tag: '技巧', target: '#faq' },
  // Compare
  { icon: '⚡', title: 'AI vs 手动效率对比', snippet: 'PPT 节省 95%，调研节省 90%，全栈开发节省 85%', tag: '对比', target: '#compare' },
  { icon: '📄', title: 'PDF 翻译效率', snippet: '10 页文档 3 分钟完成，节省 95% 时间', tag: '对比', target: '#compare' },
];

let searchOpen = false;

function openSearch() {
  searchOpen = true;
  document.getElementById('searchWrap').classList.add('open');
  setTimeout(() => {
    document.getElementById('globalSearch').focus();
    const q = document.getElementById('globalSearch').value || '';
    if (!q.trim()) renderRecentOrEmpty();
  }, 60);
}
function closeSearch() {
  searchOpen = false;
  document.getElementById('searchWrap').classList.remove('open');
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchResults').innerHTML = '';
  document.getElementById('searchResults').classList.remove('has-results');
}
window.openSearch = openSearch;
window.closeSearch = closeSearch;

document.getElementById('searchEsc')?.addEventListener('click', closeSearch);
document.getElementById('searchWrap')?.addEventListener('click', e => {
  if (e.target.id === 'searchWrap') closeSearch();
});

document.getElementById('globalSearch')?.addEventListener('input', e => {
  const raw = e.target.value;
  const q = raw.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  if (!q) {
    renderRecentOrEmpty();
    return;
  }
  const matches = SEARCH_INDEX.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.snippet.toLowerCase().includes(q) ||
    item.tag.toLowerCase().includes(q)
  ).slice(0, 8);

  if (matches.length === 0) {
    resultsEl.innerHTML = '<div class="search-no-results">没有找到相关内容，换个关键词试试</div>';
    resultsEl.classList.add('has-results');
    return;
  }
  resultsEl.innerHTML = matches.map(item => `
    <div class="search-result-item" onclick="goToResult('${item.target}', '${raw.trim().replace(/'/g,"\\'")}')">
      <span class="sr-icon">${item.icon}</span>
      <div class="sr-content">
        <div class="sr-title">${item.title}</div>
        <div class="sr-snippet">${item.snippet}</div>
      </div>
      <span class="sr-tag">${item.tag}</span>
    </div>
  `).join('');
  resultsEl.classList.add('has-results');
});

function goToResult(target, searchTerm) {
  if (searchTerm) saveRecentSearch(searchTerm);
  closeSearch();
  const el = document.querySelector(target);
  if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}
window.goToResult = goToResult;

// "/" key opens search
document.addEventListener('keydown', e => {
  if (e.key === '/' && !e.target.matches('input, textarea') && !searchOpen) {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape') {
    if (searchOpen) closeSearch();
  }
});

// ===== RECENT SEARCHES =====
function getRecentSearches() {
  try { return JSON.parse(localStorage.getItem('rs_kollab') || '[]'); }
  catch { return []; }
}
function saveRecentSearch(q) {
  if (!q || q.trim().length < 1) return;
  let arr = getRecentSearches().filter(s => s !== q.trim());
  arr.unshift(q.trim());
  localStorage.setItem('rs_kollab', JSON.stringify(arr.slice(0, 6)));
}
function renderRecentOrEmpty() {
  const resultsEl = document.getElementById('searchResults');
  if (!resultsEl) return;
  const recents = getRecentSearches();
  if (recents.length === 0) {
    resultsEl.innerHTML = '<div class="search-hint">试试：全栈开发 · 深度研究 · PDF · PPT 生成</div>';
    resultsEl.classList.add('has-results');
    return;
  }
  resultsEl.innerHTML = `<div class="search-section-label">最近搜索</div>` +
    recents.map(q => `<div class="search-result-item search-recent" onclick="fillSearch('${q.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')">
      <span class="sr-icon">🕐</span>
      <div class="sr-content"><div class="sr-title">${q}</div></div>
      <button class="sr-remove" onclick="removeRecentSearch(event,'${q.replace(/'/g,"\\'").replace(/"/g,'&quot;')}')">×</button>
    </div>`).join('');
  resultsEl.classList.add('has-results');
}
function fillSearch(q) {
  const input = document.getElementById('globalSearch');
  if (input) { input.value = q; input.dispatchEvent(new Event('input')); input.focus(); }
}
function removeRecentSearch(e, q) {
  e.stopPropagation();
  let arr = getRecentSearches().filter(s => s !== q);
  localStorage.setItem('rs_kollab', JSON.stringify(arr));
  const curVal = document.getElementById('globalSearch')?.value || '';
  if (!curVal.trim()) renderRecentOrEmpty();
}
window.fillSearch = fillSearch;
window.removeRecentSearch = removeRecentSearch;

// ===== FAVORITES =====
const FAV_KEY = 'kollab_favs';
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
  catch { return []; }
}
function toggleFavorite(id, e) {
  if (e) e.stopPropagation();
  let favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) { favs.push(id); showToast('已收藏'); }
  else { favs.splice(idx, 1); showToast('已取消收藏'); }
  localStorage.setItem(FAV_KEY, JSON.stringify(favs));
  syncFavButtons();
  updateFavBadge();
}
function syncFavButtons() {
  const favs = getFavorites();
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = btn.dataset.favId;
    const active = favs.includes(id);
    btn.classList.toggle('active', active);
    btn.setAttribute('title', active ? '取消收藏' : '收藏');
    btn.textContent = active ? '★' : '☆';
  });
}
function updateFavBadge() {
  const count = getFavorites().length;
  const badge = document.getElementById('favBadge');
  if (badge) { badge.textContent = count; badge.style.display = count > 0 ? 'flex' : 'none'; }
}
window.toggleFavorite = toggleFavorite;
// Init favorites on load
(function initFavs() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { syncFavButtons(); updateFavBadge(); });
  } else { syncFavButtons(); updateFavBadge(); }
})();

// ===== TOAST NOTIFICATION =====
function showToast(msg) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2000);
}
window.showToast = showToast;

// ===== USE CASE DETAIL MODAL =====
const USECASE_DETAILS = {
  fullstack: {
    title: '全栈项目构建', icon: '⚡', color: '#667eea',
    category: '开发', difficulty: '入门级', time: '30 分钟 – 2 小时',
    desc: '从一句话需求到可访问的完整 Web 应用，AI 自动完成架构设计、前后端代码、依赖管理和云端部署，输出公网 URL 和源码 ZIP。',
    workflow: ['描述需求与技术栈偏好', 'AI 输出项目架构（可确认）', 'AI 逐文件生成所有代码', '打包部署到 AWS EB 获得 URL'],
    prompt: '帮我构建一个 [项目名]，功能包括：\n1. [功能1]\n2. [功能2]\n3. [功能3]\n\n技术栈：[前端框架] + Python Flask 后端\n风格参考：[描述或链接]\n\n完成后部署到线上，给我源码下载链接和访问 URL。\n从现在开始持续构建，直到我说暂停。',
    tips: ['加"持续构建直到我说暂停"让 AI 一气呵成', '上传参考截图能大幅提升视觉还原度', '先让 AI 输出架构方案，确认后再开始'],
    outputs: ['源码 ZIP', '线上 URL', '部署文档']
  },
  github: {
    title: 'GitHub 仓库管理', icon: '🐙', color: '#11998e',
    category: '开发', difficulty: '进阶', time: '5 – 30 分钟',
    desc: '直接读取、分析、修改 GitHub 仓库，AI 可以创建 Issue、提交 PR、执行 Code Review，无需离开对话窗口。',
    workflow: ['粘贴 GitHub 仓库 URL', 'AI 读取全部文件结构', 'AI 执行分析或代码修改', '自动创建 Issue / PR / Comment'],
    prompt: '帮我分析 github.com/[用户名]/[仓库名]，\n找出代码中的优化点和潜在问题，\n然后为每个问题创建对应的 GitHub Issue，\n并给出修复建议代码片段。',
    tips: ['连接 GitHub MCP 后 AI 可以直接提交代码', '可以让 AI 对 PR 进行逐行 Code Review', '支持私有仓库（需先在工作区完成 GitHub 授权）'],
    outputs: ['代码分析报告', 'GitHub Issues', 'PR Reviews']
  },
  research: {
    title: '深度研究报告', icon: '🔬', color: '#f7971e',
    category: '研究', difficulty: '进阶', time: '20 – 40 分钟',
    desc: '多轮网络搜索加上交叉验证，生成带来源引用的专业研究报告，适合市场分析、技术调研、竞争格局研究。',
    workflow: ['说明研究主题和关注方向', 'AI 分解维度并执行多轮搜索', 'AI 交叉验证关键数据', '输出结构化 Markdown 报告'],
    prompt: '帮我深度研究「[研究主题]」。\n\n重点覆盖：\n- [方面1：如市场规模]\n- [方面2：如主要竞争者]\n- [方面3：如技术趋势]\n\n要求：多来源交叉验证，数据注明来源，\n输出格式：执行摘要 + 详细分析 + 结论建议。',
    tips: ['说"深度研究"触发专用技能，搜索更深入', '指定报告结构（摘要/背景/分析/结论）', '可要求覆盖特定时间范围的数据'],
    outputs: ['Markdown 研究报告', '引用来源列表']
  },
  ppt: {
    title: '演示文稿生成', icon: '📊', color: '#fc4a1a',
    category: '内容', difficulty: '入门级', time: '5 – 15 分钟',
    desc: '输入主题和风格要求，AI 自动生成完整 .pptx 文件，支持多种设计风格，包含封面、目录、内容页和总结页。',
    workflow: ['描述主题、受众和风格偏好', 'AI 生成大纲（可调整）', 'AI 生成完整 PPTX 文件', '下载后在 PowerPoint 打开编辑'],
    prompt: '生成一份关于「[主题]」的演示文稿。\n受众：[受众描述，如投资人/团队/客户]\n页数：[N] 页\n风格：[大厂简约 / 商务蓝 / 科技暗色]\n\n必须包含：封面（含副标题）、目录、\n[核心内容页]、总结 & 下一步行动页。\n配色以 [颜色] 为主，简洁专业。',
    tips: ['先让 AI 输出大纲确认方向再生成，避免返工', '参考具体品牌如"Google 汇报风"效果更精准', '可上传参考 PPT 让 AI 模仿风格'],
    outputs: ['.pptx 文件', '下载链接']
  },
  fileprocess: {
    title: '多格式文件处理', icon: '📁', color: '#4facfe',
    category: '文件', difficulty: '入门级', time: '1 – 10 分钟',
    desc: '上传任意格式文件，AI 直接读取并处理——提取、转换、分析、合并，输出新文件并提供下载链接。',
    workflow: ['上传文件（支持 PDF/Word/Excel/PPT/图片）', '说明处理方式和期望输出格式', 'AI 调用对应技能自动处理', '获得处理结果文件和下载链接'],
    prompt: '（上传文件后）\n这是一份 [文件说明/背景]。\n请帮我：\n1. 提取 [关键信息类型]\n2. 整理成 [输出格式：Excel/Word/PDF]\n3. 分析 [分析重点]\n4. 给出 [具体建议/结论]',
    tips: ['可批量上传多个文件，一次处理', '支持 PDF/DOCX/XLSX/PPTX/CSV/图片等格式', '加"保留原始格式"让输出排版更接近原文'],
    outputs: ['处理后文件', '分析报告', '下载链接']
  },
  image: {
    title: 'AI 图片生成', icon: '🎨', color: '#a18cd1',
    category: '内容', difficulty: '入门级', time: '1 – 3 分钟',
    desc: '通过 Google Gemini 模型生成高质量图片，支持文字生图、图片编辑和风格迁移，满足设计、营销、创意等视觉需求。',
    workflow: ['用"nano banana"关键词触发图片技能', '描述画面内容、风格、光线、视角', 'Gemini 模型生成高清图片', '获得图片链接（7 天有效）'],
    prompt: '用 nano banana 生成图片：\n\n画面：[详细描述主体、场景和细节]\n风格：[赛博朋克/写实摄影/水彩插画/3D渲染]\n光线：[自然光/霓虹灯/逆光/工作室灯光]\n视角：[正面/俯视/广角/特写]\n画幅：[横向 16:9 / 竖向 9:16 / 正方形 1:1]\n色调：[冷色调/暖色调/高对比度]',
    tips: ['描述越具体越好——包含光线、情绪、视角', '不满意说"在此基础上调整..."继续迭代', '"nano banana"是触发图片技能的关键词'],
    outputs: ['PNG 高清图片', '7 天有效下载链接']
  },
  data: {
    title: '数据分析与可视化', icon: '📈', color: '#533483',
    category: '研究', difficulty: '进阶', time: '5 – 20 分钟',
    desc: '上传 CSV/Excel 数据文件，AI 自动进行统计分析、趋势识别、异常检测，生成可视化图表和完整分析报告。',
    workflow: ['上传 CSV 或 Excel 数据文件', '说明数据的业务背景和分析目标', 'AI 执行统计分析并生成图表', 'AI 输出完整分析报告（含建议）'],
    prompt: '（上传数据文件）\n这是我们 [时间段] 的 [业务类型] 数据。\n\n请帮我：\n1. 找出主要趋势和关键异常点\n2. 计算 [核心指标]\n3. 生成带图表的 HTML 分析报告\n4. 给出 3 条有价值的改进建议',
    tips: ['说明数据的业务背景让分析更有价值', '要求输出 HTML 报告可获得交互式图表', '可要求用 Python 展示完整分析代码'],
    outputs: ['HTML 分析报告', '图表 PNG', 'Excel 整理版']
  },
  automation: {
    title: '定时自动化任务', icon: '⏰', color: '#e94560',
    category: '自动化', difficulty: '高级', time: '5 分钟配置',
    desc: '设置定时器，让 AI 在指定时间自动执行数据采集、报告生成等任务，结果通过企业微信 Bot 推送通知。',
    workflow: ['描述任务内容和执行频率', 'AI 配置定时任务和触发条件', '到时间后自动执行任务', '结果通过企微通知推送给你'],
    prompt: '每天早上 9:00 帮我搜索「[关键词]」的最新动态，\n整理成简报发给我，格式：\n- 今日要点（3 条）\n- 重要链接\n- 一句话总结\n\n请用简洁的语言，适合手机阅读。',
    tips: ['通过企业微信 Bot 发起的任务支持消息推送', '可以用 cron 表达式设置复杂调度逻辑', '定时任务到期后会发送完整执行结果'],
    outputs: ['定时执行报告', '企微通知推送']
  }
};

function openUsecaseDetail(id) {
  const d = USECASE_DETAILS[id];
  if (!d) return;
  const modal = document.getElementById('ucDetailModal');
  if (!modal) return;
  modal.querySelector('.ucd-icon').textContent = d.icon;
  modal.querySelector('.ucd-icon').style.background = `linear-gradient(135deg,${d.color}66,${d.color})`;
  modal.querySelector('.ucd-title').textContent = d.title;
  modal.querySelector('.ucd-cat').textContent = d.category;
  modal.querySelector('.ucd-diff').textContent = d.difficulty;
  modal.querySelector('.ucd-time').innerHTML = '⏱ ' + d.time;
  modal.querySelector('.ucd-desc').textContent = d.desc;
  modal.querySelector('.ucd-workflow').innerHTML = d.workflow.map((s, i) =>
    `<div class="ucd-step"><div class="ucd-step-num">${i+1}</div><span>${s}</span></div>${i < d.workflow.length-1 ? '<div class="ucd-step-arrow">↓</div>' : ''}`
  ).join('');
  modal.querySelector('.ucd-prompt-text').value = d.prompt;
  modal.querySelector('.ucd-tips-list').innerHTML = d.tips.map(t =>
    `<div class="ucd-tip-item"><span class="ucd-tip-dot">💡</span>${t}</div>`
  ).join('');
  modal.querySelector('.ucd-outputs').innerHTML = d.outputs.map(o =>
    `<span class="output-item">${o}</span>`
  ).join('');
  modal.dataset.currentId = id;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeUsecaseDetail() {
  document.getElementById('ucDetailModal')?.classList.remove('open');
  document.body.style.overflow = '';
}
function copyUcdPrompt() {
  const ta = document.querySelector('#ucDetailModal .ucd-prompt-text');
  if (!ta) return;
  navigator.clipboard.writeText(ta.value).catch(() => {});
  showToast('提示词已复制到剪贴板');
  const btn = document.querySelector('.ucd-copy-btn');
  if (btn) { btn.textContent = '已复制!'; setTimeout(() => btn.textContent = '复制提示词', 2000); }
}
window.openUsecaseDetail = openUsecaseDetail;
window.closeUsecaseDetail = closeUsecaseDetail;
window.copyUcdPrompt = copyUcdPrompt;

document.getElementById('ucDetailModal')?.addEventListener('click', e => {
  if (e.target.id === 'ucDetailModal') closeUsecaseDetail();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.getElementById('ucDetailModal')?.classList.contains('open')) {
    closeUsecaseDetail();
  }
});

// ===== LEARNING PATH PROGRESS =====
function updateLPProgress() {
  const tasks = document.querySelectorAll('.lp-task');
  const done = document.querySelectorAll('.lp-task.done').length;
  const total = tasks.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const label = document.getElementById('lpProgressLabel');
  const bar = document.getElementById('lpProgressFill');
  if (label) label.textContent = `${done} / ${total} 完成 · ${pct}%`;
  if (bar) bar.style.width = pct + '%';
}
// Patch LP checkbox clicks to also update progress
document.querySelectorAll('.lp-task').forEach(task => {
  task.addEventListener('click', () => setTimeout(updateLPProgress, 10));
});
updateLPProgress();

// ===== SKILLS FILTER =====
function filterSkills(btn, cat) {
  document.querySelectorAll('.skills-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#skillsGrid .skill-card').forEach(card => {
    if (cat === 'all' || card.dataset.scat === cat) {
      card.removeAttribute('data-hidden');
    } else {
      card.dataset.hidden = 'true';
    }
  });
}
window.filterSkills = filterSkills;

// ===== FAQ ACCORDION =====
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  // Open current if it was closed
  if (!isOpen) item.classList.add('open');
}
window.toggleFaq = toggleFaq;

// ===== ANNOUNCEMENT BANNER =====
(function initAnnounceBanner() {
  const DISMISS_KEY = 'kollab_announce_v4';
  if (localStorage.getItem(DISMISS_KEY)) return;
  const bar = document.getElementById('announceBanner');
  if (!bar) return;
  bar.style.display = 'flex';
  // Offset navbar so it's still below the banner
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const h = bar.offsetHeight || 38;
    navbar.style.top = h + 'px';
    document.body.style.paddingTop = (parseInt(getComputedStyle(document.body).paddingTop) || 64) + h + 'px';
  }
})();

function dismissBanner() {
  localStorage.setItem('kollab_announce_v2', '1');
  const bar = document.getElementById('announceBanner');
  if (!bar) return;
  bar.style.maxHeight = bar.offsetHeight + 'px';
  bar.style.overflow = 'hidden';
  bar.style.transition = 'max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease';
  requestAnimationFrame(() => {
    bar.style.maxHeight = '0';
    bar.style.padding = '0';
    bar.style.opacity = '0';
  });
  setTimeout(() => {
    bar.style.display = 'none';
    const navbar = document.getElementById('navbar');
    if (navbar) navbar.style.top = '0';
    document.body.style.paddingTop = '';
  }, 350);
}
window.dismissBanner = dismissBanner;

// ===== KEYBOARD SHORTCUTS MODAL =====
function openShortcuts() {
  document.getElementById('shortcutsModal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeShortcuts() {
  document.getElementById('shortcutsModal')?.classList.remove('open');
  document.body.style.overflow = '';
}
window.openShortcuts = openShortcuts;
window.closeShortcuts = closeShortcuts;

document.getElementById('shortcutsModal')?.addEventListener('click', e => {
  if (e.target.id === 'shortcutsModal') closeShortcuts();
});

// ===== GLOBAL KEYBOARD SHORTCUTS =====
let gKeyPending = false;
document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea, [contenteditable]')) return;

  // ? key = shortcuts help
  if (e.key === '?' && !e.shiftKey === false) {
    // shift+? = ?
  }
  if (e.key === '?') {
    e.preventDefault();
    openShortcuts();
    return;
  }

  // T = toggle theme
  if (e.key === 't' || e.key === 'T') {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setTheme(isLight);
    return;
  }

  // P = open playground
  if (e.key === 'p' || e.key === 'P') {
    openPlayground();
    return;
  }

  // G+X navigation combos
  if (e.key === 'g' || e.key === 'G') {
    gKeyPending = true;
    setTimeout(() => { gKeyPending = false; }, 1000);
    return;
  }
  if (gKeyPending) {
    gKeyPending = false;
    const navMap = {
      'h': '#hero', 'H': '#hero',
      'u': '#usecases', 'U': '#usecases',
      's': '#skills', 'S': '#skills',
      'f': '#faq', 'F': '#faq',
      'l': '#learning', 'L': '#learning',
      'i': '#integrations', 'I': '#integrations',
    };
    const target = navMap[e.key];
    if (target) {
      e.preventDefault();
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});
