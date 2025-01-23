/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    // 添加大小写敏感配置
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      resolve: {
        fullySpecified: false,
      },
    });
    return config;
  },
}

export default nextConfig 