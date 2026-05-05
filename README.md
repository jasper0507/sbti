<p align="center">
  <img src="image/logo.png" width="100" alt="STTI Logo" />
</p>

<h1 align="center">STTI — 学生孪梗指标</h1>
<p align="center">Student Twin Type Indicator</p>
<p align="center">
  <img src="https://img.shields.io/badge/纯前端-HTML%20%7C%20CSS%20%7C%20JS-blue?style=flat-square" alt="Pure Frontend" />
  <img src="https://img.shields.io/badge/隐私-本地计算-green?style=flat-square" alt="Privacy" />
  <img src="https://img.shields.io/badge/题数-10-orange?style=flat-square" alt="10 Questions" />
  <img src="https://img.shields.io/badge/Vercel-部署成功-brightgreen?style=flat-square" alt="Vercel" />
</p>

<p align="center">
  <strong>中文</strong> · <a href="#english">English</a>
</p>

---

## 一、什么是 STTI

**STTI**（Student Twin Type Indicator，学生孪梗指标）是一份面向大学生的校园梗娱乐问卷。10 道情景选择题，浏览器本地计分，提交后即时匹配你的**校园梗分身代号**（如 ZB8、1T4、BL8），生成专属头像、标签、娱乐四维度和社交分享文案。

> STTI 不是 MBTI、不是 SBTI、不是任何标准化测评。它是一份写给大学生的段子问卷，仅供玩梗和截图发群。

## 二、目标用户

| 维度 | 描述 |
|------|------|
| **年龄** | 18–25 岁在校大学生（本科 / 研究生均可） |
| **场景** | 课间摸鱼、宿舍群互测、朋友圈/小红书分享 |
| **需求** | 想要一个不严肃、有梗、能截图发群的小测试 |
| **不需要** | 注册账号、下载 App、等待 AI 推理、泄露隐私 |

## 三、项目简介

### 技术架构

| 项目 | 说明 |
|------|------|
| 技术栈 | 纯 HTML + CSS + JavaScript，零依赖 |
| 计分方式 | 浏览器本地加权运算，无后端、无网络请求 |
| 数据存储 | 仅昵称存 localStorage，答卷不上传 |
| 部署方式 | GitHub Pages + Vercel（双平台） |

### 核心功能

| 功能 | 说明 |
|------|------|
| **校园梗分身匹配** | 7 种主类型 + 1 种兜底（6L6），匹配度百分比 |
| **娱乐四维度** | E/I、S/N、T/F、J/P 四轴进度条，娱乐向展示 |
| **标签系统** | 根据答题组合生成 5–7 个标签（如「早八口号型起床困难户」） |
| **社交文案** | 一键复制朋友圈版 / 小红书版分享文案 |
| **SVG 分身头像** | 根据答题结果随机生成渐变色头像 |
| **题序打乱** | 每次进入问卷自动打乱题目顺序 |

### 梗类型库

| 代号 | 名称 | 一句话 |
|------|------|--------|
| ZB8 | 我上早八！ | 口号响亮，被子更硬 |
| 1T4 | 小组大怨种 | 微信群里温和靠谱，凌晨两点赛博缝纫机 |
| BL8 | 摆烂吧！ | 计划写得像论文，行动掉线得像断网 |
| SXY | 自习室咸鱼 | 灯打在书上，主角在群里 |
| TDL | 拖到死 | 不到最后一刻不会「会」 |
| GJ8 | 遥想公瑾！ | 到账风华正茂，月底泡面续命 |
| JHBH | 身在豪中不知豪 | 滤镜拉满，输出随缘 |
| 6L6 | 六题六不像 | 系统兜底，复合型大学牲 |

## 四、项目亮点与同类产品的差异

