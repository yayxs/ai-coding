export interface AiTool {
  logoComponent?: string; // 存储logo组件名称
  whatsTheName: string; // 这个产品的名字是什么，不管是编辑器还是网站还是什么
  urlLink: string; // 这个产品网站的链接
  description: string; // 这个产品的简单描述
  company?: string; // 开发这个产品的公司
  // 产品作者
  // 使用的方式，是浏览器中使用还是VSCode扩展还是编辑器
  howToUseType:
    | 'Browser-based'
    | 'Extension'
    | 'Editor'
    | 'Terminal'
    | 'AI software engineer'
    | 'Other'
    | 'Git';
  // 分级
  grading?: 'L1' | 'L2' | 'L3' | 'L4' | 'L5';
  outputType?: 
    | 'DailyCoding' // 日常编码，如 Cursor、Windsurf、Trae
    | 'WebApp' // Web应用，如 bolt、v0、lovable
    | 'Backend' // 后端服务，如 Devv Builder
    | 'Terminal' // 终端增强，如 Warp、Aider
    | 'Infrastructure' // 基础设施，如 CodeFuse
    | 'Documentation'  // 添加新的类型：项目文档
    | 'MobileApp'        // 新增：移动 App
    | 'FrontEndComponent' // 新增：生成前端组件
    | 'Other';
}

