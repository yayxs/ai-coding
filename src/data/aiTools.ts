export interface AiTool {
  logoComponent?: string // 存储logo组件名称
  whatsTheName: string // 这个产品的名字是什么，不管是编辑器还是网站还是什么
  urlLink: string // 这个产品网站的链接
  description: string // 这个产品的简单描述
  // 产品作者
  // 使用的方式，是浏览器中使用还是VSCode扩展还是编辑器
  howToUseType: 'Browser-based' | 'Extension' | 'Editor' | 'Terminal'
}

export const aiTools: AiTool[] = [
  // 编辑器类 (Editor)
  {
    logoComponent: 'Cursor',
    whatsTheName: 'Cursor',
    urlLink: 'https://www.cursor.com/',
    description: 'The most powerful AI native code editor in the universe',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Windsurf',
    urlLink: 'https://codeium.com/',
    description: 'Was launched by Codeium on November 14, 2024',
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
    description:
      'The open-source AI-native IDE. by CodeStory.ai',
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Zed',
    urlLink: 'https://zed.dev/',
    description: `The editor for what's next. Windows not yet available`,
    howToUseType: 'Editor'
  },
  {
    whatsTheName: 'Trae',
    urlLink: 'https://www.trae.ai/',
    description: 'The beta test for Trea begins on January 20, 2025. by ByteDance',
    howToUseType: 'Editor'
  },
 
  // 基于浏览器 (Browser-based)
  {
    logoComponent: 'V0',
    whatsTheName: 'v0',
    urlLink: 'https://v0.dev/',
    description: 'v0 is your always-on pair-programmer.',
    howToUseType: 'Browser-based'
  },

  {
    whatsTheName: 'Bolt',
    urlLink: 'https://bolt.new/',
    description: 'Bolt是一个基于浏览器的AI工具',
    howToUseType: 'Browser-based'
  },
  // 扩展类 (Extension)
  {
    whatsTheName: 'Cline or Roo-Cline',
    urlLink: 'https://github.com/cline/cline',
    description: '使VSCode像Cursor一样',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Continue',
    urlLink: 'https://www.continue.dev/',
    description: '代码自动补全',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'GitHub Copilot',
    urlLink: 'https://github.com/features/copilot',
    description: '免费了',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Lovable',
    urlLink: 'https://lovable.dev/',
    description: 'Lovable是一个基于浏览器的AI工具',
    howToUseType: 'Browser-based'
  },

  // 终端类 (Terminal)
  {
    whatsTheName: 'Aider',
    urlLink: 'https://aider.chat/',
    description: 'Aider in your terminal',
    howToUseType: 'Terminal'
  },
  {
    whatsTheName: 'Cody',
    urlLink: 'https://sourcegraph.com/cody',
    description: 'Cody是一个VSCode扩展AI工具',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Qodo formerly Codium',
    urlLink: 'https://www.qodo.ai/',
    description:
      'Quality-first AI code generation to help busy devs write, test and review code.',
    howToUseType: 'Extension'
  },
  {
    whatsTheName: 'Tabnine',
    urlLink: 'https://www.tabnine.com/',
    description:
      'Tabnine’s AI code assistant helps you ship higher quality software faster with AI tools for code generation, testing, and code review custom-fit to each engineering team.',
    howToUseType: 'Extension'
  },

  {
    whatsTheName: 'sitebrew.ai',
    urlLink: 'https://www.sitebrew.ai/',
    description: 'Generate a site and share it with the world, in seconds',
    howToUseType: 'Browser-based'
  },

  {
    whatsTheName: 'MarsCode',
    urlLink: 'https://www.marscode.com/',
    description: 'bytedance',
    howToUseType: 'Browser-based'
  },
  {
    whatsTheName: 'Warp',
    urlLink: 'https://www.warp.dev/',
    description: 'AI Terminal',
    howToUseType: 'Terminal'
  },

  {
    whatsTheName: 'Replit',
    urlLink: 'https://replit.com/',
    description: 'Idea to app, fast.',
    howToUseType: 'Browser-based'
  }
]