| 对比维度 | MBTI 官方测试 | SBTI 类测试 | STTI（本项目） |
|----------|--------------|------------|---------------|
| 题目来源 | 标准化量表 | 多维度情景题 | 大学生校园梗场景 |
| 题数 | 93 题 | 28–60 题 | **10 题** |
| 需要注册 | 视平台而定 | 部分需要 | **不需要** |
| 数据上传 | 是 | 是 | **否，纯本地** |
| 出结果速度 | 即时 | 即时 | **即时** |
| 结果类型 | 四字母人格 | 多维人格 | **校园梗分身 + 娱乐四字母** |
| 分享功能 | 无 | 部分支持 | **朋友圈 + 小红书文案一键复制** |
| 技术栈 | 后端 | 后端 | **纯前端，可离线使用** |
| 开源 | 否 | 部分 | **是** |

### 核心差异

- **极致轻量**：10 题、纯前端、零依赖，不需要后端服务
- **梗浓度高**：题库围绕早八、小组作业、生活费、死线等大学生活场景，不追求「科学」
- **隐私友好**：所有计算在浏览器完成，答卷不离开你的设备
- **社交导向**：结果页直接生成可复制的分享文案，设计目标是「截图发群」

## 五、使用教程

### 在线体验

直接访问：**https://sbti-peach.vercel.app**

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/jasper0507/sbti.git
cd sbti

# 方式一：双击 index.html（部分浏览器剪贴板 API 受限）
# 方式二：用本地服务器
python3 -m http.server 8080
# 然后打开 http://localhost:8080
```

### 操作流程

1. 点击「开始测试」进入问卷
2. （可选）填写昵称，会写入分享文案
3. 完成 10 道选择题（题序每次随机打乱）
4. 点击「提交并查看结果」
5. 查看你的校园梗分身、匹配度、四维度、标签
6. 点击「复制朋友圈版」或「复制小红书版」发到社交平台

### 部署自己的版本

本项目可直接部署到任何静态托管平台：

- **Vercel**：`vercel --prod` 或连接 GitHub 仓库自动部署
- **GitHub Pages**：推送到 main 分支后在 Settings → Pages 开启
- **Netlify**：拖拽项目文件夹到 Netlify Drop

## 六、总结与讨论

STTI 的定位很明确：一份写给大学生的校园梗娱乐问卷。它不追求心理测量学的严谨性，不收集用户数据，不做商业化。设计目标是让学生在课间花两分钟做完，然后截图发到宿舍群里互相嘲讽。

如果你觉得某个梗类型的描述不够好笑，或者想增加新的校园梗类型，欢迎 fork 后修改题库和类型库。题库在 `app.js` 的 `QUESTIONS` 数组中，类型库在 `TYPE_LIBRARY` 对象中。

> ⚠️ 本测试仅供娱乐，不可替代心理咨询或职业测评。

---

<a id="english"></a>

## 1. What is STTI

**STTI** (Student Twin Type Indicator) is an entertainment quiz designed for college students. 10 scenario-based multiple-choice questions, scored locally in the browser, instantly matching you with a **campus meme persona** (like ZB8, 1T4, BL8) — complete with a generated avatar, tags, entertainment MBTI-style dimensions, and copy-paste social media captions.

> STTI is not MBTI. It's not SBTI. It's not a standardized assessment. It's a meme quiz for college students, built for screenshots and group chats.

## 2. Target Users

| Dimension | Description |
|-----------|-------------|
| **Age** | 18–25 year-old college students (undergrad or grad) |
| **Scenarios** | Between-class breaks, dorm group testing, social media sharing |
| **Need** | A casual, funny, screenshot-worthy mini quiz |
| **No need** | Account registration, app download, AI inference, data leakage |

## 3. Project Overview

### Technical Architecture

| Item | Details |
|------|---------|
| Tech Stack | Pure HTML + CSS + JavaScript, zero dependencies |
| Scoring | Browser-side weighted calculation, no backend, no network requests |
| Data Storage | Only nickname in localStorage, quiz answers never uploaded |
| Deployment | GitHub Pages + Vercel (dual platform) |

### Core Features

| Feature | Description |
|---------|-------------|
| **Meme Persona Matching** | 7 main types + 1 fallback (6L6), with match percentage |
| **Entertainment 4 Dimensions** | E/I, S/N, T/F, J/P progress bars (entertainment only) |
| **Tag System** | 5–7 personalized tags based on answer patterns |
| **Social Captions** | One-click copy for WeChat Moments / Xiaohongshu posts |
| **SVG Avatar** | Randomly generated gradient avatar based on results |
| **Shuffled Questions** | Question order randomized on each attempt |

### Meme Type Library

| Code | Name | One-liner |
|------|------|-----------|
| ZB8 | Morning Class! | Loud slogans, softer blankets |
| 1T4 | Group Project Scapegoat | Calm in chat, chaos at 2 AM |
| BL8 | Just Give Up! | Plans like a thesis, actions like a disconnection |
| SXY | Library Couch Potato | Light on the book, main character in the group chat |
| TDL | Deadline? Tomorrow. | Won't "know how" until the last moment |
| GJ8 | Living Large! | Rich on payday, ramen by month-end |
| JHBH | Cool Without Knowing | Full filter, optional output |
| 6L6 | None of the Above | System fallback, composite species |

## 4. Highlights & Differences from Similar Products

| Dimension | MBTI Official | SBTI-type Tests | STTI (This Project) |
|-----------|--------------|-----------------|---------------------|
| Question Source | Standardized scales | Multi-dimension scenarios | College campus meme scenarios |
| Question Count | 93 | 28–60 | **10** |
| Registration | Varies | Sometimes | **Not required** |
| Data Upload | Yes | Yes | **No, fully local** |
| Result Speed | Instant | Instant | **Instant** |
| Result Type | 4-letter personality | Multi-dimension personality | **Campus meme persona + entertainment 4-letter** |
| Sharing | None | Partial | **WeChat + Xiaohongshu one-click copy** |
| Tech Stack | Backend | Backend | **Pure frontend, works offline** |
| Open Source | No | Partial | **Yes** |

### Key Differentiators

- **Ultra-lightweight**: 10 questions, pure frontend, zero dependencies
- **High meme density**: Questions built around morning classes, group projects, allowance, deadlines — not about being "scientific"
- **Privacy-friendly**: All calculations happen in your browser; answers never leave your device
- **Share-first design**: Results page generates ready-to-paste social media captions

## 5. Getting Started

### Try Online

Visit: **https://sbti-peach.vercel.app**

### Run Locally

```bash
# Clone the repo
git clone https://github.com/jasper0507/sbti.git
cd sbti

