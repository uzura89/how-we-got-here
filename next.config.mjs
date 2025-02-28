/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    config.module.rules.push({
      test: /\.json$/,
      type: "javascript/auto",
      use: ["json-loader"],
    });
    return config;
  },
};

export default nextConfig;
