/**
 * STTI — Student Twin Type Indicator（学生孪梗指标；ST = Student 缩写，TI = Type Indicator）
 * 本地计分：校园梗分身 + 娱乐向 MBTI 四字母；无网络请求。
 */

const NS = "stti:v1";

/** 与用户梗库对齐的类型 key（勿改顺序：影响兜底展示） */
const STTI_KEYS = ["ZB8", "1T4", "BL8", "SXY", "TDL", "GJ8", "JHBH"];

const TYPE_LIBRARY = {
  ZB8: {
    code: "ZB8",
    cn: "我上早八！",
    intro:
      '嘴里喊着"我上早八！"结果被被子重重封印，闹钟响到手机死机还在床上挺尸，拖到教室直接睡成课桌一部分。',
    desc: "你对早八的态度属于声援型参赛：口号一定要响亮，身体一定要诚实。别人到教室是听课，你是来把颈椎交给椅背做长期托管。建议把闹钟备注改成「再不起就挂科」——虽然大概率还是会被被子反杀。",
  },
  "1T4": {
    code: "1T4",
    cn: "小组大怨种",
    intro:
      '小组作业里唯一的灵长类动物。表面在微信群里发着"好的没问题[抱拳]"，凌晨两点却在狂飙脏话，边破防边把四个队友从百度百科直接复制来的、连超链接底色都没去干净的垃圾，强行缝合成人类能看懂的PPT。',
    desc: "你的微信人格是温和靠谱好队友，你的真实人格是深夜赛博缝纫机：把格式事故、引用灾难和逻辑断层一针一线缝成能交的东西。世界感谢有你，PPT 之神闭一只眼。",
  },
  BL8: {
    code: "BL8",
    cn: "摆烂吧！",
    intro:
      '每天早上醒来都发毒誓"今天必须卷起来"，结果手机一拿就是中午，下午继续"再躺五分钟"，晚上安慰自己"明天就是新的一天"，期末周疯狂后悔+熬夜补作业，最后绩点和头发一起疯狂摆烂。',
    desc: "你是「动机充足、执行随缘」的标本级大学生：计划写得像论文，行动掉线得像断网。好消息是你很会给明天画饼；坏消息是明天通常也装死不见你。",
  },
  SXY: {
    code: "SXY",
    cn: "自习室咸鱼",
    intro:
      '每天早上打包一堆书和复习资料冲进自习室，占完座位就把耳机一戴，手机一刷，奶茶一吸，结果一整天就翻了三页书，最后打包走的时候跟室友说"今天效率好高，学废了"。',
    desc: "你的学习有一种舞台美术感：灯打在书上，主角在群里。效率不高，但仪式感拉满；翻页不多，但奶茶杯已空。路人以为你在卷，其实你在进行一场安静的行为艺术。",
  },
  TDL: {
    code: "TDL",
    cn: "拖到死",
    intro:
      '永远"我明天再搞"，deadline前24小时突然变身肝帝，通宵改到眼瞎手抖，文件名从v1肝到v999，最后提交完直接灵魂出窍，醒来发现还是差两页参考文献没改。',
    desc: "你不是不会，是不到最后一刻不会「会」。你的生产力曲线像过山车：长期躺平，短期超频，提交后进入贤者时间。参考文献那两页不是忘了，是你与命运谈判留下的缓冲带。",
  },
  GJ8: {
    code: "GJ8",
    cn: "遥想公瑾！",
    intro:
      '生活费刚到账就觉得自己"公瑾风华正茂"，奶茶外卖游戏皮肤一顿狂买特种兵消费，结果半个月钱包直接暴毙，月底余额0.00时躺在床上叹气"什么遥想公瑾当年啊，公瑾风华正茂"，现在只能泡面续命、蹭室友、等爸妈打钱的月光族穷鬼。',
    desc: "你的消费理念是「先快乐，后解释」：到账瞬间觉得自己能代言风华正茂，月中开始与食堂窗口重新谈判。你不是不会理财，是把理财推迟到「下个月一定」。",
  },
  JHBH: {
    code: "JHBH",
    cn: "身在豪中不知豪",
    intro:
      "黑卫衣、口罩、帽子一拉，走路自动低调；教室白板前能虚空打碟，雨天操场能 solo 篮球；盯着 K 线、国际新闻敲键盘，像好莱坞片里的假黑客。觉得自己是沉默狠人、艾伦·沃克接班人、西格玛本玛——结果早八闹钟三遍还在床上挺尸，作业群永远潜水等答案，暗恋对象只敢偷瞄，聊天框里反复输入又删光。",
    desc: "你的外在像开了「顶级狠人」皮肤，你的日常像开了「节能模式」：滤镜拉满，输出随缘。不是不帅，是帅主要发生在脑内剪辑版里。懂的人自然懂，不懂的人以为你在装酷，其实你只是社恐晚期叠了中二 buff。",
  },
  "6L6": {
    code: "6L6",
    cn: "六题六不像",
    intro: "七个梗格在你脑子里开圆桌会议，谁也没说服谁，系统只能给你盖章：大学牲随机态。",
    desc: "你属于「今天早八明天公瑾后天怨种」的复合型人才，单一标签装不下。建议把结果当段子，不要当判决；真要比，和你最像的可能是下一版题库。",
  },
};

