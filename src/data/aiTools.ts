export interface AiTool {
  logoImg?: string // 这个产品的logo图片
  whatsTheName: string // 这个产品的名字是什么，不管是编辑器还是网站还是什么
  urlLink: string // 这个产品网站的链接
  description: string // 这个产品的简单描述
  // 产品作者
  // 使用的方式，是浏览器中使用还是VSCode扩展还是编辑器
  howToUseType:
    | 'Browser-based'
    | 'VSCode Extension'
    | 'AI-native Editor'
    | 'Terminal'
}

export const aiTools: AiTool[] = [
  {
    logoImg: '',
    whatsTheName: 'Cursor',
    urlLink: 'https://www.cursor.com/',
    description:
      'Built to make you extraordinarily productive, Cursor is the best way to code with AI.',
    howToUseType: 'AI-native Editor'
  },
  {
    logoImg: '',
    whatsTheName: 'Windsurf',
    urlLink: 'https://codeium.com/',
    description: 'Windsurf是一个编辑器AI工具',
    howToUseType: 'AI-native Editor'
  },
  {
    logoImg: '',
    whatsTheName: 'v0',
    urlLink: 'https://v0.dev/',
    description: 'v0 is your always-on pair-programmer.',
    howToUseType: 'Browser-based'
  },
  {
    logoImg: '',
    whatsTheName: 'Bolt',
    urlLink: 'https://bolt.new/',
    description: 'Bolt是一个基于浏览器的AI工具',
    howToUseType: 'Browser-based'
  },

  {
    logoImg: '',
    whatsTheName: 'Cline',
    urlLink: 'https://github.com/cline/cline',
    description: 'Cline是一个VSCode扩展AI工具',
    howToUseType: 'VSCode Extension'
  },
  {
    logoImg: '',
    whatsTheName: 'Continue',
    urlLink: 'https://www.continue.dev/',
    description: 'Continue是一个VSCode扩展AI工具',
    howToUseType: 'VSCode Extension'
  },

  {
    logoImg: '',
    whatsTheName: 'GitHub Copilot',
    urlLink: 'https://github.com/features/copilot',
    description: 'GitHub Copilot是一个VSCode扩展AI工具',
    howToUseType: 'VSCode Extension'
  },

  {
    logoImg: '',
    whatsTheName: 'Lovable',
    urlLink: 'https://lovable.dev/',
    description: 'Lovable是一个基于浏览器的AI工具',
    howToUseType: 'Browser-based'
  },
  {
    logoImg: '',
    whatsTheName: 'PearAI',
    urlLink: 'https://trypear.ai/',
    description: 'PearAI是一个编辑器AI工具',
    howToUseType: 'AI-native Editor'
  },
  {
    logoImg: '',
    whatsTheName: 'Aider',
    urlLink: 'https://aider.chat/',
    description: 'Aider是一个终端AI工具',
    howToUseType: 'Terminal'
  },
  {
    logoImg: '',
    whatsTheName: 'Cody',
    urlLink: 'https://sourcegraph.com/cody',
    description: 'Cody是一个VSCode扩展AI工具',
    howToUseType: 'VSCode Extension'
  },
  {
    logoImg: '',
    whatsTheName: 'Qodo formerly Codium',
    urlLink: 'https://www.qodo.ai/',
    description:
      'Quality-first AI code generation to help busy devs write, test and review code.',
    howToUseType: 'VSCode Extension'
  },
  {
    logoImg: '',
    whatsTheName: 'Tabnine',
    urlLink: 'https://www.tabnine.com/',
    description:
      'Tabnine’s AI code assistant helps you ship higher quality software faster with AI tools for code generation, testing, and code review custom-fit to each engineering team.',
    howToUseType: 'VSCode Extension'
  },
  {
    logoImg: '',
    whatsTheName: 'Void',
    urlLink: 'https://voideditor.com/',
    description:
      'Void is an open source Cursor alternative. Write code with the best AI tools, use any model, and retain full control over your data.',
    howToUseType: 'AI-native Editor'
  },
  {
    logoImg: '',
    whatsTheName: 'sitebrew.ai',
    urlLink: 'https://www.sitebrew.ai/',
    description: 'Generate a site and share it with the world, in seconds',
    howToUseType: 'Browser-based'
  },
  {
    logoImg: '',
    whatsTheName: 'Aide',
    urlLink: 'https://aide.dev/',
    description:
      'Powered by the state-of-the-art agentic framework on swebench-verified',
    howToUseType: 'AI-native Editor'
  },
  {
    logoImg: '',
    whatsTheName: 'MarsCode',
    urlLink: 'https://www.marscode.com/',
    description:
      'MarsCode IDE is an AI-powered cloud-based integrated development environment (IDE).',
    howToUseType: 'Browser-based'
  }
]
