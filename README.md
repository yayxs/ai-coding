# AI Coding Tools Comparison

一个用于比较和展示主流AI编程工具的现代化Web应用。

## 项目简介

本项目旨在帮助开发者了解和比较各种AI编程工具的特点、平台支持情况和使用方式。通过直观的界面展示，让用户能够快速找到最适合自己的AI编程助手。

## 功能特点

- 🎯 展示主流AI编程工具的详细信息
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
  ├── app/          # Next.js 应用页面
  ├── components/   # React 组件
  ├── data/         # 数据文件
  ├── lib/          # 工具函数
  └── types/        # TypeScript 类型定义
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

[MIT](LICENSE)