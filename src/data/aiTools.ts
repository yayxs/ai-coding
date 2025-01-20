export interface AiTool {
  logoComponent?: string // 存储logo组件名称
  whatsTheName: string // 这个产品的名字是什么，不管是编辑器还是网站还是什么
  urlLink: string // 这个产品网站的链接
  description: string // 这个产品的简单描述
  company?: string // 开发这个产品的公司
  // 产品作者
  // 使用的方式，是浏览器中使用还是VSCode扩展还是编辑器
  howToUseType: 'Browser-based' | 'Extension' | 'Editor' | 'Terminal' | 'AI software engineer' | 'Other'
}

export const aiTools: AiTool[] = [
  // 编辑器类 (Editor)
  {
    logoComponent: 'Cursor',
    whatsTheName: 'Cursor',
    urlLink: 'https://www.cursor.com/',
    description: 'The most powerful AI native code editor in the universe',
    company: 'Anysphere',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Windsurf',
    urlLink: 'https://codeium.com/',
    description: 'Was launched by Codeium on November 14, 2024',
    company: 'Codeium',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'PearAI',
    urlLink: 'https://trypear.ai/',
    description: 'Aider + Supermaven + MemO + Continue + Perplexity',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Void',
    urlLink: 'https://voideditor.com/',
    description: 'Void is an open source Cursor alternative.',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Aide',
    urlLink: 'https://aide.dev/',
    description: 'The open-source AI-native IDE. by CodeStory.ai',
    company: 'CodeStory.ai',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Zed',
    urlLink: 'https://zed.dev/',
    description: `The editor for what's next. Windows not yet available`,
    company: '',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Trae',
    urlLink: 'https://www.trae.ai/',
    description: 'The beta test for Trea begins on January 20, 2025. by ByteDance',
    company: 'ByteDance',
    howToUseType: 'Editor'
  },
  // 扩展类 (Extension)
  {
    whatsTheName: 'Cline or Roo-Cline',
    urlLink: 'https://github.com/cline/cline',
    description: 'Openrouter token calls number one. + DeepSeek',
    company: '',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'GitHub Copilot',
    urlLink: 'https://github.com/features/copilot',
    description: 'Built into Visual Studio Code. by GitHub',
    company: 'GitHub (Microsoft)',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Continue',
    urlLink: 'https://www.continue.dev/',
    description: '+ Roo Cline + DeepSeek',
    company: '',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'tongyi lingma',
    urlLink: 'https://lingma.aliyun.com/',
    description: 'by aliyun',
    company: 'Alibaba Cloud',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Cody',
    urlLink: 'https://sourcegraph.com/cody',
    description: 'by Sourcegraph',
    company: 'Sourcegraph',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Qodo formerly Codium',
    urlLink: 'https://www.qodo.ai/',
    description: 'formerly Codium',
    company: '',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Tabnine',
    urlLink: 'https://www.tabnine.com/',
    description: 'There are some autocompletions',
    company: '',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Baidu Comate',
    urlLink: 'https://comate.baidu.com/zh',
    description: 'Your AI Coding Mate',
    company: 'Baidu',
    howToUseType: 'Extension'
  },
  // 基于浏览器 (Browser-based)
  {
    logoComponent: 'V0',
    whatsTheName: 'v0',
    urlLink: 'https://v0.dev/',
    description: 'v0 is your always-on pair-programmer.',
    company: 'Vercel',
    howToUseType: 'Browser-based'
  },
  {
    whatsTheName: 'Bolt',
    urlLink: 'https://bolt.new/',
    description: 'bolt.diy or bolt.new',
    company: '',
    howToUseType: 'Browser-based'
  },
  {
    whatsTheName: 'Lovable',
    urlLink: 'https://lovable.dev/',
    description: 'Lovable is your superhuman full stack engineer',
    company: '',
    howToUseType: 'Browser-based'
  },
  
  {
    whatsTheName: 'sitebrew.ai',
    urlLink: 'https://www.sitebrew.ai/',
    description: 'Generate a site and share it with the world, in seconds',
    company: '',
    howToUseType: 'Browser-based'
  },
  {
    whatsTheName: 'MarsCode',
    urlLink: 'https://www.marscode.com/',
    description: 'bytedance',
    company: 'ByteDance',
    howToUseType: 'Browser-based'
  },
  {
    whatsTheName: 'Replit',
    urlLink: 'https://replit.com/',
    description: 'Create beautiful, modern web applications',
    company: 'Replit',
    howToUseType: 'Browser-based'
  },
  {
    whatsTheName: 'Project IDX',
    urlLink: 'https://idx.dev/',
    description: 'Project IDX is an AI-assisted workspace. by Google',
    company: 'Google',
    howToUseType: 'Browser-based'
  },
  // 终端类 (Terminal)
  {
    whatsTheName: 'Aider',
    urlLink: 'https://aider.chat/',
    description: 'Aider in your terminal',
    company: '',
    howToUseType: 'Terminal'
  },
  {
    whatsTheName: 'Warp',
    urlLink: 'https://www.warp.dev/',
    description: 'AI Terminal',
    company: '',
    howToUseType: 'Terminal'
  },
  {
    whatsTheName: 'Wave',
    urlLink: 'https://www.waveterm.dev/',
    description: 'Stop Context Switching by Bringing Context Into Your Terminal',
    company: '',
    howToUseType: 'Terminal'
  },
  // AI 软件工程师 (AI software engineer)
  {
    whatsTheName: 'Devin',
    urlLink: 'https://www.cognition.ai/blog/introducing-devin',
    description: 'The first AI software engineer',
    company: '',
    howToUseType: 'AI software engineer'
  },
  // 其他 (Other)
  {
    whatsTheName: 'CodeFuse',
    urlLink: 'https://codefuse.ai/',
    description: 'Make R&D Simpler',
    company: 'Ant Group',
    howToUseType: 'Other'
  }
]
