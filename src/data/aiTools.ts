export interface AiTool {
  name: string;
  nameCn: string;
  company: string;
  platform: {
    zh: string;
    en: string;
  };
  url: string;
}

export const aiTools: AiTool[] = [
  {
    name: "Bolt",
    nameCn: "",
    company: "StackBlitz",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://bolt.new/"
  },
  {
    name: "Cline",
    nameCn: "",
    company: "",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://github.com/cline/cline"
  },
  {
    name: "Continue",
    nameCn: "",
    company: "Continue team",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://www.continue.dev/"
  },
  {
    name: "Cursor",
    nameCn: "",
    company: "Anysphere",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://www.cursor.com/"
  },
  {
    name: "GitHub Copilot",
    nameCn: "",
    company: "GitHub",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://github.com/features/copilot"
  },
  {
    name: "Windsurf",
    nameCn: "",
    company: "Codeium",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://codeium.com/"
  },
  {
    name: "v0",
    nameCn: "",
    company: "Vercel",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://v0.dev/"
  },
  {
    name: "Lovable",
    nameCn: "",
    company: "",
    platform: {
      zh: "浏览器中使用",
      en: "Browser-based"
    },
    url: "https://lovable.dev/"
  },
  {
    name: "PearAI",
    nameCn: "",
    company: "",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://trypear.ai/"
  },
  {
    name: "Aider",
    nameCn: "",
    company: "",
    platform: {
      zh: "终端",
      en: "Terminal"
    },
    url: "https://aider.chat/"
  },
  {
    name: "Cody",
    nameCn: "",
    company: "Sourcegraph",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://sourcegraph.com/cody"
  },
  {
    name: "Qodo formerly Codium",
    nameCn: "",
    company: "",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://www.qodo.ai/"
  },
  {
    name: "Tabnine",
    nameCn: "",
    company: "",
    platform: {
      zh: "VSCode扩展",
      en: "VSCode Extension"
    },
    url: "https://www.tabnine.com/"
  },
  {
    name: "Void",
    nameCn: "",
    company: "",
    platform: {
      zh: "编辑器",
      en: "Editor"
    },
    url: "https://voideditor.com/"
  }
].sort((a, b) => a.name.localeCompare(b.name)); 