/** @type {Record<'en' | 'zh', Record<string, string>>} */
export const translations = {
  en: {
    'meta.home.title': 'MailTools — Master Your Email Workflow',
    'meta.home.desc':
      'Curated email marketing, verification, warmup, outreach, and deliverability tools.',
    'meta.request.title': 'MailTools — Submit or Subscribe',
    'meta.request.desc':
      'Suggest a tool or subscribe to updates from MailTools.',
    'nav.tools': 'Tools',
    'nav.request': 'Request Tool',
    'nav.lang.zh': '中文',
    'nav.lang.en': 'EN',
    'hero.title': 'Master Your Email Workflow',
    'hero.subtitle':
      'A curated collection of the best email marketing, verification, and productivity tools.',
    'search.placeholder': 'Search tools...',
    'layout.categories': 'Categories',
    'filter.all': 'All',
    'filter.blacklist': 'Blacklist Check',
    'filter.dns': 'DNS Check',
    'filter.warmup': 'Warmup',
    'filter.design': 'Drag-and-Drop Editor',
    'filter.deliverability': 'Deliverability',
    'filter.disposable': 'Disposable Email',
    'filter.reputation': 'Reputation',
    'card.visit': 'Visit Site',
    'badge.blacklist': 'BLACKLIST',
    'badge.dns': 'DNS',
    'badge.warmup': 'WARMUP',
    'badge.design': 'DESIGN',
    'badge.deliverability': 'DELIVERABILITY',
    'badge.disposable': 'DISPOSABLE',
    'badge.reputation': 'REPUTATION',
    'drawer.close': 'Close',
    'drawer.purpose': 'What it does',
    'drawer.intro': 'Purpose',
    'drawer.applicable': 'When to use',
    'drawer.link': 'Link',
    'drawer.category': 'Category',
    'drawer.pricing': 'Pricing',
    'drawer.usage': 'How to use',
    'pricing.free': 'Free',
    'pricing.paid': 'Paid',
    'pricing.freemium': 'Freemium',
    'tools.lemwarm.desc': 'Automated email warmup to boost deliverability.',
    'tools.lemwarm.intro':
      'Gradually increases send volume in a controlled peer network so your mailbox and domain build a healthier reputation with providers.',
    'tools.lemwarm.applicable':
      'New sending domains or inboxes, cold outreach programs, or recovery after deliverability or reputation issues.',
    'tools.lemwarm.usage':
      'Connect your mailbox, follow the ramp schedule, and monitor reputation before scaling sends.',
    'tools.mailtester.desc': 'Test how spammy your emails look to providers.',
    'tools.mailtester.intro':
      'Sends your message through a test workflow and scores content, headers, and authentication so you can fix problems before real recipients see them.',
    'tools.mailtester.applicable':
      'Before large campaigns, after DNS or ESP changes, or when inbox placement or spam-folder rates suddenly worsen.',
    'tools.mailtester.usage':
      'Send a test to the given address, review the score, and fix DNS/content issues listed.',
    'tools.stripo.desc': 'Drag-and-drop email template builder.',
    'tools.stripo.intro':
      'Lets marketers build responsive email layouts with reusable blocks and brand styles, then export HTML or push to an ESP.',
    'tools.stripo.applicable':
      'Newsletters, promos, and transactional-style marketing mail where you want repeatable templates without writing raw HTML.',
    'tools.stripo.usage':
      'Pick a layout, customize modules, export to your ESP or download HTML.',
    'tools.mxtoolboxBlacklist.desc': 'Check whether your sending IP/domain appears on common blacklists.',
    'tools.mxtoolboxBlacklist.intro':
      'Queries major DNS blocklists to see if your IP or domain is flagged as a spam source, which can block or throttle delivery.',
    'tools.mxtoolboxBlacklist.applicable':
      'After bounce or complaint spikes, IP or hosting changes, or as periodic hygiene on infrastructure you send from.',
    'tools.mxtoolboxBlacklist.usage':
      'Enter IP or domain, run blacklist check, and handle delisting on detected providers.',
    'tools.dnschecker.desc': 'Inspect DNS records to verify mail-related configuration.',
    'tools.dnschecker.intro':
      'Shows how your domain resolves worldwide so you can confirm MX, SPF, DKIM, and DMARC records match what you intend.',
    'tools.dnschecker.applicable':
      'Go-live validation, debugging auth failures (SPF/DKIM/DMARC), or after moving DNS to a new provider.',
    'tools.dnschecker.usage':
      'Input domain and review MX/SPF/DKIM/DMARC records to locate parsing/config issues.',
    'tools.tempMail.desc': 'Create a temporary inbox address for sign-ups and one-off verification.',
    'tools.tempMail.intro':
      'Issues a disposable inbox so you can receive verification or download links without giving your primary email to every service.',
    'tools.tempMail.applicable':
      'One-off trials, gated PDFs, or forums where you want to avoid long-term marketing mail to your real address.',
    'tools.tempMail.usage':
      'Copy the generated address, use it where needed, and refresh or delete when done.',
    'tools.googlePostmaster.desc':
      "Google's dashboard for spam rate, domain reputation, and Gmail delivery signals.",
    'tools.googlePostmaster.intro':
      'Google’s official console for senders: trends in spam rate, domain reputation, and authentication health for mail to Gmail and Google Workspace users.',
    'tools.googlePostmaster.applicable':
      'Organizations that send bulk or transactional mail to Google-hosted inboxes and need to monitor impact after volume or policy changes.',
    'tools.googlePostmaster.usage':
      'Verify domain ownership, then monitor reputation and authentication metrics over time.',
    'request.title': 'Submit a Tool or Subscribe',
    'request.subtitle':
      "Can't find what you need? Tell us what tool you are looking for, or subscribe to get notified when we add new tools.",
    'request.tab.suggest': 'Submit a Suggestion',
    'request.tab.subscribe': 'Subscribe to Updates',
    'request.name': 'Name',
    'request.email': 'Email Address',
    'request.sendCode': 'Send Code',
    'request.codeSent': 'Code sent (demo)',
    'request.verifyHint': '* Please verify your email to enable submission',
    'request.toolDesc': 'Tool Name / Description',
    'request.toolPlaceholder': 'Describe the tool you need...',
    'request.subscribeNote': 'Notes (optional)',
    'request.subscribePlaceholder': 'Topics you care about...',
    'request.submit': 'Submit',
    'request.namePlaceholder': 'John Doe',
    'request.emailPlaceholder': 'john@example.com',
    'request.successSuggest': 'Thanks! We received your suggestion.',
    'request.successSubscribe': 'You are subscribed. Welcome!',
    'footer.note': 'All tools are third-party; links open in a new tab.',
  },
  zh: {
    'meta.home.title': 'MailTools — 掌控邮件工作流',
    'meta.home.desc': '精选邮件营销、验证、预热、外联与送达相关工具。',
    'meta.request.title': 'MailTools — 提交需求或订阅',
    'meta.request.desc': '向我们推荐工具，或订阅更新。',
    'nav.tools': '工具',
    'nav.request': '需求与订阅',
    'nav.lang.zh': '中文',
    'nav.lang.en': 'EN',
    'hero.title': '掌控你的邮件工作流',
    'hero.subtitle': '精选邮件营销、验证、预热与生产力工具，一站浏览。',
    'search.placeholder': '搜索工具...',
    'layout.categories': '分类',
    'filter.all': '全部',
    'filter.blacklist': '黑名单检测',
    'filter.dns': 'DNS解析检测',
    'filter.warmup': '预热',
    'filter.design': '拖拽编辑器',
    'filter.deliverability': '送达',
    'filter.disposable': '一次性邮箱',
    'filter.reputation': '信誉度检测',
    'card.visit': '访问官网',
    'badge.blacklist': '黑名单',
    'badge.dns': 'DNS',
    'badge.warmup': '预热',
    'badge.design': '设计',
    'badge.deliverability': '送达',
    'badge.disposable': '一次性邮箱',
    'badge.reputation': '信誉度',
    'drawer.close': '关闭',
    'drawer.purpose': '作用说明',
    'drawer.intro': '用途介绍',
    'drawer.applicable': '适用情况',
    'drawer.link': '链接地址',
    'drawer.category': '工具分类',
    'drawer.pricing': '收费方式',
    'drawer.usage': '使用方法',
    'pricing.free': '免费',
    'pricing.paid': '付费',
    'pricing.freemium': '部分免费',
    'tools.lemwarm.desc': '自动化邮箱预热，提升送达率。',
    'tools.lemwarm.intro':
      '在受控的对等网络中逐步提高发信量，帮助邮箱与发信域名在收件方侧建立更健康的信誉。',
    'tools.lemwarm.applicable':
      '新域名或新邮箱、冷启动外联，或在送达率、信誉下滑后做恢复与再放量前的准备。',
    'tools.lemwarm.usage': '绑定邮箱，按建议节奏升温，观察信誉后再放量。',
    'tools.mailtester.desc': '检测邮件「垃圾感」与配置问题。',
    'tools.mailtester.intro':
      '模拟收件方对邮件的评分，从内容、头信息与认证（SPF/DKIM/DMARC）等维度给出问题清单，便于在正式群发前修正。',
    'tools.mailtester.applicable':
      '大规模活动前、更换 ESP 或调整 DNS 后，或突然发现进垃圾箱比例升高、送达异常时。',
    'tools.mailtester.usage': '按提示发送测试邮件，根据分数修复 DNS 与内容。',
    'tools.stripo.desc': '拖拽式邮件模板搭建。',
    'tools.stripo.intro':
      '用可视化方式排版营销邮件，支持模块化组件与品牌样式，并可导出 HTML 或对接常见邮件服务商。',
    'tools.stripo.applicable':
      '需要统一视觉的促销、会员通讯等场景，希望模板可复用、减少手写 HTML 的团队。',
    'tools.stripo.usage': '选版式、拖模块、导出到 ESP 或下载 HTML。',
    'tools.mxtoolboxBlacklist.desc': '检测发信 IP 或域名是否进入常见黑名单。',
    'tools.mxtoolboxBlacklist.intro':
      '对接多家 DNS 黑名单查询，判断发信 IP 或域名是否被标记为垃圾来源，从而解释部分拒收或限流。',
    'tools.mxtoolboxBlacklist.applicable':
      '退信或投诉异常增多、更换 IP/主机后，或对自有发信基础设施做例行体检时。',
    'tools.mxtoolboxBlacklist.usage': '输入 IP 或域名执行检测，按结果到对应平台发起移除。',
    'tools.dnschecker.desc': '检查域名 DNS 记录，定位邮件配置解析问题。',
    'tools.dnschecker.intro':
      '从全球多节点解析域名记录，核对 MX、SPF、DKIM、DMARC 等是否与预期一致，辅助排查认证失败。',
    'tools.dnschecker.applicable':
      '上线前验收、认证报错排查，或迁移 DNS 服务商后需要确认全球生效情况时。',
    'tools.dnschecker.usage': '输入域名后核对 MX/SPF/DKIM/DMARC 记录，逐项修复异常。',
    'tools.tempMail.desc': '生成临时收件地址，用于注册、试用或一次性验证。',
    'tools.tempMail.intro':
      '提供可丢弃的收件地址，用于接收验证码或下载链接，避免把主邮箱交给每一个陌生站点。',
    'tools.tempMail.applicable':
      '一次性试用、资料下载、论坛注册等不想长期接收营销邮件的场景。',
    'tools.tempMail.usage': '复制生成的地址到目标站点，收信后按需刷新或丢弃。',
    'tools.googlePostmaster.desc': 'Google 官方：查看发往 Gmail 的域名信誉、垃圾邮件比例与认证情况。',
    'tools.googlePostmaster.intro':
      '面向发件方的官方看板，展示发往 Gmail / Google Workspace 用户的域名信誉、用户标记垃圾比例及认证健康度等趋势。',
    'tools.googlePostmaster.applicable':
      '对 Google 邮箱用户有较大发送量或关键业务邮件，需要在策略或发信量变更后持续观察影响时。',
    'tools.googlePostmaster.usage': '完成域名验证后，持续观察信誉与 SPF/DKIM/DMARC 相关指标。',
    'request.title': '提交工具或订阅更新',
    'request.subtitle':
      '找不到需要的工具？告诉我们你的需求，或订阅以便在新工具上线时收到通知。',
    'request.tab.suggest': '提交需求',
    'request.tab.subscribe': '订阅更新',
    'request.name': '姓名',
    'request.email': '邮箱',
    'request.sendCode': '发送验证码',
    'request.codeSent': '验证码已发送（演示）',
    'request.verifyHint': '* 请先验证邮箱后再提交',
    'request.toolDesc': '工具名称 / 描述',
    'request.toolPlaceholder': '描述你需要的工具...',
    'request.subscribeNote': '备注（选填）',
    'request.subscribePlaceholder': '感兴趣的主题...',
    'request.submit': '提交',
    'request.namePlaceholder': '张三',
    'request.emailPlaceholder': 'you@example.com',
    'request.successSuggest': '感谢！我们已收到你的建议。',
    'request.successSubscribe': '订阅成功，欢迎加入。',
    'footer.note': '工具均为第三方服务；外链将在新标签页打开。',
  },
};