const CAREERS_BY_STTI = {
  ZB8: ["寝室—教室两点一线的「人体贴贴椅背」体验官", "短视频平台早八吐槽区野生 UP 主（未出道版）", "午睡恢复协议首席谈判代表"],
  "1T4": ["小组作业「缝补师」：专收百度百科超链接事故", "PPT 急诊室夜班大夫", "微信群「好的没问题」表情包供应商"],
  BL8: ["明日复明日战略研究院（编制：0）", "期末周临时肝帝事务所合伙人", "自我原谅学 · 荣誉本科生"],
  SXY: ["自习室占座行为艺术策展人", "奶茶驱动型知识观光客", "效率口号复读机（仅外放）"],
  TDL: ["死线前 24h 超频战士", "参考文献最后两页终身成就奖候选人", "版本号 v999 文件命名学博士在读"],
  GJ8: ["生活费蒸发术 · 现场见证者", "月底泡面续命协会荣誉会员", "遥想公瑾朗诵团（独幕剧）"],
  JHBH: ["赛博黑客氛围组（敲键盘有声、输出看缘）", "校园低调走秀社（观众：自己）", "暗恋观察笔记绝密档案管理员"],
  "6L6": ["啥都沾点啥都不精的「综合型大学牲」", "下一题也许就露馅的薛定谔人设", "适合把本页截图发群问：所以我到底是哪种有病"],
};

/**
 * 题库权重设计（娱乐向，非临床量表）
 *
 * scores 四轴顺序与 mbtiFromAcc / renderDimList 一致：
 *   [0] E−I+  正值→外向 E，负值→内向 I
 *   [1] N−S+  正值→直觉 N，负值→实感 S
 *   [2] T−F+  正值→思考 T，负值→情感 F
 *   [3] J−P+  正值→判断 J，负值→感知 P
 * 单题只在 1～2 个轴上给较强载荷（约 0.9～1.4），其余轴用 ±0.2～0.5 微调，避免「一选定全局」。
 *
 * stti：与选项行为一致；单题「主梗」1.4～4.2，「辅梗」0.4～1.0；与行为明显相悖的梗可小幅为负（如强储蓄拉低 BL8）。
 */
