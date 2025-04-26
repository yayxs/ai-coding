import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
  // 配置MDX选项
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  /* config options here */
  // 允许.mdx扩展名的文件
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

// 合并MDX和Next.js配置
export default withMDX(nextConfig);