export const aiTools: AiTool[] = [
  {
    logoComponent: 'Cursor',
    whatsTheName: 'Cursor',
    urlLink: 'https://www.cursor.com/',
    description: 'The most powerful AI native code editor in the universe',
    company: 'Anysphere',
    howToUseType: 'Editor',
    grading: 'L2',
    outputType: 'DailyCoding',
  },
  {
    whatsTheName: 'Windsurf',
    urlLink: 'https://codeium.com/',
    description: 'Was launched by Codeium on November 14, 2024',
    company: 'Codeium',
    howToUseType: 'Editor',
    grading: 'L2',
    outputType: 'DailyCoding',
  },
  {
    whatsTheName: 'Trae',
    urlLink: 'https://www.trae.ai/',
    description: 'Mac and Windows are both supported',
    company: 'ByteDance',
    howToUseType: 'Editor',
    grading: 'L2',
    outputType: 'DailyCoding',
  },
  {
    whatsTheName: 'Zed',
    urlLink: 'https://zed.dev/',
    description: `The editor for what's next. Windows not yet available`,
    company: '',
    howToUseType: 'Editor',
  },
  {
    whatsTheName: 'PearAI',
    urlLink: 'https://trypear.ai/',
    description: 'Aider + Supermaven + MemO + Continue + Perplexity',
    howToUseType: 'Editor',
    grading: 'L2',
  },
  {
    whatsTheName: 'Void',
    urlLink: 'https://voideditor.com/',
    description: 'Void is an open source Cursor alternative',
    howToUseType: 'Editor',
  },
  {
    whatsTheName: 'Aide',
    urlLink: 'https://aide.dev/',
    description: 'The open-source AI-native IDE',
    company: 'CodeStory.ai',
    howToUseType: 'Editor',
  },

  // 扩展类 (Extension)
  {
    whatsTheName: 'Cline Roo-Cline Roo Code',
    urlLink: 'https://cline.bot/',
    description: 'DeepSeek R1 in Visual Studio Code with Cline + OpenRouter',
    company: '',
    howToUseType: 'Extension',
    grading: 'L2',
  },
  {
    whatsTheName: 'GitHub Copilot',
    urlLink: 'https://github.com/features/copilot',
    description: 'Built into Visual Studio Code',
    company: 'GitHub (Microsoft)',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'Continue',
    urlLink: 'https://www.continue.dev/',
    description: '+ Roo Cline + DeepSeek',
    company: '',
    howToUseType: 'Extension',
    grading: 'L2',
  },
  {
    whatsTheName: 'Codeium',
    urlLink: 'https://codeium.com/download',
    description: 'Codeium extension',
    company: '',
    howToUseType: 'Extension',
    grading: 'L1',
  },
  {
    whatsTheName: 'tongyi lingma',
    urlLink: 'https://lingma.aliyun.com/',
    description: 'by aliyun',
    company: 'Alibaba Cloud',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'Cody',
    urlLink: 'https://sourcegraph.com/cody',
    description: 'by Sourcegraph',
    company: 'Sourcegraph',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'Qodo formerly Codium',
    urlLink: 'https://www.qodo.ai/',
    description: 'formerly Codium',
    company: '',
    howToUseType: 'Extension',
    grading: 'L1',
  },
  {
    whatsTheName: 'Tabnine',
    urlLink: 'https://www.tabnine.com/',
    description: 'There are some autocompletions',
    company: 'Codota',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'Baidu Comate',
    urlLink: 'https://comate.baidu.com/zh',
    description: 'Your AI Coding Mate',
    company: 'Baidu',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'Amazon Q',
    urlLink: 'https://aws.amazon.com/q/developer/',
    description: 'Formerly CodeWhisperer',
    company: 'Amazon',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: 'CodeGeeX',
    urlLink: 'https://codegeex.cn/',
    description: 'Zhipu + ',
    company: 'ZhipuAI',
    howToUseType: 'Extension',
  },
  {
    whatsTheName: '腾讯云 AI 代码助手',
    urlLink: 'https://copilot.tencent.com/',
    description: '基于混元大模型 ',
    company: 'Tencent',
    howToUseType: 'Extension',
  },
  // 基于浏览器 (Browser-based)
  {
    logoComponent: 'V0',
    whatsTheName: 'v0',
    urlLink: 'https://v0.dev/',
    description: 'v0 is your always-on pair-programmer',
    company: 'Vercel',
    howToUseType: 'Browser-based',
    outputType: 'WebApp',
  },
  {
    whatsTheName: 'Bolt',
    urlLink: 'https://bolt.new/',
    description: 'bolt.diy or bolt.new',
    company: 'StackBlitz',
    howToUseType: 'Browser-based',
    outputType: 'WebApp',
  },
  {
    whatsTheName: 'Lovable',
    urlLink: 'https://lovable.dev/',
    description: 'Lovable is your superhuman full stack engineer',
    company: '',
    howToUseType: 'Browser-based',
    outputType: 'WebApp',
  },
  {
    whatsTheName: 'Devv Builder',
    urlLink: 'https://devv.ai/zh/build',
    description: 'You can think of it as the backend version of Bolt.new / Lovable.',
    company: '',
    howToUseType: 'Browser-based',
    outputType: 'Backend',
  },
  {
    whatsTheName: 'sitebrew.ai',
    urlLink: 'https://www.sitebrew.ai/',
    description: 'Generate a site and share it with the world, in seconds',
    company: '',
    howToUseType: 'Browser-based',
    outputType: 'WebApp',
  },
  {
    whatsTheName: 'MarsCode',
    urlLink: 'https://www.marscode.com/',
    description: '1.0 + Cloud IDE',
    company: 'ByteDance',
    howToUseType: 'Browser-based',
  },
  {
    whatsTheName: 'Replit',
    urlLink: 'https://replit.com/',
    description: 'Create beautiful, modern web applications',
    company: 'Replit',
    howToUseType: 'Browser-based',
  },
  {
    whatsTheName: 'Project IDX',
    urlLink: 'https://idx.dev/',
    description: 'Project IDX is an AI-assisted workspace. by Google',
    company: 'Google',
    howToUseType: 'Browser-based',
  },
  {
    whatsTheName: 'CodeGuide',
    urlLink: 'https://www.codeguide.dev/',
    description: 'AI-powered documentation generator for your codebase',
    company: '',
    howToUseType: 'Browser-based',
    outputType: 'Documentation',  // 使用新的类型
  },
  // 终端类 (Terminal)
  {
    whatsTheName: 'Aider',
    urlLink: 'https://aider.chat/',
    description: 'There is AI ability in the terminal',
    company: '',
    howToUseType: 'Terminal',
    grading: 'L2',
    outputType: 'Terminal',
  },
  {
    whatsTheName: 'Warp',
    urlLink: 'https://www.warp.dev/',
    description: 'AI Terminal',
    company: '',
    howToUseType: 'Terminal',
    outputType: 'Terminal',
  },
  {
    whatsTheName: 'Wave',
    urlLink: 'https://www.waveterm.dev/',
    description: 'Stop Context Switching by Bringing Context Into Your Terminal',
    company: '',
    howToUseType: 'Terminal',
    outputType: 'Terminal',
  },
  {
    whatsTheName: 'Tabby',
    urlLink: 'https://tabby.sh/',
    description: 'A terminal for the modern age',
    company: '',
    howToUseType: 'Terminal',
    grading: 'L1',
    outputType: 'Terminal',
  },
  // AI 软件工程师 (AI software engineer)
  {
    whatsTheName: 'Devin',
    urlLink: 'https://www.cognition.ai/blog/introducing-devin',
    description: 'The first AI software engineer',
    company: '',
    howToUseType: 'AI software engineer',
  },
  // Git
  {
    whatsTheName: 'Generate Commit Messages with AI',
    urlLink:
      'https://medium.com/@yanirmanor/how-to-generate-commit-messages-with-ai-in-visual-studio-code-4b7367bbafe3',
    description: 'Visual Studio Code + Copilot',
    company: '',
    howToUseType: 'Git',
  },
  // 其他 (Other)
  {
    whatsTheName: 'CodeFuse',
    urlLink: 'https://codefuse.ai/',
    description: 'Make R&D Simpler',
    company: 'Ant Group',
    howToUseType: 'Other',
  },
  // 移动 App
  {
    whatsTheName: 'Rork',
    urlLink: 'https://rork.app/',
    description: 'Build any mobile app, fast.',
    company: '',
    howToUseType: 'Browser-based', // 可根据实际使用场景调整
    outputType: 'MobileApp',
  },
  // 新增：生成前端组件的工具
  {
    whatsTheName: 'Screenshot to Code',
    urlLink: 'https://screenshottocode.com/',
    description: '从屏幕截图生成前端组件代码',
    company: '',
    howToUseType: 'Browser-based',
    outputType: 'FrontEndComponent',
  },
];