const QUESTIONS = [
  {
    id: "q1",
    text: "大作业截止前一晚，你更接近哪种状态？",
    options: [
      { label: "已进入冲刺模式：拆模块、赶进度，先保证能交、尽量像样", scores: [-1.1, -0.3, 0.9, 1.1], stti: { TDL: 1.8, "1T4": 1.2, BL8: -0.2 } },
      { label: "大脑保护性宕机：先躺一阵，相信「最后总会有办法」", scores: [-0.4, -0.4, -0.6, -0.9], stti: { ZB8: 2.8, BL8: 1.4 } },
      { label: "知道该动笔，但先刷手机、收拾桌面——「再开始就写」", scores: [1.0, 0.4, -0.5, -0.9], stti: { BL8: 2.2, SXY: 1.6, GJ8: 0.5 } },
    ],
  },
  {
    id: "q2",
    text: "破冰/班会自我介绍轮到你了，你心里更接近？",
    options: [
      { label: "先听完别人怎么说，到我讲讲事实就行，短一点更好", scores: [-1.0, -0.5, 0.2, -0.2], stti: { JHBH: 1.4, SXY: 0.8 } },
      { label: "希望快点结束，最好别即兴提问，我只想当背景板", scores: [-1.6, -0.3, -0.4, -0.2], stti: { JHBH: 2.4, ZB8: 0.5, BL8: 0.5 } },
      { label: "顺势抛个梗热场，下场围观大家的反应也挺好玩", scores: [1.3, 0.7, -0.1, -0.5], stti: { GJ8: 1.6, JHBH: 0.6 } },
    ],
  },
  {
    id: "q3",
    text: "如果大学四年必须「选修一条支线」通关，你更想签哪种？",
    options: [
      { label: "硬核主线：竞赛、科研或大考路线，长了点但能写进履历", scores: [-0.2, 1.0, 1.1, 1.0], stti: { "1T4": 2.4, TDL: 0.9, BL8: -0.4 } },
      { label: "人气支线：自媒体、摆摊、社团门面——重在曝光和连接", scores: [1.2, -0.3, -0.5, -0.2], stti: { GJ8: 2.4, SXY: 1.0, BL8: 0.5 } },
      { label: "回血支线：少社交多独处，散步发呆也行，先把电量补回来", scores: [-1.3, -0.2, -0.4, -0.7], stti: { BL8: 1.8, JHBH: 1.2, ZB8: 0.6 } },
    ],
  },
  {
    id: "q4",
    text: "翻车过一次（挂科边缘、冲动回复或当众尴尬）之后，你更可能？",
    options: [
      { label: "复盘备忘录：下次别再栽在同一个坑里", scores: [-0.1, -0.5, 1.1, 1.0], stti: { "1T4": 2.2, TDL: 0.8 } },
      { label: "记住教训就够了，细节不深挖，往前走", scores: [0.0, 0.5, -0.3, -0.1], stti: { SXY: 1.6 } },
      { label: "主要靠时间冲淡，当没发生过也行", scores: [-0.5, 0.3, -0.7, -0.8], stti: { BL8: 2.0, ZB8: 0.8, JHBH: 0.5 } },
    ],
  },
  {
    id: "q5",
    text: "小组群里三天没人认领任务，你会？",
    options: [
      { label: "@全员分工 + 截止时间，先把骨架搭出来", scores: [0.5, -0.2, 1.0, 1.5], stti: { "1T4": 4.2 } },
      { label: "有人分工我就认领一块，尽力按时交出像样的部分", scores: [-0.3, -0.2, -0.1, 0.7], stti: { "1T4": 0.8 } },
      { label: "先潜水观望，deadline 前通常会「刷新形态」再出手", scores: [0.2, 0.6, 0.1, -1.1], stti: { TDL: 2.6, BL8: 2.0, "1T4": -0.9 } },
    ],
  },
  {
    id: "q6",
    text: "突然多了一笔可自由支配的钱（奖学金、压岁钱或副业到账），你更可能？",
    options: [
      { label: "先做储蓄与分摊大件，拉长战线慢慢花", scores: [-0.2, -0.4, 1.2, 1.3], stti: { TDL: 1.0, BL8: -0.6 } },
      { label: "先给家人朋友安排一波，剩下的再慢慢规划", scores: [0.8, 0.0, -0.7, 0.4], stti: { GJ8: 1.4, "1T4": 0.6 } },
      { label: "先犒劳自己一波，下个月的我再接盘", scores: [1.0, 0.2, -0.6, -1.1], stti: { GJ8: 4.0, BL8: 1.0 } },
    ],
  },
  {
    id: "q7",
    text: "别人说「你以后可能性还多着呢」，你心里更接近？",
    options: [
      { label: "会去想几条分支：升学、就业、gap各自意味着什么", scores: [-0.3, 1.3, 0.5, 0.0], stti: { JHBH: 2.8, TDL: 0.7 } },
      { label: "听听就好，当安慰剂，不展开脑内辩论", scores: [0.2, -0.7, -0.4, -0.3], stti: { SXY: 1.4, BL8: 0.7 } },
      { label: "不太脑补远方，先把这周课表和 due 过完", scores: [0.0, -1.0, 0.5, 0.9], stti: { ZB8: 0.8, "1T4": 0.6 } },
    ],
  },
  {
    id: "q8",
    text: "哪种课更容易让你「汗流浃背」？",
    options: [
      { label: "课堂展示、路演答辩——站到台前就心跳加速那种", scores: [-1.3, 0.0, -0.6, 0.2], stti: { JHBH: 2.6, ZB8: 0.6 } },
      { label: "推导链条超长、作业密度很高的硬核课", scores: [-0.1, 0.8, 1.4, 0.1], stti: { "1T4": 1.4, TDL: 0.9 } },
      { label: "打分规则说不清、考勤像开盲盒的那种", scores: [0.4, -0.4, 0.2, 1.0], stti: { TDL: 1.4, BL8: 1.0 } },
    ],
  },
  {
    id: "q9",
    text: "刷到同届晒实习、保研票圈或精致出游九宫格时，你更常见的反应是？",
    options: [
      { label: "快速划走或关 app，怕自己被带着焦虑跑", scores: [-1.2, -0.2, 0.4, 0.5], stti: { JHBH: 2.2, ZB8: 0.6, BL8: 0.4 } },
      { label: "会酸一会儿，然后收藏攻略或给自己列待办", scores: [0.0, 0.0, -0.1, 0.6], stti: { SXY: 2.4, TDL: 0.3 } },
      { label: "一边比一边继续刷，睡前觉得今天又白过了", scores: [1.4, 0.1, -0.7, -0.7], stti: { GJ8: 1.2, BL8: 1.4, "1T4": 0.4 } },
    ],
  },
  {
    id: "q10",
    text: "如果要形容你对「一年后自己的处境」，更像？",
    options: [
      { label: "主线清晰：关卡多，但能看见进度条", scores: [0.1, 0.4, 0.4, 1.3], stti: { TDL: 2.8, "1T4": 1.4 } },
      { label: "徐徐展开：不搞宏大叙事，按月有小目标就够", scores: [-0.3, -0.7, 0.1, 0.4], stti: { SXY: 2.8, ZB8: 0.8, BL8: 0.6 } },
      { label: "开放世界：走一步算一步，允许剧情乱入", scores: [0.5, 1.1, -0.5, -1.4], stti: { BL8: 2.8, GJ8: 1.4 } },
    ],
  },
];

