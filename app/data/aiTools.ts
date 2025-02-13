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
}
