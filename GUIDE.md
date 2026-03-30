# MailTools 项目指南

说明如何用 **pnpm** 安装依赖、启动与构建，以及如何在前端**录入新工具**（无需数据库）。

---

## 环境要求

- [Node.js](https://nodejs.org/) 18+（推荐 LTS）
- [pnpm](https://pnpm.io/) 9+（推荐通过 Corepack 启用，见下）

### 安装 pnpm（任选其一）

```bash
# 推荐：用 Node 自带的 Corepack 启用指定版本
corepack enable
corepack prepare pnpm@latest --activate

# 或全局安装
npm install -g pnpm
```

验证：`pnpm -v`

---

## 安装依赖

在项目根目录执行：

```bash
pnpm install
```

首次安装后会生成 `pnpm-lock.yaml`，请纳入版本控制；勿与 `package-lock.json` 混用（若从 npm 迁来，删除 `package-lock.json` 后再执行上述命令）。

---

## 启动与构建

| 命令 | 说明 |
|------|------|
| `pnpm dev` | 启动开发服务器（默认 `http://localhost:5173`），支持热更新 |
| `pnpm build` | 生产构建，输出到 `dist/` |
| `pnpm preview` | 本地预览构建结果（需先 `pnpm build`） |

开发时访问：

- **首页（工具目录）**：`http://localhost:5173/`
- **需求与订阅页**：`http://localhost:5173/request.html`

部署时将 `dist/` 整站托管到静态服务器（Nginx、OSS、Netlify 等）即可。

### Vercel Web Analytics

项目依赖 `@vercel/analytics`，在 `src/js/analytics.js` 中调用 `inject()`，并在 `src/main.js` 与 `src/request-main.js` 入口初始化（多页应用每个入口各执行一次）。

- 部署到 **Vercel** 时，在控制台为该仓库项目打开 **Analytics → Web Analytics**。
- 官方文档：[Quickstart](https://vercel.com/docs/analytics/quickstart)、[Package](https://vercel.com/docs/analytics/package)。
- 说明：文档中 Next.js 示例为 `import { Analytics } from "@vercel/analytics/next"`；**非 Next 项目**应使用本仓库的 `inject()` 方式，二者对应同一套分析能力。

---

## 录入新工具

数据全部在前端：改代码保存后，开发环境热更新；上线前执行 `pnpm build`。

### 1. 在 `src/data/tools.js` 中追加对象

在 `tools` 数组末尾增加一项，字段含义如下：

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | string | 唯一标识，建议小写英文与连字符，如 `my-tool` |
| `name` | string | 展示名称（中英文共用，一般为产品英文名） |
| `category` | string | 分类键，必须是：`verification` / `warmup` / `outreach` / `design` / `deliverability` |
| `descriptionKey` | string | 简短介绍的 i18n 键，如 `tools.my-tool.desc` |
| `link` | string | 官网完整 URL（`https://...`） |
| `image` | string | 卡片配图 URL；本地图可放 `public/`，填写如 `/images/foo.png` |
| `pricing` | string | `free` / `paid` / `freemium` |
| `usageInstructionsKey` | string | 使用方法 i18n 键，如 `tools.my-tool.usage` |

示例：

```js
{
  id: 'example-tool',
  name: 'Example Tool',
  category: 'verification',
  descriptionKey: 'tools.example.desc',
  link: 'https://example.com',
  image: 'https://example.com/cover.jpg',
  pricing: 'freemium',
  usageInstructionsKey: 'tools.example.usage',
},
```

### 2. 在 `src/i18n/translations.js` 中补充文案

在 `en` 与 `zh` 两个对象中，为上述键补充内容：

- `tools.example.desc`：一句话说明工具做什么（卡片摘要 + 抽屉「作用说明」）。
- `tools.example.usage`：一段话说明如何使用（抽屉「使用方法」）。

键名必须与 `tools.js` 中 `descriptionKey`、`usageInstructionsKey` **完全一致**。

### 3. 自检

1. 执行 `pnpm dev`，在首页用搜索、分类筛选是否出现新卡片。
2. 点击卡片，检查抽屉：名称、链接、分类、收费、使用方法；切换中/英文是否都有文案。

---

## 分类与收费枚举

**分类（`category`）与筛选对应：**

| 值 | 英文界面 | 中文界面 |
|----|----------|----------|
| `verification` | Verification | 验证 |
| `warmup` | Warmup | 预热 |
| `outreach` | Outreach | 外联 |
| `design` | Design & Templates | 设计与模板 |
| `deliverability` | Deliverability | 送达 |

**收费（`pricing`）展示：**

| 值 | 英文 | 中文 |
|----|------|------|
| `free` | Free | 免费 |
| `paid` | Paid | 付费 |
| `freemium` | Freemium | 部分免费 |

---

## 常见问题

**图片不显示：** 检查 `image` 是否可访问；本地资源放在 `public/images/`，填写 `/images/xxx.png`。

**新工具不出现：** 检查 `tools.js` 语法、逗号；确认 `translations.js` 里 `en`、`zh` 都写了对应键。

**仅改文案：** 只改 `translations.js` 即可，不必动 `tools.js`。

**pnpm 与 npm 混用：** 同一项目只保留一种锁文件；以 pnpm 为准时使用 `pnpm-lock.yaml`，不要提交 `package-lock.json`。

---

## 相关文件一览

```
src/
  data/tools.js          # 工具列表数据
  i18n/translations.js   # 中英文文案
  js/home.js             # 首页逻辑（筛选、抽屉）
  js/request-page.js     # 需求与订阅页
  js/i18n.js             # 语言与 meta
index.html               # 首页
request.html             # 第二页
```
