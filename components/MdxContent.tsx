'use server';

import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '../mdx-components';

interface MDXContentProps {
  filePath: string;
  className?: string;
}

const MdxContent = async ({ filePath, className = '' }: MDXContentProps) => {
  try {
    // 读取MDX文件内容
    const fullPath = path.join(process.cwd(), filePath);
    const mdxContent = fs.readFileSync(fullPath, 'utf8');

    // 获取自定义 MDX 组件
    const components = useMDXComponents({});

    // 使用Next.js的MDXRemote组件渲染MDX内容
    return (
      <div className={`mdx-content prose prose-lg prose-slate ${className}`}>
        <MDXRemote source={mdxContent} components={components} />
      </div>
    );
  } catch (error) {
    console.error('Error loading MDX file:', error);
    return <div>Error loading content</div>;
  }
};

export default MdxContent;