const TAG_POOL = {
  night: "早八口号型起床困难户",
  social: "群聊表面情绪稳定",
  chaos: "计划不如变化快",
  plan: "死线前生产力爆棚",
  soft: "内心戏比正文长",
  bold: "特种兵消费预备役",
  solo: "自习室行为艺术",
  vibe: "滤镜拉满输出随缘",
  uni: "标准大学牲配方",
};

function seededRandom(seedStr) {
  let h = 2166136261;
  for (let i = 0; i < seedStr.length; i++) {
    h ^= seedStr.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return function () {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    return ((h >>> 0) % 10000) / 10000;
  };
}

function sumScores(answers) {
  const acc = [0, 0, 0, 0];
  QUESTIONS.forEach((q) => {
    const v = answers[q.id];
    if (v == null) return;
    const opt = q.options[v];
    if (!opt) return;
    for (let i = 0; i < 4; i++) acc[i] += opt.scores[i];
  });
  return acc;
}

function sumStti(answers) {
  const totals = Object.fromEntries(STTI_KEYS.map((k) => [k, 0]));
  QUESTIONS.forEach((q) => {
    const v = answers[q.id];
    if (v == null) return;
    const opt = q.options[v];
    if (!opt || !opt.stti) return;
    for (const [k, w] of Object.entries(opt.stti)) {
      if (totals[k] != null) totals[k] += w;
    }
  });
  return totals;
}

function pickSttiType(answers) {
  const totals = sumStti(answers);
  const entries = STTI_KEYS.map((k) => ({ key: k, score: totals[k] }));
  entries.sort((a, b) => b.score - a.score);
  const best = entries[0].score;
  const second = entries.length > 1 ? entries[1].score : 0;
  const seed = JSON.stringify(answers);
  const rnd = seededRandom(seed);
  const sumPos = entries.reduce((s, e) => s + Math.max(0, e.score), 0);

  if (best < 3.5) {
    const twin = TYPE_LIBRARY["6L6"];
    const matchPct = Math.min(88, Math.round(38 + best * 6));
    return { twin, matchPct, pickedKey: "6L6", totals };
  }

  const top = entries.filter((e) => Math.abs(e.score - best) <= 0.4);
  const chosen = top[Math.floor(rnd() * top.length)];
  const dominance = sumPos > 0 ? chosen.score / sumPos : 1;
  let matchPct = Math.round(62 + dominance * 34);
  matchPct = Math.min(98, Math.max(61, matchPct));
  if (best - second < 0.35) {
    matchPct = Math.min(matchPct, 86);
  }

  return { twin: TYPE_LIBRARY[chosen.key], matchPct, pickedKey: chosen.key, totals };
}

function mbtiFromAcc(acc) {
  const letters = [acc[0] >= 0 ? "E" : "I", acc[1] >= 0 ? "N" : "S", acc[2] >= 0 ? "T" : "F", acc[3] >= 0 ? "J" : "P"];
  return letters.join("");
}

function clamp(n, lo, hi) {
  return Math.min(hi, Math.max(lo, n));
}

/** MBTI 式四维度进度条（娱乐） */
function renderDimList(acc) {
  const [ei, ns, tf, jp] = acc;
  const axes = [
    {
      name: "能量指向（E / I）",
      neg: "内向 I",
      pos: "外向 E",
      v: ei,
      nTxt: "更偏：从独处与小圈交流里回血。",
      pTxt: "更偏：靠互动、开口说、边走边想恢复电量。",
    },
    {
      name: "信息偏好（S / N）",
      neg: "实感 S",
      pos: "直觉 N",
      v: ns,
      nTxt: "更偏：细节、事实、可操作的具体步骤。",
      pTxt: "更偏：联想、隐喻、结构与可能性。",
    },
    {
      name: "判断依据（T / F）",
      neg: "情感 F",
      pos: "思考 T",
      v: tf,
      nTxt: "更偏：关系、语气、照护与价值取向。",
      pTxt: "更偏：逻辑、利弊、规则和效率。",
    },
    {
      name: "生活方式（J / P）",
      neg: "感知 P",
      pos: "判断 J",
      v: jp,
      nTxt: "更偏：开放选项、临场调整、晚点再定局。",
      pTxt: "更偏：计划、定局、按部就班推进。",
    },
  ];

  return axes
    .map((a) => {
      const t = clamp(50 + a.v * 6, 10, 90);
      const toward = a.v >= 0 ? a.pos : a.neg;
      const explain = a.v >= 0 ? a.pTxt : a.nTxt;
      return `
<div class="dim-item">
  <div class="dim-item-top">
    <div class="dim-item-name">${a.name}</div>
    <div class="dim-item-score">趋向：${toward}</div>
  </div>
  <div class="dim-track" role="presentation"><span class="dim-fill" style="width:${t}%"></span></div>
  <p>${explain}</p>
</div>`;
    })
    .join("");
}

function pickTags(answers, acc, sttiCode) {
  const seed = JSON.stringify(answers) + sttiCode;
  const rnd = seededRandom(seed);
  const tags = [];
  const [ei, sn, tf, jp] = acc;

  tags.push(TAG_POOL.uni);
  if (answers.q1 === 1) tags.push(TAG_POOL.night);
  if (answers.q1 === 2) tags.push(TAG_POOL.chaos);
  if (answers.q5 === 0) tags.push(TAG_POOL.social);
  if (answers.q5 === 2) tags.push(TAG_POOL.plan);
  if (answers.q6 === 2) tags.push(TAG_POOL.bold);
  if (answers.q9 === 0) tags.push(TAG_POOL.vibe);
  if (answers.q9 === 1) tags.push(TAG_POOL.solo);
  if (tf < -0.5 || answers.q6 === 1) tags.push(TAG_POOL.soft);
  if (answers.q10 === 0 || jp > 0.8) tags.push(TAG_POOL.plan);
  if (answers.q10 === 2 || sn > 1) tags.push(TAG_POOL.chaos);

  if (sttiCode === "ZB8") tags.push(TAG_POOL.night);
  if (sttiCode === "1T4") tags.push("PPT缝纫机武魂");
  if (sttiCode === "BL8") tags.push("明天一定（真的吗）");
  if (sttiCode === "SXY") tags.push(TAG_POOL.solo);
  if (sttiCode === "TDL") tags.push(TAG_POOL.plan);
  if (sttiCode === "GJ8") tags.push(TAG_POOL.bold);
  if (sttiCode === "JHBH") tags.push(TAG_POOL.vibe);
  if (sttiCode === "6L6") tags.push("人格加载失败（玩笑）");

  const uniq = [...new Set(tags)];
  while (uniq.length < 5) {
    const pool = Object.values(TAG_POOL);
    const t = pool[Math.floor(rnd() * pool.length)];
    if (!uniq.includes(t)) uniq.push(t);
  }
  return uniq.slice(0, 7);
}

function avatarSvg(seedStr) {
  const rnd = seededRandom(seedStr);
  const hue1 = Math.floor(rnd() * 360);
  const hue2 = (hue1 + 40 + Math.floor(rnd() * 60)) % 360;
  const face = rnd();
  const eyeY = 92 + Math.floor(face * 6 - 3);
  const mouth = face > 0.55 ? "M 118 138 Q 138 154 158 138" : face > 0.25 ? "M 120 142 Q 138 132 156 142" : "M 124 148 H 152";
  const hairStyle = Math.floor(rnd() * 3);
  let hairPath = "";
  if (hairStyle === 0)
    hairPath = "M 78 118 C 70 72 208 72 198 118 C 205 140 205 156 138 146 C 78 154 74 138 78 118 Z";
  else if (hairStyle === 1)
    hairPath = "M 70 132 C 60 82 218 74 206 134 C 198 154 174 154 138 146 C 100 154 74 146 70 132 Z";
  else hairPath = "M 84 132 C 88 74 208 74 192 138 C 186 154 154 154 138 146 C 112 154 86 148 84 132 Z";

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276 320" width="276" height="320" role="img" aria-label="STTI 学生孪梗指标分身形象">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="hsl(${hue1}, 85%, 92%)"/>
      <stop offset="100%" stop-color="hsl(${hue2}, 70%, 88%)"/>
    </linearGradient>
    <linearGradient id="face" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="hsl(${hue1}, 35%, 96%)"/>
      <stop offset="100%" stop-color="hsl(${hue1}, 28%, 90%)"/>
    </linearGradient>
  </defs>
  <rect width="276" height="320" rx="18" fill="url(#bg)"/>
  <path d="${hairPath}" fill="hsl(${(hue2 + 180) % 360}, 45%, 22%)" opacity="0.95"/>
  <ellipse cx="138" cy="128" rx="58" ry="64" fill="url(#face)" stroke="rgba(0,0,0,0.06)" stroke-width="2"/>
  <ellipse cx="112" cy="${eyeY}" rx="7" ry="9" fill="#1e2026"/>
  <ellipse cx="164" cy="${eyeY}" rx="7" ry="9" fill="#1e2026"/>
  <path d="${mouth}" fill="none" stroke="#1e2026" stroke-width="4" stroke-linecap="round"/>
  <rect x="44" y="198" width="188" height="56" rx="14" fill="rgba(255,255,255,0.55)" stroke="rgba(0,0,0,0.06)"/>
  <text x="138" y="232" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="#32313a">STTI 学生孪梗 · 分身</text>
</svg>`.trim();
}

function buildSocialCopy(nickname, mbti, twin, tags, careers) {
  const who = nickname.trim() || "神秘同学";
  const tagLine = tags.slice(0, 5).join(" · ");
  const moment = `${who} 刚测完 STTI（Student Twin Type Indicator，ST=Student；学生孪梗指标），校园梗分身【${twin.code}｜${twin.cn}】，娱乐向 MBTI：${mbti}。标签：${tagLine}。声明：纯属玩耍，不构成任何专业判断。`;

  const xhsTitle = `大学生精神状态问卷｜我测出了 ${twin.code} ${twin.cn}`;
  const xhsBody = `刚做完「STTI — 学生孪梗指标」✨全名 Student Twin Type Indicator（ST=Student 缩写，TI=Type Indicator）。面向大学生的静态脑洞站，版式碰瓷 SBTI 那种。\n\n我的校园梗分身：${twin.code}｜${twin.cn}\n娱乐向 MBTI：${mbti}\n标签：${tagLine}\n\n职业脑洞（拍着玩）：\n- ${careers[0]}\n- ${careers[1]}\n\n一句话：${twin.intro}\n\n⚠️ 娱乐测试，别太当真。\n\n#STTI #学生孪梗 #大学生 #校园梗 #小组作业 #早八 #MBTI玩梗`;

  return { moment, xhsTitle, xhsBody };
}

const appState = {
  answers: {},
  nickname: "",
  shuffledQuestions: [...QUESTIONS],
};

function shuffleQuestions() {
  const arr = [...QUESTIONS];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  appState.shuffledQuestions = arr;
  appState.answers = {};
}

function openTestLayer() {
  const layer = document.getElementById("testLayer");
  layer.classList.add("active");
  layer.setAttribute("aria-hidden", "false");
  document.body.classList.add("test-layer-open");
  showScreen("test");
  shuffleQuestions();
  renderQuiz();
  document.querySelector(".test-layer-scroll").scrollTop = 0;
}

function closeTestLayer() {
  const layer = document.getElementById("testLayer");
  layer.classList.remove("active");
  layer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("test-layer-open");
}

function showScreen(name) {
  ["test", "result"].forEach((key) => {
    const el = document.getElementById(key);
    if (el) el.classList.toggle("active", key === name);
  });
  const scroller = document.querySelector(".test-layer-scroll");
  if (scroller) scroller.scrollTop = 0;
}

function renderQuiz() {
  const list = document.getElementById("questionList");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const submitBtn = document.getElementById("submitBtn");
  const hint = document.getElementById("testHint");

  list.innerHTML = "";
  appState.shuffledQuestions.forEach((q, index) => {
    const card = document.createElement("article");
    card.className = "question";
    const picked = appState.answers[q.id];
    card.innerHTML = `
      <div class="question-meta">
        <div class="badge">第 ${index + 1} 题</div>
        <div class="badge">大学校园梗维度</div>
      </div>
      <div class="question-title">${q.text}</div>
      <div class="options">
        ${q.options
          .map((opt, i) => {
            const code = ["A", "B", "C"][i];
            const checked = picked === i ? "checked" : "";
            return `
            <label class="option">
              <input type="radio" name="${q.id}" value="${i}" ${checked} />
              <span class="option-code">${code}</span>
              <span class="option-label">${opt.label}</span>
            </label>`;
          })
          .join("")}
      </div>`;
    list.appendChild(card);
  });

  list.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", (e) => {
      appState.answers[e.target.name] = Number(e.target.value);
      updateProgress();
    });
  });

  function updateProgress() {
    const total = appState.shuffledQuestions.length;
    const done = appState.shuffledQuestions.filter((q) => appState.answers[q.id] != null).length;
    const pct = total ? (done / total) * 100 : 0;
    progressBar.style.width = pct + "%";
    progressText.textContent = `${done} / ${total}`;
    const complete = done === total && total > 0;
    submitBtn.disabled = !complete;
    hint.textContent = complete
      ? "都做完了。点「提交并查看结果」认领你的大学校园梗分身。"
      : "全选完才会放行。世界已经够乱了，起码把题做完整。";
  }
  updateProgress();
}

