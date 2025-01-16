export interface AiTool {
  name: string;
  author: string;
  platform: {
    zh: string;
    en: string;
  };
  url: string;
}

export const aiTools: AiTool[] = [
  {
    name: "Bolt",
    author: "StackBlitz",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://bolt.new/"
  },
  {
    name: "Cline",
    author: "",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://github.com/cline/cline"
  },
  {
    name: "Continue",
    author: "Continue team",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://www.continue.dev/"
  },
  {
    name: "Cursor",
    author: "Anysphere",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://www.cursor.com/"
  },
  {
    name: "GitHub Copilot",
    author: "GitHub",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://github.com/features/copilot"
  },
  {
    name: "Windsurf",
    author: "Codeium",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://codeium.com/"
  },
  {
    name: "v0",
    author: "Vercel",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://v0.dev/"
  },
  {
    name: "Lovable",
    author: "",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://lovable.dev/"
  },
  {
    name: "PearAI",
    author: "",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://trypear.ai/"
  },
  {
    name: "Aider",
    author: "",
    platform: {
      zh: "终端",
      en: "Terminal"
    },
    url: "https://aider.chat/"
  },
  {
    name: "Cody",
    author: "Sourcegraph",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://sourcegraph.com/cody"
  },
  {
    name: "Qodo formerly Codium",
    author: "",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://www.qodo.ai/"
  },
  {
    name: "Tabnine",
    author: "",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://www.tabnine.com/"
  },
  {
    name: "Void",
    author: "",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://voideditor.com/"
  },
  {
    name: "sitebrew.ai",
    author: "",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://www.sitebrew.ai/"
  }
].sort((a, b) => a.name.localeCompare(b.name)); 