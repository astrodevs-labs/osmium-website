/** @type {import('next').NextConfig} */

const output = process.env.LOCAL ? 'standalone' : 'export'

const nextConfig = {
  output: output,
  images: { unoptimized: true },
  distDir: 'build',
};

export default nextConfig;
