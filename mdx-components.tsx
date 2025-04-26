import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import React from 'react';

// 定制 MDX 组件
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 使用传入的组件
    ...components,

    // 定制标题组件
    h1: ({ children, ...props }) => (
      <h1 className="my-4 text-3xl font-bold text-black" {...props}>
        {children}
      </h1>
    ),

    h2: ({ children, ...props }) => (
      <h2 className="my-3 text-2xl font-bold text-black" {...props}>
        {children}
      </h2>
    ),

    h3: ({ children, ...props }) => (
      <h3 className="my-2 text-xl font-bold text-black" {...props}>
        {children}
      </h3>
    ),

    h4: ({ children, ...props }) => (
      <h4 className="my-2 text-lg font-bold text-black" {...props}>
        {children}
      </h4>
    ),

    h5: ({ children, ...props }) => (
      <h5 className="text-md my-1 font-bold text-black" {...props}>
        {children}
      </h5>
    ),

    h6: ({ children, ...props }) => (
      <h6 className="my-1 text-base font-bold text-black" {...props}>
        {children}
      </h6>
    ),

    // 定制链接组件
    a: ({ href, children, ...props }) => {
      // 检查是否是外部链接
      const isExternalLink = href?.startsWith('http') || href?.startsWith('https');

      if (isExternalLink) {
        // 外部链接：在新窗口打开
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
          </a>
        );
      } else if (href?.startsWith('#')) {
        // 页内锚点链接
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      } else {
        // 内部链接：使用 Next.js Link
        return (
          <Link href={href || '/'} {...props}>
            {children}
          </Link>
        );
      }
    },
  };
}
