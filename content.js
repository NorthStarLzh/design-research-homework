/*
 * 网站内容编辑入口
 *
 * 本页集中维护公开网页的文字、图片与链接。
 */

window.SITE_CONTENT = {
  site: {
    title: "设计研究的三条知识路径",
    shortTitle: "设计研究",
    kicker: "设计研究 · 类型、案例与分类讨论",
    description:
      "以设计实践为中心，梳理“对设计”“为设计”与“通过设计”三种研究类型，呈现它们如何在解释、支持与探索之间持续生成知识。",
    members: ["林璟如", "胡咏琪", "刘子恒", "蔡诗彬", "王恺"],
    primaryAction: { label: "阅读三种类型", href: "#research-types" },
    secondaryAction: { label: "查看逻辑关系", href: "#logic-map" },
    footerNote: "设计研究的三条知识路径 · 林璟如、胡咏琪、刘子恒、蔡诗彬、王恺",
  },

  navigation: [
    { label: "三种类型", href: "#research-types" },
    { label: "逻辑关系", href: "#logic-map" },
    { label: "研究图解", href: "#visual-notes" },
    { label: "论文实例", href: "#example-papers" },
    { label: "争议论文", href: "#controversial-paper" },
    { label: "分类讨论", href: "#classification-discussion" },
    { label: "参考文献", href: "#references" },
  ],

  researchTypes: {
    kicker: "01 · 类型框架",
    title: "同一“设计实践”的三种研究取向",
    description: "区分关键不在于有没有做设计，而在于设计在研究中承担什么角色、研究最终要产生哪一类知识。",
    items: [
      {
        id: "into-design",
        number: "01",
        title: "对设计的研究",
        summary: "将设计本身作为研究对象，通过观察、分析、解释与理论化，理解设计如何发生、运作并产生影响。",
        fields: [
          { label: "核心目的", value: "揭示设计本质、认知规律与社会组织作用，构建设计学的显性知识、概念体系与理论边界。" },
          { label: "设计角色", value: "研究对象／研究客体：可从认知与心智、行为与过程、历史与文化、组织与战略等维度被审视。" },
          { label: "常用路径", value: "言语报告与行为记录、过程观察、多模态数据、历史／文化／社会分析，以及理论模型建构。" },
          { label: "知识贡献", value: "形成关于设计机制的解释、模型与理论，使原本依赖经验和直觉的实践变得可描述、比较、讨论与传授。" },
        ],
      },
      {
        id: "for-design",
        number: "02",
        title: "为设计的研究",
        summary: "以支持和改善设计实践为核心，为设计决策、方案生成、实施与评估提供可应用的知识、方法、工具和证据。",
        fields: [
          { label: "核心目的", value: "支持高质量成果形成，提升证据基础并降低风险，形成可直接进入实践的方法、工具与指导知识。" },
          { label: "设计角色", value: "实践目标、应用场景与效用检验对象：研究结果是否有价值，要看它能否切实帮助设计活动。" },
          { label: "常用路径", value: "用户／市场／趋势／情境研究，技术评估、实验测试、数据分析，以及设计工具与评价框架开发。" },
          { label: "知识贡献", value: "把洞察与理论转化为可调用的中间层知识，如原则、指南、流程、指标、设计系统、工具箱和 AI 辅助工具。" },
        ],
      },
      {
        id: "through-design",
        number: "03",
        title: "通过设计的研究",
        summary: "将设计实践、原型构建与反思性介入作为探究世界和生成知识的方式，用于复杂、开放或未知情境。",
        fields: [
          { label: "核心目的", value: "通过制作、部署与反思生成情境化知识；探索未知问题、未来可能性，并在实践中重构复杂问题。" },
          { label: "设计角色", value: "核心研究手段、探究媒介与知识载体：设计制品可把抽象判断物化为可体验、可讨论的对象。" },
          { label: "常用路径", value: "原型构建、设计实验、真实情境介入、参与式探索与反思，并在“设计—实施—观察—再设计”中迭代。" },
          { label: "知识贡献", value: "生成具身化与情境化知识，揭示技术、社会和未来情境中的新问题、关系、风险与干预路径。" },
        ],
      },
    ],
  },

  logicMap: {
    kicker: "02 · 关系图",
    title: "从现实问题到设计知识的循环",
    description: "以“设计实践”为中心，三种研究在解释、支持与探索等不同知识目标下形成持续反馈。",
    help: "选择节点，查看其在知识循环中的角色。",
    canvas: { width: 1000, height: 720 },
    rootId: "design-practice",
    nodes: [
      {
        id: "real-world",
        label: "现实世界的问题",
        shortLabel: "现实问题",
        description: "社会、用户、技术、市场与环境中的问题与需求进入设计实践，成为设计活动和研究的起点。",
        position: { x: 500, y: 68 },
      },
      {
        id: "design-practice",
        label: "设计实践",
        shortLabel: "设计实践",
        description: "设计实践涵盖问题界定、构想、原型与方案探索、测试、情境介入和迭代完善。它既可能被研究，也可能被研究支持或作为研究方法。",
        position: { x: 500, y: 264 },
      },
      {
        id: "into-design",
        label: "对设计的研究",
        shortLabel: "对设计",
        description: "把设计实践及其认知、过程、文化和组织作用作为对象，解释设计规律并形成理论理解。",
        position: { x: 148, y: 438 },
      },
      {
        id: "for-design",
        label: "为设计的研究",
        shortLabel: "为设计",
        description: "把知识、方法、工具和证据转化为设计支持，服务于设计过程中的决策、实施、评价和改进。",
        position: { x: 852, y: 438 },
      },
      {
        id: "through-design",
        label: "通过设计的研究",
        shortLabel: "通过设计",
        description: "将原型、实践与情境介入作为探究方式，在制作、使用与反思中发现新问题并生成新知识。",
        position: { x: 500, y: 514 },
      },
      {
        id: "design-knowledge",
        label: "设计知识与影响",
        shortLabel: "设计知识",
        description: "研究产生解释性理论、可应用工具、情境化洞察及由此形成的产品、服务、系统与设计规范，并反过来推动下一轮设计实践。",
        position: { x: 500, y: 658 },
      },
    ],
    links: [
      { from: "real-world", to: "design-practice", label: "问题与需求" },
      { from: "design-practice", to: "into-design", label: "被观察与解释" },
      { from: "design-practice", to: "for-design", label: "提出支持需求" },
      { from: "design-practice", to: "through-design", label: "作为探究方式" },
      { from: "into-design", to: "design-knowledge", label: "规律与理论" },
      { from: "for-design", to: "design-knowledge", label: "方法与工具" },
      { from: "through-design", to: "design-knowledge", label: "情境化洞察" },
      { from: "design-knowledge", to: "design-practice", label: "反哺与迭代", bend: -220 },
    ],
    sourceFigure: {
      src: "assets/research-figures/logic-map-original.png",
      alt: "三种设计研究类型逻辑关系图：现实问题进入设计实践，三类研究围绕设计实践产生理论、工具与新知识并形成反馈。",
      caption: "三种设计研究围绕设计实践形成的整体关系。",
    },
  },

  visualNotes: {
    kicker: "研究图解",
    title: "目的、角色与知识贡献的视觉笔记",
    description: "从研究目的、设计角色与知识贡献三个维度比较三种设计研究取向。",
    groups: [
      {
        title: "对设计的研究",
        description: "关注设计本身如何被解释、建模和理论化。",
        images: [
          { src: "assets/research-figures/into-purpose.png", alt: "对设计的研究：研究目的图解。", caption: "研究目的" },
          { src: "assets/research-figures/into-role.png", alt: "对设计的研究：设计在研究中的角色图解。", caption: "设计在研究中的角色" },
          { src: "assets/research-figures/into-contribution.png", alt: "对设计的研究：主要知识贡献图解。", caption: "主要知识贡献" },
        ],
      },
      {
        title: "为设计的研究",
        description: "面向决策、实施与评价，为实践提供能够直接调用的支持。",
        images: [
          { src: "assets/research-figures/for-purpose.png", alt: "为设计的研究：研究目的图解。", caption: "研究目的" },
          { src: "assets/research-figures/for-role.png", alt: "为设计的研究：设计在研究中的角色图解。", caption: "设计在研究中的角色" },
          { src: "assets/research-figures/for-contribution.png", alt: "为设计的研究：主要知识贡献图解。", caption: "主要知识贡献" },
        ],
      },
      {
        title: "通过设计的研究",
        description: "借由制品、实践和反思，让未知问题与可能性进入可体验、可讨论的状态。",
        images: [
          { src: "assets/research-figures/through-purpose.png", alt: "通过设计的研究：研究目的图解。", caption: "研究目的" },
          { src: "assets/research-figures/through-role.png", alt: "通过设计的研究：设计在研究中的角色图解。", caption: "设计在研究中的角色" },
          { src: "assets/research-figures/through-contribution.png", alt: "通过设计的研究：主要知识贡献图解。", caption: "主要知识贡献" },
        ],
      },
    ],
  },

  examplePapers: {
    kicker: "03 · 论文实例",
    title: "三篇典型论文：从理解到支持，再到探索",
    description: "三项案例分别展示设计研究如何从理解、支持与探索中生成知识。",
    items: [
      {
        type: "对设计的研究 · Into",
        title: "How Visualization Designers Perceive and Use Inspiration",
        citation: "Baigelenov, A., Shukla, P., & Parsons, P. (2025). How Visualization Designers Perceive and Use Inspiration. Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1–13. DOI: 10.1145/3706598.3714191.",
        relevance: "以专业数据可视化从业者的灵感认知、搜寻与使用为研究对象，通过访谈与主题分析解释设计实践中灵感、模仿、所有权和职业身份之间的关系。",
        url: "https://doi.org/10.1145/3706598.3714191",
        figure: {
          src: "assets/research-figures/into-case-method.png",
          alt: "研究流程图：招募14名数据可视化从业者，开展远程半结构式访谈，并以混合主题分析从88个代码和8个主题收敛为56个代码和4个主题。",
          caption: "研究方法流程图",
          width: 2794,
          height: 777,
        },
        analysis: [
          { label: "研究问题", value: "可视化设计从业者如何在专业实践中理解、获取、筛选、转化与使用灵感？" },
          { label: "研究方法", value: "通过社交媒体、专业社群与个人网络招募14名数据可视化从业者，开展远程半结构式访谈，并以混合主题分析从88个代码、8个主题收敛为56个代码、4个主题。" },
          { label: "主要贡献", value: "描述灵感的来源、价值判断和使用方式；扩展灵感来源范围；揭示主动／被动获取、策展、转化、复制、分享与所有权协商并存的实践张力。" },
          { label: "研究局限", value: "便利抽样且样本规模为14人，多数经验处于低至中水平；资料依赖访谈自述，尚未结合现场观察、日记研究或设计探针。" },
          { label: "设计的角色", value: "设计既是被研究的对象，也是从业者经验与判断所构成的知识来源和知识生成场域；研究发现还可反哺工具、资源与设计教育。" },
          { label: "为何归入 Into", value: "研究的核心产出是理解和解释设计师如何感知、搜寻、转化与协商灵感，而非制造新设计成果或验证某个设计工具。" },
        ],
      },
      {
        type: "为设计的研究 · For",
        title: "DesignScape: Design with Interactive Layout Suggestions",
        citation: "O'Donovan, P., Agarwala, A., & Hertzmann, A. (2015). CHI '15, 1221–1224. DOI: 10.1145/2702123.2702149.",
        relevance: "将对齐、比例、位置等平面设计知识计算化，开发交互式布局建议工具，并用实际设计结果检验其对初学者的帮助。",
        url: "https://doi.org/10.1145/2702123.2702149",
        analysis: [
          { label: "研究问题", value: "如何通过自动布局分析和交互建议，降低初学者在平面布局探索、优化和方案比较中的门槛？" },
          { label: "研究方法", value: "将位置、比例、对齐、间距与重叠等原则表示为优化问题；实现建议式与自适应式界面，并以用户实验比较设计结果。" },
          { label: "主要贡献", value: "提出 refinement 与 brainstorming 两类建议，以及“算法生成候选方案—设计者评价和选择”的辅助设计框架。" },
          { label: "研究局限", value: "主要处理单页平面布局并以初学者为对象；最终设计质量的判断包含主观性，专业与复杂任务中的有效性仍需验证。" },
          { label: "为何归入 For", value: "研究以实践困难为起点，核心成果是能被设计者直接使用的模型、算法和交互工具，价值由其是否改善实际设计活动来检验。" },
        ],
      },
      {
        type: "通过设计的研究 · Through",
        title: "The Drift Table: Designing for Ludic Engagement",
        citation: "Gaver, W. W., Schmidt, A., Bowers, J., et al. (2004). CHI EA '04, 885–900. DOI: 10.1145/985921.985947.",
        relevance: "以 Drift Table 的设计、制作、家庭部署、观察与反思作为知识生成过程，让关于 ludic engagement 的理解随实践不断修正。",
        url: "https://doi.org/10.1145/985921.985947",
        analysis: [
          { label: "研究问题", value: "家庭交互技术如何支持由好奇、探索与反思驱动的 ludic activity；这一设计思想会怎样在真实使用中被重新理解？" },
          { label: "研究方法", value: "设计并制作以重量分布控制航空影像移动的 Drift Table，部署到志愿者家庭数周，通过观察、访谈和反馈持续反思。" },
          { label: "主要贡献", value: "将开放性、模糊性、缓慢探索与弱功利导向物化为可体验的制品，并通过长期使用扩展了对 ludic engagement 社会属性的理解。" },
          { label: "研究局限", value: "案例与部署情境高度具体，参与家庭数量有限；其知识需要连同制品、过程和反思一起理解，难以直接化约为普遍规则。" },
          { label: "为何归入 Through", value: "设计实践不是仅用于交付产品或验证外部理论：制品的制作、部署与反思本身就是提出问题、观察现象并形成研究认识的核心方法。" },
        ],
      },
    ],
  },

  controversialPaper: {
    kicker: "04 · 分类争议",
    title: "争议论文：一项人机共创研究如何跨越三种类型？",
    description: "分类的价值不在于强行给混合研究贴上唯一标签，而在于说明设计在不同阶段的角色与主要知识主张。",
    paperTitle: "Compositional Structures as Substrates for Human-AI Co-creation Environment: A Design Approach and A Case Study",
    type: "以 For 为主、含 Through 成分，并带有 Into 取向",
    citation: "Cao, Y., Huang, Y., Truong, A., et al. (2025). Compositional Structures as Substrates for Human-AI Co-creation Environment: A Design Approach and A Case Study. Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1–25. DOI: 10.1145/3706598.3713401.",
    prompt: "论文从文献与创作者工作流中识别构成结构，提出“识别—设计—聚合—嵌入 AI”的方法并实现 VideOrigami；它既提供面向实践的方法，也通过原型使用产生新发现，因此构成 For、Through 与 Into 成分交织的边界案例。",
    points: [
      { label: "Into 成分", value: "研究以既有创作系统、构成结构和创作者工作流为对象，分析内容组织、操作支持与跨结构同步的挑战。" },
      { label: "For 成分", value: "研究将55篇文献和创作者实践转译为四步设计方法、结构分类、同步原则和 AI 嵌入建议，直接服务于后续共创环境设计。" },
      { label: "Through 成分", value: "研究者构建 VideOrigami，并在两阶段创作任务、问卷与访谈中，通过原型的使用发现协作、评估成本与创作张力。" },
      { label: "为何非纯 Through", value: "原型主要用来实例化并评估预先提出的设计方法；反思性设计过程不是主要研究对象，核心产出仍是可迁移的设计框架与经验性评价。" },
      { label: "分类结论", value: "更适合表述为“以 For 为主、含 Through 成分，并带有 Into 取向”的交叉研究；其混合性正是分类讨论的对象。" },
    ],
    figure: {
      src: "assets/research-figures/boundary-case-method.png",
      alt: "研究方法与证据链图：跨领域文献和视频创作实践分析经由“识别—设计—聚合—嵌入 AI”四步方法发展 VideOrigami，再通过10名参与者的两阶段研究进行评估。",
      caption: "研究方法与证据链",
      width: 2565,
      height: 814,
    },
    url: "https://doi.org/10.1145/3706598.3713401",
  },

  discussion: {
    kicker: "05 · 分类讨论",
    title: "分类不是贴标签，而是追问知识如何产生",
    description: "同一个项目可能同时包含三种活动。归类时应优先判断研究的中心问题、设计的角色、主要证据与最终知识贡献。",
    items: [
      {
        number: "A",
        title: "先问：设计在研究中做什么？",
        text: "当设计主要被观察、解释和建模时，倾向于 Into；当研究成果被用来支撑决策、实施或评价时，倾向于 For；当设计实践、制品与反思本身承担探究任务时，倾向于 Through。",
      },
      {
        number: "B",
        title: "再问：研究最终交付什么知识？",
        text: "理论模型、认知解释和历史／社会分析更接近 Into；可操作的方法、工具与证据框架更接近 For；由制品、部署和反思生成的情境化洞察更接近 Through。",
      },
      {
        number: "C",
        title: "类型可以交叉，但主导目标需清楚",
        text: "以 AI 设计工具为例，开发工具并验证其效用通常是 For；若研究者借工具原型探测未知工作关系并由实践形成理论，则可能转向 Through；观察设计师如何使用工具则又可能成为 Into。",
      },
      {
        number: "D",
        title: "分类的边界与局限",
        text: "三分法提供的是理解研究取向的透镜，而非绝对互斥的工序清单。复杂项目会在解释、支持与探索之间流动；VideOrigami 正说明应以主要知识主张与证据链判断主导取向。",
      },
    ],
  },

  references: {
    kicker: "06 · 参考文献",
    title: "参考文献",
    description: "三类框架、论文案例与分类讨论的主要来源。",
    items: [
      {
        text: "Frayling, C. (1993/4). Research in Art and Design. Royal College of Art Research Papers, 1(1), 1–5.",
        url: "https://researchonline.rca.ac.uk/384/",
      },
      {
        text: "Baigelenov, A., Shukla, P., & Parsons, P. (2025). How Visualization Designers Perceive and Use Inspiration. Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1–13. https://doi.org/10.1145/3706598.3714191",
        url: "https://doi.org/10.1145/3706598.3714191",
      },
      {
        text: "O'Donovan, P., Agarwala, A., & Hertzmann, A. (2015). DesignScape: Design with Interactive Layout Suggestions. Proceedings of CHI '15, 1221–1224. https://doi.org/10.1145/2702123.2702149",
        url: "https://doi.org/10.1145/2702123.2702149",
      },
      {
        text: "Gaver, W. W., Schmidt, A., Bowers, J., et al. (2004). The Drift Table: Designing for Ludic Engagement. CHI EA '04, 885–900. https://doi.org/10.1145/985921.985947",
        url: "https://doi.org/10.1145/985921.985947",
      },
      {
        text: "Cao, Y., Huang, Y., Truong, A., et al. (2025). Compositional Structures as Substrates for Human-AI Co-creation Environment: A Design Approach and A Case Study. Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems, 1–25. https://doi.org/10.1145/3706598.3713401",
        url: "https://doi.org/10.1145/3706598.3713401",
      },
    ],
  },
};
