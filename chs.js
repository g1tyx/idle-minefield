/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单位的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "How to Play": "玩法",
    "Reset": "重置",
    "Research": "研究",
    "Spy": "间谍",
    "Sniper": "狙击手",
    "What's new?": "新内容？",
    "Tank": "坦克",
    "Submarine": "潜艇",
    "Sell Mines": "出售地雷",
    "Solid Light Constructs": "实体灯结构",
    "Unlocks": "解锁",
    "Upgrades": "升级",
    "Weaponized COVID-19": "武器化 COVID-19",
    "When the game is won, the player is granted flags equal to the number of mines that were flagged. Larger sized Minefields grant more flags per mine.": "当游戏获胜时，玩家将获得与标记的地雷数量相等的旗帜。 更大的雷区为每个地雷提供更多的旗帜。",
    "Winning and Losing:": "赢与输：",
    "Military": "军事",
    "Join the Discord!": "加入 Discord!",
    "- Added an Auto Seller Update": "- 添加了自动出售者更新",
    "- Added this Change Log": "- 添加了此更改日志",
    "- Fixed a Bug Preventing Reputation from Being Displayed": "- 修正了阻止显示声誉的错误",
    "- Removed popups when player cannot afford an upgrade (In future I will make the buttons inactive when the player cannot afford the upgrade)": "- 当玩家负担不起升级时删除弹出窗口（将来我会在玩家负担不起升级时使按钮处于非活动状态）",
    "(10) NATO Member": "(10) 北约成员国",
    "(20) Neutral Country": "(20) 中立国",
    "(30) Warsaw Pact Member": "(30) 华沙条约组织成员",
    "Adaptive Learning AI": "自适应学习人工智能",
    "Adaptive Shielding": "自适应屏蔽",
    "Advanced Avionics": "先进航空电子设备",
    "Advanced Combat Suit": "高级战斗服",
    "Advanced Targeting": "高级定位",
    "Advanced Targeting Systems": "高级瞄准系统",
    "Advanced Torpedo System": "先进的鱼雷系统",
    "Advanced Viruses": "高级病毒",
    "Advanced Weaponry": "先进武器装备",
    "AI Autopilot & Defense": "人工智能自动驾驶与防御",
    "AI Controlled Cyberwarfare": "人工智能控制的网络战",
    "Air Burst Capability": "空爆能力",
    "Anti-Material Rifle": "反器材步枪",
    "Apocalyptic Strain": "世界末日应变",
    "Artillery Platform": "火炮平台",
    "Attack Helicopters": "攻击直升机",
    "Auto Seller": "自动出售者",
    "Automated Defense System": "自动防御系统",
    "Automated Repair Drones": "自动维修无人机",
    "Automatically sells mines for $20ea": "自动以 $20 的价格出售地雷",
    "Autonomous Mortar System": "自主迫击炮系统",
    "Autonomous Peacekeeping Fleet": "自主维和舰队",
    "Autonomous Robot Army": "自主机器人军队",
    "Autonomous Swarm Bombers": "自主蜂群轰炸机",
    "Basic Military Training": "基础军事训练",
    "Become an arms dealer": "成为军火商",
    "Biochemical Payload": "生化载荷",
    "Bomber": "轰炸机",
    "Brainwashed Super Soldiers": "被洗脑的超级士兵",
    "Buy for": "购买花费",
    "Buy for $": "购买花费 $",
    "Chat GPT Powered Killer Robot": "聊天 GPT 驱动的杀手机器人",
    "Child Soldier": "童子军",
    "Click on any square in the grid to start the game.": "单击网格中的任何方块即可开始游戏。",
    "Cloaking Technology": "隐形技术",
    "Combat Ready Equipment": "战备装备",
    "Cyber Warfare Unit": "网络战单位",
    "Cybernetic Implants": "控制论植入物",
    "Death Star": "死星",
    "Doubles AI-Powered Killer Robots Military Power Per Second": "每秒将 AI 驱动的杀手机器人军事力量翻倍",
    "Doubles Artillery Platforms Military Power Per Second": "双倍火炮平台每秒军事力量",
    "Doubles Attack Helicopters Military Power Per Second": "双倍攻击直升机每秒军事力量",
    "Doubles Bomber Military Power Per Second": "每秒使轰炸机军事力量翻倍",
    "Doubles Child Soldiers Military Power Per Second": "双倍儿童兵每秒军事力量",
    "Doubles Cyber Warfare Unit Military Power Per Second": "使网络战单位的每秒军事力量翻倍",
    "Doubles Death Stars Military Power Per Second": "每秒双倍死星军事力量",
    "Doubles decoy Decoy Units Military Power Per Second": "双倍诱饵 诱饵单位每秒军事力量",
    "Doubles droid Droids Military Power Per Second": "双打 droid Droids Military Power Per Second",
    "Doubles Drones Military Power Per Second": "每秒使无人机的军事力量翻倍",
    "Doubles EMP Devices Military Power Per Second": "每秒 EMP 设备军事力量加倍",
    "Doubles Field Engineers Military Power Per Second": "双倍战地工程师每秒军事力量",
    "Doubles Fighter Jet Military Power Per Second": "每秒使喷气式战斗机的军事力量翻倍",
    "Doubles Infantry Military Power Per Second": "每秒双倍步兵军事力量",
    "Doubles Land Mines Military Power Per Second": "每秒地雷军事力量加倍",
    "Doubles medic Medics Military Power Per Second": "双倍军医每秒军力",
    "Doubles Mind Control Devices Military Power Per Second": "每秒双倍的精神控制设备军事力量",
    "Doubles Mortar Team Military Power Per Second": "双倍迫击炮队每秒军事力量",
    "Doubles Napalm Military Power Per Second": "每秒加倍凝固汽油弹的军事力量",
    "Doubles nuke Warhead Military Power Per Second": "双倍核武器弹头每秒军事力量",
    "Doubles platform Bombardment Platforms Military Power Per Second": "双平台轰炸平台每秒军事力量",
    "Doubles Shield Generators Military Power Per Second": "双倍护盾发生器每秒军事力量",
    "Doubles Snipers Military Power Per Second": "双倍狙击手每秒军事力量",
    "Doubles Spy Military Power Per Second": "每秒使间谍军事力量翻倍",
    "Doubles Stealth Aircraft Military Power Per Second": "双倍隐形飞机每秒军事力量",
    "Doubles Submarine Military Power Per Second": "每秒使潜艇军事力量翻倍",
    "Doubles Tank Military Power Per Second": "每秒加倍坦克军事力量",
    "Doubles Weaponized Covid-19 Military Power Per Second": "每秒使武器化的 Covid-19 军事力量翻倍",
    "Drone": "无人机",
    "Each retriever has a 10% chance to retrieve a flagged mine": "每只猎犬都有 10% 的机会捡到标记的地雷",
    "EMP Defense": "电磁脉冲防御",
    "EMP Device": "电磁脉冲装置",
    "Enhanced Covert Tools": "增强型隐蔽工具",
    "Enhanced Healing Speed": "增强的愈合速度",
    "Enhanced Non-Lethal Weapons": "增强型非致命武器",
    "Enhanced Projectors": "增强型投影仪",
    "Enhanced Stealth": "增强隐身性",
    "Enhanced Training": "强化训练",
    "Extended Range": "扩展范围",
    "Faster Recharge": "更快的充电",
    "Faster Repair Tools": "更快的维修工具",
    "Field Engineer": "现场工程师",
    "Fighter Jet": "战斗机",
    "Flagging Mines:": "标记地雷：",
    "flags": "旗帜",
    "Flags are awarded to the player when the game resets. Players are given one flag per mine flagged at the start. Later in the game, each invasion increases the flags awarded by one.": "当游戏重置时，旗帜将授予玩家。 开始时，每个标记的地雷都会给玩家一面旗帜。 在游戏的后期，每次入侵都会增加一面旗帜。",
    "Flags one mine every 5 seconds": "每 5 秒标记一个地雷",
    "Full Body Regeneration": "全身再生",
    "Global EMP": "全球电磁脉冲",
    "Global Hypnosis Device": "全球催眠装置",
    "Holographic Decoy Units": "全息诱饵单位",
    "How to Play - Player Resources": "玩法 - 玩家资源",
    "How to Play - The Basics": "玩法 - 基础知识",
    "Hypersonic Speed": "超音速",
    "idleMinefield is an incremental game loosely based on the puzzle game \"Minesweeper\".": "雷区放置 是一款基于益智游戏“扫雷”的增量放置游戏。",
    "idleMinefield v0.1.2 (Beta)": "idleMinefield v0.1.2（测试版）",
    "idleMinefield v0.1.2 (Beta) -": "idleMinefield v0.1.2（测试版）-",
    "If an uncovered square has a number and there are exactly that many flags surrounding it, all other adjacent squares are safe to uncover.": "如果一个未被覆盖的方块有一个数字，并且它周围正好有那么多旗帜，那么所有其他相邻的方块都可以安全地被覆盖。",
    "If you think a square contains a mine, you can right-click (or depending on the version, a long touch) to place a flag on it. This serves as a reminder that you believe a mine is there and prevents accidental clicks on that square.": "如果您认为某个方块包含地雷，您可以右键单击（或根据版本长按）在其上放置一面旗帜。 这可以提醒您，您认为那里有地雷，并防止意外点击该方块。",
    "If you uncover a square that doesn't contain a mine, you'll see a number. This number tells you how many mines are present in the eight squares that surround it. This information is used to deduce where mines exist in the grid.": "如果你发现一个没有地雷的方块，你会看到一个数字。 这个数字告诉您它周围的八个方块中有多少地雷。 此信息用于推断网格中存在地雷的位置。",
    "Improved Defense Systems": "改进的防御系统",
    "Increased Burn Time": "增加燃烧时间",
    "Increased Caliber": "增加口径",
    "Increased Payload": "增加有效载荷",
    "Increased Radius": "增加半径",
    "Increased Range": "增加范围",
    "Increased Virulence": "毒力增加",
    "Infantry Soldier": "步兵",
    "Invade a Nation": "入侵一个国家",
    "Invade for": "入侵花费",
    "Land Mine": "地雷",
    "Mass Control": "质量控制",
    "Mechanical Exosuit": "机械套装",
    "medic Replication": "军医复制",
    "Military Power": "军事力量",
    "Military Power is used to invade nations, giving you more land to sweep for mines (larger grid). A larger grid also retruns more mines and flags!": "军事力量用于入侵国家，为您提供更多土地来扫雷（更大的网格）。 更大的网格也会重新运行更多的地雷和旗帜！",
    "Mind Control Device": "精神控制装置",
    "Mine Flagger": "地雷旗手",
    "Mine Replenisher": "地雷补给器",
    "Mine Retriever": "探雷犬",
    "Mine Sales": "地雷销售",
    "Mine Sweeper": "扫雷车",
    "Mines can be removed from the grid after unlocking the mine retrival upgrade. Mines can be sold for money, some groups may buy mines for more money, however selling to they might ruin your reputation.": "解锁地雷回收升级后，地雷可以从网格中移除。 地雷可以卖钱，有些团体可能会为了更多的钱买地雷，但是卖给他们可能会毁了你的声誉。",
    "Money is gained by selling mines, and can be used to purchase military units and upgrades.": "钱是通过出售地雷获得的，可用于购买军事单位和升级。",
    "More Land, More Mines!": "更多土地，更多地雷！",
    "Mortar Team": "迫击炮队",
    "Multi-Planet Destruction Beam": "多行星毁灭光束",
    "Multiple Independently Targetable Reentry Vehicle (MIRV)": "多个独立目标再入飞行器（MIRV）",
    "Nanobot Medics": "纳米机器人医生",
    "Napalm": "凝固汽油弹",
    "Noise Reduction Systems": "降噪系统",
    "Nuclear Warhead": "核弹头",
    "Objective:": "客观的：",
    "Orbital Bombardment Platforms": "轨道轰炸平台",
    "Orbital Sniper Support": "轨道狙击支援",
    "Peacekeeper Droid": "维和机器人",
    "Planetary Annihilation Capability": "行星歼灭能力",
    "Planetary Shielding": "行星屏蔽",
    "Power Efficiency Increase": "电源效率提高",
    "Precision Bombing": "精确轰炸",
    "Precision Munitions": "精确弹药",
    "Precision Targeting": "精确瞄准",
    "Quantum Cloaking": "量子隐形",
    "Quantum Hacking": "量子黑客",
    "Reactive Armor": "反应装甲",
    "Remote Activation": "远程激活",
    "Reputation is gained and lost by selling mines to various countries. Having exceptionally low or high reputation unlocks some unique upgrades.": "通过向不同国家出售地雷来获得和失去声誉。 拥有特别低或高的声誉可以解锁一些独特的升级。",
    "Resets the game automatically": "自动重置游戏",
    "Resistance to Current Vaccines": "对当前疫苗的抗性",
    "Reveals one cell every second": "每秒显示一个方块",
    "Satellite Guided Artillery": "卫星制导火炮",
    "Selective Targeting": "选择性瞄准",
    "Self-Reactive AI": "自反应人工智能",
    "Self-Repair Systems": "自我修复系统",
    "Self-Replicating Nanobot Armor": "自我复制的纳米机器人装甲",
    "Sell your retrieved mines to different countries": "将您回收的地雷卖给不同的国家",
    "Shield Generator": "护盾发生器",
    "Silenced Rifle": "消音步枪",
    "Stealth & nuke Capabilities": "隐形和核武器能力",
    "Stealth Aircraft": "隐形飞机",
    "Stealth Camouflage": "隐形迷彩",
    "Stealth Capabilities": "隐身能力",
    "Stealth Technology": "隐形技术",
    "Super Soldier Hybrid": "超级士兵混合体",
    "Swarm Intelligence": "群体智能",
    "The game is won when all mine squares are flagged.": "当所有地雷方块都被标记时，游戏获胜。",
    "The goal of the game is to uncover all the squares that do not contain mines without detonating any mines.": "游戏的目标是在不引爆任何地雷的情况下，揭开所有没有地雷的方块。",
    "Thermobaric Upgrade": "温压升级",
    "Uncovering Squares:": "揭开方块：",
    "Yield Increase": "产量增加",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Military Power:": "军事力量：",
    "Flags:": "旗帜: ",
    "Money:": "钱: ",
    "Mines:": "地雷: ",
    "Reputation:": "声誉：",
    "Safe Squares:": "安全方块：",
    "Scoring:": "得分：",
    "Starting the Game:": "开始游戏：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " Change Log ▼": " 更新日志 ▼",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^每秒(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
    /^ ([\d\.]+)k$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)b$/,
    /^([\d\.]+)q$/,
    /^([\d\.]+)t$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^ ([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Military Power ⚔: (.+) \((.+)\/s\)$/, '军事力量 ⚔: $1 \($2\/秒\)'],
    [/^Generates (.+) Military Power Per Second$/, '每秒产生 $1 军事力量'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);