# Option 1: Double-click index.html (clipboard API may be limited in some browsers)
# Option 2: Use a local server
python3 -m http.server 8080
# Then open http://localhost:8080
```

### How to Use

1. Click "Start Test" to enter the quiz
2. (Optional) Enter a nickname — it will appear in your share caption
3. Complete all 10 questions (order is randomized each time)
4. Click "Submit & View Results"
5. See your meme persona, match percentage, dimensions, and tags
6. Click the copy buttons to share on WeChat Moments or Xiaohongshu

### Deploy Your Own Version

This project works with any static hosting platform:

- **Vercel**: `vercel --prod` or connect the GitHub repo for auto-deploy
- **GitHub Pages**: Push to main branch, enable in Settings → Pages
- **Netlify**: Drag and drop the project folder into Netlify Drop

## 6. Summary & Discussion

STTI is exactly what it sounds like: a meme quiz for college students. It doesn't pretend to be psychometrically rigorous. It doesn't collect user data. It's not monetized. The design goal is simple — let students spend two minutes between classes, get a laugh, and screenshot the results into their dorm group chat.

If you think a meme type description could be funnier, or want to add new campus meme types, fork the repo and edit the question bank in `app.js` (`QUESTIONS` array) and the type library (`TYPE_LIBRARY` object).

> ⚠️ This quiz is for entertainment only. It is not a substitute for professional psychological assessment or career guidance.

---

## Credits

Component layout referenced from [SBTIAI/sbti-test](https://github.com/SBTIAI/sbti-test).

## License

MIT