function persistNickname() {
  const input = document.getElementById("nicknameInput");
  appState.nickname = input.value.trim().slice(0, 24);
  try {
    localStorage.setItem(NS + ":nick", appState.nickname);
  } catch (_) {}
}

function loadNickname() {
  try {
    const v = localStorage.getItem(NS + ":nick");
    if (v) appState.nickname = v;
  } catch (_) {}
  try {
    const legacy = localStorage.getItem("sdti:v1:nick");
    if (legacy && !appState.nickname) appState.nickname = legacy;
  } catch (_) {}
  const input = document.getElementById("nicknameInput");
  if (input) input.value = appState.nickname;
}

function computeAndRenderResult() {
  persistNickname();
  const acc = sumScores(appState.answers);
  const mbti = mbtiFromAcc(acc);
  const picked = pickSttiType(appState.answers);
  const twin = picked.twin;
  const tags = pickTags(appState.answers, acc, twin.code);
  const careers = CAREERS_BY_STTI[twin.code] || CAREERS_BY_STTI["6L6"];
  const seed = JSON.stringify({ a: appState.answers, o: appState.shuffledQuestions.map((q) => q.id).join("|") });

  document.getElementById("avatarSlot").innerHTML = avatarSvg(seed);
  document.getElementById("posterCaption").textContent = `种子已烘焙：${twin.code} 专属简笔画分身`;

  const kickerEl = document.getElementById("resultModeKicker");
  kickerEl.textContent = picked.pickedKey === "6L6" ? "系统兜底" : "你的主类型";

  document.getElementById("resultTypeName").textContent = `${twin.code}（${twin.cn}）`;
  document.getElementById("matchBadge").textContent = `校园梗匹配度 ${picked.matchPct}% · 娱乐 MBTI：${mbti}`;

  const introShort = twin.intro.length > 200 ? twin.intro.slice(0, 200).trimEnd() + "…" : twin.intro;
  document.getElementById("resultTypeSub").textContent = introShort;

  document.getElementById("resultDesc").textContent = twin.desc;

  document.getElementById("dimList").innerHTML = renderDimList(acc);

  const tagRow = document.getElementById("tagRow");
  tagRow.innerHTML = "";
  tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tagRow.appendChild(span);
  });

  document.getElementById("careerBlock").innerHTML = careers.map((c) => `<p class="career-line">• ${c}</p>`).join("");

  const nick = document.getElementById("nicknameInput").value.trim() || "神秘同学";
  const copy = buildSocialCopy(nick, mbti, twin, tags, careers);
  document.getElementById("momentCopy").textContent = copy.moment;
  document.getElementById("xhsCopy").textContent = `【标题】${copy.xhsTitle}\n\n${copy.xhsBody}`;

  setupCopyButtons();
  showScreen("result");
}

