# AI编程工具展示

🌐 [English](README.md) | [中文](README.zh-CN.md)

一个用于分类展示主流AI编程工具的现代化Web应用。

## 项目简介

本项目通过结构化分类和详细功能展示，帮助开发者了解和发现各类AI编程工具。直观的界面清晰呈现不同工具的平台支持和使用场景。

## 功能特点

- 🎯 精选主流AI编程工具合集
- 🔍 按使用方式分类（浏览器/编辑器/扩展/终端）
- 💫 现代化的UI设计和流畅的用户体验
- 🌓 支持深色模式
- ⚡ 基于Next.js构建，性能优异

## 技术栈

- **框架**: Next.js 15.1.4
- **UI库**: React 19
- **样式**: TailwindCSS
- **动画**: Framer Motion
- **类型检查**: TypeScript
- **UI组件**: Radix UI

## 快速开始

### 环境要求

- Node.js 18.0.0 或更高版本
- pnpm 8.0.0 或更高版本

### 安装

```bash
# 克隆项目
git clone https://github.com/yayxs/ai-coding.git

# 进入项目目录
cd ai-coding

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000 查看应用。

### 构建

```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 项目结构

```
src/
  ├── app/          # Next.js应用页面
  ├── components/   # React组件
  ├── data/         # 数据文件
  ├── lib/          # 工具函数
  └── types/        # TypeScript类型定义
```

## 贡献

欢迎提交 Issue 和 Pull Request！英文贡献指南请参考[README.md](README.md)。

## 许可证

[MIT](LICENSE)  
开源项目遵循MIT协议。