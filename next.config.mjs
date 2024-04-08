/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  distDir: 'build',
  basePath: "/osmium-website",
};

export default nextConfig;
