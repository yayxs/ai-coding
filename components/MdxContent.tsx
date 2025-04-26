'use server';

import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface MDXContentProps {
  filePath: string;
  className?: string;
}

const MdxContent = async ({ filePath, className = '' }: MDXContentProps) => {
  try {
    // 读取MDX文件内容
    const fullPath = path.join(process.cwd(), filePath);
    const mdxContent = fs.readFileSync(fullPath, 'utf8');

    // 使用Next.js的MDXRemote组件渲染MDX内容
    return (
      <div className={`mdx-content prose prose-lg prose-slate dark:prose-invert ${className}`}>
        <MDXRemote source={mdxContent} />
      </div>
    );
  } catch (error) {
    console.error('Error loading MDX file:', error);
    return <div>Error loading content</div>;
  }
};

export default MdxContent;