function setupCopyButtons() {
  document.querySelectorAll("[data-copy-target]").forEach((btn) => {
    btn.replaceWith(btn.cloneNode(true));
  });
  document.querySelectorAll("[data-copy-target]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-copy-target");
      const text = document.getElementById(id).textContent;
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "已复制";
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = "复制";
          btn.classList.remove("copied");
        }, 1600);
      } catch {
        btn.textContent = "可复制失败";
      }
    });
  });
}

function wireHandlers() {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.addEventListener("click", openTestLayer);

  document.querySelectorAll("[data-open-test]").forEach((el) => el.addEventListener("click", openTestLayer));

  document.getElementById("testLayerCloseBtn").addEventListener("click", closeTestLayer);
  document.getElementById("backIntroBtn").addEventListener("click", closeTestLayer);

  document.getElementById("submitBtn").addEventListener("click", () => computeAndRenderResult());

  document.getElementById("restartBtn").addEventListener("click", () => {
    shuffleQuestions();
    showScreen("test");
    renderQuiz();
  });

  document.getElementById("toTopBtn").addEventListener("click", () => {
    closeTestLayer();
    const start = document.getElementById("start");
    if (start) start.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const nick = document.getElementById("nicknameInput");
  if (nick) {
    nick.addEventListener("input", persistNickname);
  }
}

loadNickname();
wireHandlers();
